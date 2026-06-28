export const personalData = {
  name: 'Sahil Ghag',
  role: 'Software Engineer | Backend Developer | Python Developer',
  phone: '+91-7208678132',
  email: 'ghagsahil21@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sahil-ghag-a14609341/',
  github: 'https://github.com/Sahilghagg',
  location: 'Mumbai, India',
  summary: 'Final-year Information Technology student with hands-on experience in Software Engineering, Backend Development, and Full-Stack Web Development. Skilled in Python, Node.js, FastAPI, Flask, SQL, MySQL, MongoDB, and RESTful API development.',
  bio: 'I am a passionate software engineer and final-year IT student at A. P. Shah Institute of Technology, Mumbai University.'
};

export const stats = [
  { id: 1, label: 'DSA Problems Solved', value: 200, suffix: '+' },
  { id: 2, label: 'Hackathon Rank', value: 2, suffix: 'nd' },
  { id: 3, label: 'CGPA', value: 8.15, suffix: '/10' },
  { id: 4, label: 'Certifications', value: 5, suffix: '+' },
];

export const skills = {
  languages: ['Python', 'Java', 'JavaScript', 'C++', 'SQL', 'C# (.NET)', 'Dart', 'PHP'],
  frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3', 'Flutter', 'Material UI'],
  backend: ['ASP.NET Core', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'Django', 'REST APIs', 'JWT Authentication', 'GraphQL', 'WebSockets'],
  databases: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Azure Blob Storage'],
  cloud: ['AWS', 'Azure', 'Docker', 'Git/GitHub', 'Vercel', 'CI/CD'],
  ml: ['TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Pandas', 'NumPy', 'Tableau', 'ETL Pipelines'],
  coreCS: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Design Patterns', 'DBMS', 'Operating Systems', 'Computer Networks', 'System Design', 'Cloud Architecture'],
  softSkills: ['Problem Solving', 'Agile Development', 'Team Collaboration', 'Code Reviews', 'Technical Documentation', 'UI/UX Design']
};

export const skillCategories = [
  { id: 'languages', label: 'Programming Languages', skills: skills.languages, color: 'from-blue-500 to-cyan-500' },
  { id: 'frontend', label: 'Frontend & UI/UX', skills: skills.frontend, color: 'from-purple-500 to-pink-500' },
  { id: 'backend', label: 'Backend Development', skills: skills.backend, color: 'from-green-500 to-emerald-500' },
  { id: 'databases', label: 'Databases', skills: skills.databases, color: 'from-orange-500 to-red-500' },
  { id: 'cloud', label: 'Cloud & DevOps', skills: skills.cloud, color: 'from-indigo-500 to-blue-500' },
  { id: 'ml', label: 'AI/ML & Data Science', skills: skills.ml, color: 'from-rose-500 to-pink-500' },
  { id: 'coreCS', label: 'Core CS Fundamentals', skills: skills.coreCS, color: 'from-teal-500 to-cyan-500' },
  { id: 'softSkills', label: 'Soft Skills', skills: skills.softSkills, color: 'from-yellow-500 to-orange-500' }
];

export const experiences = [
  {
    id: 1,
    title: 'Junior Software Developer Intern',
    company: 'Bellaluna Gaming Studio Pvt. Ltd',
    location: 'Mumbai',
    startDate: 'Jun 2025',
    endDate: 'Aug 2025',
    current: false,
    responsibilities: [
      'Engineered scalable backend modules using Python and REST APIs.',
      'Integrated MongoDB and MySQL databases for efficient storage.',
      'Collaborated using Git and GitHub within Agile development workflows.',
      'Programmed and tested game features using GDScript and Android Studio.'
    ],
    technologies: ['Python', 'REST APIs', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'GDScript', 'Android Studio'],
  },
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'A. P. Shah Institute of Technology, Mumbai University',
    startDate: '2022',
    endDate: '2026',
    cgpa: '8.15 / 10',
    coursework: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP', 'Software Engineering'],
  },
];

