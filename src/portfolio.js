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
  username: "Chaimaâ Ourgani",
  title: "Hi, I'm Chaimaâ",
  subTitle: emoji(
    "A Passionate Data Scientist 🚀 with expertise in AI, ML, and data engineering. Skilled in using LLMs and generative AI to automate, optimize processes, and empower data-driven decisions."  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ChaimaaOrg",
  linkedin: "https://www.linkedin.com/in/chaimaâ-ourgani-65a422273/",
  gmail: "chaimaa_ourgani@outlook.com",
  kaggle: "https://www.kaggle.com/chaimaourgani",
  facebook: "https://www.facebook.com/chaima.olgamia",
  medium: "https://medium.com/@chaimaaourgani84",
  stackoverflow: "https://stackoverflow.com/users/30652930/chaimaâ-ourgani",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENTIST ENGINEER | AI, BIG DATA & CLOUD SOLUTIONS ENTHUSIAST",
  skills: [
    "⚡ Building and deploying machine learning and deep learning models (regression, classification, clustering), with strong skills in data preprocessing, cleaning, and feature engineering",
    "⚡ Exploratory data analysis and advanced data visualization for actionable insights",
    "⚡ Designing RESTful APIs to integrate ML models and Generative AI solutions into production-ready applications",
    "⚡ Developing and orchestrating Big Data ETL pipelines for scalable and efficient data processing",
    "⚡ Implementing scalable deployments using containerization (Docker), orchestration (Kubernetes/OpenShift), CI/CD, and monitoring tools (Dynatrace, OpenTelemetry)"
  ],
softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Hugging Face", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "LangChain", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-table" },
    { skillName: "NumPy", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "Matplotlib", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-rocket" },
    { skillName: "FAISS", fontAwesomeClassname: "fas fa-search" },
    { skillName: "Hadoop", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Apache Spark", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National School of Computer Science and Systems Analysis(ENSIAS)",
      logo: require("./assets/images/ensiasLogo.jpg"), // Make sure you have this logo in the correct path
      subHeader: "State Engineer Degree in Data Science and IoT",
      duration: "September 2021 - July 2024",
      desc: "",
      descBullets: [
        "Main Courses: Machine Learning, Deep Learning, Big Data, NLP, Computer Vision, Web Mining, Data Mining, IoT, DevOps & Cloud, Advanced Statistics, Data Structures, Software Project Management"
      ]
    },
    {
      schoolName: "Lycée d’Excellence, Ben Guerir, Morocco",
      logo: require("./assets/images/lydexLogo.png"), // Replace with actual path or logo
      subHeader: "Preparatory Classes for Engineering Schools (CPGE)",
      duration: "September 2019 - July 2021",
      desc: "",
      descBullets: [
        "Main Courses: Advanced Mathematics, Algorithms, Programming (Python, SQL), Probability and Statistics"
      ]
    },
    {
      schoolName: "Lycée El Baroudi, Casablanca, Morocco",
      logo: require("./assets/images/baroudiLogo.png"), // Replace with actual path or logo
      subHeader: "International Scientific Baccalaureate – Mathematical Sciences A, French Option",
      duration: "September 2018 - July 2019",
      desc: "",
      descBullets: []
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming & Data Manipulation (Python, R, SQL, Pandas, NumPy)",
      progressPercentage: "95%"
    },
        {
      Stack: "Data Visualization & Communication (Matplotlib, Seaborn, Plotly)",
      progressPercentage: "90%"
    },
{
      Stack: "Machine Learning (Regression, Classification, Time-Series, Clustering)",
      progressPercentage: "90%"
    },
    {
      Stack: "Specialized Domains (NLP, Speech-to-Text, Computer Vision)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Attijariwafa Bank",
      companylogo: require("./assets/images/awbLogo2.jpg"),
      date: "Sept 2024 – Present",
      desc: "Contributing to advanced AI solutions including LLM-based classification, OCR, smart APIs, and large-scale data pipelines for improving automation, efficiency, and data insight extraction.",
      descBullets: [
        "Built LLM fine-tuning solutions for text classification and speech-to-text tasks using LoRA, Hugging Face, and PyTorch.",
        "Automated internal processes with RAG architecture-based chatbots and APIs using LangChain, FAISS, FastAPI, and Ollama.",
        "Designed an OCR extraction system reducing manual data entry by 10–15%, deployed via LangChain and FastAPI.",
        "Created a data stream reconciliation workflow using PySpark, fuzzy matching, and vectorization techniques.",
        "Optimized big data pipelines with PySpark, Scala, Hive, and Oozie, achieving a 70% reduction in execution time."
      ]
    },
    {
      role: "Data Scientist Intern (Graduation Project)",
      company: "Attijariwafa Bank",
      companylogo: require("./assets/images/awbLogo2.jpg"),
      date: "Feb 2024 – Jun 2024",
      desc: "Developed an AI-powered voice assistant and chatbot platform to improve accessibility and automate customer service in eBanking applications.",
      descBullets: [
        "Trained a Siamese neural network for secure voice authentication using user voiceprints.",
        "Built a conversational agent with intent classification, NER, contextual switching, and RAG for FAQ automation.",
        "Benchmarked and fine-tuned ML and transformer models for intent classification and entity recognition."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Districap",
      companylogo: require("./assets/images/districapLogo.png"),
      date: "Jul 2023 – Aug 2023",
      desc: "Developed a cross-platform mobile e-commerce application for Districap using Flutter, targeting both Android and iOS devices.",
      descBullets: [
        "Built mobile UI and functionality using Flutter and Dart.",
        "Integrated backend services using Firebase for authentication and data handling."
      ]
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212 641974324",
  email_address: "chaimaa_ourgani@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
