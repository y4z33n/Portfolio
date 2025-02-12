export const profile = {
  name: "Muhammed Yazeen",
  role: "Developer / Gen AI Specialist",
  bio: "I craft digital experiences at the intersection of web development and artificial intelligence. Specializing in modern web technologies and generative AI, I bridge the gap between traditional development and cutting-edge AI solutions.",
  
  about: {
    title: "About Me",
    description: `As a System Administrator turned Web Developer, I bring a unique perspective to building AI-powered applications. My background in infrastructure and systems has given me a deep understanding of what makes applications robust and scalable, while my passion for modern web development allows me to create intuitive, user-focused solutions. I specialize in developing applications that leverage generative AI, combining Next.js, Firebase, and various AI technologies to build tools that solve real-world problems. My transition from managing systems to crafting AI-enhanced web experiences has taught me that the best applications aren't just about code – they're about creating reliable, secure, and efficient solutions that make a difference. Currently, I'm focused on building projects that demonstrate how AI can enhance traditional web applications, from personalized fitness assistants to modernized e-commerce platforms.`,
    
    experience: [
      {
        title: "System Administrator",
        company: "Ilahia College of Arts and Science",
        period: "Aug 2022 - Dec 2024",
        description: "As a System Administrator, I was responsible for overseeing the management and maintenance of the IT infrastructure to ensure optimal system reliability and security. I provided technical support to users, addressing their issues promptly and effectively. My role involved optimizing network performance and implementing necessary software updates and backups. Additionally, I collaborated with other departments to understand their IT needs and provide tailored solutions. Through proactive monitoring and troubleshooting, I contributed to a seamless technological environment that supported the institution's goals."
      }
    ],

    education: [
      {
        degree: "B.Tech Computer Science and Engineering",
        school: "Ilahia College of Engineering and Technology",
        year: "2018 - 2022"
      },
      {
        degree: "Higher Secondary Education",
        school: "Ilahia Public School",
        year: "2016 - 2018"
      }
    ]
  },

  skills: {
    web: {
      title: "Web Development",
      items: ["Next.js", "React", "TailwindCSS", "Node.js", "Firebase", "MongoDB", "shadcn/ui", "TypeScript"]
    },
    ai: {
      title: "AI & Machine Learning",
      items: ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Replit", "OpenAI API", "Prompt Engineering", "AI Application Development", "AI Agents"]
    },
    tools: {
      title: "Tools & Technologies",
      items: ["Docker", "Google Cloud", "Vercel", "VS Code", "Cursor", "Cline", "Openrouter", "Git", "GitHub", "Meta Suite"]
    },
    hobbies: {
      title: "Hobbies",
      items: ["Photoshop", "Premiere Pro", "Illustrator", "Figma", "Unity3d", "Animate", "Sandbox", "UiPath"]
    }  
  },

  contact: {
    email: "muhammedyazeen10@gmail.com",
    location: "Muvattupuzha, Kerala, India",
    availability: "Open to opportunities",
    description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/y4z33n/",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/y4z33n/",
        icon: "linkedin"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/y4z33n/",
        icon: "instagram"
      }
    ]
  },

  social: {
    github: "https://github.com/y4z33n/",
    linkedin: "https://linkedin.com/in/y4z33n/",
    instagram: "https://www.instagram.com/y4z33n/"
  },

  siteConfig: {
    theme: {
      default: "system",
      accentColor: "blue"
    },
    navigation: {
      home: {
        title: "y4z33n",
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