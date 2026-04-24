import { useEffect, useRef, useState } from "react";

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

    // Create nodes
    let nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${node.alpha})`;
        ctx.fill();
      });

      // Draw connections between nearby nodes
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

        // Connect nodes to mouse
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

            // Glow node near mouse
            ctx.beginPath();
            ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r + 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, 0.8)`;
            ctx.fill();
          }
        }
      }

      // Draw mouse dot
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

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", width: "100%" }}>
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
          Graduate researcher & teaching assistant at University of Missouri-Saint.Louis - from IoT platforms to machine learning models. Passionate about turning data into real-world impact.
        </p>

        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards", display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          <a href="#projects" style={{ background: "var(--cyan)", color: "#020408", padding: "0.85rem 2rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontWeight: 600 }}>
            View Projects
          </a>
          <a href="#contact" style={{ border: "1px solid rgba(0,212,255,0.35)", color: "var(--cyan)", padding: "0.85rem 2rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
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

      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(232,237,245,0.25)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--cyan), transparent)", animation: "float 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}