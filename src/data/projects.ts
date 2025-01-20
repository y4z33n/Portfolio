export const projects = [
  {
    title: "AI-Powered Web Application",
    description: "A sophisticated web application that leverages AI to provide intelligent solutions",
    image: "/projects/project1.png",
    technologies: ["Next.js", "OpenAI", "MongoDB", "TailwindCSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    featured: true,
    slug: "ai-powered-web-app",
    study: {
      overview: "An innovative web application that combines modern web technologies with AI capabilities to deliver intelligent solutions for users.",
      challenge: "The main challenge was to create a seamless integration between the frontend interface and AI backend while maintaining real-time performance.",
      solution: "Implemented a microservices architecture with Next.js for the frontend and separate AI processing services. Used MongoDB for efficient data storage and retrieval.",
      features: [
        "Real-time AI processing",
        "Responsive UI with modern design",
        "Scalable architecture",
        "Advanced data visualization"
      ],
      results: "The application successfully processes thousands of requests daily with 99.9% uptime and positive user feedback.",
      techStack: {
        frontend: ["Next.js", "TailwindCSS", "shadcn/ui"],
        backend: ["Node.js", "Express", "MongoDB"],
        ai: ["OpenAI API", "LangChain"],
        deployment: ["Vercel", "Docker"]
      }
    }
  },
  {
    title: "Enterprise Dashboard",
    description: "Modern dashboard application with real-time data visualization",
    image: "/projects/project2.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    featured: true,
    slug: "enterprise-dashboard",
    study: {
      overview: "A comprehensive dashboard solution for enterprise clients to monitor and analyze their business metrics in real-time.",
      challenge: "Creating a performant dashboard that could handle large amounts of real-time data while maintaining a smooth user experience.",
      solution: "Utilized WebSocket connections for real-time updates and implemented efficient data caching strategies.",
      features: [
        "Real-time data updates",
        "Interactive charts and graphs",
        "Custom reporting tools",
        "Role-based access control"
      ],
      results: "Reduced data analysis time by 60% and improved decision-making efficiency for enterprise clients.",
      techStack: {
        frontend: ["React", "D3.js", "Material-UI"],
        backend: ["Node.js", "Express", "PostgreSQL"],
        realtime: ["WebSocket", "Redis"],
        deployment: ["AWS", "Docker"]
      }
    }
  }
] 