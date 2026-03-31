import { useEffect, useRef } from "react";

const skillGroups = [
  { category: "Languages", icon: "{ }", skills: ["Python", "SQL", "C++", "Bash"] },
  { category: "Frameworks & Libraries", icon: "⚙", skills: ["Django", "TensorFlow", "PyTorch", "scikit-learn", "pandas", "NumPy", "matplotlib"] },
  { category: "Databases", icon: "◫", skills: ["MySQL", "PostgreSQL", "SQL Server"] },
  { category: "ML & AI", icon: "◈", skills: ["Machine Learning", "Deep Learning", "CNN", "Logistic Regression", "Feature Engineering", "Data Mining"] },
  { category: "Tools & Platforms", icon: "▣", skills: ["GitHub", "Jupyter Notebook", "VS Code", "Google Colab", "Raspberry Pi", "REST APIs"] },
  { category: "Concepts", icon: "◇", skills: ["IoT Systems", "ETL Pipelines", "Anomaly Detection", "Edge Computing", "Data Visualization", "Cloud Computing"] },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: "7rem 2rem", background: "var(--surface)", borderTop: "1px solid rgba(200,169,110,0.08)", borderBottom: "1px solid rgba(200,169,110,0.08)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal">
          <p className="section-label">✦ &nbsp; Technical Skills</p>
          <div className="gold-line" />
        </div>

        <h2 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "3.5rem" }}>
          What I Work With
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i} className="reveal card-hover" style={{ border: "1px solid rgba(200,169,110,0.12)", borderRadius: "4px", padding: "1.75rem", background: "var(--dark)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "1rem", color: "var(--accent)" }}>{group.icon}</span>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)" }}>{group.category}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill, j) => (
                  <span key={j}
                    style={{ fontSize: "0.78rem", padding: "0.3rem 0.7rem", borderRadius: "2px", background: "rgba(200,169,110,0.07)", color: "rgba(245,240,232,0.75)", border: "1px solid rgba(200,169,110,0.12)", transition: "all 0.2s", cursor: "default" }}
                    onMouseEnter={(e) => { e.target.style.background = "rgba(200,169,110,0.15)"; e.target.style.color = "var(--cream)"; }}
                    onMouseLeave={(e) => { e.target.style.background = "rgba(200,169,110,0.07)"; e.target.style.color = "rgba(245,240,232,0.75)"; }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}