function ProjectHighlights() {
  return (
    <section className="panel reveal" style={{ "--delay": "0.15s" }}>
      <h2>Project Highlights</h2>
      <div className="project-grid">
        <article className="project-card reveal" style={{ "--delay": "0.2s" }}>
          <h3>Tracers.io</h3>
          <p className="muted">React / Redux / Leaflet / Ant Design / Node.js / Socket.IO</p>
          <p>
            Developed a full-stack IoT web application for real-time asset and personnel
            tracking. Built interactive geospatial dashboards with live data visualization
            and device/user management.
          </p>
          <p className="project-links">
            <a href="https://tracers.io/" target="_blank" rel="noreferrer">
              Live
            </a>
            <span> | </span>
            <a href="https://github.com/rizwan-signon/tracers" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </article>

        <article className="project-card reveal" style={{ "--delay": "0.25s" }}>
          <h3>propertyHub</h3>
          <p className="muted">React / Redux / Leaflet / Ant Design / Node.js / MongoDB</p>
          <p>
            Built interactive geospatial dashboards featuring live data visualization and
            device/user management. Added secure authentication and RBAC for multi-level
            user management.
          </p>
          <p className="project-links">
            <span>Not deployed yet | </span>
            <a
              href="https://github.com/rizwan-signon/propertyHub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </article>

        <article className="project-card reveal" style={{ "--delay": "0.3s" }}>
          <h3>IMDB clone</h3>
          <p className="muted">React / Tailwind CSS / Vite / TMDB API</p>
          <p>
            Developed an IMDB clone integrating The Movie Database (TMDB) API with
            trending, top-rated, search, and detailed movie views including trailers.
          </p>
          <p className="project-links">
            <a
              href="https://imdb-clone-one-chi.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <span> | </span>
            <a
              href="https://github.com/rizwan-signon/IMDB-clone"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}

export default ProjectHighlights;
