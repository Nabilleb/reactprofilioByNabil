function Header({ data }) {
  return (
    <header className="header">
      <img src={data.profileImage} alt={data.name} className="profile-pic" />
      <h1>{data.name}</h1>
      <p className="title">{data.title}</p>
      <p className="summary">{data.summary}</p>
      <div className="contact-info">
        <span>📧 {data.email}</span>
        <span>📞 {data.phone}</span>
      </div>
    </header>
  )
}

export default Header
