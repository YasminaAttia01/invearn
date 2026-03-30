import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  originalX: number;
  originalY: number;
  angle: number;
}

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(2000, Math.floor((canvas.width * canvas.height) / 8000));

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        // Color palette: blue to turquoise
        const colors = ["#00d4ff", "#0ea5e9", "#38bdf8", "#06b6d4"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color,
          originalX: x,
          originalY: y,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Animation loop
    let animationId: number;
    let frame = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(10, 14, 39, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frame++;

      particlesRef.current.forEach((particle, index) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Mouse repulsion
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.vx -= (dx / distance) * force * 0.5;
          particle.vy -= (dy / distance) * force * 0.5;
        }

        // Return to original position
        const returnForce = 0.01;
        particle.vx += (particle.originalX - particle.x) * returnForce;
        particle.vy += (particle.originalY - particle.y) * returnForce;

        // Wave motion
        particle.angle += 0.02;
        const wave = Math.sin(particle.angle + index * 0.01) * 0.5;

        // Apply velocity
        particle.vx *= 0.95; // Damping
        particle.vy *= 0.95;
        particle.x += particle.vx + wave;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, particle.color + "40");
        gradient.addColorStop(1, particle.color + "00");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections between nearby particles
      if (frame % 2 === 0) {
        ctx.strokeStyle = "rgba(0, 212, 255, 0.1)";
        ctx.lineWidth = 0.5;

        for (let i = 0; i < particlesRef.current.length; i += 5) {
          const p1 = particlesRef.current[i];
          for (let j = i + 1; j < particlesRef.current.length; j += 5) {
            const p2 = particlesRef.current[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      // Draw floating geometric shapes
      drawGeometricShapes(ctx, canvas, frame);

      animationId = requestAnimationFrame(animate);
    };

    // Draw decorative geometric shapes
    const drawGeometricShapes = (
      ctx: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      frame: number
    ) => {
      const time = frame * 0.01;

      // Draw rotating hexagons
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * (0.2 + i * 0.3);
        const y = canvas.height * 0.5 + Math.sin(time + i) * 100;
        const rotation = time * 0.5 + i * Math.PI / 3;
        const size = 40 + Math.sin(time + i) * 10;

        drawHexagon(ctx, x, y, size, rotation, i);
      }

      // Draw pulsing circles
      for (let i = 0; i < 2; i++) {
        const x = canvas.width * (0.3 + i * 0.4);
        const y = canvas.height * 0.3 + Math.cos(time * 0.8 + i) * 80;
        const radius = 30 + Math.sin(time * 2 + i) * 10;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? "rgba(0, 212, 255, 0.2)" : "rgba(14, 165, 233, 0.2)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    // Draw hexagon
    const drawHexagon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      index: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = size * Math.cos(angle);
        const py = size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();

      ctx.strokeStyle =
        index === 0
          ? "rgba(0, 212, 255, 0.3)"
          : index === 1
          ? "rgba(14, 165, 233, 0.3)"
          : "rgba(56, 189, 248, 0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    };

    // Initialize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    // Start animation
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0e27]"
      style={{ background: "linear-gradient(to bottom, #0a0e27 0%, #1e3a8a 100%)" }}
    />
  );
}
