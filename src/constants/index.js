import {
    mobile,
    backend,
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
    github,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aws,
    express,
    next,
    postgresql,
    scaffolding,
    beijing,
    onthemat,
    emody,
    thr33,
  } from "../assets";


  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "next",
      icon: next,
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
      name: "express",
      icon: express,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: github,
    },
    {
      name: "aws",
      icon: aws,
    },
 
  ];
  
  const experiences = [
    {
      title: "Hair Stylist",
      company_name: "Beijing Hair Culture CWB",
      icon: beijing,
      iconBg: "#E6DEDD",
      date: "2016 - 2017",
      points: [
        "Receive and welcome numerous client visits and direct them to varios parts of the salon for treatments",
        "Up-sell specific products that may work for a client's needs",
        
      ],
    },
    {
      title: "Project Coordinator",
      company_name: "LEGO SCAFFOLDING LIMITED",
      icon: scaffolding,
      iconBg: "#383E56",
      date: "Nov 2017 - Sep 2022",
      points: [
        "Managed and followed up on over 6,00 projects of various sizes",
        "Negotiate with customers on various scenarios and engineering issues to identify the most suitable solution for their needs",
        "Effectively communicate the scope schedules and budgets with both customers and contractors on a variety of projects.",
        "Developed strategy and architecture for clients",
      ],
    },
    {
      title: "Web Developer(analog)",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer(analog) ",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Jian proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jian does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Jian optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "On The Mat",
      description:
        "A matching platform to assist yoga studios and a freelance yoga tutor and user make it easy to find suitable classes. It includes lots of useful and convenient features.Etc.login system, chat room, paypal, booking system, nearest event, map, filter, seach bar, teacher review ...etc",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express(mvc)",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: onthemat,
      source_code_link: "https://github.com/Mody19980918/on-the-mat-v2",
    },
    {
      name: "Emotion Detection A.I.",
      description:
        "During the epidemic, everyone wore masks for a long time, and often forgot our expressions. In fact, expressions are an integral part of us. So we made this game to bring back smiles for everyone:)The game is designed to be engaging and entertaining, while also serving as a practical application of emotion detection technology.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "ionic",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: emody,
      source_code_link: "https://github.com/stella-woo/Project2_EmotionDetection",
    },
    {
      name: "Three Journey",
      description:
        "This is my first personal webpage that I developed myself after graduation. It features a 3D model created using three.js, which is presented on the webpage. Additionally, I incorporated a popular UI framework in the market, and ensured that it has a responsive design that adjusts to devices of different sizes.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
  
      ],
      image: thr33,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };