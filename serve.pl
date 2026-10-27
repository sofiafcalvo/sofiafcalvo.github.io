#!/usr/bin/perl
# Servidor local mínimo para previsualizar el sitio: perl serve.pl [puerto]
use strict; use warnings;
use HTTP::Daemon; use HTTP::Status; use File::Spec;
my $port = shift || 8000;
my %types = (html=>'text/html; charset=utf-8', css=>'text/css', js=>'text/javascript', png=>'image/png',
  jpg=>'image/jpeg', jpeg=>'image/jpeg', svg=>'image/svg+xml', pdf=>'application/pdf', json=>'application/json', ico=>'image/x-icon', webp=>'image/webp',
  mp4=>'video/mp4', webm=>'video/webm');
# Si el navegador corta una descarga a mitad (pasa con los videos), seguir funcionando.
$SIG{PIPE} = 'IGNORE';
my $d = HTTP::Daemon->new(LocalAddr => "127.0.0.1", LocalPort => $port, ReuseAddr => 1, Timeout => 5) or die "No se pudo abrir el puerto $port\n";
$| = 1; print "Sirviendo en http://localhost:$port\n";
while (1) {
  my $c = $d->accept or next;
  $c->timeout(5);
  if (my $r = $c->get_request) {
    $c->force_last_request;
    my $path = $r->uri->path; $path =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/ge;
    $path .= 'index.html' if $path =~ m{/$};
    if ($path =~ /\.\./) { $c->send_error(RC_FORBIDDEN); next }
    my $file = '.' . $path;
    if (-f $file) {
      my ($ext) = $file =~ /\.([^.]+)$/;
      open my $fh, '<:raw', $file; my $data = do { local $/; <$fh> }; close $fh;
      my $size = length $data;
      my $res;
      # Pedidos parciales (Range): los usan los videos para reproducir y adelantar
      if (($r->header('Range') // '') =~ /^bytes=(\d*)-(\d*)$/ && $size) {
        my ($from, $to) = ($1, $2);
        if ($from eq '') { $from = $size - $to; $to = $size - 1 } else { $to = $size - 1 if $to eq '' || $to >= $size }
        $res = HTTP::Response->new(206);
        $res->header('Content-Range' => "bytes $from-$to/$size");
        $res->content(substr($data, $from, $to - $from + 1));
      } else {
        $res = HTTP::Response->new(200);
        $res->content($data);
      }
      $res->header('Content-Type' => $types{lc($ext // '')} // 'application/octet-stream');
      $res->header('Accept-Ranges' => 'bytes');
      $res->header('Cache-Control' => 'no-store');
      eval { $c->send_response($res) };
    } else { $c->send_error(RC_NOT_FOUND) }
  }
  $c->close;
}