export const certifications = [
  // ===== PROGRAMMING CERTIFICATIONS =====
  {
    id: 1,
    name: 'CPA: Programming Essentials in C++',
    issuer: 'C++ Institute | Cisco Networking Academy',
    date: '2023',
    credentialId: 'CPA-CPP-2023',
    category: 'Programming',
    skills: ['C++', 'Object-Oriented Programming', 'Data Types', 'Standard Libraries', 'Developer Tools'],
    url: '#',
  },
  {
    id: 2,
    name: 'Oracle Certified Java Programmer',
    issuer: 'Oracle',
    date: '2023',
    credentialId: 'OCP-JAVA-2023',
    category: 'Programming',
    skills: ['Java', 'OOP', 'Core Java', 'Java Libraries'],
    url: '#',
  },
  {
    id: 3,
    name: 'Java Training Certification',
    issuer: 'Spoken Tutorial Project, IIT Bombay',
    date: 'October 7, 2023',
    credentialId: 'IITB-JAVA-2023',
    category: 'Programming',
    skills: ['Java', 'Core Java', 'Programming Fundamentals'],
    url: '#',
    score: '62.50%',
    credits: 4,
  },
  {
    id: 4,
    name: 'Git Training Certification',
    issuer: 'EduPyramids, SINE, IIT Bombay',
    date: 'April 7, 2026',
    credentialId: 'IITB-GIT-2026',
    category: 'Programming',
    skills: ['Git', 'Version Control', 'Collaboration'],
    url: '#',
    score: '93.33%',
    credits: 1,
  },

  // ===== NETWORKING & SECURITY CERTIFICATIONS =====
  {
    id: 5,
    name: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'April 5, 2024',
    credentialId: 'CCNA-INTRO-2024',
    category: 'Networking & Security',
    skills: ['Network Configuration', 'Switching', 'Routing', 'IPv4/IPv6', 'OSI Model', 'Network Security'],
    url: '#',
  },
  {
    id: 6,
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'June 10, 2023',
    credentialId: 'CISCO-CYBER-2023',
    category: 'Cybersecurity',
    skills: ['Cybersecurity Basics', 'Threats', 'Security Best Practices'],
    url: '#',
  },
  {
    id: 7,
    name: 'Fundamentals of Network Security',
    issuer: 'Cisco Networking Academy',
    date: 'June 10, 2023',
    credentialId: 'CISCO-NETSEC-2023',
    category: 'Networking & Security',
    skills: ['Network Security', 'Firewalls', 'Security Protocols'],
    url: '#',
  },
  {
    id: 8,
    name: 'Fundamentals of Cloud Security',
    issuer: 'Cisco Networking Academy',
    date: 'October 10, 2023',
    credentialId: 'CISCO-CLOUDSEC-2023',
    category: 'Cloud & DevOps',
    skills: ['Cloud Security', 'Cloud Infrastructure', 'Security Compliance'],
    url: '#',
  },
  {
    id: 9,
    name: 'Fundamentals of SOC (Security Operations Center)',
    issuer: 'Cisco Networking Academy',
    date: 'October 14, 2023',
    credentialId: '280464968',
    category: 'Cybersecurity',
    skills: ['SOC Operations', 'Incident Response', 'Security Monitoring'],
    url: '#',
  },

  // ===== FORTINET CERTIFICATIONS =====
  {
    id: 10,
    name: 'Information Security Awareness',
    issuer: 'Fortinet',
    date: '2023',
    credentialId: 'FORT-ISA-2023',
    category: 'Cybersecurity',
    skills: ['Information Security', 'Security Awareness', 'Threats'],
    url: '#',
  },
  {
    id: 11,
    name: 'Fortinet Product Awareness',
    issuer: 'Fortinet',
    date: 'July 15, 2023',
    credentialId: 'FORT-PA-2023',
    category: 'Networking & Security',
    skills: ['Fortinet Products', 'Network Security', 'Firewalls'],
    url: '#',
  },
  {
    id: 12,
    name: 'The Evolution of Cybersecurity',
    issuer: 'Fortinet',
    date: '2023',
    credentialId: 'FORT-EVO-2023',
    category: 'Cybersecurity',
    skills: ['Cybersecurity Evolution', 'Threat Landscape', 'Security Trends'],
    url: '#',
  },

  // ===== LINUX & OS CERTIFICATIONS =====
  {
    id: 13,
    name: 'NDG Linux Essentials',
    issuer: 'NDG | Cisco Networking Academy',
    date: '2023',
    credentialId: 'NDG-LINUX-2023',
    category: 'Linux & OS',
    skills: ['Linux OS', 'Command Line', 'File Permissions', 'System Navigation'],
    url: '#',
  },

  // ===== CLOUD CERTIFICATIONS =====
  {
    id: 14,
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-CP-2024',
    category: 'Cloud & DevOps',
    skills: ['AWS Cloud', 'Cloud Concepts', 'AWS Services', 'Security & Compliance'],
    url: '#',
  },
  {
    id: 15,
    name: 'AWS Academy Data Engineering',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-DE-2024',
    category: 'Cloud & DevOps',
    skills: ['Data Engineering', 'AWS Data Services', 'ETL', 'Data Pipelines'],
    url: '#',
  },
  {
    id: 16,
    name: 'Zscaler Zero Trust Cloud Security Certification',
    issuer: 'Zscaler',
    date: '2025',
    credentialId: 'ZSC-ZT-2025',
    category: 'Cloud & DevOps',
    skills: ['Zero Trust', 'Cloud Security', 'Network Security'],
    url: '#',
  },
];

