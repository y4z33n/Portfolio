export const profile = {
  name: "Muhammed Yazeen",
  role: "Developer / Gen AI Specialist",
  bio: "I craft digital experiences at the intersection of web development and artificial intelligence. Specializing in modern web technologies and generative AI, I bridge the gap between traditional development and cutting-edge AI solutions.",
  
  about: {
    title: "About Me",
    description: `I'm a passionate developer with a unique blend of web development and AI expertise. 
    With a strong foundation in modern web technologies and a deep understanding of generative AI, 
    I create innovative solutions that leverage the best of both worlds.`,
    
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Company",
        period: "2022 - Present",
        description: "Leading development of modern web applications using Next.js and Node.js"
      },
      {
        title: "AI Solutions Architect",
        company: "AI Startup",
        period: "2021 - 2022",
        description: "Designed and implemented AI-powered solutions using LangChain and OpenAI"
      }
    ],

    education: [
      {
        degree: "Master's in Computer Science",
        school: "University Name",
        year: "2020"
      }
    ]
  },

  skills: {
    web: {
      title: "Web Development",
      items: ["Next.js", "React", "TailwindCSS", "Node.js", "MongoDB", "shadcn/ui", "TypeScript", "Express"]
    },
    ai: {
      title: "AI & Machine Learning",
      items: ["LangChain", "OpenAI API", "Prompt Engineering", "LLM Fine-tuning", "AI Application Development"]
    },
    tools: {
      title: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "Vercel", "VS Code", "Figma"]
    }
  },

  projects: [
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
  ],

  contact: {
    email: "your.email@example.com",
    location: "City, Country",
    availability: "Open to opportunities",
    description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: "linkedin"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: "twitter"
      }
    ]
  },

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  },

  siteConfig: {
    theme: {
      default: "system",
      accentColor: "blue"
    },
    navigation: {
      home: {
        title: "MY",
        path: "/"
      },
      menu: [
        {
          title: "About",
          path: "/about"
        },
        {
          title: "Projects",
          path: "/projects"
        },
        {
          title: "Skills",
          path: "/skills"
        },
        {
          title: "Contact",
          path: "/contact"
        }
      ]
    }
  }
} 