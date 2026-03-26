import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Global Polytrade Website",
      description: "Static company website with responsive UI and product listings",
      frontText: "Clean and professional frontend implementation",
      backText: "Focused on usability, responsiveness, and real-world business requirements",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://www.globalpolytrade.in",
      codeLink: null
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with authentication and payments",
      frontText: "Complete shopping experience with cart and checkout",
      backText:
        "Implemented JWT authentication, Stripe payments, inventory management, and admin dashboard",
      tech: ["MERN", "Stripe", "JWT", "Redux"],
      liveLink: "https://your-ecommerce-demo.com",
      codeLink: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      frontText: "Drag-and-drop tasks with team collaboration",
      backText:
        "Built real-time updates using Socket.io, role-based access, and notification system",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "https://your-task-demo.com",
      codeLink: "https://github.com/yourusername/task-manager"
    },
    {
      title: "ML Price Predictor",
      description: "Machine learning model for predicting house prices",
      frontText: "Regression model with web-based interface",
      backText:
        "Performed feature engineering, trained ML models, and exposed predictions via Flask REST API",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
      liveLink: "https://your-ml-demo.com",
      codeLink: "https://github.com/yourusername/price-predictor"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>

        <p className="section-subtitle">
          A selection of projects demonstrating frontend, backend, and ML skills
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-inner">
                {/* FRONT */}
                <div className="card-front">
                  <h3>{project.title}</h3>
                  <p className="description">{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <p className="front-text">{project.frontText}</p>
                  <span className="flip-hint">Hover to see details</span>
                </div>

                {/* BACK */}
                <div className="card-back">
                  <h3>{project.title}</h3>
                  <p className="back-text">{project.backText}</p>

                  <div className="project-links">
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        View Code
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        {project.title.includes("Website")
                          ? "Live Website"
                          : "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
