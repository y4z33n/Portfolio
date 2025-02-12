export const projects = [
  {
    title: "FitMate AI",
    description: "A sophisticated web application that leverages AI to provide personal fitness and nutrition advice",
    image: "/fitmate.jpg",
    technologies: ["Next.js", "Openrouter", "Firebase", "TailwindCSS", "shadcn/ui"],
    github: "https://github.com/y4z33n/FitMate",
    demo: "https://fitmate-ruby.vercel.app/",
    featured: true,
    slug: "ai-powered-web-app",
    study: {
      overview: "FitMate AI is an intelligent fitness companion that leverages multiple AI models to provide personalized fitness advice and answer user queries in real-time.",
      challenge: "Creating an intuitive chat interface that could seamlessly interact with multiple AI models while maintaining a responsive and user-friendly experience.",
      solution: "Implemented a modern web application using Next.js and shadcn/ui components, integrated with OpenRouter API for accessing various AI models, and used Firebase for reliable data management.",
      features: [
        "Interactive chat interface for fitness-related queries",
        "Multi-model AI support for comprehensive answers",
        "Clean, modern UI design using shadcn/ui components",
        "Real-time response processing",
        "Mobile-responsive layout"
      ],
      results: "Successfully created a robust fitness assistant that provides accurate, personalized guidance to users seeking fitness advice.",
      techStack: {
        frontend: ["Next.js", "Tailwind CSS", "shadcn/ui"],
        backend: ["Firebase"],
        ai: ["OpenRouter API"],
        deployment: ["Vercel"]
      }
    }
  },
  {
    title: "Yazeen Spices",
    description: "A comprehensive e-commerce platform for premium quality spices, featuring user authentication, product management, and a rich shopping experience",
    image: "/spices.jpg",
    technologies: ["Next.js", "Firebase", "TailwindCSS", "TypeScript", "Zustand", "shadcn/ui"],
    github: "https://github.com/y4z33n/yazeen_spices",
    demo: "https://yazeenspices.vercel.app/",
    featured: true,
    slug: "yazeen-spices-ecommerce",
    study: {
      overview: "A feature-rich e-commerce platform built for a wholesale spice business, combining modern web technologies with a comprehensive shopping experience.",
      challenge: "Developing a full-featured e-commerce solution with secure authentication, real-time updates, and efficient product management while maintaining excellent user experience.",
      solution: "Implemented a modern tech stack with Next.js and Firebase, utilizing Zustand for state management and integrating secure authentication methods.",
      features: [
        "Authentication with email/password and Google sign-in",
        "Complete product management system with admin dashboard",
        "Shopping cart with real-time updates and wishlist functionality",
        "User profiles with order history and address management",
        "Blog section with spice-related articles and cooking guides",
        "Comprehensive customer service section with FAQ and policies"
      ],
      results: "Created a robust e-commerce platform that effectively digitizes the wholesale spice business with a focus on user experience and functionality.",
      techStack: {
        frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        backend: ["Firebase Authentication", "Firestore", "Firebase Storage"],
        stateManagement: ["Zustand"],
        payment: ["Razorpay"],
        deployment: ["Vercel"]
      }
    }
  }
] 