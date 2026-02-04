function Hero() {
  return (
    <header className="hero">
      <div className="hero-top">
        <div className="name-block hero-stagger" style={{ "--delay": "0.05s" }}>
          <p className="eyebrow">Portfolio Resume</p>
          <h1>Rizwan Ullah</h1>
          <div className="role-row">
            <p className="role">
              Full Stack JavaScript Developer - MERN - PLC Systems
            </p>
            <span className="availability-badge">Available</span>
          </div>
        </div>
        <div className="contact-grid hero-stagger" style={{ "--delay": "0.15s" }}>
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
        <div className="cta-row hero-stagger" style={{ "--delay": "0.25s" }}>
          <a className="download-btn" href="/Rizwanjavascriptdeveloper.pdf" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <p className="summary hero-stagger" style={{ "--delay": "0.35s" }}>
          Full Stack JavaScript Developer with 3+ years of experience building
          end-to-end web applications using the MERN stack (MongoDB, Express.js,
          React, Node.js, postgres). Proficient in developing responsive UIs,
          RESTful and GraphQL APIs, and scalable backend systems (node). Skilled
          in performance optimization, secure coding, and clean architecture
          design. Currently working on a remote monitoring system in PLC
          solutions, integrating frontend visualization with reliable backend
          control and data management.
        </p>
        <div className="highlight-strip hero-stagger" style={{ "--delay": "0.45s" }}>
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
  );
}

export default Hero;
