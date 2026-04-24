import { useEffect, useRef, useState } from "react";

const certifications = [
  {
    title: "People's Choice Award",
    event: "UMSL Women's Hackathon 2026",
    issuer: "University of Missouri–St. Louis",
    type: "Award",
    typeColor: "rgba(255, 200, 0, 0.9)",
    icon: "🏆",
    image: "/certificates/image1.webp",
  },
  {
    title: "Participant",
    event: "UMSL Women's Hackathon 2026",
    issuer: "University of Missouri–St. Louis",
    type: "Participation",
    typeColor: "rgba(0, 212, 255, 0.9)",
    icon: "🎯",
    image: "/certificates/IMG_5138.jpeg",
  },
  {
    title: "Workshop Certification",
    event: "UMSL Workshop",
    issuer: "University of Missouri–St. Louis",
    type: "Workshop",
    typeColor: "rgba(130, 180, 160, 0.9)",
    icon: "📚",
    image: "/certificates/workshop.png",
  },
  {
    title: "Graduate Certificate in AI",
    event: "Artificial Intelligence",
    issuer: "University of Missouri–St. Louis",
    type: "Academic",
    typeColor: "rgba(160, 150, 200, 0.9)",
    icon: "🤖",
    image: null,
  },
  {
    title: "Graduate Certificate in Data Science",
    event: "Data Science",
    issuer: "University of Missouri–St. Louis",
    type: "Academic",
    typeColor: "rgba(160, 150, 200, 0.9)",
    icon: "📊",
    image: null,
  },
  {
    title: "Organizer",
    event: "Asian Hack",
    issuer: "Asian School of Management & Technology",
    type: "Organizer",
    typeColor: "rgba(255, 150, 100, 0.9)",
    icon: "⚡",
    image: null,
  },

];

const CARDS_PER_PAGE = 6;

export default function Certifications() {
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  const totalPages = Math.ceil(certifications.length / CARDS_PER_PAGE);
  const start = page * CARDS_PER_PAGE;
  const visible = certifications.slice(start, start + CARDS_PER_PAGE);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (newPage, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setPage(newPage);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo(page === 0 ? totalPages - 1 : page - 1, "left");
  const next = () => goTo(page === totalPages - 1 ? 0 : page + 1, "right");

  return (
    <section id="certifications" ref={ref} style={{ padding: "7rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="reveal">
        <p className="section-label">✦ &nbsp; Certifications & Achievements</p>
        <div className="cyan-line" />
      </div>

      <h2 className="reveal" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, marginBottom: "3.5rem" }}>
        Credentials & <span className="gradient-text">Recognition</span>
      </h2>

      <div className="reveal">
        {/* 6 Cards grid — 3 per row = 2 rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "2rem",
            animation: animating
              ? direction === "right"
                ? "slideOutLeft 0.3s ease forwards"
                : "slideOutRight 0.3s ease forwards"
              : "slideIn 0.3s ease forwards",
          }}
          className="cert-grid"
        >
          {visible.map((cert, i) => (
            <div
              key={page + "-" + i}
              onClick={() => setSelected(cert)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,212,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              style={{
                border: "1px solid rgba(0,212,255,0.12)",
                borderRadius: "4px",
                padding: "1.75rem",
                background: "var(--surface)",
                transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, var(--cyan), transparent)", opacity: 0.5 }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2rem" }}>{cert.icon}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: cert.typeColor,
                  border: `1px solid ${cert.typeColor}40`,
                  padding: "0.2rem 0.6rem",
                  borderRadius: "2px",
                }}>
                  {cert.type}
                </span>
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--cream)", lineHeight: 1.3 }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--cyan)", marginBottom: "0.3rem", fontWeight: 500 }}>
                {cert.event}
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                {cert.issuer}
              </p>

              {cert.image && (
                <div style={{ marginTop: "1rem", borderRadius: "2px", overflow: "hidden", border: "1px solid rgba(0,212,255,0.15)" }}>
                  <img src={cert.image} alt={cert.title} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
                </div>
              )}

              <p style={{ marginTop: "1rem", fontSize: "0.68rem", color: "rgba(0,212,255,0.5)", fontFamily: "'JetBrains Mono', monospace" }}>
                Click to view →
              </p>
            </div>
          ))}
        </div>

        {/* Navigation — only shows when more than 6 certificates */}
        {totalPages > 1 && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
            <button
              onClick={prev}
              style={{ background: "none", border: "1px solid rgba(0,212,255,0.3)", color: "var(--cyan)", width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,212,255,0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "none"}
            >←</button>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > page ? "right" : "left")}
                  style={{
                    width: i === page ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === page ? "var(--cyan)" : "rgba(0,212,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{ background: "none", border: "1px solid rgba(0,212,255,0.3)", color: "var(--cyan)", width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,212,255,0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "none"}
            >→</button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(2,4,8,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backdropFilter: "blur(8px)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "var(--surface)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "8px", padding: "2rem", maxWidth: "600px", width: "100%", position: "relative" }}
          >
            <button onClick={() => setSelected(null)} style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none", color: "var(--cyan)", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "2.5rem" }}>{selected.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--cream)" }}>{selected.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--cyan)" }}>{selected.event}</p>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{selected.issuer}</p>
              </div>
            </div>

            {selected.image ? (
              <img src={selected.image} alt={selected.title} style={{ width: "100%", borderRadius: "4px", border: "1px solid rgba(0,212,255,0.15)" }} />
            ) : (
              <div style={{ background: "var(--bg)", border: "1px dashed rgba(0,212,255,0.2)", borderRadius: "4px", padding: "3rem", textAlign: "center" }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--muted)" }}>Certificate image coming soon</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-20px); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(20px); }
        }
        @media (max-width: 900px) { .cert-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}