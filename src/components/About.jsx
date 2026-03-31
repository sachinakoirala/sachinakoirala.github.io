import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "3.8", label: "GPA" },
    { value: "4+", label: "Years Experience" },
    { value: "5+", label: "Projects Built" },
    { value: "2", label: "Research Roles" },
  ];

  return (
    <section id="about" ref={ref} style={{ padding: "7rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="reveal">
        <p className="section-label">✦ &nbsp; About Me</p>
        <div className="gold-line" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start", marginTop: "1rem" }} className="about-grid">
        <div>
          <h2 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Researcher. Developer.{" "}
            <span className="gold-text">Problem Solver.</span>
          </h2>
          <p className="reveal" style={{ color: "rgba(245,240,232,0.65)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.25rem" }}>
            I'm a graduate student at the University of Missouri–St. Louis pursuing my MS in Computer Science with a Graduate Certificate in AI & Data Science. I thrive at the intersection of machine learning, backend systems, and data engineering.
          </p>
          <p className="reveal" style={{ color: "rgba(245,240,232,0.65)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2rem" }}>
            From building IoT sensor platforms on Raspberry Pi to teaching Python to undergrads, I bring both depth and breadth to every challenge. Previously I've worked in database administration and data science at tech companies in Nepal.
          </p>
          <div className="reveal">
            <div style={{ border: "1px solid rgba(200,169,110,0.2)", borderRadius: "4px", padding: "1.25rem 1.5rem", background: "rgba(200,169,110,0.04)" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic", color: "var(--accent-light)", lineHeight: 1.7 }}>
                "Turning complex data into meaningful, real-world solutions — one model at a time."
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", border: "1px solid rgba(200,169,110,0.15)", borderRadius: "4px", overflow: "hidden", marginBottom: "2rem" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "2rem 1.5rem", background: "var(--surface)", borderRight: i % 2 === 0 ? "1px solid rgba(200,169,110,0.1)" : "none", borderBottom: i < 2 ? "1px solid rgba(200,169,110,0.1)" : "none" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,232,0.45)", marginTop: "0.5rem" }}>{s.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ border: "1px solid rgba(200,169,110,0.15)", borderRadius: "4px", padding: "1.5rem", background: "var(--surface)" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Education</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.25rem" }}>University of Missouri–St. Louis</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.6)", marginBottom: "0.25rem" }}>MS in Computer Science · GPA 3.8/4.0</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(245,240,232,0.6)", marginBottom: "1rem" }}>Graduate Certificate in AI & Data Science</p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em" }}>Sep 2024 – May 2026</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}