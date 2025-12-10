import React, { useEffect, useState } from "react";
import "./index.css"; 

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    if (newMode) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  };

  useEffect(() => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    const handleMenuClick = () => {
      navLinks.classList.toggle("open");
      const icon = menuToggle.querySelector("i");
      if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    };

    menuToggle?.addEventListener("click", handleMenuClick);

    navLinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          const icon = menuToggle.querySelector("i");
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      menuToggle?.removeEventListener("click", handleMenuClick);
    };
  }, []);

  const openCertificate = (certificateName) => {
    window.open(`/${certificateName}`, '_blank');
  };

  const openProjectLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <nav>
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="logo-mark">MS</span>
            <span>Mohan&nbsp;Sai</span>
          </a>

          <ul className="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${isLightMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>
            <button className="menu-toggle" id="menuToggle">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home">
        <div className="container hero">
          <div className="hero-left fade-in">
            <div className="hero-pill">
              <span className="hero-pill-badge"><i className="fa-solid fa-code"></i></span>
              <span>Software Engineering & Intelligent Systems</span>
            </div>

            <div className="hero-subtitle">Hello, I am</div>
            <h1 className="hero-heading">
              <span className="highlight">Buchireddygari</span><br/>
              <span className="highlight">Mohan&nbsp;Sai</span>
            </h1>

            <p className="hero-description">
              I am a <strong>Computer Science & Engineering Student</strong> passionate about building scalable software and intelligent solutions. With a focus on <strong>Software Development</strong>, <strong>Machine Learning</strong>, and <strong>Systems Programming</strong>.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <span>Connect With Me</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="MOHAN SAI BUCHIREDDYGARI.pdf" download="MOHAN_SAI_BUCHIREDDYGARI_Resume.pdf" className="btn-primary">
                <span>Download Resume</span>
                <i className="fa-solid fa-download"></i>
              </a>
              <a href="#projects" className="btn-ghost">
                <span>View Projects</span>
                <i className="fa-solid fa-diagram-project"></i>
              </a>
            </div>
          </div>

          <div className="hero-right fade-in">
            <div className="hero-card">
              <div className="hero-tagline">Portfolio Snapshot</div>
              <div className="hero-name">B. Mohan Sai</div>
              <div className="hero-role">CSE Student</div>

              <div className="hero-chip-row">
                <span className="chip"><i className="fa-solid fa-laptop-code"></i> Software</span>
                <span className="chip"><i className="fa-brands fa-python"></i> Python</span>
                <span className="chip"><i className="fa-solid fa-brain"></i> AI/ML</span>
              </div>

              <div className="hero-mini-grid">
                <div className="mini-card">
                  <strong>Software Engineering</strong>
                  <span>Full Stack, Clean Code, System Design.</span>
                </div>
                <div className="mini-card">
                  <strong>Machine Learning</strong>
                  <span>Predictive Modeling, CI, Data Science.</span>
                </div>
                <div className="mini-card">
                  <strong>Embedded IoT</strong>
                  <span>STM32, Real-time Systems, Keil.</span>
                </div>
                <div className="mini-card">
                  <strong>Functional Logic</strong>
                  <span>Haskell, Algorithmic Thinking.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <div className="container">
          <div className="section-header fade-in">
            <h2>About Me</h2>
            <div className="line"></div>
          </div>

          <div className="about-grid fade-in">
            <div className="about-image-wrapper">
              <img src="/mohan-sai.jpg" alt="Buchireddygari Mohan Sai" />
            </div>
            <div className="about-content">
              <h3>Building the Future Through Code</h3>
              <p>
                I am a Computer Science & Engineering student at Amrita Vishwa Vidyapeetham, currently maintaining a CGPA of 8.03. My path in technology is guided by an interest in how software interacts with physical systems—from developing algorithms that improve traffic patterns, to creating simulations for autonomous robots, to engineering complete web applications.
              </p>
              <p>
                More than writing code, I focus on designing solutions. I navigate across technical layers, whether working with embedded C on hardware platforms, structuring intuitive front-end experiences, or implementing machine learning approaches.
              </p>
              <p>
                I aim to apply my background in software development, embedded systems, and artificial intelligence toward creating thoughtful, scalable systems that address concrete needs. I value ongoing growth and look forward to engaging with new technical challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Technical Skillset</h2>
            <div className="line"></div>
            <p className="section-subtitle">
              A diverse technical background ranging from <strong>system-level programming</strong> to <strong>intelligent algorithms</strong>.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card fade-in">
              <div className="skill-title">
                <div className="skill-title-icon"><i className="fa-solid fa-terminal"></i></div>
                <span>Programming</span>
              </div>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">Java</span>
                <span className="tag">C</span>
                <span className="tag">Dart</span>
                <span className="tag">Haskell</span>
              </div>
            </div>
            <div className="skill-card fade-in">
              <div className="skill-title">
                <div className="skill-title-icon"><i className="fa-solid fa-brain"></i></div>
                <span>AI & Data</span>
              </div>
              <div className="tag-list">
                <span className="tag">Machine Learning</span>
                <span className="tag">CI</span>
                <span className="tag">Data Science</span>
                <span className="tag">Predictive Analytics</span>
              </div>
            </div>
            <div className="skill-card fade-in">
              <div className="skill-title">
                <div className="skill-title-icon"><i className="fa-solid fa-code"></i></div>
                <span>Web & Tools</span>
              </div>
              <div className="tag-list">
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">Git/Github</span>
                <span className="tag">Webots</span>
                <span className="tag">VS Code</span>
                <span className="tag">SUMO</span>
                <span className="tag">Keil uVision (STM32)</span>
                <span className="tag">Wireshark</span>
                <span className="tag">Streamlit</span>
              </div>
            </div>
            <div className="skill-card fade-in">
              <div className="skill-title">
                <div className="skill-title-icon"><i className="fa-solid fa-microchip"></i></div>
                <span>Core CS</span>
              </div>
              <div className="tag-list">
                <span className="tag">Data Structures</span>
                <span className="tag">Algorithms</span>
                <span className="tag">OOPS</span>
                <span className="tag">Networks</span>
                <span className="tag">DBMS</span>
                <span className="tag">Embedded Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Featured Projects</h2>
            <div className="line"></div>
            <p className="section-subtitle">
              A collection of 7 projects showcasing <strong>Software Engineering</strong>, <strong>Machine Learning</strong>, and <strong>Embedded Systems</strong> capabilities.
            </p>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <article className="project-card fade-in">
              <div className="project-content">
                <div className="project-badge">Full Stack · Fintech</div>
                <h3 className="project-title">ML Stock Market Analysis</h3>
                <p className="project-desc">
                  A data-driven web app aggregating financial data via APIs. Uses <strong>ML models</strong> to provide fundamental analysis. Features a React frontend for visualization and a Python/Flask backend.
                </p>
              </div>
              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>React</span>
                <span>MySQL</span>
              </div>
              <div className="project-footer">
                <span>Data-driven insights.</span>
                <span><i className="fa-solid fa-lock"></i> Private Project</span>
              </div>
            </article>

            {/* Project 2: DSA Food Ordering (UPDATED) */}
            <article className="project-card fade-in">
              <div className="project-content">
                <div className="project-badge">Algorithms · Python</div>
                <h3 className="project-title">DSA Food Ordering System</h3>
                <p className="project-desc">
                  A comprehensive backend logic system. Implements <strong>Priority Queues</strong> for orders, <strong>BST</strong> for menus, <strong>Stacks</strong> for undo/redo, and <strong>Dijkstra's Algorithm</strong> for delivery routing.
                </p>
              </div>
              <div className="project-tech">
                <span>Python</span>
                <span>Data Structures</span>
                <span>Graphs</span>
              </div>
              <div className="project-footer">
                <span>Optimized Logic.</span>
                {/* UPDATED LINK AND TEXT */}
                <span 
                  className="project-link" 
                  onClick={() => openProjectLink("https://github.com/MOHANSAIBUCHIREDDYGARI/Smart-Serve")}
                >
                  <i className="fa-solid fa-code"></i> View Project →
                </span>
              </div>
            </article>

            {/* Project 3 */}
            <article className="project-card fade-in">
              <div className="project-content">
                <div className="project-badge">Optimization · Algorithms</div>
                <h3 className="project-title">Edge-Based V2X Protocol</h3>
                <p className="project-desc">
                  Optimizes emergency traffic response using custom <strong>pathfinding algorithms</strong> and <strong>Fuzzy Logic/Genetic Algorithms</strong> to reroute traffic in SUMO simulations.
                </p>
              </div>
              <div className="project-tech">
                <span>Python</span>
                <span>SUMO</span>
                <span>Genetic Algos</span>
                <span>Optimization</span>
              </div>
              <div className="project-footer">
                <span>Smart city logic.</span>
                <span className="project-link" onClick={() => openProjectLink("https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-12_powerrangers.git")}>
                  <i className="fa-solid fa-road"></i> View Project →
                </span>
              </div>
            </article>

            {/* Project 4 */}
            <article className="project-card fade-in">
              <div className="project-content">
                <div className="project-badge">E-Commerce · Full Stack</div>
                <h3 className="project-title">ShopsBuzz</h3>
                <p className="project-desc">
                  A comprehensive shopping platform. Architected the relational database in <strong>MySQL</strong> and built the frontend/backend to handle sessions, products, and transactions.
                </p>
              </div>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>MySQL</span>
                <span>HTML/CSS</span>
                <span>Web Dev</span>
              </div>
              <div className="project-footer">
                <span>Scalable Architecture.</span>
                <span className="project-link" onClick={() => openProjectLink("https://github.com/Sandeep-Merugumala/ShopsBuzz.git")}>
                  <i className="fa-solid fa-cart-shopping"></i> View Project →
                </span>
              </div>
            </article>

            {/* Project 5 */}
            <article className="project-card fade-in">
              <div className="project-content">
                <div className="project-badge">Data Science · ML</div>
                <h3 className="project-title">Customer Churn Prediction</h3>
                <p className="project-desc">
                  End-to-end ML pipeline identifying at-risk customers. From EDA to training (Logistic Regression/Random Forest) and deployment via a <strong>Streamlit</strong> dashboard for business insights.
                </p>
              </div>
              <div className="project-tech">
                <span>Python & Seaborn</span>
                <span>Streamlit</span>
                <span>Scikit-Learn</span>
                <span>ML</span>
              </div>
              <div className="project-footer">
                <span>Predictive analytics.</span>
                <span className="project-link" onClick={() => openProjectLink("https://github.com/MOHANSAIBUCHIREDDYGARI/Customer-Churn.git")}>
                  <i className="fa-solid fa-chart-line"></i> View Project →
                </span>
              </div>
            </article>

            {/* Project 6 */}
            <article className="project-card fade-in">
              <div className="project-content">
                <div className="project-badge">Embedded · IoT</div>
                <h3 className="project-title">STM32 Smart Streetlight</h3>
                <p className="project-desc">
                  Automated controller using <strong>STM32</strong> and RTC. Features ultrasonic sensing for brightness adjustment, multiple modes, and power-recovery protocols.
                </p>
              </div>
              <div className="project-tech">
                <span>C</span>
                <span>Keil uVision</span>
                <span>STM32</span>
                <span>Sensors</span>
              </div>
              <div className="project-footer">
                <span>Real-time control.</span>
                <span className="project-link" onClick={() => openProjectLink("https://github.com/MOHANSAIBUCHIREDDYGARI/Automated-Street-Light-Timer.git")}>
                  <i className="fa-solid fa-microchip"></i> View Project →
                </span>
              </div>
            </article>

            {/* Project 7: Restored */}
            <article className="project-card fade-in">
              <div className="project-content">
                <div className="project-badge">Robotics · Simulation</div>
                <h3 className="project-title">Autonomous Delivery System</h3>
                <p className="project-desc">
                  A multi-robot system in <strong>Webots</strong> where robots coordinate deliveries using supervisor control and <strong>reactive navigation</strong> (GPS/Compass/IR) for collision avoidance.
                </p>
              </div>
              <div className="project-tech">
                <span>Python</span>
                <span>Webots</span>
                <span>Reactive Navigation</span>
                <span>Multi-Agent</span>
              </div>
              <div className="project-footer">
                <span>Dynamic automation.</span>
                <span className="project-link" onClick={() => openProjectLink("https://github.com/Amrita-csvelayutham/project-problem-identification-and-formulation-MOHANSAIBUCHIREDDYGARI.git")}>
                  <i className="fa-solid fa-robot"></i> View Project →
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION (NEW) */}
      <section id="experience">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Work Experience</h2>
            <div className="line"></div>
          </div>

          <div className="experience-timeline">
            <div className="exp-item fade-in">
              <div className="exp-dot"></div>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">Software Development Intern</h3>
                    <div className="exp-company">BlueStock (Remote)</div>
                  </div>
                  <div className="exp-date">Oct 2025 – Nov 2025</div>
                </div>
                <ul className="exp-list">
                  <li>Engineered an automated data pipeline to fetch and process financial statements (Balance Sheet, P&L, Cash Flow) via REST APIs.</li>
                  <li>Integrated Machine Learning algorithms to generate real-time financial insights, optimizing data persistence using a MySQL database.</li>
                  <li>Developed a dual-interface display system (Web & Terminal) to visualize analytical results for immediate stakeholder review.</li>
                </ul>
                <div className="exp-tech">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>React</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Certifications & Achievements</h2>
            <div className="line"></div>
          </div>

          <div className="cert-grid">
            <div className="cert-card fade-in">
              <div className="cert-icon"><i className="fa-solid fa-briefcase"></i></div>
              <div className="cert-details">
                <h4>Software Development Intern</h4>
                <p>Practical industry experience in development cycles.</p>
                <span className="cert-link" onClick={() => openCertificate("BFSD132589.pdf")} style={{cursor: "pointer", color: "#3b82f6", fontWeight: 600}}>
                  <i className="fa-solid fa-eye"></i> View Certificate
                </span>
              </div>
            </div>
            
            <div className="cert-card fade-in">
              <div className="cert-icon"><i className="fa-brands fa-python"></i></div>
              <div className="cert-details">
                <h4>Udemy Complete Python Developer</h4>
                <p>Comprehensive training in Python programming.</p>
                <span className="cert-link" onClick={() => openCertificate("python udemy certificate.pdf")} style={{cursor: "pointer", color: "#3b82f6", fontWeight: 600}}>
                  <i className="fa-solid fa-eye"></i> View Certificate
                </span>
              </div>
            </div>

            <div className="cert-card fade-in">
              <div className="cert-icon"><i className="fa-solid fa-trophy"></i></div>
              <div className="cert-details">
                <h4>Adobe Hackathon Participation</h4>
                <p>Competitive problem solving and innovation.</p>
                <span className="cert-link" onClick={() => openCertificate("Adobe_Hackathon.pdf")} style={{cursor: "pointer", color: "#3b82f6", fontWeight: 600}}>
                  <i className="fa-solid fa-eye"></i> View Certificate
                </span>
              </div>
            </div>

            <div className="cert-card fade-in">
              <div className="cert-icon"><i className="fa-solid fa-certificate"></i></div>
              <div className="cert-details">
                <h4>Data Science for Engineers - NPTEL</h4>
                <p>IIT Madras Certification (Top 2% Elite).</p>
                <span className="cert-link" onClick={() => openCertificate("Data Science for Engineers.pdf")} style={{cursor: "pointer", color: "#3b82f6", fontWeight: 600}}>
                  <i className="fa-solid fa-eye"></i> View Certificate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Education</h2>
            <div className="line"></div>
          </div>
          <div className="education-timeline">
            <div className="edu-item fade-in">
              <div className="edu-dot"></div>
              <div className="edu-card">
                <div className="edu-title">B.Tech in Computer Science & Engineering</div>
                <div className="edu-school">Amrita Vishwa Vidyapeetham</div>
                <div className="edu-meta">
                  <span>2023 - Present</span>
                  <span className="edu-grade">CGPA: 8.03</span>
                </div>
              </div>
            </div>
            
             <div className="edu-item fade-in">
              <div className="edu-dot"></div>
              <div className="edu-card">
                <div className="edu-title">Intermediate Education</div>
                <div className="edu-school">Sri Chaitanya Jr. College</div>
                <div className="edu-meta">
                  <span>2021 - 2023</span>
                  <span className="edu-grade">93.4%</span>
                </div>
              </div>
            </div>

             <div className="edu-item fade-in">
              <div className="edu-dot"></div>
              <div className="edu-card">
                <div className="edu-title">Secondary School</div>
                <div className="edu-school">Dr. KKR Gowtham School</div>
                <div className="edu-meta">
                  <span>2020 - 2021</span>
                  <span className="edu-grade">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Get In Touch</h2>
            <div className="line"></div>
          </div>
          <div className="contact-card fade-in">
            <p className="contact-lead">I am actively seeking internships and opportunities.</p>
            <div className="contact-info-list">
              <a href="mailto:mohansai1810@gmail.com" className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <span>mohansai1810@gmail.com</span>
              </a>
              <a href="tel:+917093213810" className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>+91 7093213810</span>
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/MOHANSAIBUCHIREDDYGARI"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/mohansai1810/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p>&copy; 2025 Buchireddygari Mohan Sai.</p>
        </div>
      </footer>
    </>
  );

}
