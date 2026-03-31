import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "University of Missouri–St. Louis",
    location: "St. Louis, MO",
    period: "Aug 2025 – May 2026",
    type: "Academic",
    points: [
      "Taught Python programming and core computing concepts for CMP SCI 1250",
      "Designed hands-on labs and projects; reviewed and debugged Python code",
      "Assisted faculty with instruction, grading, and student support across CS courses",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "University of Missouri–St. Louis (NSF Project)",
    location: "St. Louis, MO",
    period: "Jan 2025 – Aug 2025",
    type: "Research",
    points: [
      "Developed a Django-based backend system for real-time IoT sensor data collection",
      "Built RESTful APIs and data models for secure sensor-to-server communication",
      "Performed data validation and anomaly detection to ensure high data quality",
      "Deployed edge-computing applications on Raspberry Pi",
    ],
  },
  {
    role: "Associate Database Administrator",
    company: "F1Soft International Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Feb 2024 – Aug 2024",
    type: "Industry",
    points: [
      "Managed and optimized MySQL databases to improve query performance and data reliability",
      "Implemented backup, replication, and monitoring to maintain 99.9% system availability",
      "Resolved production data consistency issues with cross-functional teams",
    ],
  },
  {
    role: "Data Science Apprentice",
    company: "Pathao Nepal Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Apr 2023 – Jul 2023",
    type: "Industry",
    points: [
      "Analyzed business datasets using Python and SQL to support data-driven decisions",
      "Automated reporting workflows, reducing manual processing time by 60%",
      "Delivered dashboards and ad-hoc analyses to stakeholders",
    ],
  },
];

const typeColors = {
  Academic: "rgba(200,169,110,0.9)",
  Research: "rgba(130,180,160,0.9)",
  Industry: "rgba(160,150,200,0.9)",
};

export default function Experience() {
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
    <section id="experience" ref={ref} style={{ padding: "7rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="reveal">
        <p className="section-label">✦ &nbsp; Experience</p>
        <div className="gold-line" />
      </div>

      <h2 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "4rem" }}>
        Where I've Worked
      </h2>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "1px", background: "linear-gradient(to bottom, var(--accent), transparent)", opacity: 0.3 }} className="timeline-line" />

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {experiences.map((exp, i) => (
            <div key={i} className="reveal" style={{ paddingLeft: "2.5rem", position: "relative" }}>
              <div style={{ position: "absolute", left: "-5px", top: "6px", width: "11px", height: "11px", borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--dark)" }} className="timeline-dot" />

              <div
                style={{ border: "1px solid rgba(200,169,110,0.12)", borderRadius: "4px", padding: "1.75rem 2rem", background: "var(--surface)", transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.12)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.25rem" }}>{exp.role}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--accent)", fontWeight: 500 }}>{exp.company}</p>
                    <p style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.4)", marginTop: "0.2rem" }}>{exp.location}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(245,240,232,0.45)" }}>{exp.period}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: typeColors[exp.type], border: `1px solid ${typeColors[exp.type]}40`, padding: "0.2rem 0.6rem", borderRadius: "2px" }}>{exp.type}</span>
                  </div>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.88rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.7 }}>
                      <span style={{ color: "var(--accent)", marginTop: "0.5rem", fontSize: "0.4rem", flexShrink: 0 }}>◆</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-line { display: none; }
          .timeline-dot { display: none; }
        }
      `}</style>
    </section>
  );
}