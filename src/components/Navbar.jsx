import { useState } from "react";

export default function Navbar({ scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
    padding: "1.25rem 2rem", display: "flex", alignItems: "center",
    justifyContent: "space-between", transition: "all 0.4s ease",
    background: isScrolled ? "rgba(15,15,15,0.92)" : "transparent",
    backdropFilter: isScrolled ? "blur(16px)" : "none",
    borderBottom: isScrolled ? "1px solid rgba(200,169,110,0.15)" : "none",
  };

  const linkStyle = {
    fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
    letterSpacing: "0.15em", textTransform: "uppercase",
    color: "var(--cream)", textDecoration: "none", opacity: 0.7,
  };

  const hireStyle = {
    fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
    letterSpacing: "0.1em", textTransform: "uppercase",
    color: "var(--dark)", background: "var(--accent)",
    padding: "0.5rem 1.25rem", borderRadius: "2px", textDecoration: "none",
  };

  return (
    <nav style={navStyle}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--accent)" }}>
        SK
      </span>

      <div className="nav-links">
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#experience" style={linkStyle}>Experience</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
        <a href="mailto:sachinakoirala@gmail.com" style={hireStyle}>Hire Me</a>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)} style={linkStyle}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} style={linkStyle}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} style={linkStyle}>Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} style={linkStyle}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} style={linkStyle}>Contact</a>
        </div>
      )}

      <style>{`
        .nav-links { display: flex; gap: 2.5rem; align-items: center; }
        .nav-links a:hover { opacity: 1 !important; color: var(--accent) !important; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 0.5rem; }
        .hamburger span { display: block; width: 22px; height: 1.5px; background: var(--cream); }
        .mobile-menu { position: absolute; top: 100%; left: 0; right: 0; background: rgba(15,15,15,0.97); padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1.5rem; border-bottom: 1px solid rgba(200,169,110,0.2); }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}