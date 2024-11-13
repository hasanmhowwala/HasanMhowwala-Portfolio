import {
    mobile,
    backend,
    fullstack,
    devops,
    ml,
    microservices,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cpp,
    ruby,
    perl,
    mysql,
    postgresql,
    php,
    kubernetes,
    aws,
    vs,
    jupyter,
    redis,
    python,
    java,
    springboot,
    meta,
    starbucks,
    tesla,
    shopify,
    snitty,
    carrent,
    jobit,
    twitter,
    tripguide,
    ticket,
    distributed,
    threejs  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: fullstack,
    },
    {
      title: "Devops and CI/CD",
      icon: devops,
    },
    {
      title: "AI/ML",
      icon: ml,
    },
    {
      title: "Microservices Development",
      icon: microservices,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    // {
    //   name: "C++",
    //   icon: cpp,
    // },
    // {
    //   name: "Ruby",
    //   icon: ruby,
    // },
    // {
    //   name: "Perl",
    //   icon: perl,
    // },
    // {
    //   name: "MySQL",
    //   icon: mysql,
    // },
    // {
    //   name: "PostgreSQL",
    //   icon: postgresql,
    // },
    // {
    //   name: "PHP",
    //   icon: php,
    // },
    // {
    //   name: "Kubernetes",
    //   icon: kubernetes,
    // },
    // {
    //   name: "AWS",
    //   icon: aws,
    // },
    // {
    //   name: "VS Code",
    //   icon: vs,
    // },
    // {
    //   name: "Jupyter",
    //   icon: jupyter,
    // },
    // {
    //   name: "Redis",
    //   icon: redis,
    // },
    // {
    //   name: "Python",
    //   icon: python,
    // },
    // {
    //   name: "Java",
    //   icon: java,
    // },
    // {
    //   name: "Springboot",
    //   icon: springboot,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Associate Software Engineer",
      company_name: "Snitty Technologies",
      icon: snitty,
      iconBg: "#383E56",
      date: "January 2023 - July 2023",
      points: [
        "Engineered complex algorithms in Java for Fantasy Soccer/Cricket features, enabling real-time updates for improveduser engagement and data accuracy.",
        "Achieved a drastic reduction in fantasy page load time from 26 seconds to 1 second by optimizing data fetching processes in Node.js for over 1,000 players.",
        "Leveraged Node.js with Amazon S3 and CloudFront integration for efficient album uploads, resulting in a 23-25% boostin overall website performance.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "System Reliability Engineer",
      company_name: "Snitty Technologies",
      icon: snitty,
      iconBg: "#E6DEDD",
      date: "August 2022 - December 2022",
      points: [
        "Designed and implemented a support case analytics dashboard in JavaScript (Node.js), leading to a 60% reduction in manual data entry and analysis efforts.",
        "Established a continuous delivery pipeline using Docker and Kubernetes with deployment automation in Python, enhancing operational efficiency for internal virtual machines.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Distributed Data Analysis System",
      description:
        "Built a distributed data analysis system that processes and analyzes large datasets efficiently across multiple nodes. Designed to handle high volumes of data with optimized performance and scalability. The system enables faster insights by leveraging parallel data processing techniques.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Cmake",
          color: "green-text-gradient",
        },
      ],
      image: distributed,
      source_code_link: "https://github.com/hasanmhowwala/Distributed-Data-Analysis-System",
    },
    {
      name: "Microblogging Platform",
      description:
        "Developed a social media application inspired by Twitter, allowing users to post updates, follow others, and engage with content through likes and comments. The platform supports real-time updates and scalable user interactions. Designed to provide a seamless and responsive user experience for sharing and discovering content.",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "grey-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: twitter,
      source_code_link: "https://github.com/hasanmhowwala/Twitter-Microblogging-Application",
    },
    {
      name: "Movie Ticketing Platform",
      description:
        "Created an online movie ticketing platform that enables users to browse movie listings, select showtimes, and reserve seats seamlessly. The system integrates with payment gateways for secure transactions and provides real-time updates on seat availability. Designed for an intuitive user experience, making ticket booking quick and hassle-free.",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "Kafka",
          color: "orange-text-gradient",
        },
        {
          name: "Distributed Systems",
          color: "pink-text-gradient",
        },
      ],
      image: ticket,
      source_code_link: "https://github.com/hasanmhowwala/Movie-Ticketing-Portal",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };