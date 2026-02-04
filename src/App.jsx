import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const updateScrollVars = () => {
      const scrollTop = window.scrollY || root.scrollTop;
      const docHeight = root.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      root.style.setProperty("--scroll-progress", `${progress * 100}%`);
      root.style.setProperty("--scroll-y", `${scrollTop}px`);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateScrollVars();
        ticking = false;
      });
    };

    updateScrollVars();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume">
      <div className="scroll-progress">
        <span className="scroll-progress-bar" />
      </div>
      <header className="hero">
        <div className="hero-top">
          <div className="name-block">
            <p className="eyebrow">Portfolio Resume</p>
            <h1>Rizwan Ullah</h1>
            <div className="role-row">
              <p className="role">
                Full Stack JavaScript Developer - MERN - PLC Systems
              </p>
              <span className="availability-badge">Available</span>
            </div>
          </div>
          <div className="contact-grid">
            <a
              className="contact-pill link"
              href="mailto:rizwan.software.dev@gmail.com"
              aria-label="Email: rizwan.software.dev@gmail.com"
              data-tooltip="rizwan.software.dev@gmail.com"
            >
              Email
            </a>
            <a
              className="contact-pill link"
              href="tel:+923485402441"
              aria-label="Phone: +92 3485402441"
              data-tooltip="+92 3485402441"
            >
              Phone
            </a>
            <div className="contact-pill" data-tooltip="Islamabad, Pakistan">
              Islamabad, Pakistan
            </div>
            <a
              className="contact-pill link"
              href="https://www.linkedin.com/in/rizwansoftwaredev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              data-tooltip="https://www.linkedin.com/in/rizwansoftwaredev/"
            >
              LinkedIn
            </a>
            <a
              className="contact-pill link"
              href="https://github.com/rizwan-signon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              data-tooltip="https://github.com/rizwan-signon"
            >
              GitHub
            </a>
            <a
              className="contact-pill link"
              href="https://x.com/rizwan_webDev"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter) profile"
              data-tooltip="https://x.com/rizwan_webDev"
            >
              X (Twitter)
            </a>
          </div>
          <div className="cta-row">
            <a className="download-btn" href="/Rizwanjavascriptdeveloper.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <p className="summary">
            Full Stack JavaScript Developer with 3+ years of experience building
            end-to-end web applications using the MERN stack (MongoDB,
            Express.js, React, Node.js, postgres). Proficient in developing
            responsive UIs, RESTful and GraphQL APIs, and scalable backend
            systems (node). Skilled in performance optimization, secure coding,
            and clean architecture design. Currently working on a remote
            monitoring system in PLC solutions, integrating frontend
            visualization with reliable backend control and data management.
          </p>
          <div className="highlight-strip">
            <div>
              <p className="metric">3+ Years</p>
              <p className="metric-label">Production Experience</p>
            </div>
            <div>
              <p className="metric">MERN</p>
              <p className="metric-label">Full Stack Focus</p>
            </div>
            <div>
              <p className="metric">PLC</p>
              <p className="metric-label">Remote Monitoring</p>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="panel reveal" style={{ "--delay": "0.05s" }}>
          <h2>Technical Skills</h2>
          <div className="chip-grid">
            <span>React</span>
            <span>Next.js</span>
            <span>Angular</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Material UI</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Nest js</span>
            <span>Express.js</span>
            <span>RESTful APIs</span>
            <span>GraphQl Apis</span>
            <span>Cube Apis</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>postgress</span>
            <span>Redux Toolkit</span>
            <span>TanStack Query</span>
            <span>Context API</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Gitlab</span>
            <span>Docker</span>
            <span>DockerHub</span>
            <span>Agile methodology</span>
            <span>Lazy loading</span>
            <span>Memoization</span>
            <span>SSR</span>
            <span>Code-splitting</span>
            <span>API Integration</span>
            <span>Authentication (JWT)</span>
          </div>
        </section>

        <section className="panel reveal" style={{ "--delay": "0.1s" }}>
          <h2>Work Experience</h2>
          <div className="timeline-item">
            <div className="timeline-head">
              <div>
                <h3>Software Developer (MERN)</h3>
                <p className="muted">
                  PLC Solutions pvt Limited - 11/2024 - Present
                </p>
              </div>
              <span className="tag">Full-Time</span>
            </div>
            <ul className="clean-list">
              <li>
                Developing and maintaining full-stack MERN applications with a
                focus on performance and scalability.
              </li>
              <li>
                Built reusable UI components in React.js + Material UI,
                ensuring responsive design across devices.
              </li>
              <li>
                Integrated Express.js APIs and MongoDB databases to deliver
                robust backend solutions.
              </li>
              <li>
                Collaborated with UI/UX teams to refine interfaces, optimize
                load time, and improve UX.
              </li>
              <li>
                Conducted code reviews, debugging, and testing to ensure code
                quality and maintainability.
              </li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-head">
              <div>
                <h3>Frontend Developer</h3>
                <p className="muted">Binsotech - 2023 - 2024</p>
              </div>
              <span className="tag subtle">Full-Time</span>
            </div>
            <ul className="clean-list">
              <li>
                Developed interactive front-end applications using React.js,
                tailwind CSS, and material UI.
              </li>
              <li>
                Implemented Redux Toolkit and TanStack Query for scalable
                state management.
              </li>
              <li>
                Enhanced UI performance via code-splitting, lazy loading, and
                render optimization.
              </li>
              <li>
                Integrated RESTful APIs for dynamic data handling and
                responsive user experiences.
              </li>
            </ul>
          </div>
        </section>

        <section className="panel reveal" style={{ "--delay": "0.15s" }}>
          <h2>Project Highlights</h2>
          <div className="project-grid">
            <article className="project-card reveal" style={{ "--delay": "0.2s" }}>
              <h3>Tracers.io</h3>
              <p className="muted">
                React / Redux / Leaflet / Ant Design / Node.js / Socket.IO
              </p>
              <p>
                Developed a full-stack IoT web application for real-time asset
                and personnel tracking. Built interactive geospatial dashboards
                with live data visualization and device/user management.
              </p>
              <p className="project-links">
                <a
                  href="https://tracers.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <span> | </span>
                <a
                  href="https://github.com/rizwan-signon/tracers"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </article>

            <article className="project-card reveal" style={{ "--delay": "0.25s" }}>
              <h3>propertyHub</h3>
              <p className="muted">
                React / Redux / Leaflet / Ant Design / Node.js / MongoDB
              </p>
              <p>
                Built interactive geospatial dashboards featuring live data
                visualization and device/user management. Added secure
                authentication and RBAC for multi-level user management.
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
                Developed an IMDB clone integrating The Movie Database (TMDB)
                API with trending, top-rated, search, and detailed movie views
                including trailers.
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

        <section className="panel reveal" style={{ "--delay": "0.18s" }}>
          <h2>Featured Skills</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Frontend</h3>
              <p className="muted">
                React, Next.js, Angular, TypeScript, Tailwind CSS, Material UI,
                Vite
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
              <p className="muted">
                MongoDB, Mongoose, postgress, Docker, DockerHub, GitHub
              </p>
            </div>
          </div>
        </section>

        <section className="panel reveal" style={{ "--delay": "0.22s" }}>
          <h2>Soft Skills</h2>
          <ul className="clean-list">
            <li>
              Communication: Able to clearly share ideas and collaborate with
              both technical and non-technical teams.
            </li>
            <li>Interpersonal: Excellent interpersonal relations.</li>
            <li>Hard Work: Dedicated and hardworking.</li>
            <li>
              Critical Thinking: Able to analyze situations, identify problems,
              and develop effective solutions.
            </li>
            <li>
              Time Management: Effective at managing time and resources to meet
              project deadlines.
            </li>
          </ul>
        </section>

        <section className="panel reveal" style={{ "--delay": "0.26s" }}>
          <h2>Education</h2>
          <div className="split">
            <div>
              <h3>Bachelor of Software Engineering (CGPA 3.41)</h3>
              <p className="muted">
                Kohat University of Science and Technology, Kohat, KPK
              </p>
            </div>
            <div>
              <h3>Location</h3>
              <p className="muted">Islamabad, Pakistan</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="recruiter-highlight">
          Available for remote, hybrid, or on-site roles - Open to relocation
        </p>
      </footer>
    </div>
  );
}

export default App;
