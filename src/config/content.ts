/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Empresa especializada en limpieza post-fallecimiento en Barcelona',
    h1main:      'Limpiezas por Fallecimiento',
    h1accent:    'en Barcelona y toda la comarca del Barcelonés',
    description: 'MortemClean ofrece servicios integrales de limpieza tras fallecimiento en Barcelona, con discreción, profesionalidad y el máximo respeto. Nos encargamos de todo, desde la retirada de pertenencias hasta la desinfección profunda, brindando apoyo en momentos difíciles.',
    badge1:      'Presupuesto en 30 minutos',
    badge2:      'Más de 15 años de experiencia en Barcelona',
    badge3:      'Certificación ISO 9001:2015',
    badge4:      'Cobertura total en el área metropolitana de Barcelona',
    cardStat:    '+200',
    cardLabel:   'viviendas limpiadas con éxito en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desinfección Profesional y Segura',
      description: 'Utilizamos productos homologados por el Ministerio de Sanidad, garantizando la eliminación completa de bacterias y virus. Nuestro equipo está capacitado para gestionar residuos biológicos con total seguridad en toda Barcelona.',
    },
    {
      icon: 'clock',
      title:       'Rapidez y Eficiencia',
      description: 'Entendemos la urgencia que supone una limpieza post-fallecimiento. Ofrecemos disponibilidad inmediata y realizamos los trabajos en un plazo de 24-72 horas, dependiendo del estado de la vivienda en {{city}}.',
    },
    {
      icon: 'check',
      title:       'Servicio Integral y Completo',
      description: 'Nuestro servicio abarca desde la retirada de pertenencias hasta la limpieza profunda y desinfección, incluyendo la eliminación de olores. Nos aseguramos de dejar el espacio completamente limpio, listo para ser utilizado o preparado para un entierro en {{city}}.',
    },
    {
      icon: 'box',
      title:       'Cobertura Amplia en Barcelona',
      description: 'Operamos en toda la ciudad de Barcelona y municipios del Barcelonés como Sant Adrià del Besòs, Esplugues de Llobregat, Cornellà de Llobregat y l\'Hospitalet de Llobregat.  Atendemos a particulares, herederos y administradores de fincas en {{city}}.',
    },
    {
      icon: 'heart',
      title:       'Empatía y Discreción Absoluta',
      description: 'Somos conscientes del delicado momento que atraviesa el cliente. Ofrecemos un trato cercano, respetuoso y totalmente confidencial en todo momento, con la máxima discreción en {{city}}.',
    },
    {
      icon: 'users',
      title:       'Equipo Altamente Cualificado',
      description: 'Contamos con un equipo de profesionales especializados en limpieza post-fallecimiento, formados para afrontar cualquier situación. Nuestro personal está capacitado en gestión de residuos peligrosos y posee los permisos necesarios en {{city}}.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'retirada-de-enseres-y-materiales-afectados',
      nombre:      'Retirada de enseres y materiales afectados',
      description: 'En MortemClean, nos encargamos de la retirada discreta y profesional de objetos y mobiliario afectados en Barcelona. Ofrecemos un servicio integral para facilitar el proceso tras una pérdida, cubriendo toda la zona del Barcelonés.',
      features:    ['Recogida rápida y eficiente', 'Certificado de destrucción', 'Gestión responsable de residuos', 'Servicio disponible en Barcelona ciudad y alrededores'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-y-descontaminacion-de-la-zona-afectada',
      nombre:      'Limpieza y descontaminación de la zona afectada',
      description: 'MortemClean ofrece servicios especializados de limpieza profunda y descontaminación en Barcelona, eliminando cualquier rastro biológico o químico. Nos aseguramos de que el espacio se prepare adecuadamente para los siguientes pasos, operando en todo el Barcelonés.',
      features:    ['Utilizamos productos homologados', 'Eliminación de bacterias y virus', 'Cumplimiento normativo vigente', 'Servicio urgente disponible en Barcelona y comarca.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'desinfeccion-y-sanitizacion-profesional',
      nombre:      'Desinfección y sanitización profesional',
      description: 'Garantizamos una desinfección y sanitización completa de la vivienda o espacio afectado en Barcelona con MortemClean. Nuestros protocolos eliminan cualquier riesgo de contaminación, ofreciendo tranquilidad a familiares y profesionales del Barcelonés.',
      features:    ['Tecnología de niebla fría', 'Productos biodegradables y seguros', 'Certificación de limpieza', 'Amplia cobertura en el área metropolitana de Barcelona.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'eliminacion-de-olores-persistentes',
      nombre:      'Eliminación de olores persistentes',
      description: 'MortemClean elimina eficazmente los olores difíciles y persistentes tras un fallecimiento en Barcelona, utilizando técnicas profesionales. Recuperamos la normalidad ambiental en el espacio con nuestro servicio especializado para el Barcelonés.',
      features:    ['Neutralización de olores orgánicos', 'Tratamiento enzimático avanzado', 'Olor fresco garantizado', 'Servicio disponible 24/7 en toda la provincia de Barcelona.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'gestion-de-residuos-biologicos-y-materiales-contaminados',
      nombre:      'Gestión de residuos biológicos y materiales contaminados',
      description: 'MortemClean gestiona legalmente los residuos biológicos y materiales contaminados generados en Barcelona, cumpliendo con todas las normativas vigentes. Ofrecemos un servicio seguro y confidencial para el Barcelonés y sus alrededores.',
      features:    ['Albarán de entrega de residuos', 'Transporte autorizado por la Generalitat', 'Eliminación en gestor certificado', 'Servicio integral de gestión de residuos en Barcelona ciudad.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-integral-y-recuperacion-de-la-vivienda',
      nombre:      'Limpieza integral y recuperación de la vivienda',
      description: 'MortemClean ofrece una limpieza integral y profunda para recuperar la habitabilidad de la vivienda en Barcelona, tras un fallecimiento.  Restauramos el espacio a su estado original, brindando apoyo al proceso duelo en todo el Barcelonés.',
      features:    ['Preparación completa para herederos', 'Limpieza de alfombras y tapicerías', 'Desinfección del aire', 'Servicio personalizado para cada cliente en Barcelona y comarca.'],
      featured:    true,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'María C.',
      location: 'Gràcia, Barcelona',
      service:  'Limpieza Integral post-fallecimiento',
      quote:    'MortemClean fue una bendición en un momento tan difícil. El equipo fue muy profesional y discreto, dejando el piso impecable y listo para la venta. La zona de Gràcia es tranquila, pero necesitaba ayuda urgente.',
    },
    {
      initials: 'JR',
      name:     'Jordi R.',
      location: 'Sarrià-Sant Gervasi, Barcelona',
      service:  'Retirada de enseres y limpieza profunda',
      quote:    'El equipo de MortemClean fue muy puntual y eficiente.  Me explicaron todo el proceso con detalle y se aseguraron de eliminar todos los olores. En Sarrià, la privacidad es importante, y ellos lo entendieron perfectamente.',
    },
    {
      initials: 'AL',
      name:     'Ana L.',
      location: 'Les Corts, Barcelona',
      service:  'Desinfección y eliminación de olores',
      quote:    'Necesitaba una solución rápida y eficaz para eliminar los olores fuertes. MortemClean cumplió con mis expectativas y el precio fue justo. Les recomiendo a todos en Les Corts.',
    },
    {
      initials: 'PG',
      name:     'Pedro G.',
      location: 'Horta-Guinardó, Barcelona',
      service:  'Limpieza integral y gestión de residuos',
      quote:    'Llevo años utilizando los servicios de MortemClean para diferentes propiedades. Siempre han sido profesionales, rápidos y eficientes en Horta-Guinardó.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Limpieza Básica (Superficie < 50m2)',
      precio:    'desde 195 €',
      highlight: false,
      features:  ['Retirada de pertenencias visibles', 'Limpieza superficial', 'Eliminación de olores leves'],
    },
    {
      tipo:      'Limpieza Integral (Superficie hasta 100m2)',
      precio:    'desde 375 €',
      highlight: true,
      badge:     'Más solicitado',
      features:  ['Retirada completa de enseres y materiales', 'Limpieza profunda y desinfección', 'Eliminación de olores persistentes', 'Gestión de residuos biológicos'],
    },
    {
      tipo:      'Vivienda Grande o Compleja (Superficie > 100m2)',
      precio:    'Presupuesto personalizado',
      highlight: false,
      features:  ['Evaluación in situ para determinar el alcance del trabajo', 'Retirada integral de pertenencias y enseres', 'Limpieza profunda y desinfección especializada', 'Gestión completa de residuos peligrosos', 'Certificado de limpieza y desinfección'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta una limpieza por fallecimiento en Barcelona?',
      respuesta: 'El precio varía entre 600€ y 2500€ para superficies estándar. Un presupuesto personalizado se realiza tras evaluar el estado de la vivienda, la superficie y el alcance del trabajo requerido. Ofrecemos presupuestos gratuitos y sin compromiso en {{city}}.',
    },
    {
      pregunta:  '¿Cuánto tarda una limpieza post-fallecimiento?',
      respuesta: 'Una limpieza básica puede tardar entre 2 y 4 horas. Una limpieza integral suele requerir de 6 a 8 horas, dependiendo del grado de suciedad y la cantidad de pertenencias a retirar en {{city}}.',
    },
    {
      pregunta:  '¿Qué incluye el servicio de limpieza tras fallecimiento?',
      respuesta: 'Incluye la retirada de pertenencias, limpieza profunda (suelos, paredes, techos), desinfección, eliminación de olores, gestión de residuos biológicos y documentación necesaria. Adaptamos los servicios a las necesidades específicas del cliente en {{city}}.',
    },
    {
      pregunta:  '¿Trabajáis en toda la comarca de Barcelona?',
      respuesta: 'Sí, cubrimos toda la ciudad de Barcelona y municipios como Sant Cugat del Vallès, Badalona, Montcada i Reixach y Mollet del Vallès.  Consultar disponibilidad para localidades más alejadas.',
    },
    {
      pregunta:  '¿Qué debo preparar antes de que llegue el equipo?',
      respuesta: 'No es necesario realizar ninguna preparación previa. Nos encargamos de todo. Solo le pedimos que nos facilite acceso a la vivienda y, si lo desea, información sobre posibles pertenencias específicas que desee conservar en {{city}}.',
    },
    {
      pregunta:  '¿Qué garantías ofrecen respecto a la desinfección?',
      respuesta: 'Utilizamos productos homologados por el Ministerio de Sanidad con eficacia probada contra bacterias, virus y olores.  Además, emitimos un certificado de limpieza y desinfección una vez finalizado el trabajo en {{city}}.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Contacto y Presupuesto Gratuito',
      descripcion: 'Contáctenos por teléfono o email para solicitar un presupuesto sin compromiso. Le atenderemos de forma rápida y personalizada en toda la ciudad de Barcelona.',
    },
    {
      titulo:      '2. Evaluación del Espacio',
      descripcion: 'Nuestro equipo se desplaza a su domicilio para evaluar el estado de la vivienda, determinar el alcance del trabajo y ofrecerle un presupuesto preciso.  Realizamos esta visita gratuita en {{city}}.',
    },
    {
      titulo:      '3. Ejecución de los Servicios',
      descripcion: 'Una vez aceptado el presupuesto, nuestro equipo especializado procede a realizar la limpieza profunda y desinfección con productos homologados y siguiendo estrictos protocolos de seguridad en {{city}}.',
    },
    {
      titulo:      '4. Entrega del Informe y Documentación',
      descripcion: 'Le entregamos un informe detallado de los trabajos realizados y la documentación necesaria para gestionar los residuos biológicos, garantizando la transparencia total del proceso.',
    }
  ],

} as const;

export type Content = typeof content;
