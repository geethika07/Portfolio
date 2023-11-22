export const METADATA = {
  author: "Geethika Vadlamudi",
  title: "Geethika Vadlamudi",
  description:
    "Geethika Vadlamudi is a student pursuing Masters in Computer Science looking for internship opportunities for Summer 2024 in USA",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@GeethikaVadlam2",
  keywords: [
    "Geethika Vadlamudi",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Work Experience",
    ref: "work",
  },
  {
    name: "Education",
    ref: "education",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Accomplishments",
    ref:"accomplishments",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "Cloud Computing and Machine Learning enthusiast",
  "Masters in Computer Science Student",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: geethika.vadlamudi@sjsu.edu",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/geethika-vadlamudi-205759191/",
  },
  {
    name: "github",
    url: "https://github.com/geethika07",
  },
  {
    name: "instagram",
    url: "https://instagram.com/__g.__.v__?utm_source=qr",
  },
  {
    name: "twitter",
    url: "https://twitter.com/GeethikaVadlam2",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "c",
    "cpp",
    "java",
    "python",
    "html",
    "css",
    "bootstrap",
    "javascript",
    "typescript",
    "nodejs",
    "figma",
    "android",
    "selenium",
    "powerbi"

  ],
  librariesAndFrameworks: [
    "react",
    "angular",
    "dotnet",
    "springboot",
    "flask",
    "django"
  ],
  databases: ["sql","mysql", "postgres","mongodb"],
  other: ["git","linux","azure","aws"],
};

export const PROJECTS = [
  {
    name: "Meeting Summarizer",
    image: "/meetingsummarizer.svg",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Extractive text summarization using Python + Flask + HTML/CSS",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["python", "flask", "azure"],
  },
  {
    name: "DineIn",
    image: "/dinein.svg",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Restaurant Management System using React + NodeJS",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Diabetic Retinopathy Detection",
    image: "/retinopathy.svg",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Detection model using Machine Learning(Convolutional Neural Networks) + Flask",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Microsoft",
    title: "Associate Consultant",
    location: "Hyderabad, India",
    range: "August 2022 - August 2023",
    responsibilities: [
"Assessed 20+ customer applications for cloud migration readiness, analyzing system requirements and potential challenges for Azure integration.",
"Engineered and executed migration of .Net applications to Azure Cloud, utilizing Azure App Services and Azure SQL Database, resulting in a 25% increase in application efficiency and enhanced revenue streams.",
"Implemented continuous performance monitoring of migrated applications using Azure Monitor and Log Analytics, maintaining high service availability and user satisfaction.",
"Provided post-migration support, optimizing system performance with Azure’s analytics tools and identifying areas for continuous improvement.",
"Developed a geo-mapping feature using Angular for a shipping company, enabling real-time shipment tracking and enhancing user interface, resulting in a 40% increase in customer satisfaction.",
"Implemented language localization for the application, supporting 5+ languages, which improved accessibility and boosted user engagement by 30%.",
"Led regression testing for a shipping services application, automating 100+ test cases with Selenium and Azure Test Plans, reducing defect risks by 30% and improving application reliability.",
    ]
  },
  {
    id: 2,
    company: "Microsoft",
    title: "Associate Consultant Intern",
    location: "Hyderabad, India",
    range: "June 2021 - July 2021",
    responsibilities: [
      "Created a web application using ReactJS and ASP.NET Core, incorporating REST APIs, Power BI, SQL, Azure Data Factory, Azure Blob Storage and B2C Authentication while adhering to Agile Software Development principles.",
      "This application significantly enhances managerial efficiency, reducing time spent by 70%."
    ]
  }
];
export const EDUCATION = [
  {
    id: 1,
    univ: "San Jose State University",
    course: "Masters in Computer Science",
    location: "San Jose, CA",
    range: "August 2023 - May 2025",
    gpa: "",
  },
  {
    id: 2,
    univ: "V R Siddhartha Engineering College",
    course: "Bachelor of Technology in Computer Science",
    location: "Vijayawada, India",
    range: "August 2018 - May 2022",
    gpa: "GPA: 8.84/10",
  }
];
export const AWARDS = [
  {
    id: 1,
    name: "Star Performer Aspire Award, Microsoft",
    date: "March 2022",
    link: "/aspire.svg",
    picture: "/starperformer.svg"
  },
  {
    id: 2,
    name: "Excellence Award, Microsoft",
    date: "February 2022",
    link: "/excellence.pdf",
    picture: "/microsoft.svg"
  }
];
export const PUBLICATIONS = [
  {
    id: 1,
    name: "Meeting Summarizer using Natural Language Processing",
    date: "April 2022",
    link: "https://ieeexplore.ieee.org/document/9777155",
    picture: "/ieee.svg"
  },
  {
    id: 2,
    name: "Early Detection of Diabetic Retinopathy",
    date: "September 2021",
    link: "https://www.ijraset.com/fileserve.php?FID=37918",
    picture: "/ijraset.svg"
  }
];
export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Azure Fundamentals (AZ-900)",
    date: "September 2022",
    link: "https://www.credly.com/badges/c0e58c06-575b-4fc3-a97b-47c9bab3d831",
    picture: "/azure.svg"
  },
  {
    id: 2,
    name: "Azure Data Fundamentals (DP-900)",
    date: "April 2023",
    link: "https://www.credly.com/badges/03d87edd-3721-4d9d-a475-a7477f6cbedd",
    picture: "/azure.svg"
  },
  {
    id: 3,
    name: "Azure AI Fundamentals (AI-900)",
    date: "May 2023",
    link: "https://www.credly.com/badges/cae1c914-df38-4bd1-bbb8-95ebc1a0479f",
    picture: "/azure.svg"
  },
  {
    id: 4,
    name: "CCNA: Introduction to Networks",
    date: "May 2021",
    link: "https://www.credly.com/badges/7eb57c44-e9fe-4f06-8cd7-eab48def842e",
    picture: "/cisco.svg"
  },
  {
    id: 5,
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    date: "August 2021",
    link: "https://www.credly.com/badges/c0c21720-6568-473b-9500-338319deb940",
    picture: "/cisco.svg"
  },
  {
    id: 6,
    name: "CCNA: Devet Associate",
    date: "April 2021",
    link: "https://www.credly.com/badges/3c30f120-d47c-452b-8c57-6750262fa8ee",
    picture: "/cisco.svg"
  },
  {
    id: 7,
    name: "Cybersecurity Essentials",
    date: "April 2021",
    link: "https://www.credly.com/badges/1c9e4c97-5e96-47fc-8a48-f1d5b5d17cfe",
    picture: "/cisco.svg"
  },
  {
    id: 8,
    name: "Blockchain Essentials",
    date: "September 2020",
    link: "https://www.credly.com/badges/a214c8b1-ef35-45c3-a7dd-905d003a30dc",
    picture: "/emurgo.svg"
  }
];
export const GTAG = "G-5HCTL2TJ5W";
