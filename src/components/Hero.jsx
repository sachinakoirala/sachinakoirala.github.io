import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => {
        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${node.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        if (mouse.x !== null) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.4 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r + 1.5, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 212, 255, 0.8)";
            ctx.fill();
          }
        }
      }

      if (mouse.x !== null) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.9)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.15)";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "6rem 2rem 4rem" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Main container — split into left text + right photo */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }} className="hero-grid">

        {/* LEFT — all your existing text, unchanged */}
        <div>
          <p className="animate-fade-up opacity-0 section-label" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            ✦ &nbsp; AI · ML · Data Science
          </p>

          <h1 className="animate-fade-up opacity-0" style={{ animationDelay: "0.25s", animationFillMode: "forwards", fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 800, lineHeight: 1.05, marginTop: "1rem" }}>
            Sachina<br />
            <span className="gradient-text">Koirala</span>
          </h1>

          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards", display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            {["MS Computer Science", "AI & Data Science", "UMSL '26"].map((tag, i) => (
              <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--cyan)", border: "1px solid rgba(0,212,255,0.25)", padding: "0.35rem 0.85rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>

          <p className="animate-fade-up opacity-0" style={{ animationDelay: "0.55s", animationFillMode: "forwards", maxWidth: "520px", marginTop: "2rem", lineHeight: 1.9, color: "rgba(232,237,245,0.6)", fontSize: "1rem" }}>
            Graduate Researcher & teaching Assistant at University of Missouri-Saint.Louis(UMSL) - from IoT platforms to machine learning models. Passionate about turning data into real-world impact.
          </p>

          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards", display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            <a href="#projects" style={{ background: "var(--cyan)", color: "#020408", padding: "0.85rem 2rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontWeight: 600 }}>
              View Projects
            </a>
            <a href="#contact" style={{ border: "1px solid rgba(3,9,10,0.35)", color: "var(--cyan)", padding: "0.85rem 2rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
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
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", color: "rgba(232,237,245,0.35)", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--cyan)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(232,237,245,0.35)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo only */}
        <div className="animate-fade-in opacity-0 hero-photo" style={{ animationDelay: "0.5s", animationFillMode: "forwards", position: "relative", flexShrink: 0 }}>

          {/* Rotating ring */}
          <div style={{ position: "absolute", inset: "-12px", borderRadius: "50%", border: "1px solid rgba(0,212,255,0.2)", animation: "spin-slow 12s linear infinite" }}>
            <div style={{ position: "absolute", top: "10%", left: "-4px", width: "8px", height: "8px", borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)" }} />
          </div>

          {/* Dashed ring */}
          <div style={{ position: "absolute", inset: "-24px", borderRadius: "50%", border: "1px dashed rgba(0,212,255,0.1)" }} />

          {/* Glow */}
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)", zIndex: 0 }} />

          {/* Photo */}
          <div style={{ width: "260px", height: "260px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(0,212,255,0.4)", position: "relative", zIndex: 1, boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}>
            <img
              src="/certificates/profile.jpg"
              alt="Sachina Koirala"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Open to Work badge */}
          <div style={{ position: "absolute", bottom: "10px", right: "-10px", background: "var(--surface)", border: "1px solid rgba(0,212,255,0.3)", borderRadius: "20px", padding: "0.4rem 0.85rem", display: "flex", alignItems: "center", gap: "0.4rem", zIndex: 2, boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 6px #00ff88" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "var(--cream)", letterSpacing: "0.05em" }}>Open to Work</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(232,237,245,0.25)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--cyan), transparent)", animation: "float 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none !important; }
        }
      `}</style>
    </section>
  );
}