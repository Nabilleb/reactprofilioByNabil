import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  const portfolioData = {
    name: "John Doe",
    title: "Full Stack Developer",
    profileImage: "https://via.placeholder.com/200",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    summary: "Passionate developer with expertise in building modern web applications.",
    
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "CSS/HTML",
      "MongoDB",
      "Git",
      "REST APIs",
      "Python"
    ],
    
    experience: [
      {
        title: "Senior Developer",
        company: "Tech Company ABC",
        duration: "2022 - Present",
        description: "Led development of multiple React applications, managed team of 3 developers"
      },
      {
        title: "Full Stack Developer",
        company: "StartUp XYZ",
        duration: "2020 - 2022",
        description: "Built and deployed full stack applications using MERN stack"
      },
      {
        title: "Junior Developer",
        company: "Tech Solutions",
        duration: "2019 - 2020",
        description: "Developed frontend features and fixed bugs in legacy codebase"
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Science",
        field: "Computer Science",
        school: "University of Technology",
        year: "2019"
      },
      {
        degree: "Certification",
        field: "Full Stack Web Development",
        school: "Online Learning Platform",
        year: "2020"
      }
    ]
  }

  return (
    <div className="portfolio-container">
      <Header data={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Education education={portfolioData.education} />
      <Footer name={portfolioData.name} />
    </div>
  )
}

export default App
