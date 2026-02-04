function WorkExperience() {
  return (
    <section className="panel reveal" style={{ "--delay": "0.1s" }}>
      <h2>Work Experience</h2>
      <div className="timeline-item">
        <div className="timeline-head">
          <div>
            <h3>Software Developer (MERN)</h3>
            <p className="muted">PLC Solutions pvt Limited - 11/2024 - Present</p>
          </div>
          <span className="tag">Full-Time</span>
        </div>
        <ul className="clean-list">
          <li>
            Developing and maintaining full-stack MERN applications with a focus on
            performance and scalability.
          </li>
          <li>
            Built reusable UI components in React.js + Material UI, ensuring
            responsive design across devices.
          </li>
          <li>
            Integrated Express.js APIs and MongoDB databases to deliver robust backend
            solutions.
          </li>
          <li>
            Collaborated with UI/UX teams to refine interfaces, optimize load time, and
            improve UX.
          </li>
          <li>
            Conducted code reviews, debugging, and testing to ensure code quality and
            maintainability.
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
            Developed interactive front-end applications using React.js, tailwind CSS,
            and material UI.
          </li>
          <li>
            Implemented Redux Toolkit and TanStack Query for scalable state management.
          </li>
          <li>
            Enhanced UI performance via code-splitting, lazy loading, and render
            optimization.
          </li>
          <li>
            Integrated RESTful APIs for dynamic data handling and responsive user
            experiences.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WorkExperience;
