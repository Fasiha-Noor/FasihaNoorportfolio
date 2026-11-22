/**
 * Single source of truth for all portfolio copy and links.
 * A link set to `null` is a placeholder: the UI shows it as "coming soon" instead of inventing a URL.
 */

import aiCvWorkflow from "@/assets/ai-cv-builder-workflow.png.asset.json";
import ragWorkflow from "@/assets/rag-chatbot-diagram.png.asset.json";
import resumeAsset from "@/assets/fasiha-noor-cv.pdf.asset.json";

export type ExternalLink = string | null;

export const profile = {
  name: "Fasiha Noor",
  shortTitle: "AI & Automation Developer",
  title: "AI & Automation Developer | Machine Learning Enthusiast | Computer Science Student",
  intro:
    "I'm a Computer Science student passionate about Artificial Intelligence, Machine Learning, and workflow automation. I enjoy building intelligent solutions, developing practical applications, and transforming complex problems into efficient digital experiences.",
  heroHeading: "Hi, I'm Fasiha Noor.",
  heroSubheading: "Building Intelligent Solutions with AI, Machine Learning & Automation.",
  heroSupporting:
    "Computer Science student passionate about developing intelligent applications, automating workflows, and creating technology that solves real-world problems.",
};

export const links: {
  email: ExternalLink;
  linkedin: ExternalLink;
  github: ExternalLink;
  resume: ExternalLink;
} = {
  email: null,
  linkedin: null,
  github: "https://github.com/Fasiha-Noor",
  resume: resumeAsset.url,
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const education = {
  degree: "BS Computer Science",
  university: "University of Management and Technology (UMT)",
  expectedGraduation: "2027",
  status: "Currently enrolled",
};

export const careerInterests = [
  "AI & Machine Learning",
  "AI Automation",
  "Workflow Automation",
  "Software Development",
  "Intelligent Applications",
];

export type SkillCategory = {
  title: string;
  icon: "code" | "globe" | "database" | "brain" | "workflow" | "wrench";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training and Evaluation",
      "scikit-learn",
      "Predictive Analysis",
    ],
  },
  {
    title: "AI & Workflow Automation",
    icon: "workflow",
    skills: ["n8n", "AI Agents", "Workflow Automation", "API Integration", "RAG (Retrieval-Augmented Generation)"],
  },
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: "globe",
    skills: ["HTML", "CSS"],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["SQL", "Database Design and Management"],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Groq", "Supabase", "Google Sheets", "Google Drive"],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  /** Real screenshot URL. `null` + `screenshotPending` shows a "screenshot coming soon" frame. */
  screenshot: string | null;
  screenshotPending: boolean;
  github: ExternalLink;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "ai-cv-builder",
    number: "01",
    title: "AI CV Builder Agent",
    category: "AI Automation · n8n",
    description:
      "An intelligent AI-powered resume generation and optimization system built using n8n. It allows users to create a new professional CV or improve an existing resume with AI-powered ATS optimization.",
    features: [
      "Create a new CV or update an existing CV",
      "Form-based user input",
      "Resume information extraction from uploaded PDFs",
      "Job description and company career page analysis",
      "ATS keyword identification and optimization",
      "AI-powered resume generation using Groq",
      "HTML resume generation",
      "PDF conversion using PDF.co",
      "Automatic Google Drive upload and sharing",
    ],
    technologies: ["n8n", "AI Agents", "Groq", "JavaScript", "HTML", "HTTP APIs", "PDF.co", "Google Drive"],
    screenshot: aiCvWorkflow.url,
    screenshotPending: false,
    github: null,
    featured: true,
  },
  {
    id: "rag-chatbot",
    number: "02",
    title: "RAG Chatbot & Knowledge Retrieval",
    category: "AI Agents · RAG",
    description:
      "An AI-powered Retrieval-Augmented Generation system that retrieves relevant information from a stored knowledge base before generating responses.",
    features: [
      "AI Agent with retrieval capabilities",
      "Supabase Vector Store integration",
      "OpenAI text-embedding-3-small embeddings",
      "Conversational memory",
      "Knowledge-grounded responses",
      "Gmail integration for email operations",
      "Google Sheets CRUD operations",
      "Google Calendar event management",
    ],
    technologies: [
      "n8n",
      "RAG",
      "Supabase",
      "OpenAI Embeddings",
      "AI Agents",
      "Google APIs",
      "Gmail",
      "Google Sheets",
      "Google Calendar",
    ],
    screenshot: ragWorkflow.url,
    screenshotPending: false,
    github: null,
    featured: true,
  },
  {
    id: "bike-rental",
    number: "03",
    title: "Bike Rental Demand Prediction",
    category: "Machine Learning",
    description:
      "A machine learning project developed using Python and scikit-learn to predict bike rental demand using historical bike-sharing data.",
    features: [
      "Data preprocessing",
      "Exploratory data analysis",
      "Feature engineering",
      "Linear Regression model",
      "Model training and evaluation",
      "Predictive analysis",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Machine Learning"],
    screenshot: null,
    screenshotPending: false,
    github: "https://github.com/Fasiha-Noor/bike-rental-demand-prediction",
    featured: false,
  },
  {
    id: "dbms",
    number: "04",
    title: "Full-Stack Database Management System",
    category: "Databases · Web",
    description:
      "Developed a database-driven web application with a relational database structure and frontend-backend integration.",
    features: [
      "Relational database design",
      "CRUD operations",
      "Frontend-backend integration",
      "Database management",
    ],
    technologies: ["SQL", "Relational Databases"],
    screenshot: null,
    screenshotPending: false,
    github: null,
    featured: false,
  },
  {
    id: "android-app",
    number: "05",
    title: "Android Mobile Application",
    category: "Mobile",
    description:
      "Developed a functional Android application with a user-friendly interface, local data storage, and core application logic.",
    features: ["User-friendly interface", "Local data storage", "Core application logic"],
    technologies: ["Android"],
    screenshot: null,
    screenshotPending: false,
    github: null,
    featured: false,
  },
];

export const internship = {
  role: "AI & Machine Learning Intern",
  company: "Big Brains",
  duration: "30-day internship",
  summary:
    "Completed a 30-day AI & Machine Learning internship, working through structured assessments and earning a recommendation letter for strong performance.",
  stats: [
    { value: "98%", label: "Average assessment score" },
    { value: "90%", label: "Recommendation letter assessment" },
  ],
  highlights: ["Received a recommendation letter"],
};

export const achievements = [
  {
    title: "Credit hours",
    value: "100+",
    detail: "Completed more than 100 credit hours of coursework.",
  },
  {
    title: "Hands-on projects",
    value: "5",
    detail: "AI, machine learning and automation builds — from RAG chatbots to demand prediction.",
  },
];

export const coreCoursework = ["Data Structures", "Algorithms", "Database Systems", "Operating Systems"];

export const contact = {
  heading: "Let's Build Something Intelligent Together.",
  supporting:
    "I'm open to internship opportunities, collaborations, and exciting projects related to AI, Machine Learning, and Automation.",
};
