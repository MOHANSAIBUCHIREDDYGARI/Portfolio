import { useEffect, useState } from "react";
// Ensure this import is here to apply the styles
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
    // --- Mobile Menu Logic ---
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

    // --- Smooth Scroll Logic ---
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });

    // --- Intersection Observer (Reveal animations) ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el, index) => {
      el.setAttribute('data-delay', (index % 3) * 100); 
      observer.observe(el);
    });

    return () => {
      menuToggle?.removeEventListener("click", handleMenuClick);
    };
  }, []);

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">
            B. Mohan Sai<span style={{color: "var(--accent)"}}>.</span>
          </a>

          <div className="nav-right">
            <ul className="nav-menu" id="navLinks">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#certifications">Awards</a></li>
            </ul>

            <div className="nav-controls">
              <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                <i className={`fa-solid ${isLightMode ? "fa-moon" : "fa-sun"}`}></i>
              </button>
              
              <button className="menu-btn" id="menuToggle">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <div className="hero-badge">Available for Internships</div>
            <h1>
              Building intelligent systems<br />
              and scalable software.
            </h1>
            <p className="hero-text">
              Hi, I'm <strong>Mohan Sai</strong>. I'm a Computer Science student blending 
              Full Stack Development with Embedded Systems & AI to create software that interacts with the real world.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
            
            <div className="social-row">
               <a href="https://github.com/MOHANSAIBUCHIREDDYGARI" target="_blank"><i className="fab fa-github"></i></a>
               <a href="mailto:mohansai1810@gmail.com"><i className="fa-solid fa-envelope"></i></a>
               <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a> 
            </div>
          </div>
          
          {/* Code Visual */}
          <div className="hero-visual fade-in">
            <div className="code-card">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-body">
                <div className="code-line"><span className="k">const</span> <span className="v">engineer</span> = &#123;</div>
                <div className="code-line indent">name: <span className="s">"Mohan Sai"</span>,</div>
                <div className="code-line indent">focus: [<span className="s">"Web"</span>, <span className="s">"Robotics"</span>, <span className="s">"AI"</span>],</div>
                <div className="code-line indent">status: <span className="s">"Building Solutions"</span></div>
                <div className="code-line">&#125;;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <div className="container">
          <div className="split-layout">
            
            {/* IMAGE COLUMN */}
            <div className="about-image-container fade-in">
               <img 
                 src="/mohan-sai.jpg" 
                 alt="Mohan Sai" 
                 className="profile-img" 
               />
               <div className="experience-badge">
                 <span className="year">3+</span>
                 <span>Years<br/>Coding</span>
               </div>
            </div>

            {/* TEXT COLUMN */}
            <div className="about-text fade-in">
              <h2 className="section-title">About Me</h2>
              <p>
                I am a Computer Science & Engineering undergraduate at <strong>Amrita Vishwa Vidyapeetham</strong> (CGPA 8.03).
              </p>
              <p>
                My journey isn't just about learning languages; it's about solving problems. From optimizing traffic flow using <strong>Genetic Algorithms</strong> to simulating autonomous multi-robot delivery systems in <strong>Webots</strong>, I love projects that have tangible complexity.
              </p>
              <p>
                Currently, I'm refining my skills in <strong>React</strong> for front-end fluidity and <strong>Python/C</strong> for backend logic. I'm looking for opportunities where I can contribute to meaningful engineering challenges.
              </p>
              
              <div className="about-stats-row">
                 <div className="mini-stat">
                    <strong>8.03</strong> <span>CGPA</span>
                 </div>
                 <div className="mini-stat">
                    <strong>6+</strong> <span>Projects</span>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section bg-alt">
        <div className="container">
          <h2 className="section-title fade-in">Technical Arsenal</h2>
          <div className="skills-grid">
            
            <div className="skill-category fade-in">
              <h3><i className="fa-solid fa-code"></i> Languages</h3>
              <div className="skill-list">
                <span>Python</span>
                <span>Java</span>
                <span>C / C++</span>
                <span>JavaScript</span>
                <span>Dart</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <h3><i className="fa-solid fa-layer-group"></i> Frameworks & Web</h3>
              <div className="skill-list">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Flask</span>
                <span>Streamlit</span>
                <span>HTML5 / CSS3</span>
              </div>
            </div>

            <div className="skill-category fade-in">
              <h3><i className="fa-solid fa-microchip"></i> Tools & Domains</h3>
              <div className="skill-list">
                <span>Git / GitHub</span>
                <span>Webots (Sim)</span>
                <span>Keil uVision</span>
                <span>Machine Learning</span>
                <span>IoT / Embedded</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header fade-in">
             <h2 className="section-title">Featured Projects</h2>
             <a href="https://github.com/MOHANSAIBUCHIREDDYGARI" target="_blank" className="view-all">View Github <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card fade-in">
              <div className="card-top">
                <div className="folder-icon"><i className="fa-regular fa-folder"></i></div>
                <div className="card-links">
                  <a href="#" title="Repo Private"><i className="fa-solid fa-lock"></i></a>
                </div>
              </div>
              <h3>ML Stock Market Analysis</h3>
              <p>
                A financial analysis tool using React and Flask. Aggregates API data and uses ML models to provide fundamental stock insights and visualizations.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>React</span>
                <span>Flask</span>
                <span>ML</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card fade-in">
              <div className="card-top">
                <div className="folder-icon"><i className="fa-regular fa-folder"></i></div>
                <div className="card-links">
                  <a href="https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-12_powerrangers.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
              </div>
              <h3>Edge-Based V2X Protocol</h3>
              <p>
                Smart city traffic optimization. Implemented pathfinding (Ant Colony/BFS) and Genetic Algorithms in SUMO to reroute emergency vehicles dynamically.
              </p>
              <div className="tech-stack">
                <span>SUMO</span>
                <span>Python</span>
                <span>Algorithms</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card fade-in">
               <div className="card-top">
                <div className="folder-icon"><i className="fa-regular fa-folder"></i></div>
                <div className="card-links">
                  <a href="https://github.com/Sandeep-Merugumala/ShopsBuzz.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
              </div>
              <h3>ShopsBuzz E-Commerce</h3>
              <p>
                Full-stack shopping platform. Architected the MySQL database and built a responsive frontend/backend to handle user sessions and payments.
              </p>
              <div className="tech-stack">
                <span>MySQL</span>
                <span>PHP/JS</span>
                <span>Web Dev</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card fade-in">
               <div className="card-top">
                <div className="folder-icon"><i className="fa-regular fa-folder"></i></div>
                <div className="card-links">
                  <a href="https://github.com/MOHANSAIBUCHIREDDYGARI/Automated-Street-Light-Timer.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
              </div>
              <h3>STM32 Smart Streetlight</h3>
              <p>
                Embedded C system using STM32 & RTC. Features ultrasonic sensing for brightness control and power-recovery protocols for energy efficiency.
              </p>
              <div className="tech-stack">
                <span>Embedded C</span>
                <span>Keil</span>
                <span>Hardware</span>
              </div>
            </div>
             
             {/* Project 5 */}
            <div className="project-card fade-in">
               <div className="card-top">
                <div className="folder-icon"><i className="fa-regular fa-folder"></i></div>
                <div className="card-links">
                  <a href="https://github.com/Amrita-csvelayutham/project-problem-identification-and-formulation-MOHANSAIBUCHIREDDYGARI.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
              </div>
              <h3>Autonomous Delivery Bots</h3>
              <p>
                Multi-robot system in Webots. Implemented supervisor control and reactive navigation (GPS/IR) to coordinate deliveries without collisions.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>Webots</span>
                <span>Robotics</span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card fade-in">
               <div className="card-top">
                <div className="folder-icon"><i className="fa-regular fa-folder"></i></div>
                <div className="card-links">
                  <a href="https://github.com/MOHANSAIBUCHIREDDYGARI/Customer-Churn.git" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
              </div>
              <h3>Customer Churn Prediction</h3>
              <p>
                End-to-end ML pipeline. From EDA to training Logistic Regression models, deployed via a Streamlit dashboard for business insights.
              </p>
              <div className="tech-stack">
                <span>Scikit-Learn</span>
                <span>Streamlit</span>
                <span>Data Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & EDUCATION ================= */}
      <section id="certifications" className="section bg-alt">
        <div className="container">
          <h2 className="section-title fade-in">Certifications & Education</h2>
          
          <div className="cert-layout">
             <div className="cert-column fade-in">
                <h3 className="column-title">Certifications</h3>
                <ul className="cert-list">
                   <li onClick={() => openLink("BFSD132589.pdf")}>
                      <span className="cert-name">Software Development Intern</span>
                      <span className="cert-issuer">Industry Exp</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                   </li>
                   <li onClick={() => openLink("python udemy certificate.pdf")}>
                      <span className="cert-name">Complete Python Developer</span>
                      <span className="cert-issuer">Udemy</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                   </li>
                   <li onClick={() => openLink("Data Science for Engineers.pdf")}>
                      <span className="cert-name">Data Science for Engineers</span>
                      <span className="cert-issuer">NPTEL (IIT Madras)</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                   </li>
                   <li onClick={() => openLink("Adobe_Hackathon.pdf")}>
                      <span className="cert-name">Adobe Hackathon Participant</span>
                      <span className="cert-issuer">Adobe</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                   </li>
                </ul>
             </div>

             <div className="cert-column fade-in">
                <h3 className="column-title">Education</h3>
                <div className="edu-item">
                   <div className="edu-head">
                      <strong>B.Tech in Computer Science</strong>
                      <span>2023 - Present</span>
                   </div>
                   <div className="edu-school">Amrita Vishwa Vidyapeetham</div>
                   <div className="edu-score">CGPA: 8.03</div>
                </div>
                <div className="edu-item">
                   <div className="edu-head">
                      <strong>Intermediate (MPC)</strong>
                      <span>2021 - 2023</span>
                   </div>
                   <div className="edu-school">Sri Chaitanya Jr. College</div>
                   <div className="edu-score">93.4%</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">
        <div className="container center-text fade-in">
          <h2>Let's work together.</h2>
          <p className="contact-sub">
            I am currently seeking internship opportunities. <br/>
            Whether you have a question or just want to say hi, my inbox is open.
          </p>
          
          <a href="mailto:mohansai1810@gmail.com" className="btn btn-primary big-btn">
            Say Hello
          </a>

          <div className="footer-links">
             <a href="tel:+917093213810">+91 7093213810</a>
             <span>•</span>
             <a href="MOHAN SAI BUCHIREDDYGARI.pdf" download>Download Resume</a>
          </div>
          
          <footer className="footer-copyright">
            <p>&copy; 2025 Buchireddygari Mohan Sai. Built with React.</p>
          </footer>
        </div>
      </section>
    </>
  );
}