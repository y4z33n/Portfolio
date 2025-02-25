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
  },

  {
    title: "SpeedMatch",
    description: "A mobile dating app that connects users with random matches for timed 5-minute conversations, after which they can choose to continue or move on",
    image: "/speedmatch.jpg",
    "technologies": ["React Native", "Next.js", "Node.js", "Express", "Firebase", "WebSockets"],
    "github": "https://github.com/y4z33n/speedmatch",
    "demo": "https://speedmatch.vercel.app/",
    "featured": true,
    "slug": "speedmatch-dating-app",
    "study": {
      "overview": "SpeedMatch is a modern dating application that facilitates quick connections through timed conversations, giving users the opportunity to make meaningful first impressions without prolonged commitment.",
      "challenge": "Building a responsive real-time matching system with timed conversations while ensuring user privacy, security, and a seamless mobile experience across platforms.",
      "solution": "Implemented a React Native mobile app with a Node.js backend, using Firebase for authentication and data storage, and WebSockets for real-time chat functionality.",
      "features": [
        "User authentication and comprehensive profile management",
        "Preference-based matching algorithm with real-time queue system",
        "Timed 5-minute conversations using WebSockets",
        "Post-conversation connection request system",
        "Subscription model with in-app purchases",
        "AI-powered recommendations based on connection history",
        "Push notifications for new matches and messages",
        "User ratings and reporting tools for community safety"
      ],
      "results": "Created an engaging dating platform that streamlines the initial connection process through time-limited conversations, resulting in higher quality matches and reduced user hesitation.",
      "techStack": {
        "frontend": ["React Native", "Next.js", "Mobile UI Components"],
        "backend": ["Node.js", "Express", "RESTful APIs"],
        "database": ["Firebase Firestore", "Firebase Authentication", "Firebase Storage"],
        "realtime": ["WebSockets"],
        "payment": ["In-app Purchases", "Subscription Model"],
        "deployment": ["AWS/Vercel", "Firebase"]
      }
    }
  },

  {
    "title": "Hertz",
    "description": "An AI-powered music recommendation web app that suggests songs based on user mood analysis while integrating with their Spotify or Apple Music listening data",
    "image": "/hertz.jpg",
    "technologies": ["Next.js", "Firebase", "TailwindCSS", "TypeScript", "shadcn/ui", "Spotify API", "Apple Music API", "OpenAI"],
    "github": "https://github.com/y4z33n/hertz",
    "demo": "https://hertz-music.vercel.app/",
    "featured": true,
    "slug": "hertz-music-recommendation",
    "study": {
      "overview": "Hertz is an intelligent music companion that combines AI mood analysis with users' streaming service data to deliver personalized song recommendations that match their current emotional state.",
      "challenge": "Creating a seamless integration between natural language processing for mood detection and music streaming platforms while maintaining user privacy and delivering consistently relevant recommendations.",
      "solution": "Developed a Next.js application with OAuth integration for music services, implementing natural language processing to analyze user inputs and match them with appropriate music selections from their listening history.",
      "features": [
        "Authentication with Spotify and Apple Music OAuth",
        "Conversational interface for mood expression",
        "AI-powered mood analysis and categorization",
        "Personalized recommendations based on listening history",
        "One-click playback on preferred streaming platform",
        "Mood history tracking and music journey insights",
        "Playlist generation based on mood patterns",
        "Cross-platform music service integration"
      ],
      "results": "Built an intuitive music discovery platform that bridges the gap between emotional states and music preferences, enhancing the listening experience through contextually aware recommendations.",
      "techStack": {
        "frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        "backend": ["Firebase Authentication", "Firestore", "Firebase Functions"],
        "ai": ["Openrouter API", "Natural Language Processing"],
        "apis": ["Spotify Web API", "Apple Music API"],
        "stateManagement": ["React Context API"],
        "deployment": ["Vercel"]
      }
    }
  },

  {
    "title": "RationTrack",
    "description": "A comprehensive ration shop management system with dual admin and customer interfaces for streamlining public distribution operations and enhancing transparency",
    "image": "/rationtrack.jpg",
    "technologies": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "shadcn/ui"],
    "github": "https://github.com/y4z33n/rationtrack",
    "demo": "https://rationtrack.vercel.app/",
    "featured": true,
    "slug": "rationtrack-management-system",
    "study": {
      "overview": "RationTrack modernizes government ration shop operations with a dual-interface system featuring a robust admin portal for shop management and an intuitive customer interface for ration card holders.",
      "challenge": "Developing a secure, efficient system to manage inventory, customer data, and order processing while ensuring proper authentication, data validation, and role-based access control across different user types.",
      "solution": "Implemented a Next.js application with Firebase backend services, featuring Aadhaar-based authentication for customers and comprehensive inventory and order management for administrators.",
      "features": [
        "Dual interface with admin portal and customer dashboard",
        "Tiered authentication with email/password for admins and Aadhaar+OTP for customers",
        "Real-time inventory management with category-based pricing",
        "Customer registration with Aadhaar linkage and family member details",
        "Monthly quota tracking and allocation management",
        "Order processing with status tracking and history",
        "Role-based access control with custom JWT claims",
        "Responsive design for various device types"
      ],
      "results": "Created a secure, efficient system that digitizes the ration distribution process, minimizes administrative overhead, prevents fraud, and improves the experience for both shop managers and beneficiaries.",
      "techStack": {
        "frontend": ["Next.js 15.1.7", "React 19.0.0", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        "backend": ["Firebase Authentication", "Firestore", "Firebase Admin SDK", "Next.js API routes"],
        "stateManagement": ["React Context"],
        "security": ["JWT token-based sessions", "Custom claims", "Route protection middleware"],
        "development": ["ESLint", "Prettier", "Turbopack"],
        "deployment": ["Vercel"]
      }
    }
  }
] 