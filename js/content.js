// ─────────────────────────────────────────────────────────────
// Todo el contenido del portfolio vive acá.
// Cada texto tiene versión en español (es) y en inglés (en).
// ─────────────────────────────────────────────────────────────

window.SITE = {
  // Datos personales
  photo: "assets/img/foto-sofia.jpeg",
  email: "sofiafcalvob@gmail.com",
  linkedin: "https://www.linkedin.com/in/sofiafcalvo/",
  // CV descargable en cada idioma
  cv: { es: "assets/cv/CV-Sofia-Fernandez-Calvo.pdf", en: "assets/cv/Resume-Sofia-Fernandez-Calvo.pdf" },

  // Textos generales de la interfaz
  ui: {
    es: {
      work: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      talk: "Hablemos",
      hello: "¡HOLA! SOY SOFI",
      h1a: "Diseño lo complejo.",
      h1b: "Lo hago humano.",
      intro: "Transformo problemas complejos en experiencias simples, humanas y con un poquito de magia.",
      view: "Explorá mi trabajo",
      photoPlaceholder: "Acá va mi foto.",
      photoPlaceholderSub: "Una cara detrás de las ideas.",
      sticker: "Curiosa por naturaleza.",
      based: "Desde Argentina, para el mundo.",
      intention: "DISEÑO CON INTENCIÓN, SIEMPRE.",
      selected: "Trabajo seleccionado",
      selectedSub: "Seis casos reales. Una misma curiosidad.",
      more: "Ver caso",
      readCase: "Leer caso de estudio",
      close: "Cerrar",
      backToWork: "Volver a proyectos",
      nextCase: "Siguiente caso",
      ribbon: "Curiosidad como método.",
      aboutTitle: "Diseño con intención.\nVivo con curiosidad.",
      bio: [
        "Soy Product Designer y Senior UX/UI Specialist. Hace más de 7 años diseño experiencias B2B, B2C, fintech y e-commerce, conectando necesidades reales con objetivos de negocio.",
        "Mi terreno: productos end-to-end, Design Systems escalables y experiencias conversacionales con IA. Mi brújula: datos, validación continua y colaboración.",
        "Fuera de Figma, probablemente esté entre libros, explorando una herramienta de IA o persiguiendo mi próxima idea."
      ],
      availableTitle: "Disponible full-time",
      availableText: "Busco un rol de UX Designer o Product Designer. También estoy abierta a proyectos cortos.",
      howTitle: "Cómo trabajo",
      how: [
        ["Entender antes de diseñar", "Datos de uso, entrevistas y encuestas para encontrar el problema real."],
        ["Validar en el camino", "Iteraciones cortas, feedback continuo y lanzamientos progresivos."],
        ["Diseñar con el equipo", "Producto, ingeniería y QA desde el inicio, con un handoff sin fricciones."],
        ["IA como aliada", "Para investigar, idear y entregar más rápido, sin perder criterio."]
      ],
      journey: "Siempre aprendiendo.\nSiempre diseñando.",
      experience: "Años de experiencia",
      degree: "Diseño Gráfico",
      cv: "Descargar CV (PDF)",
      cvMissing: "CV disponible próximamente",
      languages: "Español nativo · Inglés avanzado (B2 / C1)",
      toolbox: "MI CAJA DE HERRAMIENTAS",
      end: "¿Hacemos algo\nbueno en equipo?",
      endText: "Las mejores ideas empiezan con una conversación.",
      pending: "Enlaces de contacto próximamente",
      crafted: "Diseñado con intención y mucha curiosidad.",
      back: "Volver arriba",
      mainNav: "Navegación principal",
      language: "Idioma",
      enlarge: "Ampliar: ",
      tldr: { role: "Rol", context: "Contexto", time: "Duración", focus: "Foco", outcome: "Resultado" },
      before: "Antes",
      after: "Después"
    },
    en: {
      work: "Work",
      about: "About",
      contact: "Contact",
      talk: "Let’s talk",
      hello: "HI! I’M SOFI",
      h1a: "I design the complex.",
      h1b: "Make it human.",
      intro: "Turning complex problems into simple, human experiences. With a little bit of magic along the way.",
      view: "Explore my work",
      photoPlaceholder: "My photo goes here.",
      photoPlaceholderSub: "A face behind the ideas.",
      sticker: "Curious by nature.",
      based: "From Argentina, to the world.",
      intention: "DESIGN WITH INTENTION, ALWAYS.",
      selected: "Selected work",
      selectedSub: "Six real cases. The same curiosity.",
      more: "View case",
      readCase: "Read case study",
      close: "Close",
      backToWork: "Back to work",
      nextCase: "Next case",
      ribbon: "Curiosity as a method.",
      aboutTitle: "Design with intention.\nLive with curiosity.",
      bio: [
        "I’m a Product Designer and Senior UX/UI Specialist with 7+ years shaping B2B, B2C, fintech and e-commerce experiences, connecting real user needs with business goals.",
        "My focus: end-to-end products, scalable Design Systems and conversational AI experiences. My compass: data, continuous validation and collaboration.",
        "Away from Figma, you’ll probably find me lost in a book, exploring an AI tool or chasing my next idea."
      ],
      availableTitle: "Available full-time",
      availableText: "Seeking a UX Designer or Product Designer role. Also open to short-term projects.",
      howTitle: "How I work",
      how: [
        ["Understand before designing", "Usage data, interviews and surveys to find the real problem."],
        ["Validate along the way", "Short iterations, continuous feedback and progressive rollouts."],
        ["Design with the team", "Product, engineering and QA from day one, with a frictionless handoff."],
        ["AI as an ally", "To research, ideate and deliver faster, without losing judgment."]
      ],
      journey: "Always learning.\nAlways designing.",
      experience: "Years of experience",
      degree: "Graphic Design",
      cv: "Download CV (PDF)",
      cvMissing: "CV coming soon",
      languages: "Native Spanish · Advanced English (B2 / C1)",
      toolbox: "MY TOOLBOX",
      end: "Let’s make something\ngood together.",
      endText: "The best ideas start with a conversation.",
      pending: "Contact links coming soon",
      crafted: "Designed with intention and a lot of curiosity.",
      back: "Back to top",
      mainNav: "Main navigation",
      language: "Language",
      enlarge: "Enlarge: ",
      tldr: { role: "Role", context: "Context", time: "Timeline", focus: "Focus", outcome: "Outcome" },
      before: "Before",
      after: "After"
    }
  },

  // ───────────────────────────────────────────────────────────
  // Casos de estudio, en el orden en que aparecen en la grilla.
  // - slug: identificador para el link directo (tusitio.com/#caso/slug)
  // - layout: posición en la grilla (project0…project5 en styles.css)
  // - tldr: resumen que se ve primero al abrir el caso
  // - blocks: secciones del caso. Cada bloque puede tener:
  //     text (párrafos), list (viñetas), cards (tarjetas título+texto),
  //     steps (pasos numerados), compare (antes/después), images (capturas)
  // ───────────────────────────────────────────────────────────
  projects: [
    {
      slug: "numia-organizaciones",
      layout: 4,
      company: "Numia",
      label: { es: "CASO DESTACADO · PLATAFORMA DE IA", en: "FEATURED CASE · AI PLATFORM" },
      tags: { es: "Organizaciones · Arquitectura de información", en: "Organizations · Information architecture" },
      title: { es: "Ordenar una plataforma de agentes de IA para que pueda escalar", en: "Structuring an AI-agent platform so it can scale" },
      cover: { url: "assets/img/numia-org-proyectos.jpg", es: "Nueva vista de proyectos dentro de una organización.", en: "New projects view inside an organization." },
      tldr: {
        role: { es: "Product Designer · lideré el diseño de la solución", en: "Product Designer · led the solution design" },
        context: { es: "Journey Builder, plataforma de agentes de IA de Numia", en: "Journey Builder, Numia’s AI-agent platform" },
        time: { es: "2025 – 2026", en: "2025 – 2026" },
        focus: { es: "Arquitectura de información, roles y permisos, Design System", en: "Information architecture, roles and permissions, Design System" },
        outcome: { es: "Navegación clara y escalable, con acceso según rol", en: "Clear, scalable navigation with role-based access" }
      },
      blocks: [
        {
          title: { es: "Pauta", en: "Brief" },
          text: [{
            es: "El Journey Builder es una plataforma para crear y gestionar agentes de inteligencia artificial dentro del ecosistema de Numia. Con el crecimiento de la plataforma, la navegación comenzó a volverse difícil: los proyectos se organizaban en carpetas por usuario dentro de un listado infinito, sin buscador ni filtros, lo que generaba problemas de escalabilidad, visibilidad por rol y performance al cargar toda la información al mismo tiempo.",
            en: "Journey Builder is a platform for creating and managing AI agents within the Numia ecosystem. As the platform grew, navigation became difficult: projects were organized in per-user folders inside an endless list, with no search or filters. This caused problems with scalability, role-based visibility and performance, since all the information loaded at once."
          }]
        },
        {
          title: { es: "Escenario", en: "Scenario" },
          text: [{
            es: "Los usuarios necesitaban encontrar y gestionar rápidamente sus proyectos y agentes, pero la estructura actual dificultaba la navegación y el control de accesos. La falta de organización clara, búsqueda y segmentación por empresa o rol hacía que el sistema fuera difícil de usar tanto para usuarios como para administradores.",
            en: "Users needed to find and manage their projects and agents quickly, but the existing structure made navigation and access control hard. Without clear organization, search, or segmentation by company or role, the system was difficult to use for both users and administrators."
          }]
        },
        {
          title: { es: "Oportunidad", en: "Opportunity" },
          text: [{
            es: "Diseñar una nueva estructura de navegación y arquitectura de la información que permitiera organizar los proyectos de forma escalable, mejorar la visibilidad según roles y optimizar el rendimiento de la plataforma.",
            en: "Design a new navigation structure and information architecture to organize projects in a scalable way, improve role-based visibility and optimize platform performance."
          }]
        },
        {
          title: { es: "Mi rol y proceso", en: "My role and process" },
          text: [{ es: "Como Product Designer lideré el diseño de la solución:", en: "As Product Designer, I led the design of the solution:" }],
          list: [
            { es: "Discovery con usuarios, encuestas y análisis de feedback.", en: "Discovery with users, surveys and feedback analysis." },
            { es: "Benchmark de plataformas similares.", en: "Benchmark of similar platforms." },
            { es: "Definición de la nueva arquitectura de información.", en: "Definition of the new information architecture." },
            { es: "Diseño de las nuevas vistas de navegación y gestión de proyectos.", en: "Design of the new navigation and project-management views." },
            { es: "Iteraciones y validaciones durante el desarrollo.", en: "Iterations and validation throughout development." }
          ]
        },
        {
          title: { es: "Solución", en: "Solution" },
          text: [{
            es: "Introduje el concepto de Organizaciones: una nueva forma de estructurar las empresas dentro de la plataforma que permite agrupar usuarios, proyectos y agentes bajo un mismo espacio.",
            en: "I introduced the concept of Organizations: a new way to structure companies within the platform, grouping users, projects and agents under a single space."
          }],
          cards: [
            { title: { es: "Navegación por Organización", en: "Navigation by Organization" }, text: { es: "Cada empresa tiene su espacio, con una vista Superadmin para gestionar todas.", en: "Each company gets its own space, with a Superadmin view to manage them all." } },
            { title: { es: "Roles y permisos", en: "Roles and permissions" }, text: { es: "Superadmin, Admin y User, cada uno con lo que necesita ver y hacer.", en: "Superadmin, Admin and User, each with what they need to see and do." } },
            { title: { es: "Proyectos con contexto", en: "Projects with context" }, text: { es: "Propietarios, última edición y flujos asociados, a simple vista.", en: "Owners, last edit and related flows at a glance." } },
            { title: { es: "Buscar y filtrar", en: "Search and filter" }, text: { es: "Buscador, filtros y etiquetas para encontrar rápido entre muchos proyectos.", en: "Search, filters and tags to quickly find what you need among many projects." } }
          ],
          after: [{
            es: "Todo fue construido con el nuevo Design System, incluyendo componentes nuevos, estados vacíos, validaciones, errores y soporte para light y dark mode.",
            en: "Everything was built with the new Design System, including new components, empty states, validations, errors and light and dark mode support."
          }],
          images: [
            { url: "assets/img/numia-org-seleccion.jpg", es: "Selección múltiple y acciones masivas sobre proyectos.", en: "Multi-select and bulk actions on projects." },
            { url: "assets/img/numia-org-flujos.jpg", es: "Vista en grilla de los flujos de una organización.", en: "Grid view of an organization’s flows." },
            { url: "assets/img/numia-org-usuarios.jpg", es: "Gestión de usuarios con roles y estados.", en: "User management with roles and statuses." },
            { url: "assets/img/numia-org-superadmin.jpg", es: "Vista Superadmin: flujos de todas las organizaciones.", en: "Superadmin view: flows across every organization." },
            { url: "assets/img/numia-org-archivos.jpg", es: "Vista Superadmin: archivos.", en: "Superadmin view: files." },
            { url: "assets/img/numia-org-navegacion.jpg", es: "Nueva navegación lateral por organización.", en: "New sidebar navigation by organization." }
          ]
        },
        {
          title: { es: "Impacto", en: "Impact" },
          list: [
            { es: "Navegación más clara y escalable para gestionar proyectos.", en: "Clearer, more scalable navigation for managing projects." },
            { es: "Mejor organización de la información dentro de la plataforma.", en: "Better organization of information across the platform." },
            { es: "Control de accesos y visibilidad según rol.", en: "Role-based access control and visibility." },
            { es: "Una base estructural para el crecimiento futuro del producto.", en: "A structural foundation for the product’s future growth." }
          ]
        }
      ]
    },

    {
      slug: "conserv-analiticas",
      layout: 5,
      company: "Conserv",
      label: { es: "DATA · REDISEÑO", en: "DATA · REDESIGN" },
      tags: { es: "Analíticas · Visualización de datos", en: "Analytics · Data visualization" },
      title: { es: "Una página de analytics más clara, más rápida y fácil de usar", en: "A clearer, faster, easier analytics page" },
      cover: { url: "assets/img/conserv-analiticas-despues.jpg", es: "Nueva página de Analytics, con filtros visibles y gráfico principal.", en: "New Analytics page, with visible filters and the main chart." },
      tldr: {
        role: { es: "Product Designer en un equipo multidisciplinario", en: "Product Designer in a cross-functional team" },
        context: { es: "Plataforma de monitoreo ambiental, web y app", en: "Environmental monitoring platform, web and app" },
        time: { es: "2022 – 2025", en: "2022 – 2025" },
        focus: { es: "Rediseño, validación con usuarios, lanzamiento progresivo", en: "Redesign, user validation, progressive rollout" },
        outcome: { es: "Mejor rendimiento, visualización y experiencia general", en: "Better performance, visualization and overall experience" }
      },
      blocks: [
        {
          title: { es: "Pauta, escenario y oportunidad", en: "Brief, scenario and opportunity" },
          text: [{
            es: "Al analizar los datos de uso y el feedback de usuarios, identificamos una necesidad crítica de mejorar la experiencia en una página específica: la Analytics page, que presenta datos analíticos visualizados en gráficos con KPIs y opciones de filtrado. Los usuarios reportaban problemas de usabilidad y rendimiento, lo cual representaba una oportunidad de rediseño para optimizar tanto la funcionalidad como la satisfacción del usuario.",
            en: "Analyzing usage data and user feedback, we found a critical need to improve one specific page: the Analytics page, which shows data in charts with KPIs and filtering options. Users reported usability and performance issues, which opened an opportunity to redesign it and improve both functionality and user satisfaction."
          }]
        },
        {
          title: { es: "Proceso de mejora y rediseño", en: "Improvement and redesign process" },
          steps: [
            { title: { es: "Grupo de trabajo con usuarios representativos", en: "Working group with representative users" }, text: { es: "Validamos las hipótesis con sesiones de feedback, encuestas en la comunidad y entrevistas 1:1, ajustando el diseño de forma iterativa durante el proyecto.", en: "We validated hypotheses through feedback sessions, community surveys and 1:1 interviews, iterating on the design throughout the project." } },
            { title: { es: "Sketching y diseño", en: "Sketching and design" }, text: { es: "Desarrollamos bocetos basados en buenas prácticas, evaluando cada componente de la página para asegurar una interacción fluida y funcional.", en: "We sketched based on best practices, evaluating every component on the page to ensure a smooth, functional interaction." } },
            { title: { es: "Despliegue progresivo", en: "Progressive rollout" }, text: { es: "Lanzamos la nueva versión de forma gradual, incentivando su uso y obteniendo feedback constante, hasta hacerla la versión predeterminada.", en: "We released the new version gradually, encouraging adoption and gathering constant feedback until it became the default." } },
            { title: { es: "Iteraciones continuas", en: "Continuous iteration" }, text: { es: "Seguimos mejorando la página en base al feedback, logrando notables mejoras en rendimiento, visualización y experiencia general.", en: "We kept improving the page based on feedback, achieving noticeable gains in performance, visualization and overall experience." } }
          ]
        },
        {
          title: { es: "Antes y después", en: "Before and after" },
          compare: {
            before: {
              image: { url: "assets/img/conserv-analiticas-antes.jpg", es: "Analytics antes del rediseño.", en: "Analytics before the redesign." },
              points: [
                { title: { es: "Acceso y navegación limitados", en: "Limited access and navigation" }, text: { es: "Los filtros estaban ocultos tras scrolls infinitos, y muchas opciones aparecían deshabilitadas sin explicación. Esto complicaba la navegación y generaba confusión sobre cómo y cuándo usar ciertas funciones.", en: "Filters were hidden behind endless scrolling, and many options appeared disabled with no explanation. This made navigation harder and caused confusion about how and when to use certain features." } },
                { title: { es: "Problemas de espacio y rendimiento", en: "Space and performance issues" }, text: { es: "Las vistas eran limitadas y la personalización excesiva, lo que resultaba en una interfaz saturada y problemas de rendimiento.", en: "Views were limited and customization excessive, resulting in a cluttered interface and performance problems." } }
              ]
            },
            after: {
              image: { url: "assets/img/conserv-analiticas-despues.jpg", es: "Analytics después del rediseño.", en: "Analytics after the redesign." },
              points: [
                { title: { es: "Navegación e información clara", en: "Clear navigation and information" }, text: { es: "Los filtros ahora son accesibles y visibles, sin necesidad de un scroll extenso. Redujimos las opciones deshabilitadas e incluimos explicaciones claras.", en: "Filters are now visible and accessible without long scrolling. We reduced disabled options and added clear explanations." } },
                { title: { es: "Optimización visual y de rendimiento", en: "Visual and performance optimization" }, text: { es: "Optimizamos el uso del espacio y redujimos la personalización innecesaria: una experiencia limpia, rápida y más fluida.", en: "We optimized the use of space and cut unnecessary customization: a clean, fast and smoother experience." } }
              ]
            }
          }
        },
        {
          title: { es: "Observaciones", en: "Observations" },
          text: [
            { es: "Las observaciones permiten añadir notas directamente en los gráficos, que también aparecen en los reportes. Detectamos pain points en la edición, la falta de conexión con el gráfico y las restricciones de personalización, tanto en la experiencia digital como en los reportes descargables.", en: "Observations let users add notes directly on charts, which also appear in reports. We found pain points around editing, the lack of connection with the chart and customization limits, both in the digital experience and in downloadable reports." },
            { es: "Priorizamos mejoras de bajo esfuerzo y alto impacto, como permitir ocultar observaciones para proteger información sensible o interna.", en: "We prioritized low-effort, high-impact improvements, such as letting users hide observations to protect sensitive or internal information." }
          ],
          cards: [
            { title: { es: "Tablas para formato impreso", en: "Tables for print" }, text: { es: "Una vista tabular optimizada para reportes descargables.", en: "A table view optimized for downloadable reports." } },
            { title: { es: "Mejor visibilidad", en: "Better visibility" }, text: { es: "Integración visual más clara entre observaciones y gráfico.", en: "Clearer visual integration between observations and the chart." } },
            { title: { es: "Mostrar u ocultar", en: "Show or hide" }, text: { es: "Control sobre qué observaciones aparecen en gráficos y reportes.", en: "Control over which observations appear in charts and reports." } },
            { title: { es: "Edición y creación", en: "Edit and create" }, text: { es: "Editar observaciones existentes y agregar nuevas.", en: "Edit existing observations and add new ones." } }
          ]
        },
        {
          title: { es: "Períodos de tiempo", en: "Time periods" },
          text: [{
            es: "Simplificamos la selección de fechas incorporando patrones comunes como “último mes”: un selector con opciones predefinidas y actualización dinámica del calendario, mostrando claramente el período elegido. Esto permitió una selección más rápida y precisa, reduciendo errores y alineándose con los patrones reales de uso.",
            en: "We simplified date selection with common patterns like “last month”: a picker with preset options and a dynamically updated calendar that clearly shows the selected period. Selection became faster and more accurate, reducing errors and matching real usage patterns."
          }],
          images: [{ url: "assets/img/conserv-analiticas-periodos.jpg", width: "20%", es: "Selector de períodos con opciones predefinidas.", en: "Period picker with preset options." }]
        },
        {
          title: { es: "Referencias", en: "References" },
          text: [{
            es: "Al implementar una nueva librería de gráficos, detectamos que las referencias incluían sensores sin datos, generando confusión y desorden visual. Tras una primera solución de etiquetado, rediseñamos la funcionalidad: esos sensores se ocultan por defecto y una notificación clara da acceso opcional al listado completo. Así mejoró la claridad y los usuarios pudieron enfocarse en lo relevante sin perder información.",
            en: "While implementing a new charting library, we noticed references included sensors with no data, causing confusion and visual clutter. After a first labeling fix, we redesigned the feature: those sensors are hidden by default, and a clear notification gives optional access to the full list. Clarity improved and users could focus on what mattered without losing information."
          }],
          images: [{ url: "assets/img/conserv-analiticas-referencias.jpg", es: "Gráfico con referencias de sensores.", en: "Chart with sensor references." }]
        }
      ]
    },

    {
      slug: "numia-procesos",
      layout: 0,
      company: "Numia",
      label: { es: "B2B · FLUJOS", en: "B2B · FLOWS" },
      tags: { es: "Procesos · Gestión de atención", en: "Processes · Service management" },
      title: { es: "Encadenar trámites para que el cliente no espere de más", en: "Chaining tasks so customers don’t wait longer than needed" },
      cover: { url: "assets/img/numia-procesos-listado.jpg", es: "Listado de procesos con su tipo y cantidad de trámites.", en: "Process list with type and number of tasks." },
      tldr: {
        role: { es: "Product Designer", en: "Product Designer" },
        context: { es: "Plataforma de gestión de atención al cliente de Numia", en: "Numia’s customer-service management platform" },
        time: { es: "2025 – 2026 · lanzamiento por etapas", en: "2025 – 2026 · staged launch" },
        focus: { es: "Flujos complejos, nueva funcionalidad, MVP", en: "Complex flows, new feature, MVP" },
        outcome: { es: "Menos derivaciones manuales y más visibilidad del proceso", en: "Fewer manual handoffs and more process visibility" }
      },
      blocks: [
        {
          title: { es: "Pauta", en: "Brief" },
          text: [{
            es: "Los trámites que requieren múltiples pasos se configuraban como trámites independientes y se derivaban manualmente entre agentes. Esto generaba complejidad operativa, poca visibilidad del proceso para el cliente y una asignación ineficiente de los puestos de atención, especialmente en procesos sin un orden definido.",
            en: "Tasks that required multiple steps were set up as independent tasks and handed off manually between agents. This created operational complexity, little process visibility for the customer and inefficient allocation of service desks, especially in processes without a defined order."
          }]
        },
        {
          title: { es: "Escenario", en: "Scenario" },
          text: [{
            es: "Cuando un cliente necesita realizar varios trámites en una misma visita, debe iniciar uno, ser atendido y luego ser derivado manualmente al siguiente. En procesos sin orden específico, queda asignado a una cola particular en lugar de poder ser atendido por cualquier puesto disponible que pueda resolver alguno de sus trámites.",
            en: "When a customer needs several tasks in one visit, they start one, get served, and are then manually handed off to the next. In processes with no specific order, they stay in one queue instead of being served by any available desk that could handle one of their tasks."
          }]
        },
        {
          title: { es: "Oportunidad", en: "Opportunity" },
          text: [{
            es: "Permitir encadenar trámites dentro de un mismo proceso para que el cliente pueda completarlos de manera más fluida, optimizando la asignación de puestos, reduciendo tiempos de espera y mejorando la visibilidad del proceso.",
            en: "Let tasks be chained within a single process so customers can complete them more smoothly, optimizing desk allocation, reducing wait times and improving process visibility."
          }]
        },
        {
          title: { es: "Solución: tipos de procesos", en: "Solution: process types" },
          cards: [
            { title: { es: "Secuencial", en: "Sequential" }, text: { es: "Los trámites deben completarse en un orden específico.", en: "Tasks must be completed in a specific order." }, meta: "1 → 2 → 3" },
            { title: { es: "Aleatorio", en: "Random" }, text: { es: "El orden no importa mientras se completen todos los trámites.", en: "Order doesn’t matter as long as every task is completed." }, meta: "3 → 1 → 2" },
            { title: { es: "Combinado", en: "Combined" }, text: { es: "Combina pasos secuenciales con grupos de trámites sin orden definido.", en: "Combines sequential steps with groups of tasks in no set order." } }
          ],
          images: [
            { url: "assets/img/numia-procesos-paso-1.jpg", es: "Crear proceso, paso 1: datos básicos.", en: "Create process, step 1: basic details." },
            { url: "assets/img/numia-procesos-tipo.jpg", es: "Elección del tipo de proceso y armado del recorrido.", en: "Choosing the process type and building the journey." },
            { url: "assets/img/numia-procesos-paso-3.jpg", es: "Paso 3: asignación de sucursales.", en: "Step 3: assigning branches." },
            { url: "assets/img/numia-procesos-editar.jpg", es: "Edición de un proceso existente.", en: "Editing an existing process." },
            { url: "assets/img/numia-procesos-cancelar.jpg", es: "Confirmación para no perder cambios al cancelar.", en: "Confirmation to avoid losing changes when canceling." }
          ]
        },
        {
          title: { es: "Iteraciones y estrategia de lanzamiento", en: "Iterations and launch strategy" },
          text: [{
            es: "El proyecto se planificó para implementarse por etapas. Primero se definió un MVP enfocado en los flujos principales de creación y gestión de procesos. Las iteraciones futuras se priorizaron según el impacto en la operación y el feedback de usuarios, evaluando continuamente si las hipótesis iniciales se validaban.",
            en: "The project was planned for a staged rollout. First, we defined an MVP focused on the core flows for creating and managing processes. Later iterations were prioritized by operational impact and user feedback, continuously checking whether the initial hypotheses held."
          }],
          video: { url: "assets/video/numia-procesos.mp4", poster: "assets/img/numia-procesos-listado.jpg", es: "Recorrido por la funcionalidad de Procesos.", en: "Walkthrough of the Processes feature." }
        },
        {
          title: { es: "Impacto", en: "Impact" },
          list: [
            { es: "Mejor visibilidad del estado de los procesos.", en: "Better visibility of process status." },
            { es: "Reducción de derivaciones manuales entre agentes.", en: "Fewer manual handoffs between agents." },
            { es: "Mayor flexibilidad para configurar flujos de atención.", en: "More flexibility to configure service flows." },
            { es: "Una base escalable para automatizar procesos más complejos.", en: "A scalable foundation for automating more complex processes." }
          ]
        }
      ]
    },

    {
      slug: "santander-pago-qr",
      layout: 1,
      company: "Santander Tecnología",
      label: { es: "FINTECH · EJERCICIO TÉCNICO", en: "FINTECH · DESIGN EXERCISE" },
      tags: { es: "Pago con QR · Encuesta y prototipos", en: "QR payments · Survey and prototypes" },
      title: { es: "Pagar con QR desde la app del banco: una razón para elegirla", en: "QR payments in a banking app: a reason to choose it" },
      cover: { url: "assets/img/santander-portada.png", es: "Pantallas del flujo de pago con QR.", en: "Screens from the QR payment flow." },
      note: {
        es: "Ejercicio técnico pedido por Santander para mi evaluación de ingreso. Por confidencialidad, es el único proyecto que puedo mostrar de mi experiencia en Santander Tecnología.",
        en: "Design exercise requested by Santander as part of my hiring process. Due to confidentiality, it’s the only project I can share from my time at Santander Tecnología."
      },
      tldr: {
        role: { es: "UX/UI Designer", en: "UX/UI Designer" },
        context: { es: "Ejercicio técnico · nueva funcionalidad de pago con QR", en: "Design exercise · new QR payment feature" },
        time: { es: "Propuesta", en: "Proposal" },
        focus: { es: "Encuesta a usuarios, análisis de problemas, prototipos", en: "User survey, problem analysis, prototypes" },
        outcome: { es: "Dos recorridos prototipados basados en hallazgos reales", en: "Two prototyped journeys based on real findings" }
      },
      link: { url: "https://forms.gle/Xwr4TESZyRjF6MSV6", es: "Ver formulario de la encuesta", en: "View survey form" },
      blocks: [
        {
          title: { es: "Pauta", en: "Brief" },
          text: [{ es: "Analizar y proponer una experiencia de pago con QR, una posible nueva funcionalidad que ofrecería el banco.", en: "Analyze and propose a QR payment experience, a potential new feature for the bank." }]
        },
        {
          title: { es: "Escenario", en: "Scenario" },
          text: [{
            es: "El mercado bancario argentino presenta nuevos competidores que buscan cambiar el paradigma sobre el uso del dinero. Los bancos necesitan transformarse para ser más competitivos y brindarle a sus clientes mejores herramientas para administrar su dinero.",
            en: "Argentina’s banking market has new competitors trying to change how people use money. Banks need to transform to stay competitive and give customers better tools to manage their money."
          }]
        },
        {
          title: { es: "Oportunidad", en: "Opportunity" },
          text: [{
            es: "Santander cerró un convenio con un proveedor que le permitiría incorporar el pago con QR en diversos locales a través de la app del banco.",
            en: "Santander signed an agreement with a provider that would let it add QR payments at many stores through the bank’s app."
          }],
          list: [
            { es: "Los clientes ya están familiarizados y cómodos pagando con QR en otras apps.", en: "Customers are already familiar and comfortable paying with QR in other apps." },
            { es: "Usan la app de Santander sobre todo para operaciones bancarias: transferencias, saldo, inversiones.", en: "They mostly use the Santander app for banking: transfers, balance, investments." },
            { es: "Si no perciben una mejora frente a las apps que ya usan, probablemente no la adopten.", en: "If they don’t see an improvement over the apps they already use, they probably won’t switch." }
          ]
        },
        {
          title: { es: "Qué me dijeron los usuarios", en: "What users told me" },
          text: [{ es: "Hice una encuesta a personas que usan apps con pago QR. Los problemas que más surgieron:", en: "I surveyed people who use apps with QR payments. The most common problems:" }],
          quotes: [
            { es: "“Pocos negocios lo tienen…”", en: "“Few stores accept it…”" },
            { es: "“Hay veces que no toma el QR…”", en: "“Sometimes it doesn’t read the QR…”" },
            { es: "“Depende de si tenés conexión de datos o no.”", en: "“It depends on whether you have mobile data.”" }
          ]
        },
        {
          title: { es: "Soluciones y mejoras potenciales", en: "Potential solutions and improvements" },
          cards: [
            { title: { es: "Masividad", en: "Reach" }, text: { es: "Un convenio con muchos locales a la vez para lograr una integración masiva.", en: "An agreement with many stores at once to reach broad acceptance." } },
            { title: { es: "Guía de ayuda", en: "Help guide" }, text: { es: "Una sección de ayuda bien visible para aclarar el uso del QR.", en: "A highly visible help section explaining how to use the QR." } },
            { title: { es: "Sin conexión", en: "Offline" }, text: { es: "Promover el QR personal, que usa la conexión del local y no la del usuario.", en: "Promote the personal QR, which relies on the store’s connection, not the user’s." } },
            { title: { es: "Favoritos y recientes", en: "Favorites and recents" }, text: { es: "Guardar comercios como favoritos o repetir pagos recientes.", en: "Save stores as favorites or repeat recent payments." } },
            { title: { es: "Fidelización", en: "Loyalty" }, text: { es: "Sumar el pago con QR a SuperClub con beneficios automáticos al pagar.", en: "Add QR payments to SuperClub with automatic rewards at checkout." } }
          ]
        },
        {
          title: { es: "Prototipos", en: "Prototypes" },
          text: [{ es: "Estructuré dos recorridos: mostrar un QR personal o escanear el QR del comercio.", en: "I structured two journeys: showing a personal QR or scanning the store’s QR." }],
          images: [
            { url: "assets/img/santander-flujo-1.png", es: "Flujo 1: QR personal, elección del medio de pago y confirmación.", en: "Flow 1: personal QR, payment-method selection and confirmation." },
            { url: "assets/img/santander-flujo-2.png", es: "Flujo 2: escanear QR, favoritos, recientes y uso de puntos.", en: "Flow 2: QR scanning, favorites, recent stores and points." },
            { url: "assets/img/santander-pantallas.png", es: "Pantallas clave del pago.", en: "Key payment screens." },
            { url: "assets/img/santander-arquitectura.png", es: "Arquitectura del recorrido: Mi QR y Escanear QR.", en: "Journey architecture: My QR and Scan QR." }
          ]
        }
      ]
    },

    {
      slug: "la-segunda-ecommerce",
      layout: 2,
      company: "La Segunda Seguros",
      label: { es: "E-COMMERCE · RESPONSIVE", en: "E-COMMERCE · RESPONSIVE" },
      tags: { es: "Seguros · E-commerce responsive", en: "Insurance · Responsive e-commerce" },
      title: { es: "Cotizar y contratar seguros, sin salir de la web", en: "Quote and buy insurance, without leaving the web" },
      cover: { url: "assets/img/la-segunda-portada.png", es: "El e-commerce en desktop y mobile.", en: "The e-commerce site on desktop and mobile." },
      tldr: {
        role: { es: "UX/UI Designer en Gen IT", en: "UX/UI Designer at Gen IT" },
        context: { es: "Célula ágil junto al cliente", en: "Agile cell together with the client" },
        time: { es: "6 meses", en: "6 months" },
        focus: { es: "E-commerce responsive, 3 breakpoints, Design System", en: "Responsive e-commerce, 3 breakpoints, Design System" },
        outcome: { es: "Cotización y contratación online en un solo recorrido", en: "Online quoting and purchase in a single journey" }
      },
      link: { url: "https://www.lasegundaonline.com.ar/", es: "Visitar La Segunda Online", en: "Visit La Segunda Online" },
      blocks: [
        {
          title: { es: "Pauta", en: "Brief" },
          text: [{ es: "Crear un e-commerce para la aseguradora La Segunda Seguros en 6 meses, con metodología de célula ágil y sin posibilidad de hacer research.", en: "Build an e-commerce site for the insurer La Segunda Seguros in 6 months, as an agile cell and with no room for user research." }]
        },
        {
          title: { es: "Escenario", en: "Scenario" },
          text: [{ es: "Las aseguradoras necesitan transformarse para ser más competitivas y brindarle a sus clientes mejores herramientas que agilicen la cotización de seguros.", en: "Insurers need to transform to stay competitive and give customers better tools to quote insurance faster." }]
        },
        {
          title: { es: "Oportunidad", en: "Opportunity" },
          text: [{ es: "En ese momento no existía en Argentina una aseguradora que permitiera cotizar y contratar seguros online, por cuenta propia y en el momento.", en: "At the time, no Argentine insurer let people quote and buy insurance online, on their own and on the spot." }]
        },
        {
          title: { es: "Contexto y proceso", en: "Context and process" },
          list: [
            { es: "Formamos una célula junto con el cliente.", en: "We formed a delivery cell together with the client." },
            { es: "Diseñé el sitio responsive con tres breakpoints: desktop, intermedio y mobile.", en: "I designed the responsive site across three breakpoints: desktop, intermediate and mobile." },
            { es: "Seguros de hogar, autos, bicicletas y monopatines, y accidentes personales.", en: "Home, car, bicycle and scooter, and personal accident insurance." },
            { es: "Usé el Design System del cliente y creé componentes nuevos, porque estaba en una etapa temprana.", en: "I used the client’s Design System and created new components, since it was at an early stage." }
          ],
          images: [
            { url: "assets/img/la-segunda-cotizacion.png", es: "Cotización de hogar: datos de la vivienda y monto a asegurar.", en: "Home insurance quote: property details and coverage amount." },
            { url: "assets/img/la-segunda-planes.png", es: "Comparación de planes, coberturas y servicios de asistencia.", en: "Comparing plans, coverage and assistance services." },
            { url: "assets/img/la-segunda-contratacion.png", es: "Contratación por etapas: datos del bien y carga de documentación.", en: "Step-by-step purchase: item details and supporting documents." },
            { url: "assets/img/la-segunda-agencia.png", es: "Selección de agencia para atención personalizada.", en: "Choosing an agency for personalized support." }
          ]
        },
        {
          title: { es: "Resultado", en: "Outcome" },
          text: [{ es: "Un e-commerce responsive que reúne cotización, comparación y contratación en un mismo recorrido, más componentes nuevos para un Design System en crecimiento. El sitio está online.", en: "A responsive e-commerce site that brings quoting, comparison and purchase into a single journey, plus new components for a growing Design System. The site is live." }]
        }
      ]
    },

    {
      slug: "conserv-reportes",
      layout: 3,
      company: "Conserv",
      label: { es: "DATA · DISCOVERY", en: "DATA · DISCOVERY" },
      tags: { es: "Reportes · Investigación", en: "Reports · Research" },
      title: { es: "Entender cómo se usan los reportes antes de rediseñarlos", en: "Understanding how reports are used before redesigning them" },
      cover: { url: "assets/img/conserv-reportes-impreso.jpg", es: "Reporte descargable con gráfico, observaciones y estadísticas.", en: "Downloadable report with chart, observations and statistics." },
      tldr: {
        role: { es: "Product Designer", en: "Product Designer" },
        context: { es: "Funcionalidad de reportes de Conserv", en: "Conserv’s reporting feature" },
        time: { es: "Medio quarter (2 meses)", en: "Half a quarter (2 months)" },
        focus: { es: "Análisis de datos de uso y entrevistas", en: "Usage-data analysis and interviews" },
        outcome: { es: "3 casos de uso claros, base para retomar el rediseño", en: "3 clear use cases, a foundation to resume the redesign" }
      },
      blocks: [
        {
          title: { es: "Pauta", en: "Brief" },
          text: [{
            es: "El análisis de datos de uso y el feedback de los usuarios mostraron una necesidad crítica de mejorar la creación de reportes. Los usuarios tenían dificultades con el rendimiento y la personalización, una clara oportunidad para optimizar una funcionalidad clave.",
            en: "Usage data and user feedback showed a critical need to improve report creation. Users struggled with performance and customization, a clear opportunity to improve a key feature."
          }]
        },
        {
          title: { es: "Escenario", en: "Scenario" },
          text: [{
            es: "Teníamos medio quarter (2 meses), así que el alcance era un MVP con mejoras funcionales y de diseño. La implementación debía tener bajo impacto en tiempo y recursos de desarrollo: mejoras notorias y valiosas, pero viables.",
            en: "We had half a quarter (2 months), so the scope was an MVP with functional and design improvements. Implementation had to be light on development time and resources: noticeable, valuable improvements that were still feasible."
          }]
        },
        {
          title: { es: "Qué descubrimos", en: "What we found" },
          text: [{ es: "Con herramientas de análisis y entrevistas a una amplia variedad de usuarios, detectamos tres casos de uso predominantes:", en: "Using analytics tools and interviews with a wide range of users, we identified three main use cases:" }],
          cards: [
            { title: { es: "Informe de incidencias", en: "Incident report" }, text: { es: "Creado desde datos analíticos o a mano, con elementos extra como capturas de gráficos.", en: "Built from analytics data or by hand, with extras like chart screenshots." } },
            { title: { es: "Desempeño y comparación", en: "Performance and comparison" }, text: { es: "Comparar el rendimiento entre espacios para detectar problemas potenciales.", en: "Comparing performance across spaces to spot potential problems." } },
            { title: { es: "Informe de préstamos", en: "Loan report" }, text: { es: "Demostrar estabilidad en el tiempo, sobre todo para prestamistas.", en: "Showing stability over time, especially for lenders." } }
          ],
          after: [{ es: "También apareció una necesidad general: poder descargar elementos individuales para armar reportes a medida.", en: "A general need also emerged: downloading individual elements to build custom reports." }]
        },
        {
          title: { es: "Resultado", en: "Outcome" },
          text: [{
            es: "Antes de pasar a diseño, las prioridades de la empresa cambiaron y el proyecto se pausó. El trabajo de discovery dejó identificadas las áreas de mejora clave y una base sólida para retomar el rediseño de reportes cuando se reactive.",
            en: "Before moving into design, company priorities shifted and the project was paused. The discovery work identified the key areas to improve and a solid foundation to resume the reports redesign when it’s picked up again."
          }],
          images: [{ url: "assets/img/conserv-reportes-impreso.jpg", es: "Reporte descargable en formato impreso.", en: "Downloadable report in print format." }]
        }
      ]
    }
  ],

  // Experiencia laboral (CV)
  jobs: [
    ["Momentus Technologies", "Product Designer · AI-First Workflow", "04/2026 — 10/2026"],
    ["Numia", "Product Designer", "04/2025 — 02/2026"],
    ["Conserv", "Product Designer", "04/2022 — 04/2025"],
    ["Trafilea", "Sr. UX/UI Designer", "01/2022 — 04/2022"],
    ["Santander Tecnología", "UX/UI Designer · Core", "01/2021 — 01/2022"],
    ["Gen IT", "UX/UI Design Analyst", "01/2019 — 01/2021"],
    ["Proyectiva SA", "Web Designer · Front-end", "04/2018 — 01/2019"],
    ["Nanda Producto Esencial", "Graphic Design · E-commerce", "07/2016 — 01/2018"]
  ],

  // Herramientas (una línea por grupo)
  tools: [
    "Figma · Figma Make · Sketch · Adobe XD · Photoshop · Illustrator",
    "Hotjar · Dovetail · Pendo · A/B Testing · User Journeys · Information Architecture",
    "ChatGPT · Claude · Prompt Engineering · Jira · Confluence · Granola · Notion · Slack · HubSpot · Magento · HTML/CSS"
  ]
};
