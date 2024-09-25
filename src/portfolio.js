/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Luan Gatitoz",
  title: "Fico feliz com seu interesse em me conhecer",
  subTitle: emoji(
    "Sou COO da Ligapi e apaixonado por integrações e automações. Com foco em inovação, meu objetivo é transformar ideias em soluções eficazes para impulsionar negócios por meio de APIs, Low-Code e eficiência digital. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NlPSBQoasSbQuKQ4Vu2-voShTx9Nc2wF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gatitoz-luan",
  linkedin: "https://www.linkedin.com/in/gatitoz/",
  gmail: "luan.gatitoz@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "EXPLORANDO NOVAS TECNOLOGIAS E CRIANDO SOLUÇÕES INOVADORAS PARA IMPULSIONAR NEGÓCIOS",
  skills: [
    emoji(
      "⚡ Desenvolvimento de soluções de automação com foco em APIs e integrações."
    ),
    emoji("⚡ Especialista em low-code para acelerar o desenvolvimento."),
    emoji(
      "⚡ Transformação digital com foco em eficiência e inovação."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade Federal de Santa Catarina (UFSC)",
      logo: require("./assets/images/ufsc.jpeg"),
      subHeader: "Bacharelado em Sistemas de Informação",
      duration: "2019 - Presente",
      desc: "Formação voltada para desenvolvimento de software, integração de sistemas e automação de processos.",
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Analises",
      progressPercentage: "80%"
    },
    {
      Stack: "APIs & Integrações",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "COO",
      company: "Ligapi",
      companylogo: require("./assets/images/ligapi.jpeg"),
      date: "2023 – Presente",
      desc: "Atuando como COO, liderando iniciativas de automação e integração de APIs, com foco em inovação e eficiência para negócios.",
    },
    {
      role: "Engenheiro de Software",
      company: "Getmore",
      companylogo: require("./assets/images/getmore.jpeg"),
      date: "2022 – 2024",
      desc: "Desenvolvimento de APIs e integrações para otimizar operações e processos de negócios."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grandes Projetos",
  subtitle: "STARTUPS E EMPRESAS COM AS QUAIS COLABOREI",
  projects: [
    {
      image: require("./assets/images/ligapi.jpeg"),
      projectName: "Ligapi",
      projectDesc: "Desenvolvimento de soluções de integração e automação de APIs para diversos negócios.",
      footerLink: [
        {
          name: "Visite o site",
          url: "https://ligapi.com.br"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆"),
  subtitle:
    "Certificações, Prêmios e Reconhecimentos obtidos ao longo da carreira",

  achievementsCards: [
    {
      title: "Certificação em Node.js",
      subtitle:
        "Certificação para desenvolvimento avançado em Node.js, incluindo criação de APIs e integrações.",
      image: require("./assets/images/node.jpeg"),
      imageAlt: "Node.js Logo",
      footerLink: [
        {
          name: "Veja o Certificado",
          url: "https://certificado.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Curriculo",
  subtitle: "Baixe meu currículo",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle:
    "Quer discutir um projeto ou apenas trocar uma ideia? Meu inbox está sempre aberto.",
  number: "+55 (48) 998589586",
  email_address: "luan.gatitoz@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
