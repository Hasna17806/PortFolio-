import React, { useState, useEffect, useRef } from "react";
import profile from "./assets/profile.png"
import resume from "./assets/Hasna Hamza - MernStack Developer.pdf";
import zenly from "./assets/Zenly.png";
import zenSpend from "./assets/ZenSpend.png";
import ziblio from "./assets/Ziblio.png";
import BagHaven from "./assets/BagHaven.png";
import zyra from "./assets/Zyra.png";

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
    { name: "HTML5", cat: "Frontend" },
    { name: "CSS3", cat: "Frontend" },
    { name: "JavaScript", cat: "Frontend" },
    { name: "TypeScript", cat: "Frontend" },
    { name: "React.js", cat: "Frontend" },
    { name: "Next.js", cat: "Frontend" },
    { name: "Tailwind CSS", cat: "Frontend" },

    { name: "Redux", cat: "State Management" },
    { name: "Redux Toolkit", cat: "State Management" },
    { name: "React Redux", cat: "State Management" },

    { name: "Node.js", cat: "Backend" },
    { name: "Express.js", cat: "Backend" },
    { name: "REST APIs", cat: "Backend" },

    { name: "MongoDB", cat: "Database" },
    { name: "Mongoose", cat: "Database" },

    { name: "NextAuth.js", cat: "Authentication" },
    { name: "JWT", cat: "Authentication" },
    { name: "Authentication", cat: "Authentication" },
    { name: "Authorization", cat: "Authentication" },
    { name: "Protected Routes", cat: "Authentication" },

    { name: "Git", cat: "Tools" },
    { name: "GitHub", cat: "Tools" },
    { name: "Postman", cat: "Tools" },
    { name: "Figma", cat: "Tools" },
    { name: "Vite", cat: "Tools" },
    { name: "npm", cat: "Tools" },

    { name: "CRUD Operations", cat: "Concepts" },
    { name: "MVC Architecture", cat: "Concepts" },
    { name: "API Integration", cat: "Concepts" },
    { name: "Responsive Web Design", cat: "Concepts" },
    { name: "Data Structures & Algorithms", cat: "Concepts" },
  ];

  const skillCategories = ["Frontend", "State Management", "Backend", "Database", "Authentication", "Tools", "Concepts"];

