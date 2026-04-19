export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    profile: {
      name: "Scarlet Abreu",
      role: "CS Engineering Student | Mobile Developer | AI & Machine Learning",
      location: "Dominican Republic",
    },
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      role: "CS & Mobile Developer",
      description:
        "I design and build scalable mobile applications using Flutter & Dart, focusing on clean architecture, performance, and user experience. Interested in AI, data-driven solutions, and continuously improving how software is built.",
      viewWork: "View my work",
      getInTouch: "Get in touch",
    },
    about: {
      label: "Who I am",
      title: "About me",
      p1: "I am a final-year Computer Science Engineering student at PUCMM and a Mobile Developer at Alphnology. My focus lies in building high-performance mobile solutions that bridge the gap between complex backend architectures and intuitive user experiences.",
      p2: "With one and a half years of experience as a Programming Instructor, I have mastered the art of breaking down complex technical concepts for diverse audiences. This background has been pivotal in my ability to write maintainable code and collaborate effectively within multidisciplinary agile teams.",
      p3: "Beyond coding, I serve as Vice President of the CS Engineering Student Committee, where I lead high-impact initiatives and hackathons. My commitment to excellence is backed by a robust portfolio of certifications from industry leaders like AWS, IBM, and Meta.",
      stats: {
        gpa: "GPA / 4.0",
        certs: "Certifications",
        teaching: "Teaching exp.",
        languages: "Languages",
      },
      whatIDo: "What I do",
      cards: {
        mobile: {
          title: "Mobile Development",
          desc: "Building scalable, high-performance cross-platform applications with Flutter & Dart",
        },
        teaching: {
          title: "Technical Mentorship",
          desc: "Guiding others and explaining complex technical concepts with clarity",
        },
        algorithms: {
          title: "Analytical Problem Solving",
          desc: "Applying structured thinking to design efficient and practical solutions",
        },
        leadership: {
          title: "Leadership & Community",
          desc: "Leading student initiatives and fostering collaboration within tech communities",
        },
      },
    },
    experience: {
      label: "Career path",
      title: "Experience",
      education: "Education",
      present: "Present",
      current: "Current",
      jobs: {
        alphnology: {
          title: "Mobile App Developer",
          org: "Alphnology",
          period: "Feb 2026 – Present",
          bullets: [
            "Developing cross-platform mobile applications using Flutter and Dart",
            "Implementing clean architecture patterns and state management solutions",
            "Collaborating with design and backend teams to deliver seamless user experiences",
            "Participating in code reviews and contributing to technical documentation",
          ],
        },
        instructor: {
          title: "Programming Instructor",
          org: "Centenaria",
          period: "Mar 2023 – Dec 2024",
          bullets: [
            "Taught C, Java, Python, HTML/CSS, and introductory programming concepts",
            "Prepared course materials, exercises, and evaluations",
            "Mentored 20+ students in programming fundamentals",
            "Achieved 95% student satisfaction rate",
          ],
        },
        vp: {
          title: "Vice President",
          org: "CS Engineering Student Committee",
          period: "Dec 2025 – Present",
          bullets: [
            "Organizing tech talks, hackathons, and networking events",
            "Representing student interests to faculty and administration",
            "Managing a team of 40 committee members",
          ],
        },
      },
      edu: {
        degree: "B.S. in Computer Science Engineering",
        school: "Pontificia Universidad Católica Madre y Maestra",
        period: "2023 – 2027 (Expected)",
        gpa: "GPA: 3.4/4.0",
      },
    },
    projects: {
      label: "My work",
      title: "Featured Projects",
      featured: "Featured",
      inProgress: "In Progress",
      code: "Code",
      demo: "Demo",
      viewAll: "View all projects",
      viewProject: "View project",
      items: {
        haskell: {
          title: "Haskell Interpreter",
          desc: "Functional interpreter featuring algebraic types, pure evaluation motor, and error handling with Either.",
        },
        bi: {
          title: "BI Contraloría",
          desc: "Business Intelligence project using K-means clustering to segment public payroll and provide data-driven insights.",
        },
        mantra: {
          title: "Mantra Daily Quotes",
          desc: "Minimalist Android app designed with MVVM to deliver daily motivational quotes with an elegant UI.",
        },
        syncro: {
          title: "Syncro Event Manager",
          desc: "Event system built with Javalin and H2, deployed using Docker multi-stage and Caddy reverse proxy.",
        },
        goservice: {
          title: "GoService Systemd",
          desc: "Production-ready Go microservice with full systemd integration, journald logging, and secure privilege separation.",
        },
        dental: {
          title: "Dental Clinic System",
          desc: "Clinical management system for patient records and treatment tracking — currently in development.",
        },
      },
    },
    skills: {
      label: "Tech stack",
      title: "Skills & Tools",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks & Tools",
        databases: "Databases",
        other: "Other",
      },
    },
    certs: {
      label: "Credentials",
      title: "Certifications",
    },
    contact: {
      label: "Get in touch",
      title: "Let's Connect",
      subtitle:
        "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      university: "University",
      sendMessage: "Send message",
      bio: "I’m passionate about building impactful mobile applications and continuously learning new technologies. Feel free to reach out!",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    profile: {
      name: "Scarlet Abreu",
      role: "Desarrolladora Móvil | Estudiante de Ingeniería CS | IA & ML",
      location: "República Dominicana",
    },
    hero: {
      available: "Disponible para oportunidades",
      greeting: "Hola, soy",
      role: "Desarrolladora Móvil",
      description:
        "Diseño y desarrollo aplicaciones móviles escalables con Flutter & Dart, enfocándome en arquitectura limpia, rendimiento y experiencia de usuario. Interesada en IA, soluciones basadas en datos y en mejorar continuamente cómo se construye el software.",
      viewWork: "Ver mi trabajo",
      getInTouch: "Contáctame",
    },
    about: {
      label: "Quién soy",
      title: "Sobre mí",
      p1: "Soy estudiante de término de Ingeniería en Ciencias de la Computación en la PUCMM y desarrolladora móvil en Alphnology. Me especializo en crear soluciones móviles de alto rendimiento, conectando arquitecturas de backend complejas con experiencias de usuario intuitivas.",
      p2: "Cuento con un año y medio de experiencia como instructora de programación, lo que me ha permitido perfeccionar la comunicación de conceptos técnicos avanzados. Esta base ha sido clave para desarrollar código mantenible y colaborar eficientemente en equipos ágiles multidisciplinarios.",
      p3: "Más allá del desarrollo, me desempeño como Vicepresidenta del Comité de Estudiantes de Ingeniería CS, liderando hackathons e iniciativas de alto impacto. Mi compromiso profesional está respaldado por certificaciones estratégicas de AWS, IBM, Meta y UC San Diego.",
      stats: {
        gpa: "GPA / 4.0",
        certs: "Certificaciones",
        teaching: "Exp. docente",
        languages: "Idiomas",
      },
      whatIDo: "Lo que hago",
      cards: {
        mobile: {
          title: "Desarrollo Móvil",
          desc: "Creación de aplicaciones multiplataforma escalables y de alto rendimiento con Flutter & Dart",
        },
        teaching: {
          title: "Mentoría Técnica",
          desc: "Explicando conceptos complejos y guiando procesos de aprendizaje técnico",
        },
        algorithms: {
          title: "Pensamiento Analítico",
          desc: "Resolución de problemas mediante enfoque estructurado y soluciones eficientes",
        },
        leadership: {
          title: "Liderazgo & Comunidad",
          desc: "Impulsando iniciativas estudiantiles y fomentando colaboración en tecnología",
        },
      },
    },
    experience: {
      label: "Trayectoria",
      title: "Experiencia",
      education: "Educación",
      present: "Presente",
      current: "Actual",
      jobs: {
        alphnology: {
          title: "Desarrolladora de Apps Móviles",
          org: "Alphnology",
          period: "Feb 2026 – Presente",
          bullets: [
            "Desarrollando aplicaciones móviles multiplataforma con Flutter y Dart",
            "Implementando patrones de arquitectura limpia y gestión de estado",
            "Colaborando con equipos de diseño y backend para mejorar la experiencia de usuario",
            "Participando en revisiones de código y documentación técnica",
          ],
        },
        instructor: {
          title: "Instructora de Programación",
          org: "Centenaria",
          period: "Mar 2023 – Dec 2024",
          bullets: [
            "Enseñé C, Java, Python, HTML/CSS y fundamentos de programación",
            "Preparé materiales, ejercicios y evaluaciones",
            "Mentoreé a más de 20 estudiantes",
            "Logré 95% de satisfacción estudiantil",
          ],
        },
        vp: {
          title: "Vicepresidenta",
          org: "Comité Estudiantil de Ingeniería CS",
          period: "Dec 2025 – Presente",
          bullets: [
            "Organizando charlas técnicas, hackathons y eventos",
            "Representando estudiantes ante la facultad",
            "Gestionando un equipo de 40 miembros",
          ],
        },
      },
      edu: {
        degree: "Ingeniería en Ciencias de la Computación",
        school: "Pontificia Universidad Católica Madre y Maestra",
        period: "2023 – 2027 (Esperado)",
        gpa: "GPA: 3.4/4.0",
      },
    },
    projects: {
      label: "Mi trabajo",
      title: "Proyectos Destacados",
      featured: "Destacado",
      inProgress: "En Progreso",
      code: "Código",
      demo: "Demo",
      viewAll: "Ver todos los proyectos",
      viewProject: "Ver proyecto",
      items: {
        haskell: {
          title: "Intérprete Haskell",
          desc: "Intérprete funcional con tipos algebraicos, motor de evaluación puro y manejo de errores con Either.",
        },
        bi: {
          title: "BI Contraloría",
          desc: "Proyecto de BI que utiliza clustering K-means para segmentar nómina pública y generar insights institucionales.",
        },
        mantra: {
          title: "Mantra Daily Quotes",
          desc: "App minimalista de Android con MVVM para entregar frases motivacionales con una interfaz elegante.",
        },
        syncro: {
          title: "Syncro Event Manager",
          desc: "Gestión de eventos con Javalin y H2, desplegado con Docker multi-stage y proxy inverso Caddy.",
        },
        goservice: {
          title: "GoService Systemd",
          desc: "Microservicio en Go listo para producción con integración de systemd, journald y seguridad avanzada.",
        },
        dental: {
          title: "Gestión Dental",
          desc: "Sistema integral para expedientes clínicos y seguimiento de tratamientos — actualmente en desarrollo.",
        },
      },
    },
    skills: {
      label: "Stack técnico",
      title: "Habilidades & Herramientas",
      categories: {
        languages: "Lenguajes",
        frameworks: "Frameworks & Herramientas",
        databases: "Bases de Datos",
        other: "Otros",
      },
    },
    certs: {
      label: "Credenciales",
      title: "Certificaciones",
    },
    contact: {
      label: "Contáctame",
      title: "Conectemos",
      subtitle:
        "¿Tienes un proyecto en mente o solo quieres saludar? Estoy abierta a nuevas oportunidades.",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      university: "Universidad",
      sendMessage: "Enviar mensaje",
      bio: "Me enfoco en construir aplicaciones móviles de impacto y en seguir aprendiendo constantemente. ¡No dudes en contactarme!",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con Next.js & Tailwind CSS",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;