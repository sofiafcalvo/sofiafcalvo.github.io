#!/bin/sh
# Genera el portfolio en PDF (inglés) con Google Chrome.
# Uso: sh pdf/generar-pdf.sh [archivo-de-salida.pdf]
cd "$(dirname "$0")" || exit 1
OUT="${1:-$PWD/Sofia-Fernandez-Calvo-Portfolio-EN.pdf}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw --virtual-time-budget=20000 \
  --user-data-dir="${TMPDIR:-/tmp}/portfolio-pdf-chrome" \
  --print-to-pdf="$OUT" "file://$PWD/portfolio-en.html" 2>/dev/null
echo "PDF generado: $OUT"
