import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const portfolioData = {
    name: "Nabil Alakhdar",
    title: "programmer",
    profileImage: "/img/WhatsApp Image 2025-12-23 at 16.24.35.jpeg",
    email: "Nabilgreen500@gmail.com",
    phone: "+ 961 3815688",
    summary: "Passionate developer with expertise in building modern web applications, currently learning machine learning and AI.",
    
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "CSS/HTML",
      "MongoDB",
      "Git",
      "REST APIs",
      "Python",
      "jQuery",
      "PostgreSQL",
      "EJS",
      "PHP",
      "Pandas"
    ],
    
    experience: [
      {
        title: "Web Developer",
        company: "OGERO",
        duration: "06/2024 - 08/2024",
        description: "Developed and maintained internal web applications. Improved UI/UX, implemented features using JavaScript, Python, and Node.js, and managed full development lifecycle from requirements to deployment."
      },
      {
        title: "Full Stack Developer",
        company: "Stack Group",
        duration: "08/2024 - 04/2025",
        description: "Demonstrated expertise in software development with strong analytical and problem-solving skills. Collaborated effectively with colleagues and clients while maintaining high-quality standards and proactive approach."
      },
      {
        title: "Full Stack Developer",
        company: "Arabian Construction Company",
        duration: "04/2025 - Present",
        description: "Developed KPI tracking system for real-time business performance monitoring. Designed database, built backend APIs, and created role-based dashboard. Improved reporting efficiency by 40% and reduced manual data collection."
      }
    ],
    
    education: [
      {
        degree: "Bachelor Degree",
        field: "Computer Science",
        school: "Rafik Hariri University",
        year: "09/2024"
      }
    ],
    
    projects: [
      {
        title: "KPI Tracking System",
        technologies: "React, Node.js, PostgreSQL, Dashboard",
        description: "Real-time business performance monitoring system with role-based access control and 40% efficiency improvement."
      },
      {
        title: "Internal Web Applications",
        technologies: "JavaScript, Python, Node.js",
        description: "Developed and maintained internal applications focusing on UI/UX improvements and system functionality."
      },
      {
        title: "E-Commerce Platform",
        technologies: "MERN Stack, MongoDB, Express",
        description: "Full-stack e-commerce solution with product management, shopping cart, and payment integration."
      }
    ]
  }

  return (
    <div className="portfolio-container">
      <Header data={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Education education={portfolioData.education} />
      <Projects projects={portfolioData.projects} />
      <Footer name={portfolioData.name} />
    </div>
  )
}

export default App
