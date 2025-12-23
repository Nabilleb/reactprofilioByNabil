function Experience({ experience }) {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{job.title}</h3>
              <span className="duration">{job.duration}</span>
            </div>
            <p className="company">{job.company}</p>
            <p className="description">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
