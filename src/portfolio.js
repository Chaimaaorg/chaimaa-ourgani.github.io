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
  username: "Chaimaa O.",
  title: "Hi, I'm Chaimaâ",
  subTitle: emoji(
    "A Passionate Data Scientist 🚀 with expertise in AI, ML, and data engineering. Skilled in using LLMs and generative AI to automate, optimize processes, and empower data-driven decisions."
  ),
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
  subTitle:
    "DATA SCIENTIST ENGINEER | AI, BIG DATA & CLOUD SOLUTIONS ENTHUSIAST",
  skills: [
    "⚡ Building and deploying machine learning and deep learning models (regression, classification, clustering), with strong skills in data preprocessing, cleaning, and feature engineering",
    "⚡ Exploratory data analysis and advanced data visualization for actionable insights",
    "⚡ Designing RESTful APIs to integrate ML models and Generative AI solutions into production-ready applications",
    "⚡ Developing and orchestrating Big Data ETL pipelines for scalable and efficient data processing",
    "⚡ Implementing scalable deployments using containerization (Docker), orchestration (Kubernetes/OpenShift), CI/CD, and monitoring tools (Dynatrace, OpenTelemetry)"
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "TensorFlow", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Hugging Face", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "LangChain", fontAwesomeClassname: "fas fa-code-branch"},
    {skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "Pandas", fontAwesomeClassname: "fas fa-table"},
    {skillName: "NumPy", fontAwesomeClassname: "fas fa-square-root-alt"},
    {skillName: "Matplotlib", fontAwesomeClassname: "fas fa-chart-bar"},
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-rocket"},
    {skillName: "FAISS", fontAwesomeClassname: "fas fa-search"},
    {skillName: "Hadoop", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Apache Spark", fontAwesomeClassname: "fas fa-bolt"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "National School of Computer Science and Systems Analysis(ENSIAS)",
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
      subHeader:
        "International Scientific Baccalaureate – Mathematical Sciences A, French Option",
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
      Stack: "🧮 Coding & Data",
      progressPercentage: "95%"
    },
    {
      Stack: "🧠 Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "🔊 NLP · Speech · Vision",
      progressPercentage: "80%"
    },
    {
      Stack: "📊 Data Visualization",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Scientist",
      company: "Attijariwafa Bank",
      companylogo: require("./assets/images/awbLogo.png"),
      date: "Sept 2024 – Present",
      desc: "Developed advanced AI/ML solutions to enhance client interaction, automate processes, and scale data pipelines within the bank’s data infrastructure.",
      descBullets: [
        "Designed LLM fine-tuning solutions for text classification and speech transcription (user experience, complaints..)",
        "Automated internal processes using generative AI and RAG-based chatbots and APIs",
        "Implemented OCR-based financial data extraction system, reducing data entry time by 10–15%.",
        "Built data stream reconciliation workflows with fuzzy matching and text vectorization using.",
        "Optimized large-scale big data pipelines, achieving a 70% reduction in execution time."
        // "Machine Learning & NLP: LoRA, Hugging Face, PyTorch, Librosa, SpaCy, Scikit-learn, Scipy",
        // "Generative AI & RAG APIs: LangChain, FAISS, Ollama, OpenAI, Boto3, FastAPI",
        // "Data Engineering & Orchestration: PySpark, Scala, Hive, Oozie, Scipy"
      ]
    },
    {
      role: "Data Scientist Intern (Graduation Project)",
      company: "Attijariwafa Bank",
      companylogo: require("./assets/images/awbLogo.png"),
      date: "Feb 2024 – Jun 2024",
      desc: "Developed a voice assistant to enhance accessibility to eBanking services for visually impaired users, with robust voice authentication and NLP capabilities.",
      descBullets: [
        "Trained a siamese neural network for secure voice authentication via voiceprints.",
        "Built a conversational agent with intent classification, NER, contextual switching, and a RAG system for FAQ automation.",
        "Benchmarked and fine-tuned transformer and ML models for improved NLP performance."
      ]
    },
    {
      role: "Software Engineer Intern (PFA)",
      company: "Districap",
      companylogo: require("./assets/images/districapLogo.png"),
      date: "Jul 2023 – Aug 2023",
      desc: "Designed and developed a cross-platform mobile e-commerce application.",
      descBullets: [
        "Developed a mobile e-commerce app using Flutter for Android and iOS, integrating Firebase services."
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
  subtitle: "SOME DATA SCIENCE PROJECTS THAT I DESIGNED AND DEVELOPED",
  projects: [
    {
      image: require("./assets/images/realEstateForecasting.webp"),
      projectName: "Real Estate Price Forecasting Platform",
      projectDesc:
        "An end-to-end machine learning application predicting real estate prices using Python, Flask, and scikit-learn, with full-stack deployment including HTML/CSS/JS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Chaimaaorg/Platform-for-Real-Estate-Price-Forcasting"
        }
      ]
    },
    {
      image: require("./assets/images/dermaidLogo.webp"),
      projectName: "DermAid - AI Copilot for Skin Cancer Detection",
      projectDesc:
        "An AI-powered application that assists in the early detection of skin cancer by analyzing images of skin lesions. Built with PyTorch, FastAPI, and Dialogflow, it offers real-time risk assessments through a conversational interface.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Chaimaaorg/DermAid---AI-Copilot-for-Skin-Cancer-Detection"
        }
      ]
    },
    {
      image: require("./assets/images/attendAILogo (1).webp"),
      projectName: "AttendAI - Real-Time Face Recognition System",
      projectDesc:
        "A real-time facial recognition system for contactless attendance tracking, built using OpenCV and KNN, featuring live video processing and secure local data storage.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Chaimaaorg/AttendAI"
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
      title: "Python for Data Science and Machine Learning Bootcamp",
      subtitle:
        "Completed certification on Udemy covering full data science and ML workflow.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-afbb1ab7-953c-4dcf-a899-9fd7510f89c9"
        }
      ]
    },
    {
      title: "Complete Tensorflow 2 and Keras Deep Learning Bootcamp",
      subtitle:
        "Mastered deep learning using TensorFlow 2.0 and Keras on Udemy.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-69bf675d-bcf5-4b38-9744-0edfab34a226/"
        }
      ]
    },
    {
      title: "🏅 Kaggle Bronze Medalist",
      subtitle:
        "Bronze Medalist (Top 10%) for high-performing Kaggle notebooks in machine learning and data science contributions.",
      image: require("./assets/images/kaggleLogo.webp"),
      imageAlt: "Kaggle",
      footerLink: [
        {
          name: "Kaggle Notebooks",
          url: "https://www.kaggle.com/chaimaourgani/code"
        }
      ]
    },
    {
      title: "LLM Fine-Tuning Fundamentals & GPT Model Fine-Tuning",
      subtitle: "Completed advanced LLM fine-tuning course on Udemy.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-faaad16b-3d60-4db8-ac76-08d5036a98d7"
        }
      ]
    }
    // {
    //   title: "Vector Databases Fundamentals (FAISS, Pinecone, Chroma)",
    //   subtitle: "Gained hands-on experience with modern vector databases.",
    //   image: require("./assets/images/udemyLogo.webp"),
    //   imageAlt: "Udemy Logo",
    //   footerLink: [
    //     {
    //       name: "View Certificate",
    //       url: "https://www.udemy.com/certificate/UC-20e03521-c61e-4cdf-b601-bb712080f9d8"
    //     }
    //   ]
    // }
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
