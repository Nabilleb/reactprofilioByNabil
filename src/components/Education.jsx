function Education({ education }) {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <p className="field">{edu.field}</p>
            <p className="school">{edu.school}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
