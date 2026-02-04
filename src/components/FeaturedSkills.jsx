function FeaturedSkills() {
  return (
    <section className="panel reveal" style={{ "--delay": "0.18s" }}>
      <h2>Featured Skills</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <h3>Frontend</h3>
          <p className="muted">
            React, Next.js, Angular, TypeScript, Tailwind CSS, Material UI, Vite
          </p>
        </div>
        <div className="feature-card">
          <h3>Backend</h3>
          <p className="muted">
            Node.js, Nest js, Express.js, RESTful APIs, GraphQl Apis, JWT
          </p>
        </div>
        <div className="feature-card">
          <h3>Data + DevOps</h3>
          <p className="muted">MongoDB, Mongoose, postgress, Docker, DockerHub, GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSkills;