export const projects = [
  // ===== CLOUD & BACKEND =====
  {
    id: 1,
    title: 'CloudFileStorage',
    description: 'Cloud File Storage Service using ASP.NET Core Web API, Azure Blob Storage, SQLite, and JWT authentication for secure file management.',
    problem: 'Users need a secure, scalable cloud storage solution with authentication and efficient file management capabilities.',
    features: [
      'Secure JWT authentication',
      'Azure Blob Storage integration',
      'File upload/download with metadata',
      'User-specific file management',
      'SQLite database for metadata',
      'RESTful API architecture'
    ],
    technologies: ['ASP.NET Core', 'C#', 'Azure Blob Storage', 'SQLite', 'JWT', 'REST APIs'],
    github: 'https://github.com/Sahilghagg/CloudFileStorage',
    live: '#',
    image: '/projects/cloudstorage.jpg',
    startDate: 'Jun 2025',
    endDate: 'Present',
    category: 'Cloud & Backend'
  },
  {
    id: 2,
    title: 'SalesInsight - ETL & BI Dashboard',
    description: 'Automated ETL pipeline and Business Intelligence platform that extracts, transforms, and loads sales data into a centralized database with interactive dashboards.',
    problem: 'Organizations need automated data processing and visualization to track sales KPIs and make data-driven decisions.',
    features: [
      'Automated ETL pipeline',
      'Interactive dashboards',
      'KPI tracking and visualization',
      'Data transformation and cleaning',
      'Centralized data warehouse',
      'Business intelligence reporting'
    ],
    technologies: ['Python', 'ETL', 'Business Intelligence', 'Data Pipeline', 'Dashboard', 'KPI Tracking'],
    github: 'https://github.com/Sahilghagg/SalesInsight-Automated-ETL-Pipeline-Business-Intelligence-Dashboard',
    live: '#',
    image: '/projects/salesinsight.jpg',
    startDate: 'Jun 2025',
    endDate: 'Present',
    category: 'Data & Analytics'
  },
  {
    id: 3,
    title: 'Ai-Resume-Analyzer',
    description: 'AI Resume Analyzer & ATS Checker that analyzes resumes against job descriptions using AI to provide matching scores and improvement suggestions.',
    problem: 'Job seekers need to optimize their resumes for ATS systems and understand how well their skills match job requirements.',
    features: [
      'AI-powered resume analysis',
      'ATS compatibility checking',
      'Skills gap identification',
      'Job description matching',
      'Improvement suggestions',
      'Keyword optimization'
    ],
    technologies: ['Python', 'AI/ML', 'NLP', 'Resume Parsing', 'ATS', 'Job Matching'],
    github: 'https://github.com/Sahilghagg/Ai-Resume-Analyzer',
    live: '#',
    image: '/projects/resume-analyzer.jpg',
    startDate: 'Jun 2025',
    endDate: 'Present',
    category: 'AI & Machine Learning'
  },

  // ===== WEB APPLICATIONS =====
  {
    id: 4,
    title: 'Enerchain – Energy Trading Platform',
    description: 'A peer-to-peer energy trading platform enabling secure and transparent energy transactions. Built with React.js, Node.js, and REST APIs with blockchain integration.',
    problem: 'Traditional energy trading is centralized, opaque, and inefficient. Consumers and producers lack a direct, trustless mechanism to trade energy.',
    features: [
      'Peer-to-peer energy trading',
      'Secure transaction processing',
      'User management with authentication',
      'Blockchain integration for transparency',
      'Scalable backend architecture'
    ],
    technologies: ['React.js', 'Node.js', 'REST APIs', 'Blockchain', 'MongoDB', 'JWT'],
    github: 'https://github.com/Sahilghagg/enerchain',
    live: '#',
    image: '/projects/enerchain.jpg',
    startDate: 'Jan 2026',
    endDate: 'Present',
    category: 'Web Application'
  },
  {
    id: 5,
    title: 'Car Rental Management System',
    description: 'A full-stack vehicle rental application with secure authentication and role-based access control. Optimized MongoDB queries reduced response time from 800ms to 120ms.',
    problem: 'Vehicle rental processes are often manual and inefficient, lacking real-time availability and secure booking management.',
    features: [
      'Secure authentication & role-based access',
      'Vehicle listing & booking',
      'Real-time availability tracking',
      'Optimized database queries',
      'Production-ready testing workflows'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Vercel'],
    github: 'https://github.com/Sahilghagg/CarRental-fullstack',
    live: '#',
    image: '/projects/car-rental.jpg',
    startDate: 'Jan 2025',
    endDate: 'Mar 2025',
    category: 'Web Application'
  },
  {
    id: 6,
    title: 'Retailsera E-Commerce',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment processing capabilities built with modern web technologies.',
    problem: 'Businesses need a customizable, scalable e-commerce solution with seamless user experience.',
    features: [
      'Product catalog management',
      'Shopping cart functionality',
      'User authentication',
      'Order processing',
      'Payment integration',
      'Responsive design'
    ],
    technologies: ['CSS', 'HTML', 'JavaScript', 'E-Commerce'],
    github: 'https://github.com/Sahilghagg/Retailsera-E-Commerce',
    live: '#',
    image: '/projects/ecommerce.jpg',
    startDate: 'Jun 2025',
    endDate: 'Present',
    category: 'Web Application'
  },

  // ===== SECURITY & BLOCKCHAIN =====
  {
    id: 7,
    title: 'Zero-Trust Access Gateway',
    description: 'Context-Aware Policy Engine implementing zero-trust security principles with dynamic access control based on user context and behavior.',
    problem: 'Traditional perimeter-based security is insufficient for modern threats. Organizations need context-aware, zero-trust access control.',
    features: [
      'Zero-trust security model',
      'Context-aware policy engine',
      'Dynamic access control',
      'User behavior monitoring',
      'Security policy management'
    ],
    technologies: ['Zero Trust', 'Security', 'Policy Engine', 'Access Control', 'Context-Aware'],
    github: 'https://github.com/Sahilghagg/Zero-Trust-Access-Gateway-with-Context-Aware-Policy-Engine',
    live: '#',
    image: '/projects/zerotrust.jpg',
    startDate: 'Feb 2025',
    endDate: 'Present',
    category: 'Security',
    isPrivate: true
  },
  {
    id: 8,
    title: 'Healthcare Blockchain',
    description: 'Blockchain-based healthcare data management system ensuring secure, transparent, and immutable patient records with smart contract integration.',
    problem: 'Healthcare data is fragmented, insecure, and lacks interoperability. Blockchain can provide secure, transparent health record management.',
    features: [
      'Immutable patient records',
      'Smart contract integration',
      'Secure data sharing',
      'Interoperability',
      'Transparent audit trails'
    ],
    technologies: ['Blockchain', 'JavaScript', 'Healthcare', 'Smart Contracts', 'Web3'],
    github: 'https://github.com/Sahilghagg/healthcare-blockchain',
    live: '#',
    image: '/projects/healthcare-blockchain.jpg',
    startDate: 'Mar 2025',
    endDate: 'Present',
    category: 'Blockchain'
  },

  // ===== AI & MACHINE LEARNING =====
  {
    id: 9,
    title: 'Document Forgery Detection System',
    description: 'A machine learning-based signature verification system achieving 86% accuracy. Applied image preprocessing, feature extraction, and classification techniques using OpenCV and PyTorch.',
    problem: 'Forgery of signatures on legal and financial documents is a growing concern, requiring automated detection systems.',
    features: [
      'Signature verification with 86% accuracy',
      'Image preprocessing & feature extraction',
      'Automated forgery detection pipeline',
      'Classification using PyTorch'
    ],
    technologies: ['Python', 'OpenCV', 'PyTorch', 'Machine Learning', 'NumPy', 'Pandas'],
    github: 'https://github.com/Sahilghagg/Signature-Forgery-Detection',
    live: '#',
    image: '/projects/forgery-detection.jpg',
    startDate: 'Aug 2024',
    endDate: 'Nov 2024',
    category: 'AI & Machine Learning'
  },
  {
    id: 10,
    title: 'Skin Cancer Detection',
    description: 'Machine learning-based skin cancer detection system using image classification to identify potential skin cancer from dermatological images.',
    problem: 'Early detection of skin cancer is crucial but requires specialized expertise. AI can assist in screening and early detection.',
    features: [
      'Skin cancer detection',
      'Image classification',
      'Dermatological analysis',
      'AI-powered diagnosis assistance'
    ],
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Medical AI'],
    github: 'https://github.com/Sahilghagg/SKIN_CANCER_DETECTION',
    live: '#',
    image: '/projects/skin-cancer.jpg',
    startDate: 'Feb 2025',
    endDate: 'Present',
    category: 'AI & Machine Learning',
    isPrivate: true
  },
  {
    id: 11,
    title: 'Weather Predictor',
    description: 'Machine learning-based weather prediction system using historical data to forecast weather conditions and patterns.',
    problem: 'Accurate weather prediction is essential for various sectors. ML models can improve forecasting accuracy.',
    features: [
      'Weather prediction',
      'Historical data analysis',
      'Pattern recognition',
      'Forecasting accuracy'
    ],
    technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Science', 'Weather Data'],
    github: 'https://github.com/Sahilghagg/Weather-Predictor',
    live: '#',
    image: '/projects/weather-predictor.jpg',
    startDate: 'Apr 2025',
    endDate: 'Present',
    category: 'AI & Machine Learning'
  },

  // ===== MOBILE & PRODUCTIVITY =====
  {
    id: 12,
    title: 'Object Detection for Visually Impaired',
    description: 'Mobile application with voice assistance for visually impaired people to navigate through camera in smartphones with a simple UI and voice-based obstacle detection.',
    problem: 'Visually impaired individuals face challenges in navigation and obstacle detection in their daily lives.',
    features: [
      'Voice-assisted navigation',
      'Obstacle detection',
      'Simple UI for accessibility',
      'Real-time object detection',
      'YOLO-based detection'
    ],
    technologies: ['YOLO', 'Mobile App', 'Python', 'Voice Assistance', 'Computer Vision'],
    github: 'https://github.com/Sahilghagg/Object-Detection-for-Visually-Impaired-YOLO-based-',
    live: '#',
    image: '/projects/object-detection.jpg',
    startDate: 'Sep 2025',
    endDate: 'Present',
    category: 'Mobile & Accessibility',
    isPrivate: true
  },
  {
    id: 13,
    title: 'FocusForge - Study Productivity',
    description: 'Desktop productivity application creating a distraction-free study environment by allowing users to whitelist specific applications and websites, enforcing focus sessions.',
    problem: 'Students and professionals struggle with distractions while studying or working. FocusForge enforces dedicated focus time.',
    features: [
      'Application whitelisting',
      'Website blocking',
      'Focus session enforcement',
      'Productivity tracking',
      'Distraction-free environment'
    ],
    technologies: ['JavaScript', 'Electron', 'Desktop App', 'Productivity'],
    github: 'https://github.com/Sahilghagg/FocusForge-Distraction-Free-Study-Productivity-Environment',
    live: '#',
    image: '/projects/focusforge.jpg',
    startDate: 'Jun 2025',
    endDate: 'Present',
    category: 'Productivity'
  },

  // ===== CLONE PROJECTS =====
  {
    id: 14,
    title: 'E-Commerce PWA',
    description: 'Progressive Web Application for e-commerce with offline support, push notifications, and responsive design for mobile-first experience.',
    problem: 'Modern e-commerce needs to work seamlessly across devices with offline capabilities and app-like experience.',
    features: [
      'Offline support',
      'Push notifications',
      'Mobile-first design',
      'Progressive Web App',
      'E-commerce functionality'
    ],
    technologies: ['HTML', 'JavaScript', 'PWA', 'Service Workers', 'E-Commerce'],
    github: 'https://github.com/Sahilghagg/E-Commerce-PWA',
    live: '#',
    image: '/projects/ecommerce-pwa.jpg',
    startDate: 'Apr 2025',
    endDate: 'Present',
    category: 'Web Application'
  },
  {
    id: 15,
    title: 'EduConnect Chat App',
    description: 'Chat application for educational institutions enabling real-time communication between students, teachers, and administrators.',
    problem: 'Educational institutions need secure, organized communication channels for students and faculty.',
    features: [
      'Real-time chat',
      'User authentication',
      'Room-based messaging',
      'Educational institution focus'
    ],
    technologies: ['JavaScript', 'Chat App', 'Real-time', 'WebSockets', 'Education'],
    github: 'https://github.com/Sahilghagg/educonnect-chat-app',
    live: '#',
    image: '/projects/educonnect.jpg',
    startDate: 'Present',
    endDate: 'Present',
    category: 'Web Application'
  },
  {
    id: 16,
    title: 'Package Analyzer',
    description: 'Network packet analyzer for monitoring and analyzing network traffic, useful for network security and troubleshooting.',
    problem: 'Network administrators need tools to analyze and debug network traffic issues.',
    features: [
      'Packet analysis',
      'Network monitoring',
      'Traffic visualization',
      'Security analysis'
    ],
    technologies: ['Python', 'Network Analysis', 'Security', 'Packet Capture'],
    github: 'https://github.com/Sahilghagg/PacketAnalyzer',
    live: '#',
    image: '/projects/packet-analyzer.jpg',
    startDate: 'Feb 2025',
    endDate: 'Present',
    category: 'Security'
  },

  // ===== CLONE PROJECTS (UI/UX) =====
  {
    id: 17,
    title: 'Amazon Clone',
    description: 'Cloned Amazon webpage with responsive design, product listings, and shopping cart functionality.',
    problem: 'Learning frontend development through practical cloning of popular websites.',
    features: [
      'Product listings',
      'Responsive design',
      'Shopping cart',
      'Search functionality'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Clone'],
    github: 'https://github.com/Sahilghagg/Amazon-Clone',
    live: '#',
    image: '/projects/amazon-clone.jpg',
    startDate: 'Dec 2024',
    endDate: 'Present',
    category: 'Clone'
  },
  {
    id: 18,
    title: 'YouTube Clone',
    description: 'Cloned YouTube webpage with video thumbnails, channel information, and responsive layout.',
    problem: 'Learning frontend development through practical cloning of popular websites.',
    features: [
      'Video thumbnails',
      'Channel information',
      'Responsive layout',
      'Video browsing'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Clone'],
    github: 'https://github.com/Sahilghagg/Youtube-Clone',
    live: '#',
    image: '/projects/youtube-clone.jpg',
    startDate: 'Dec 2024',
    endDate: 'Present',
    category: 'Clone'
  },
  {
    id: 19,
    title: 'Netflix Clone',
    description: 'Cloned Netflix webpage with movie/show thumbnails, categories, and responsive design.',
    problem: 'Learning frontend development through practical cloning of popular websites.',
    features: [
      'Movie thumbnails',
      'Category browsing',
      'Responsive design',
      'Hero section'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Clone'],
    github: 'https://github.com/Sahilghagg/Netflix-clone',
    live: '#',
    image: '/projects/netflix-clone.jpg',
    startDate: 'Dec 2024',
    endDate: 'Present',
    category: 'Clone'
  },
  {
    id: 20,
    title: 'Instagram Clone',
    description: 'Cloned Instagram webpage with post feed, stories, and user profile layout.',
    problem: 'Learning frontend development through practical cloning of popular websites.',
    features: [
      'Post feed',
      'Stories',
      'User profile',
      'Like functionality'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Clone'],
    github: 'https://github.com/Sahilghagg/Instagram-Clone',
    live: '#',
    image: '/projects/instagram-clone.jpg',
    startDate: 'Dec 2024',
    endDate: 'Present',
    category: 'Clone'
  },

  // ===== OTHER PROJECTS =====
  {
    id: 21,
    title: 'Quiz Application',
    description: 'Interactive coding quiz application for testing programming knowledge with multiple-choice questions and score tracking.',
    problem: 'Students need practice and assessment tools for testing programming knowledge.',
    features: [
      'Multiple-choice questions',
      'Score tracking',
      'Progress monitoring',
      'Programming focus'
    ],
    technologies: ['Java', 'Quiz App', 'Programming Assessment'],
    github: 'https://github.com/Sahilghagg/QUIZ-APPLICATION',
    live: '#',
    image: '/projects/quiz-app.jpg',
    startDate: 'Dec 2024',
    endDate: 'Present',
    category: 'Other'
  },
  {
    id: 22,
    title: 'Amazon-Flipkart Price Comparison',
    description: 'Price comparison application that compares product prices between Amazon and Flipkart to help users find the best deals.',
    problem: 'Consumers need to compare prices across different e-commerce platforms to make informed purchasing decisions.',
    features: [
      'Price comparison',
      'Amazon integration',
      'Flipkart integration',
      'Best deal identification'
    ],
    technologies: ['Jupyter Notebook', 'Python', 'Web Scraping', 'Price Comparison'],
    github: 'https://github.com/Sahilghagg/Amazon-And-Flipkart-Price-Camparison-App',
    live: '#',
    image: '/projects/price-comparison.jpg',
    startDate: 'Dec 2024',
    endDate: 'Present',
    category: 'Other'
  }
];

export const achievements = [
  'Placed 2nd in DSW Hackathon among multiple competing teams',
  'Solved 200+ DSA problems on LeetCode and GeeksforGeeks',
  'Event Head for College Sports Activities',
];

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Sahilghagg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sahil-ghag-a14609341/' },
  { name: 'Email', url: 'mailto:ghagsahil21@gmail.com' },
  { name: 'Phone', url: 'tel:+917208678132' },
];