function Projects({ projects }) {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="technologies">{project.technologies}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
