import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "Email", value: "sachinakoirala@gmail.com", href: "mailto:sachinakoirala@gmail.com", icon: "✉" },
    { label: "LinkedIn", value: "linkedin.com/in/sachina-koirala", href: "https://linkedin.com/in/sachina-koirala", icon: "⬡" },
    { label: "GitHub", value: "github.com/sachinakoirala", href: "https://github.com/sachinakoirala", icon: "◎" },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: "7rem 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="reveal">
        <p className="section-label">✦ &nbsp; Contact</p>
        <div className="gold-line" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="contact-grid">
        <div>
          <h2 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Let's Work <span className="gold-text">Together</span>
          </h2>
          <p className="reveal" style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2rem" }}>
            I'm currently open to research collaborations, internships, and full-time roles in data science, machine learning, and backend engineering. Let's connect!
          </p>
          <a className="reveal" href="mailto:sachinakoirala@gmail.com"
            style={{ display: "inline-block", background: "var(--accent)", color: "var(--dark)", padding: "0.9rem 2.25rem", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontWeight: 500, transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            Say Hello →
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {links.map((link, i) => (
            <a key={i} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="reveal card-hover"
              style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.25rem 1.5rem", border: "1px solid rgba(200,169,110,0.12)", borderRadius: "4px", background: "var(--surface)", textDecoration: "none", color: "var(--cream)" }}
            >
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(200,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "var(--accent)", flexShrink: 0 }}>
                {link.icon}
              </span>
              <div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.2rem" }}>{link.label}</p>
                <p style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.7)" }}>{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "6rem", paddingTop: "2rem", borderTop: "1px solid rgba(200,169,110,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "var(--accent)", fontWeight: 700 }}>Sachina Koirala</span>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(245,240,232,0.3)" }}>© 2025 · Built with React & Vite</p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}