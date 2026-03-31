import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "IoT Sensor Data Analytics Platform",
    description: "A backend system for real-time IoT sensor data collection and analysis. Built for food safety monitoring with anomaly detection and edge-computing deployment on Raspberry Pi.",
    tech: ["Python", "Django", "MySQL", "Raspberry Pi", "REST API"],
    highlights: ["Real-time data ingestion", "Anomaly detection", "Food safety monitoring"],
    featured: true,
  },
  {
    number: "02",
    title: "Leaf Disease Detection System",
    description: "A CNN-based image classification model that detects plant leaf diseases. Preprocessed and augmented over 5,000 images to improve model generalization and accuracy.",
    tech: ["Python", "TensorFlow", "CNN", "Image Augmentation"],
    highlights: ["5,000+ images processed", "CNN architecture", "Image augmentation"],
    featured: true,
  },
  {
    number: "03",
    title: "Customer Churn Prediction",
    description: "Built TensorFlow-based logistic regression and neural network models to predict customer churn on a large-scale dataset with data visualization for insights.",
    tech: ["Python", "TensorFlow", "Neural Networks", "Data Visualization"],
    highlights: ["Large-scale dataset", "Neural network models", "Churn prediction"],
    featured: false,
  },
  {
    number: "04",
    title: "ML & Data Analysis Projects",
    description: "Collection of machine learning implementations including linear/logistic regression from scratch. Applied feature engineering, stratified cross-validation, and model evaluation.",
    tech: ["Python", "NumPy", "scikit-learn", "matplotlib", "Jupyter"],
    highlights: ["From-scratch implementations", "Cross-validation", "Feature engineering"],
    featured: false,
  },
  {
    number: "05",
    title: "Email Automation System",
    description: "Automated bulk and scheduled email workflows using Python and SMTP, reducing manual email processing effort by 70% through intelligent automation.",
    tech: ["Python", "SMTP", "Automation"],
    highlights: ["70% effort reduction", "Bulk email workflows", "Scheduled automation"],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ padding: "7rem 2rem", background: "var(--surface)", borderTop: "1px solid rgba(200,169,110,0.08)", borderBottom: "1px solid rgba(200,169,110,0.08)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal">
          <p className="section-label">✦ &nbsp; Projects</p>
          <div className="gold-line" />
        </div>

        <h2 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "3.5rem" }}>
          Things I've Built
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }} className="projects-featured">
          {projects.filter((p) => p.featured).map((project, i) => (
            <div key={i} className="reveal card-hover" style={{ border: "1px solid rgba(200,169,110,0.15)", borderRadius: "4px", padding: "2rem", background: "var(--dark)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, color: "rgba(200,169,110,0.12)", lineHeight: 1 }}>{project.number}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.3)", padding: "0.2rem 0.6rem", borderRadius: "2px", textTransform: "uppercase" }}>Featured</span>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.85rem", lineHeight: 1.3 }}>{project.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.75, marginBottom: "1.5rem" }}>{project.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                {project.tech.map((t, j) => (
                  <span key={j} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", padding: "0.25rem 0.6rem", background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.15)", borderRadius: "2px", color: "var(--accent)" }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {project.highlights.map((h, j) => (
                  <p key={j} style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.4)", display: "flex", gap: "0.5rem" }}>
                    <span style={{ color: "var(--accent)" }}>→</span> {h}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="projects-other">
          {projects.filter((p) => !p.featured).map((project, i) => (
            <div key={i} className="reveal card-hover" style={{ border: "1px solid rgba(200,169,110,0.1)", borderRadius: "4px", padding: "1.5rem", background: "var(--dark)" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, color: "rgba(200,169,110,0.1)", lineHeight: 1, display: "block", marginBottom: "1rem" }}>{project.number}</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.35 }}>{project.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {project.tech.map((t, j) => (
                  <span key={j} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", padding: "0.2rem 0.5rem", background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.12)", borderRadius: "2px", color: "rgba(200,169,110,0.8)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-featured { grid-template-columns: 1fr !important; }
          .projects-other { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1000px) and (min-width: 769px) {
          .projects-other { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}