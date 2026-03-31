import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "6rem 2rem 4rem" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "20%", right: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", width: "100%" }}>
        <p className="animate-fade-up opacity-0 section-label" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          ✦ &nbsp; Portfolio
        </p>

        <h1 className="animate-fade-up opacity-0" style={{ animationDelay: "0.25s", animationFillMode: "forwards", fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 900, lineHeight: 1.05, marginTop: "1rem" }}>
          Sachina<br />
          <span className="gold-text">Koirala</span>
        </h1>

        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards", display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
          {["MS Computer Science", "AI & Data Science", "UMSL '26"].map((tag, i) => (
            <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.3)", padding: "0.35rem 0.85rem", borderRadius: "2px" }}>
              {tag}
            </span>
          ))}
        </div>

        <p className="animate-fade-up opacity-0" style={{ animationDelay: "0.55s", animationFillMode: "forwards", maxWidth: "520px", marginTop: "2rem", lineHeight: 1.8, color: "rgba(245,240,232,0.65)", fontSize: "1.05rem" }}>
          Graduate researcher & teaching assistant at UMSL building intelligent systems — from IoT platforms to machine learning models. Passionate about turning data into impact.
        </p>

        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards", display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          <a href="#projects" style={{ background: "var(--accent)", color: "var(--dark)", padding: "0.85rem 2rem", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontWeight: 500 }}>
            View Projects
          </a>
          <a href="#contact" style={{ border: "1px solid rgba(200,169,110,0.4)", color: "var(--accent)", padding: "0.85rem 2rem", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontWeight: 500 }}>
            Get in Touch
          </a>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards", display: "flex", gap: "1.5rem", marginTop: "3rem" }}>
          {[
            { label: "GitHub", url: "https://github.com/sachinakoirala" },
            { label: "LinkedIn", url: "https://linkedin.com/in/sachina-koirala" },
            { label: "Email", url: "mailto:sachinakoirala@gmail.com" },
          ].map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", color: "rgba(245,240,232,0.45)", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(245,240,232,0.45)")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="animate-fade-in opacity-0" style={{ animationDelay: "1.5s", animationFillMode: "forwards", position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(245,240,232,0.3)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(200,169,110,0.6), transparent)", animation: "float 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}