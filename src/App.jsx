// App.jsx - Hasna Portfolio — Refined Editorial Theme
import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.animate]));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React", level: 80, cat: "Frontend" },
    { name: "JavaScript", level: 85, cat: "Frontend" },
    { name: "HTML5 & CSS3", level: 99, cat: "Frontend" },
    { name: "Tailwind CSS", level: 82, cat: "Frontend" },
    { name: "Node.js", level: 75, cat: "Backend" },
    { name: "Express", level: 75, cat: "Backend" },
    { name: "MongoDB", level: 70, cat: "Backend" },
    { name: "Figma", level: 95, cat: "Tools" },
  ];

  const projects = [
    {
      title: "Zenly",
      year: "2026",
      tagline: "Student wellbeing platform for mental health support",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Hasna17806/Zenly",
      features: ["Mood tracking", "Focus sessions", "Chat support", "Progress analytics"],
      index: "01",
    },
    {
      title: "BagHaven",
      year: "2025",
      tagline: "Full-stack e-commerce platform for bags",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      github: "https://github.com/Hasna17806/BagHaven",
      features: ["User auth", "Product catalog", "Cart management", "Payment integration"],
      index: "02",
    },
    {
      title: "Zyra",
      year: "2025",
      tagline: "Frontend e-commerce platform with modern UI",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://zyra-xi.vercel.app/",
      features: ["Responsive design", "Product filtering", "Shopping cart", "Animations"],
      index: "03",
    },
  ];

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0C0C0E", color: "#E8E6E1", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; cursor: none; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0C0C0E; }
        ::-webkit-scrollbar-thumb { background: #3D6B68; border-radius: 2px; }

        #custom-cursor {
          position: fixed; width: 12px; height: 12px;
          background: #6EC6BE; border-radius: 50%;
          pointer-events: none; z-index: 9999;
          transition: transform 0.15s ease, opacity 0.2s;
          mix-blend-mode: screen;
        }
        #cursor-follower {
          position: fixed; width: 36px; height: 36px;
          border: 1px solid rgba(110, 198, 190, 0.35);
          border-radius: 50%; pointer-events: none; z-index: 9998;
          transition: left 0.18s ease, top 0.18s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes barFill {
          from { width: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .reveal { opacity: 0; }
        .reveal.visible { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .reveal-delay-1.visible { animation-delay: 0.1s; }
        .reveal-delay-2.visible { animation-delay: 0.2s; }
        .reveal-delay-3.visible { animation-delay: 0.3s; }
        .reveal-delay-4.visible { animation-delay: 0.4s; }
        .reveal-delay-5.visible { animation-delay: 0.5s; }

        .nav-link {
          position: relative; font-size: 0.8rem; letter-spacing: 0.1em;
          text-transform: uppercase; font-weight: 500; color: #8A8480;
          background: none; border: none; cursor: none; padding: 4px 0;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: #6EC6BE;
          transition: width 0.3s ease;
        }
        .nav-link:hover, .nav-link.active { color: #E8E6E1; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .primary-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px; background: #6EC6BE; color: #0C0C0E;
          font-family: 'DM Sans', sans-serif; font-size: 0.85rem;
          font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
          border: none; cursor: none; transition: all 0.3s ease;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .primary-btn:hover { background: #8DD8D2; transform: translateY(-2px); }

        .ghost-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 31px; background: transparent; color: #6EC6BE;
          font-family: 'DM Sans', sans-serif; font-size: 0.85rem;
          font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
          border: 1px solid rgba(110, 198, 190, 0.4); cursor: none;
          transition: all 0.3s ease;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .ghost-btn:hover {
          background: rgba(110, 198, 190, 0.08);
          border-color: #6EC6BE; transform: translateY(-2px);
        }

        .project-row {
          border-top: 1px solid rgba(255,255,255,0.07);
          transition: all 0.4s ease;
          cursor: none;
        }
        .project-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.07); }
        .project-row:hover { background: rgba(110, 198, 190, 0.04); }
        .project-row:hover .proj-index { color: #6EC6BE; }
        .project-row:hover .proj-arrow { transform: translate(4px, -4px); opacity: 1; }

        .proj-arrow { opacity: 0; transition: all 0.3s ease; }

        .skill-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px;
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 0.8rem; letter-spacing: 0.04em; font-weight: 500;
          transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .skill-pill::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(110,198,190,0.1), transparent);
          transform: translateX(-100%); transition: transform 0.4s ease;
        }
        .skill-pill:hover { border-color: rgba(110, 198, 190, 0.4); color: #6EC6BE; }
        .skill-pill:hover::before { transform: translateX(0); }

        .social-icon {
          width: 42px; height: 42px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.1); color: #8A8480;
          transition: all 0.3s ease; cursor: none; text-decoration: none;
        }
        .social-icon:hover { border-color: #6EC6BE; color: #6EC6BE; transform: translateY(-3px); }

        .stat-card {
          padding: 24px; border: 1px solid rgba(255,255,255,0.06);
          text-align: center; position: relative; overflow: hidden;
          background: rgba(255,255,255,0.02);
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .stat-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 40px; height: 2px; background: #6EC6BE;
        }

        .tech-tag {
          font-size: 0.7rem; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 4px 10px; background: rgba(110,198,190,0.08);
          color: #6EC6BE; border: 1px solid rgba(110,198,190,0.2);
          font-weight: 500;
        }

        .contact-link {
          font-size: 1rem; color: #6EC6BE; text-decoration: none;
          font-weight: 500; display: inline-flex; align-items: center; gap: 8px;
          transition: gap 0.3s;
        }
        .contact-link:hover { gap: 14px; }

        .noise-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 1;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glow-orb {
          position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
          .hero-heading { font-size: clamp(2.8rem, 12vw, 4rem) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 769px) {
          .mobile-btn { display: none !important; }
          .mobile-nav-panel { display: none !important; }
        }
      `}</style>

      {/* Custom Cursor */}
      <div id="custom-cursor" style={{ left: cursorPos.x - 6, top: cursorPos.y - 6 }} />
      <div id="cursor-follower" style={{ left: cursorPos.x - 18, top: cursorPos.y - 18 }} />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        padding: "0 40px",
        background: scrolled ? "rgba(12,12,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 72 }}>
          <div onClick={() => scrollToSection("home")} style={{ cursor: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, background: "#6EC6BE", borderRadius: "50%", animation: "pulse 2s ease infinite" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", letterSpacing: "0.05em", color: "#E8E6E1" }}>Hasna</span>
            <span style={{ color: "#3D6B68", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem" }}>Hamza</span>
          </div>

          <div className="desktop-nav" style={{ display: "flex", gap: 40 }}>
            {navItems.map((item) => (
              <button key={item} className={`nav-link ${activeSection === item ? "active" : ""}`} onClick={() => scrollToSection(item)}>
                {item}
              </button>
            ))}
          </div>

          <button className="mobile-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: "none", border: "none", cursor: "none", color: "#E8E6E1", display: "none", flexDirection: "column", gap: 5, padding: 8 }}>
            <span style={{ width: 24, height: 1.5, background: isMenuOpen ? "#6EC6BE" : "#E8E6E1", display: "block", transition: "all 0.3s", transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ width: 16, height: 1.5, background: isMenuOpen ? "#6EC6BE" : "#E8E6E1", display: "block", transition: "all 0.3s", opacity: isMenuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 1.5, background: isMenuOpen ? "#6EC6BE" : "#E8E6E1", display: "block", transition: "all 0.3s", transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav-panel" style={{ background: "rgba(12,12,14,0.97)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 40px" }}>
            {navItems.map((item, i) => (
              <button key={item} onClick={() => scrollToSection(item)} style={{
                display: "block", background: "none", border: "none", cursor: "none",
                color: activeSection === item ? "#6EC6BE" : "#8A8480",
                fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700,
                padding: "12px 0", textAlign: "left", width: "100%",
                animation: `fadeUp 0.4s ${i * 0.07}s both`,
              }}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 40px", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" />
        <div className="glow-orb" style={{ width: 500, height: 500, background: "rgba(61,107,104,0.2)", top: "10%", right: "-10%" }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: "rgba(110,198,190,0.06)", bottom: "20%", left: "-5%" }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%", paddingTop: 100 }}>
          <div style={{ maxWidth: 820 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, animation: "fadeUp 0.6s 0.1s both" }}>
              <div style={{ width: 40, height: 1, background: "#6EC6BE" }} />
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6EC6BE", fontWeight: 500 }}>MERN Stack Developer</span>
            </div>

            <h1 className="hero-heading" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em",
              marginBottom: 32, animation: "fadeUp 0.7s 0.2s both",
            }}>
              Hi, I'm <span style={{ color: "#6EC6BE" }}>Hasna.</span><br />
              <em style={{ fontStyle: "italic", color: "#8A8480", fontWeight: 400, fontSize: "0.85em" }}>I build for the web.</em>
            </h1>

            <p style={{
              fontSize: "1.05rem", lineHeight: 1.75, color: "#8A8480",
              maxWidth: 540, marginBottom: 48, animation: "fadeUp 0.7s 0.35s both",
            }}>
              Crafting responsive, thoughtful web experiences with modern technologies — from pixel-perfect interfaces to robust APIs.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 80, animation: "fadeUp 0.7s 0.45s both" }}>
              <button className="primary-btn" onClick={() => scrollToSection("projects")}>
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="ghost-btn" onClick={() => scrollToSection("contact")}>Get in Touch</button>
            </div>

            <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 480, animation: "fadeUp 0.7s 0.55s both" }}>
              {[["3+", "Projects"], ["1+", "Years Exp."], ["9+", "Technologies"]].map(([num, label]) => (
                <div key={label} className="stat-card">
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#6EC6BE", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5A5652", marginTop: 6, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 2.5s ease-in-out infinite" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3D4A48" }}>scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #3D6B68, transparent)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 40px", position: "relative" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 72 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>About</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", maxWidth: 120 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3D6B68" }}>Me</span>
          </div>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
            data-animate="about"
          >
            <div className={`reveal ${visibleSections.has("about") ? "visible" : ""}`} data-animate="about">
              <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "#8A8480", marginBottom: 28 }}>
                I'm a passionate MERN Stack Developer with a strong foundation in modern web technologies. I love creating clean, efficient, and user-friendly applications that solve real-world problems.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "#8A8480", marginBottom: 40 }}>
                My journey started with curiosity for how websites work — and quickly became a deep passion for both the creative and technical sides of development.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6EC6BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    ),
                    text: "Based in India"
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6EC6BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <path d="M8 21h8M12 17v4"/>
                      </svg>
                    ),
                    text: "Full Stack Developer"
                  },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(110,198,190,0.08)", flexShrink: 0 }}>{icon}</span>
                    <span style={{ fontSize: "0.9rem", color: "#C8C5C0", letterSpacing: "0.02em" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Frontend Development", desc: "Responsive SPAs with React, Tailwind CSS & modern animations", icon: "⬡" },
                { title: "Backend Development", desc: "RESTful APIs with Node.js & Express for scalable services", icon: "⬡" },
                { title: "Database Management", desc: "MongoDB & Mongoose for efficient, well-modeled data", icon: "⬡" },
              ].map((svc, i) => (
                <div key={svc.title}
                  className={`reveal reveal-delay-${i + 1} ${visibleSections.has("about") ? "visible" : ""}`}
                  data-animate="about"
                  style={{
                    padding: "24px 28px", border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)", display: "flex", gap: 20, alignItems: "flex-start",
                    transition: "border-color 0.3s",
                    clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
                  }}
                >
                  <span style={{ color: "#6EC6BE", fontSize: "1.1rem", marginTop: 2, flexShrink: 0 }}>{svc.icon}</span>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.04em", marginBottom: 6, color: "#E8E6E1" }}>{svc.title}</h4>
                    <p style={{ fontSize: "0.82rem", color: "#5A5652", lineHeight: 1.65 }}>{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "120px 40px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 72 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>My</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", maxWidth: 120 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3D6B68" }}>Skills</span>
          </div>

          <div data-animate="skills" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {skills.map((skill, i) => (
              <div key={skill.name}
                className={`skill-pill reveal reveal-delay-${Math.min(i + 1, 5)} ${visibleSections.has("skills") ? "visible" : ""}`}
                data-animate="skills"
              >
                <div style={{ width: 28, height: 3, background: "rgba(110,198,190,0.3)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", background: "#6EC6BE", borderRadius: 2,
                    width: visibleSections.has("skills") ? `${skill.level}%` : "0%",
                    transition: `width 1.2s ${i * 0.08}s ease`,
                  }} />
                </div>
                <span style={{ color: "#C8C5C0" }}>{skill.name}</span>
                <span style={{ color: "#3D6B68", fontSize: "0.7rem", fontWeight: 600, marginLeft: "auto" }}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 72 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>Featured</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", maxWidth: 120 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3D6B68" }}>Projects</span>
          </div>

          <div data-animate="projects">
            {projects.map((proj, i) => (
              <a key={proj.title} href={proj.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className={`project-row reveal reveal-delay-${i + 1} ${visibleSections.has("projects") ? "visible" : ""}`}
                  data-animate="projects"
                  style={{ padding: "36px 0", display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 40, alignItems: "center" }}
                >
                  <span className="proj-index" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.5rem", color: "#3D4A48", transition: "color 0.3s" }}>{proj.index}</span>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700 }}>{proj.title}</h3>
                      <span style={{ fontSize: "0.7rem", color: "#5A5652", letterSpacing: "0.08em" }}>{proj.year}</span>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#5A5652", marginBottom: 16, lineHeight: 1.6 }}>{proj.tagline}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {proj.tech.slice(0, 4).map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="proj-arrow" style={{ color: "#6EC6BE" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 40px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 72 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>Get In</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", maxWidth: 120 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3D6B68" }}>Touch</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div data-animate="contact" className={`reveal ${visibleSections.has("contact") ? "visible" : ""}`}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#8A8480", marginBottom: 40 }}>
                Open to new opportunities, collaborations, and interesting conversations. Whether it's a project idea or just a hello — I'd love to hear from you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D6B68", display: "block", marginBottom: 8, fontWeight: 600 }}>Email</span>
                  <a href="mailto:hasnahamza807@gmail.com" className="contact-link">
                    hasnahamza807@gmail.com
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D6B68", display: "block", marginBottom: 12, fontWeight: 600 }}>Elsewhere</span>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a href="https://github.com/Hasna17806" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/hasna-hamza-087823403/" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div data-animate="contact2" className={`reveal reveal-delay-2 ${visibleSections.has("contact") ? "visible" : ""}`}
              style={{ padding: "48px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(110,198,190,0.03)", position: "relative", overflow: "hidden",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 1, background: "#6EC6BE", transformOrigin: "right", animation: `${visibleSections.has("contact") ? "lineGrow 0.8s 0.5s both" : "none"}` }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: 1, height: 60, background: "#6EC6BE" }} />

              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.4rem", color: "#6EC6BE", lineHeight: 1.6, marginBottom: 24 }}>
                "Great things are built one line of code at a time."
              </p>
              <p style={{ fontSize: "0.8rem", color: "#3D6B68", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>— Available for freelance & collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "32px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, background: "#6EC6BE", borderRadius: "50%" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#E8E6E1" }}>Hasna</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#3D6B68", fontSize: "0.95rem" }}>Hamza</span>
          </div>
          <span style={{ fontSize: "0.72rem", color: "#3D4A48", letterSpacing: "0.06em" }}>© 2024 — All rights reserved</span>
          <div style={{ display: "flex", gap: 24 }}>
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)}
                style={{ background: "none", border: "none", cursor: "none", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#3D4A48", transition: "color 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#6EC6BE"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#3D4A48"}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;