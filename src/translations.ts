export type Language = "en" | "hi" | "es";

interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  categories: {
    title: string;
    items: {
      cooking: string;
      cleaning: string;
      tutoring: string;
      childcare: string;
      crafts: string;
      tailoring: string;
    };
  };
  opportunities: {
    title: string;
    subtitle: string;
  };
  howItWorks: {
    title: string;
    steps: {
      register: { title: string; description: string };
      browse: { title: string; description: string };
      apply: { title: string; description: string };
      earn: { title: string; description: string };
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: "Empower Your Skills, Build Your Career",
      subtitle: "Connect with flexible job opportunities perfect for homemakers. No IT experience needed.",
      cta: "Get Started",
      secondaryCta: "Browse Jobs",
    },
    categories: {
      title: "Popular Job Categories",
      items: {
        cooking: "Cooking & Catering",
        cleaning: "Home Services",
        tutoring: "Teaching & Tutoring",
        childcare: "Childcare",
        crafts: "Handicrafts & Art",
        tailoring: "Tailoring & Design",
      },
    },
    opportunities: {
      title: "Featured Opportunities",
      subtitle: "Start earning from home with these trusted opportunities",
    },
    howItWorks: {
      title: "How It Works",
      steps: {
        register: {
          title: "Create Your Profile",
          description: "Sign up in your preferred language and showcase your skills",
        },
        browse: {
          title: "Browse Opportunities",
          description: "Explore jobs that match your skills and schedule",
        },
        apply: {
          title: "Apply & Connect",
          description: "Apply directly to opportunities that interest you",
        },
        earn: {
          title: "Start Earning",
          description: "Work on your terms and build your career",
        },
      },
    },
    cta: {
      title: "Ready to Start Your Journey?",
      subtitle: "Join thousands of women building successful careers from home",
      button: "Sign Up Now",
    },
    footer: {
      tagline: "Empowering women through flexible work opportunities",
    },
  },
  hi: {
    hero: {
      title: "अपने कौशल को सशक्त बनाएं, अपना करियर बनाएं",
      subtitle: "गृहिणियों के लिए परफेक्ट लचीले नौकरी के अवसरों से जुड़ें। आईटी अनुभव की आवश्यकता नहीं।",
      cta: "शुरू करें",
      secondaryCta: "नौकरियां देखें",
    },
    categories: {
      title: "लोकप्रिय नौकरी श्रेणियां",
      items: {
        cooking: "खाना बनाना और कैटरिंग",
        cleaning: "घरेलू सेवाएं",
        tutoring: "शिक्षण और ट्यूशन",
        childcare: "बाल देखभाल",
        crafts: "हस्तशिल्प और कला",
        tailoring: "सिलाई और डिज़ाइन",
      },
    },
    opportunities: {
      title: "विशेष अवसर",
      subtitle: "इन विश्वसनीय अवसरों के साथ घर से कमाई शुरू करें",
    },
    howItWorks: {
      title: "यह कैसे काम करता है",
      steps: {
        register: {
          title: "अपनी प्रोफ़ाइल बनाएं",
          description: "अपनी पसंदीदा भाषा में साइन अप करें और अपने कौशल दिखाएं",
        },
        browse: {
          title: "अवसर खोजें",
          description: "अपने कौशल और समय के अनुसार नौकरियां खोजें",
        },
        apply: {
          title: "आवेदन करें और जुड़ें",
          description: "आपकी रुचि के अवसरों के लिए सीधे आवेदन करें",
        },
        earn: {
          title: "कमाई शुरू करें",
          description: "अपनी शर्तों पर काम करें और अपना करियर बनाएं",
        },
      },
    },
    cta: {
      title: "अपनी यात्रा शुरू करने के लिए तैयार हैं?",
      subtitle: "घर से सफल करियर बनाने वाली हजारों महिलाओं में शामिल हों",
      button: "अभी साइन अप करें",
    },
    footer: {
      tagline: "लचीले कार्य अवसरों के माध्यम से महिलाओं को सशक्त बनाना",
    },
  },
  es: {
    hero: {
      title: "Potencia Tus Habilidades, Construye Tu Carrera",
      subtitle: "Conéctate con oportunidades laborales flexibles perfectas para amas de casa. No se necesita experiencia en IT.",
      cta: "Comenzar",
      secondaryCta: "Ver Trabajos",
    },
    categories: {
      title: "Categorías Populares de Trabajo",
      items: {
        cooking: "Cocina y Catering",
        cleaning: "Servicios del Hogar",
        tutoring: "Enseñanza y Tutoría",
        childcare: "Cuidado de Niños",
        crafts: "Artesanías y Arte",
        tailoring: "Costura y Diseño",
      },
    },
    opportunities: {
      title: "Oportunidades Destacadas",
      subtitle: "Comienza a ganar desde casa con estas oportunidades confiables",
    },
    howItWorks: {
      title: "Cómo Funciona",
      steps: {
        register: {
          title: "Crea Tu Perfil",
          description: "Regístrate en tu idioma preferido y muestra tus habilidades",
        },
        browse: {
          title: "Explora Oportunidades",
          description: "Encuentra trabajos que coincidan con tus habilidades y horario",
        },
        apply: {
          title: "Aplica y Conéctate",
          description: "Aplica directamente a las oportunidades que te interesen",
        },
        earn: {
          title: "Comienza a Ganar",
          description: "Trabaja en tus términos y construye tu carrera",
        },
      },
    },
    cta: {
      title: "¿Lista Para Comenzar Tu Viaje?",
      subtitle: "Únete a miles de mujeres construyendo carreras exitosas desde casa",
      button: "Regístrate Ahora",
    },
    footer: {
      tagline: "Empoderando mujeres a través de oportunidades de trabajo flexibles",
    },
  },
};