const projects = [
  {
    title: "Zenly",
    type: "Full Stack MERN Application",
    year: "2026",
    tagline: "A full-stack student wellbeing platform built using the MERN stack, with authentication, authorization, REST APIs, MongoDB integration, and responsive React interfaces.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Hasna17806/Zenly",
    // demo: "https://zenly-1-frontend.onrender.com/",
    image: zenly,
    features: ["Mood tracking", "Focus sessions", "Challenge activities", "Figma UI/UX"],
    index: "01",
  },
  {
    title: "BagHaven",
    type: "Full Stack E-commerce Platform",
    year: "2025",
    tagline: "A full-stack e-commerce application for an online bag store with product management, shopping cart functionality, backend APIs, MongoDB integration, and PayPal payment integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "PayPal"],
    github: "https://github.com/Hasna17806/BagHaven",
    // demo: "",
    image: BagHaven, 
    features: ["User auth", "Shopping cart", "CRUD operations", "PayPal integration"],
    index: "02",
  },
  {
    title: "Zyra",
    type: "Fashion E-commerce Website",
    year: "2025",
    tagline: "A responsive fashion e-commerce frontend built with React.js and Tailwind CSS, featuring product browsing, product details, shopping cart functionality, and reusable components.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Hasna17806/Zyra",
    // demo: "https://zyra-xi.vercel.app/",
    image: zyra,
    features: ["Reusable components", "Product listing", "Mock backend", "Responsive design"],
    index: "03",
  },
  {
    title: "Ziblio",
    type: "Book Library Manager",
    year: "2026",
    tagline: "A full-stack book library management application built with Next.js App Router and TypeScript. Users can register, manage their personal book collection, search and filter books, and access protected pages.",
    tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth.js", "Tailwind CSS"],
    github: "https://github.com/Hasna17806/Ziblio-library-manager",
    // demo: "",
    image: ziblio,
    features: ["Authentication & protected routes", "CRUD operations", "Search & filtering", "User-specific books"],
    index: "04",
  },
  {
    title: "ZenSpend",
    type: "Full Stack Finance App",
    year: "2026",
    tagline: "A full-stack expense tracker built with Next.js and TypeScript for managing income and expense transactions. Originally built in JavaScript and later converted to TypeScript.",
    tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth.js", "Tailwind CSS"],
    github: "https://github.com/Hasna17806/ZenSpend-expense-tracker-ts",
    // demo: "",
    image: zenSpend,
    features: ["Authentication & protected routes", "Add/edit/delete transactions", "Search & filtering", "Dashboard summary"],
    index: "05",
  },
];

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#110D09", color: "#EDE3D3", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; cursor: none; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #110D09; }
        ::-webkit-scrollbar-thumb { background: #9C7C42; border-radius: 2px; }

        #custom-cursor {
          position: fixed; width: 12px; height: 12px;
          background: #C9A876; border-radius: 50%;
          pointer-events: none; z-index: 9999;
          transition: transform 0.15s ease, opacity 0.2s;
          mix-blend-mode: screen;
        }
        #cursor-follower {
          position: fixed; width: 36px; height: 36px;
          border: 1px solid rgba(201,168,118, 0.35);
          border-radius: 50%; pointer-events: none; z-index: 9998;
          transition: left 0.18s ease, top 0.18s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0) rotate(var(--tilt, 0deg)); }
          50%       { transform: translateY(-14px) rotate(var(--tilt, 0deg)); }
        }
        @keyframes outlineDrift {
          0%   { transform: translate(-50%, -50%) rotate(-6deg) scale(1); }
          50%  { transform: translate(-50%, -50%) rotate(-4deg) scale(1.015); }
          100% { transform: translate(-50%, -50%) rotate(-6deg) scale(1); }
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ringSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes badgePopIn {
          from { opacity: 0; transform: scale(0.4) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
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
          text-transform: uppercase; font-weight: 500; color: #A79A87;
          background: none; border: none; cursor: none; padding: 4px 0;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: #C9A876;
          transition: width 0.3s ease;
        }
        .nav-link:hover, .nav-link.active { color: #EDE3D3; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .primary-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px; background: #C9A876; color: #110D09;
          font-family: 'DM Sans', sans-serif; font-size: 0.85rem;
          font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
          border: none; cursor: none; transition: all 0.3s ease; text-decoration: none;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .primary-btn:hover { background: #DCC08A; transform: translateY(-2px); }

        .ghost-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 31px; background: transparent; color: #C9A876;
          font-family: 'DM Sans', sans-serif; font-size: 0.85rem;
          font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
          border: 1px solid rgba(201,168,118, 0.4); cursor: none; text-decoration: none;
          transition: all 0.3s ease;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .ghost-btn:hover {
          background: rgba(201,168,118, 0.08);
          border-color: #C9A876; transform: translateY(-2px);
        }

        .ghost-btn-sm {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 22px; background: transparent; color: #EDE3D3;
          font-family: 'DM Sans', sans-serif; font-size: 0.78rem;
          font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.18); cursor: none; text-decoration: none;
          transition: all 0.3s ease;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .ghost-btn-sm:hover { border-color: #C9A876; color: #C9A876; transform: translateY(-2px); }

        .repo-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; background: transparent; color: #C9A876;
          font-family: 'DM Sans', sans-serif; font-size: 0.75rem;
          font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          border: 1px solid rgba(201,168,118, 0.3); cursor: pointer;
          transition: all 0.3s ease; text-decoration: none; flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        .repo-btn:hover {
          background: rgba(201,168,118, 0.1);
          border-color: #C9A876;
          transform: translateY(-1px);
        }

        .demo-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; background: #C9A876; color: #110D09;
          font-family: 'DM Sans', sans-serif; font-size: 0.75rem;
          font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          border: 1px solid #C9A876; cursor: pointer;
          transition: all 0.3s ease; text-decoration: none; flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        .demo-btn:hover { background: #DCC08A; transform: translateY(-1px); }

        .project-card {
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.015);
          transition: all 0.4s ease;
          display: flex; flex-direction: column;
          overflow: hidden;
        }
        .project-card:hover { border-color: rgba(201,168,118,0.35); transform: translateY(-4px); }
        .project-card:hover .proj-index { color: #C9A876; }
        .project-card:hover .proj-shot img { transform: scale(1.05); }

        .proj-shot {
          position: relative; width: 100%; aspect-ratio: 16 / 10;
          overflow: hidden; background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .proj-shot img {
          width: 100%; height: 100%; object-fit: cover; object-position: top;
          transition: transform 0.5s ease; display: block;
        }
        .proj-shot-fallback {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          color: #4A4030; font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.8rem;
          text-align: center; padding: 20px;
        }

        .skill-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px;
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 0.8rem; letter-spacing: 0.04em; font-weight: 500;
          transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .skill-pill::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,118,0.1), transparent);
          transform: translateX(-100%); transition: transform 0.4s ease;
        }
        .skill-pill:hover { border-color: rgba(201,168,118, 0.4); color: #C9A876; }
        .skill-pill:hover::before { transform: translateX(0); }

        .social-icon {
          width: 42px; height: 42px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.1); color: #A79A87;
          transition: all 0.3s ease; cursor: none; text-decoration: none;
        }
        .social-icon:hover { border-color: #C9A876; color: #C9A876; transform: translateY(-3px); }

        .stat-card {
          padding: 24px; border: 1px solid rgba(255,255,255,0.06);
          text-align: center; position: relative; overflow: hidden;
          background: rgba(255,255,255,0.02);
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .stat-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 40px; height: 2px; background: #C9A876;
        }

        .tech-tag {
          font-size: 0.7rem; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 4px 10px; background: rgba(201,168,118,0.08);
          color: #C9A876; border: 1px solid rgba(201,168,118,0.2);
          font-weight: 500;
        }

        .contact-link {
          font-size: 1rem; color: #C9A876; text-decoration: none;
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

        .exp-card {
          padding: 28px 32px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          position: relative;
          clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
        }
        .exp-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 3px; height: 100%; background: linear-gradient(to bottom, #C9A876, transparent);
        }

      .profile-photo-frame {
      position: relative; width: 350px; height: 400px; flex-shrink: 0;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
      border: 1px solid rgba(201,168,118,0.3);
      background: rgba(201,168,118,0.04);
      overflow: hidden;
    }

        .profile-photo-frame img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: grayscale(15%) contrast(1.02);
        }
        .profile-photo-fallback {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          color: #9C7C42; font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.8rem;
          text-align: center; padding: 16px;
        }

        .hero-visual {
          position: relative; width: 380px; height: 420px; flex-shrink: 0;
        }
        .hero-outline-text {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%) rotate(-6deg);
          font-family: 'Playfair Display', serif; font-weight: 700;
          font-size: clamp(4.5rem, 9vw, 7.5rem);
          white-space: nowrap; letter-spacing: 0.02em;
          color: transparent; -webkit-text-stroke: 1.5px rgba(201,168,118,0.35);
          animation: outlineDrift 9s ease-in-out infinite;
          pointer-events: none; user-select: none; z-index: 0;
        }
        .hero-spin-ring {
          position: absolute; inset: -22px; border-radius: 50%;
          border: 1px dashed rgba(201,168,118,0.3);
          animation: ringSpin 22s linear infinite;
          pointer-events: none;
        }
        .hero-spin-ring::before {
          content: ''; position: absolute; top: -3px; left: calc(50% - 3px);
          width: 6px; height: 6px; background: #C9A876; border-radius: 50%;
        }
        .tech-badge {
          position: absolute; display: flex; align-items: center; gap: 7px;
          padding: 8px 13px; background: rgba(18,18,20,0.92);
          border: 1px solid rgba(201,168,118,0.3);
          backdrop-filter: blur(6px);
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.03em; color: #EDE3D3;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
          animation: badgePopIn 0.6s cubic-bezier(0.22,1,0.36,1) both, badgeFloat 5s ease-in-out infinite;
          z-index: 3; cursor: none; transition: border-color 0.3s, transform 0.3s;
        }
        .tech-badge:hover { border-color: #C9A876; }
        .tech-badge .dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        .marquee-wrap {
          position: relative; overflow: hidden; width: 100%;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 16px 0;
        }
        .marquee-track {
          display: flex; width: max-content;
          animation: marqueeScroll 26s linear infinite;
        }
        .marquee-item {
          display: flex; align-items: center; gap: 14px;
          font-family: 'Playfair Display', serif; font-style: italic;
          font-size: 1.15rem; color: #9C7C42; white-space: nowrap;
          padding: 0 28px;
        }
        .marquee-item span.solid { color: #A79A87; font-style: normal; font-family: 'DM Sans', sans-serif; font-weight: 500; }

        .form-field {
          width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1); color: #EDE3D3;
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
          transition: border-color 0.3s; cursor: auto;
        }
        .form-field:focus { outline: none; border-color: #C9A876; }
        .form-field::placeholder { color: #6B5F4F; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
          .hero-heading { font-size: clamp(2.8rem, 12vw, 4rem) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .hero-top-row { flex-direction: column-reverse !important; align-items: center !important; }
          .hero-visual { width: 240px !important; height: 260px !important; margin: 0 auto 24px; }
          .hero-visual .profile-photo-frame { width: 180px !important; height: 210px !important; }
          .hero-outline-text { font-size: 3.4rem !important; }
          .tech-badge { padding: 6px 10px !important; font-size: 0.62rem !important; }
          .hero-spin-ring { inset: -12px !important; }
          .marquee-item { font-size: 0.95rem !important; padding: 0 18px !important; }
        }
        @media (min-width: 769px) and (max-width: 1080px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
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
            <div style={{ width: 8, height: 8, background: "#C9A876", borderRadius: "50%", animation: "pulse 2s ease infinite" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", letterSpacing: "0.05em", color: "#EDE3D3" }}>Hasna</span>
            <span style={{ color: "#9C7C42", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem" }}>Hamza</span>
          </div>

          <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {navItems.map((item) => (
              <button key={item} className={`nav-link ${activeSection === item ? "active" : ""}`} onClick={() => scrollToSection(item)}>
                {item}
              </button>
            ))}
            <a href={resume} download className="ghost-btn-sm">
              Download CV
            </a>
          </div>

          <button className="mobile-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: "none", border: "none", cursor: "none", color: "#EDE3D3", display: "none", flexDirection: "column", gap: 5, padding: 8 }}>
            <span style={{ width: 24, height: 1.5, background: isMenuOpen ? "#C9A876" : "#EDE3D3", display: "block", transition: "all 0.3s", transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ width: 16, height: 1.5, background: isMenuOpen ? "#C9A876" : "#EDE3D3", display: "block", transition: "all 0.3s", opacity: isMenuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 1.5, background: isMenuOpen ? "#C9A876" : "#EDE3D3", display: "block", transition: "all 0.3s", transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav-panel" style={{ background: "rgba(12,12,14,0.97)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 40px" }}>
            {navItems.map((item, i) => (
              <button key={item} onClick={() => scrollToSection(item)} style={{
                display: "block", background: "none", border: "none", cursor: "none",
                color: activeSection === item ? "#C9A876" : "#A79A87",
                fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700,
                padding: "12px 0", textAlign: "left", width: "100%",
                animation: `fadeUp 0.4s ${i * 0.07}s both`,
              }}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <a href={resume} download style={{
              display: "inline-block", marginTop: 12, color: "#C9A876",
              fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.2rem",
            }}>
              Download CV ↓
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 40px", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" />
        <div className="glow-orb" style={{ width: 500, height: 500, background: "rgba(156,124,66,0.2)", top: "10%", right: "-10%" }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: "rgba(201,168,118,0.06)", bottom: "20%", left: "-5%" }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%", paddingTop: 100 }}>
          <div className="hero-top-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 48, marginBottom: 16 }}>
            <div style={{ maxWidth: 780 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, animation: "fadeUp 0.6s 0.1s both" }}>
                <div style={{ width: 40, height: 1, background: "#C9A876" }} />
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A876", fontWeight: 500 }}>Full Stack Developer</span>
              </div>

              <h1 className="hero-heading" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 6.5vw, 5.8rem)",
                fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em",
                marginBottom: 32, animation: "fadeUp 0.7s 0.2s both",
              }}>
                Hi, I'm <span style={{ color: "#C9A876" }}>Hasna.</span><br />
                <em style={{ fontStyle: "italic", color: "#A79A87", fontWeight: 400, fontSize: "0.85em" }}>I build for the web.</em>
              </h1>

              <p style={{
                fontSize: "1.05rem", lineHeight: 1.75, color: "#A79A87",
                maxWidth: 560, marginBottom: 40, animation: "fadeUp 0.7s 0.35s both",
              }}>
                Full Stack Developer passionate about building responsive and practical web applications — from pixel-perfect interfaces to REST APIs backed by MongoDB. Currently building with Next.js and TypeScript, and sharpening my problem-solving through DSA.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, animation: "fadeUp 0.7s 0.45s both" }}>
                <button className="primary-btn" onClick={() => scrollToSection("projects")}>
                  View My Projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <a href={resume} download className="ghost-btn">
                  Download CV
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
                <button className="ghost-btn" onClick={() => scrollToSection("contact")}>Contact Me</button>
              </div>
            </div>

            <div
              className="hero-visual"
              style={{
                animation: "fadeUp 0.7s 0.25s both",
                transform: `perspective(900px) rotateY(${((cursorPos.x / (typeof window !== "undefined" ? window.innerWidth : 1440)) - 0.5) * 10}deg) rotateX(${-((cursorPos.y / (typeof window !== "undefined" ? window.innerHeight : 900)) - 0.5) * 10}deg)`,
                transition: "transform 0.25s ease-out",
              }}
            >
              <span className="hero-outline-text">Code</span>

              <div className="profile-photo-frame" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 280, height: 340 }}>
                <div className="hero-spin-ring" />
                <img
                  src={profile}
                  alt="Hasna Hamza"
                  onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
                />
              </div>

              {[
                { label: "React", color: "#61DAFB", top: "4%", left: "-8%", delay: "0s" },
                { label: "Node.js", color: "#8CC84B", top: "18%", right: "-14%", delay: "0.9s" },
                { label: "MongoDB", color: "#4DB33D", bottom: "26%", left: "-16%", delay: "0.4s" },
                { label: "Next.js", color: "#EDE3D3", bottom: "6%", right: "-6%", delay: "1.3s" },
                { label: "TypeScript", color: "#3178C6", top: "48%", left: "-20%", delay: "1.7s" },
              ].map((b, i) => (
                <div
                  key={b.label}
                  className="tech-badge"
                  style={{
                    top: b.top, left: b.left, right: b.right, bottom: b.bottom,
                    animationDelay: `${0.5 + i * 0.12}s, ${b.delay}`,
                    "--tilt": i % 2 === 0 ? "-3deg" : "3deg",
                  }}
                >
                  <span className="dot" style={{ background: b.color }} />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 480, marginTop: 56, marginBottom: 40, animation: "fadeUp 0.7s 0.55s both" }}>
            {[["5+", "Projects"], ["1+", "Years Exp."], ["20+", "Technologies"]].map(([num, label]) => (
              <div key={label} className="stat-card">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A876", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B5F4F", marginTop: 6, fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="marquee-wrap" style={{ animation: "fadeUp 0.7s 0.65s both" }}>
            <div className="marquee-track">
              {[...Array(2)].map((_, dup) => (
                <React.Fragment key={dup}>
                  {["MERN Stack", "React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "REST APIs"].map((t) => (
                    <span key={t + dup} className="marquee-item">
                      {t} <span className="solid">●</span>
                    </span>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 2.5s ease-in-out infinite" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A4030" }}>scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #9C7C42, transparent)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 40px", position: "relative" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 72 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>About</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", maxWidth: 120 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#9C7C42" }}>Me</span>
          </div>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
            data-animate="about"
          >
            <div className={`reveal ${visibleSections.has("about") ? "visible" : ""}`} data-animate="about">
              <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "#A79A87", marginBottom: 28 }}>
                I'm a Full Stack Developer with hands-on experience across the MERN stack, gained through a year-long internship and a series of self-built projects. I enjoy working on both the frontend and backend — from crafting responsive React interfaces to designing REST APIs and data models in MongoDB.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "#A79A87", marginBottom: 40 }}>
                Lately I've been building with Next.js and TypeScript, adding authentication flows with NextAuth.js, and getting more comfortable with protected routes and full CRUD applications end to end. I'm also strengthening my problem-solving through Data Structures & Algorithms and continuing to learn Git/GitHub workflows along the way.
              </p>

              {/* Experience Card */}
              <div className="exp-card" style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A876", fontWeight: 600, marginBottom: 4 }}>Experience</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#EDE3D3" }}>MERN Stack Developer Intern</div>
                    <div style={{ fontSize: "0.85rem", color: "#A79A87", marginTop: 2 }}>Zaitoon International Campus</div>
                  </div>
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: "#6B5F4F", background: "rgba(255,255,255,0.04)", padding: "4px 10px", border: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>2025 – 2026</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    "Developed responsive web apps using the MERN Stack",
                    "Built reusable React components & responsive UIs",
                    "Integrated REST APIs & connected frontend with backend services",
                    "Worked with MongoDB for database design & CRUD operations",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.82rem", color: "#6B5F4F", lineHeight: 1.6 }}>
                      <span style={{ color: "#C9A876", marginTop: 4, flexShrink: 0, fontSize: "0.55rem" }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A876" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    ),
                    text: "Based in Kerala, India"
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A876" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <path d="M8 21h8M12 17v4"/>
                      </svg>
                    ),
                    text: "Full Stack Developer — Open to opportunities & collaborations"
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A876" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                      </svg>
                    ),
                    text: "Languages: English · Malayalam"
                  },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <span style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,168,118,0.08)", flexShrink: 0 }}>{icon}</span>
                    <span style={{ fontSize: "0.875rem", color: "#C8C5C0", letterSpacing: "0.02em", lineHeight: 1.6, paddingTop: 6 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Frontend Development", desc: "Responsive UIs with React.js, Next.js, Redux Toolkit, Tailwind CSS & modern animations", icon: "⬡" },
                { title: "Backend Development", desc: "RESTful APIs with Node.js & Express.js, and Next.js API routes for scalable services", icon: "⬡" },
                { title: "Database Management", desc: "MongoDB & Mongoose for efficient, well-modeled data — with growing PostgreSQL knowledge", icon: "⬡" },
                { title: "Auth & Tooling", desc: "NextAuth.js, JWT & protected routes, plus Figma, Git and Postman in the daily workflow", icon: "⬡" },
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
                  <span style={{ color: "#C9A876", fontSize: "1.1rem", marginTop: 2, flexShrink: 0 }}>{svc.icon}</span>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.04em", marginBottom: 6, color: "#EDE3D3" }}>{svc.title}</h4>
                    <p style={{ fontSize: "0.82rem", color: "#6B5F4F", lineHeight: 1.65 }}>{svc.desc}</p>
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
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#9C7C42" }}>Skills</span>
          </div>

          {skillCategories.map((cat) => {
            const catSkills = skills.filter((s) => s.cat === cat);
            return (
              <div key={cat} style={{ marginBottom: 32 }} data-animate="skills">
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9C7C42", fontWeight: 700 }}>{cat}</span>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)", maxWidth: 80 }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {catSkills.map((skill, i) => (
                    <div key={skill.name}
                      className={`skill-pill reveal reveal-delay-${Math.min(i + 1, 5)} ${visibleSections.has("skills") ? "visible" : ""}`}
                      data-animate="skills"
                    >
                      <span style={{ color: "#C8C5C0" }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 72 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>Featured</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", maxWidth: 120 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#9C7C42" }}>Projects</span>
          </div>

          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} data-animate="projects">
            {projects.map((proj, i) => (
              <div
                key={proj.title }
                className={`project-card reveal reveal-delay-${Math.min(i + 1, 5)} ${visibleSections.has("projects") ? "visible" : ""}`}
                data-animate="projects"
              >
                <div className="proj-shot">
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={`${proj.title} screenshot`}
                      onError={(e) => { 
                        e.currentTarget.style.display = "none"; 
                        e.currentTarget.nextSibling.style.display = "flex"; 
                      }}
                    />
                  ) : (
                    <div className="proj-shot-fallback" style={{ display: "flex" }}>
                      No screenshot
                    </div>
                  )}
                  <div className="proj-shot-fallback" style={{ display: "none" }}>
                    Add screenshot
                  </div>
                </div>
                
                <div style={{ padding: "26px 26px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span className="proj-index" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#4A4030", transition: "color 0.3s" }}>{proj.index}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700 }}>{proj.title}</h3>
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "#9C7C42", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>{proj.type}</p>
                  <p style={{ fontSize: "0.85rem", color: "#A79A87", marginBottom: 18, lineHeight: 1.65, flex: 1 }}>{proj.tagline}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  {proj.features && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 22 }}>
                      {proj.features.slice(0, 4).map((f) => (
                        <span key={f} style={{ fontSize: "0.72rem", color: "#6B5F4F", display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ color: "#9C7C42" }}>·</span> {f}
                        </span>
                      ))}
                    </div>
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: "auto" }}>
                    {proj.github ? (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="repo-btn" onClick={(e) => e.stopPropagation()}>
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    ) : (
                      <span className="repo-btn" style={{ opacity: 0.4, cursor: "default", borderStyle: "dashed" }} title="Add this project's GitHub link">
                        GitHub link needed
                      </span>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="demo-btn" onClick={(e) => e.stopPropagation()}>
                        Live Demo
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#9C7C42" }}>Touch</span>
          </div>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div data-animate="contact" className={`reveal ${visibleSections.has("contact") ? "visible" : ""}`}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#A79A87", marginBottom: 40 }}>
                Open to new opportunities, collaborations, and interesting conversations. Whether it's a project idea or just a hello — I'd love to hear from you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                <div>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C7C42", display: "block", marginBottom: 8, fontWeight: 600 }}>Email</span>
                  <a href="mailto:hasnahamza807@gmail.com" className="contact-link">
                    hasnahamza807@gmail.com
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* <div>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C7C42", display: "block", marginBottom: 8, fontWeight: 600 }}>Phone</span>
                  <a href="tel:+919074240464" className="contact-link">
                    +91 9074240464
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div> */}

                <div>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C7C42", display: "block", marginBottom: 12, fontWeight: 600 }}>Elsewhere</span>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a href="https://github.com/Hasna17806" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    {/* <a href="https://www.linkedin.com/in/hasna-hamza-087823403/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>

              <div style={{ padding: "36px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(201,168,118,0.03)", position: "relative",
                clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.2rem", color: "#C9A876", lineHeight: 1.6, marginBottom: 16 }}>
                  "Great things are built one line of code at a time."
                </p>
                <p style={{ fontSize: "0.78rem", color: "#9C7C42", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>— Available for freelance & collaborations</p>
              </div>
            </div>

            <form
              data-animate="contact2"
              className={`reveal reveal-delay-2 ${visibleSections.has("contact") ? "visible" : ""}`}
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                window.location.href = `mailto:hasnahamza807@gmail.com?subject=${encodeURIComponent("Portfolio contact from " + data.get("name"))}&body=${encodeURIComponent(data.get("message") + "\n\nFrom: " + data.get("email"))}`;
              }}
              style={{ padding: "40px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)", display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div>
                <label style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9C7C42", display: "block", marginBottom: 8, fontWeight: 600 }}>Name</label>
                <input required name="name" type="text" placeholder="Your name" className="form-field" />
              </div>
              <div>
                <label style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9C7C42", display: "block", marginBottom: 8, fontWeight: 600 }}>Email</label>
                <input required name="email" type="email" placeholder="you@example.com" className="form-field" />
              </div>
              <div>
                <label style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9C7C42", display: "block", marginBottom: 8, fontWeight: 600 }}>Message</label>
                <textarea required name="message" rows={5} placeholder="What's on your mind?" className="form-field" style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="primary-btn" style={{ justifyContent: "center", marginTop: 8, cursor: "pointer" }}>
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "32px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, background: "#C9A876", borderRadius: "50%" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#EDE3D3" }}>Hasna</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#9C7C42", fontSize: "0.95rem" }}>Hamza</span>
          </div>
          <span style={{ fontSize: "0.72rem", color: "#4A4030", letterSpacing: "0.06em" }}>© 2025 – 2026 — All rights reserved</span>
          <div style={{ display: "flex", gap: 24 }}>
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)}
                style={{ background: "none", border: "none", cursor: "none", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A4030", transition: "color 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#C9A876"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#4A4030"}
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