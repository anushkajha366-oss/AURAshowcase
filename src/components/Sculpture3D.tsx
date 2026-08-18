import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Layers, ShieldCheck, Compass } from 'lucide-react';

interface Sculpture3DProps {
  onInteract?: () => void;
}

export const Sculpture3D: React.FC<Sculpture3DProps> = ({ onInteract }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [activeTab, setActiveTab] = useState<'3D' | 'X-RAY' | 'REFRACTION'>('3D');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos((prev) => ({ ...prev, targetX: x, targetY: y }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Smooth dampening for mouse
    let currentX = 0;
    let currentY = 0;

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.015;
      currentX += (mousePos.targetX - currentX) * 0.05;
      currentY += (mousePos.targetY - currentY) * 0.05;

      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      const centerX = width / 2;
      const centerY = height / 2 + 10;

      ctx.clearRect(0, 0, width, height);

      // Ambient radial wine glow behind sculpture
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        width * 0.45
      );
      glowGrad.addColorStop(0, 'rgba(143, 61, 82, 0.35)');
      glowGrad.addColorStop(0.5, 'rgba(143, 61, 82, 0.12)');
      glowGrad.addColorStop(1, 'rgba(13, 11, 16, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, width * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Draw floating geometric particles
      for (let i = 0; i < 18; i++) {
        const pAngle = time * 0.2 + (i * Math.PI * 2) / 18;
        const pRadius = 140 + Math.sin(time + i) * 35;
        const px = centerX + Math.cos(pAngle) * pRadius + currentX * 20;
        const py = centerY + Math.sin(pAngle * 0.8) * (pRadius * 0.4) + currentY * 20;
        const pSize = 1.5 + Math.sin(time * 2 + i) * 1;

        ctx.fillStyle = i % 2 === 0 ? 'rgba(216, 185, 154, 0.6)' : 'rgba(201, 143, 145, 0.5)';
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.5, pSize), 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw the monumental 'A' 3D Glass & Chrome Sculpture
      ctx.save();
      ctx.translate(centerX, centerY);

      // Tilt matrix
      const rotY = currentX * 0.4 + Math.sin(time * 0.5) * 0.08;
      const rotX = currentY * 0.3 + Math.cos(time * 0.4) * 0.05;

      const scale = Math.min(width, height) * 0.34;

      // 3D Ribbon / Prism parameters for 'A'
      // Left leg of 'A', Right leg of 'A', and Crossbar ribbon loop
      const drawRibbonSegment = (
        pts: [number, number, number][],
        color1: string,
        color2: string,
        isGlass: boolean
      ) => {
        // Project 3D points to 2D
        const projected = pts.map(([x, y, z]) => {
          // Rotate around Y
          let x1 = x * Math.cos(rotY) + z * Math.sin(rotY);
          let z1 = -x * Math.sin(rotY) + z * Math.cos(rotY);
          // Rotate around X
          let y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
          let z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);

          // Perspective
          const fov = 400;
          const perspective = fov / (fov + z2 * scale);
          return {
            px: x1 * scale * perspective,
            py: y2 * scale * perspective,
            z: z2,
            p: perspective
          };
        });

        ctx.beginPath();
        ctx.moveTo(projected[0].px, projected[0].py);
        for (let i = 1; i < projected.length; i++) {
          ctx.lineTo(projected[i].px, projected[i].py);
        }
        ctx.closePath();

        // Metallic/Glass Gradient
        const grad = ctx.createLinearGradient(
          projected[0].px,
          projected[0].py,
          projected[2] ? projected[2].px : projected[1].px,
          projected[2] ? projected[2].py : projected[1].py
        );

        if (isGlass) {
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
          grad.addColorStop(0.3, 'rgba(216, 185, 154, 0.25)');
          grad.addColorStop(0.7, 'rgba(201, 143, 145, 0.15)');
          grad.addColorStop(1, 'rgba(143, 61, 82, 0.35)');
          ctx.fillStyle = grad;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = 1.2;
        } else {
          // Chrome Silver & Champagne reflection
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          grad.addColorStop(0.2, '#E8DCD0');
          grad.addColorStop(0.5, '#736B78');
          grad.addColorStop(0.8, '#D8B99A');
          grad.addColorStop(1, '#8F3D52');
          ctx.fillStyle = grad;
          ctx.strokeStyle = 'rgba(216, 185, 154, 0.4)';
          ctx.lineWidth = 0.8;
        }

        ctx.fill();
        ctx.stroke();

        // Add specular highlight line on top edge
        ctx.beginPath();
        ctx.moveTo(projected[0].px, projected[0].py);
        ctx.lineTo(projected[1].px, projected[1].py);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.stroke();
      };

      // Construct multi-faceted 3D 'A' structure
      // Outer Left Leg Facets
      drawRibbonSegment(
        [
          [0, -1.1, 0.1],
          [-0.65, 0.95, -0.2],
          [-0.45, 0.95, 0.1],
          [0.1, -1.1, 0.2]
        ],
        '#FFFFFF',
        '#8F3D52',
        false
      );

      // Glass inner layer Left Leg
      drawRibbonSegment(
        [
          [-0.05, -1.05, -0.1],
          [-0.6, 0.9, -0.35],
          [-0.4, 0.9, -0.05],
          [0.15, -1.05, 0.0]
        ],
        '#FFFFFF',
        '#C98F91',
        true
      );

      // Outer Right Leg Facets
      drawRibbonSegment(
        [
          [0, -1.1, 0.1],
          [0.65, 0.95, -0.2],
          [0.45, 0.95, 0.1],
          [-0.1, -1.1, 0.2]
        ],
        '#D8B99A',
        '#0D0B10',
        false
      );

      // Glass inner layer Right Leg
      drawRibbonSegment(
        [
          [0.05, -1.05, -0.1],
          [0.6, 0.9, -0.35],
          [0.4, 0.9, -0.05],
          [-0.15, -1.05, 0.0]
        ],
        '#F4EFE8',
        '#8F3D52',
        true
      );

      // Architectural Sweeping Glass Crossbar forming 'A' with dynamic loop curve
      const crossbarSteps = 24;
      ctx.beginPath();
      for (let i = 0; i <= crossbarSteps; i++) {
        const t = i / crossbarSteps;
        const cx = -0.5 + t * 1.0;
        const cy = 0.2 - Math.sin(t * Math.PI) * 0.35;
        const cz = Math.cos(t * Math.PI * 1.5 + time) * 0.35;

        // Project
        let x1 = cx * Math.cos(rotY) + cz * Math.sin(rotY);
        let z1 = -cx * Math.sin(rotY) + cz * Math.cos(rotY);
        let y2 = cy * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = cy * Math.sin(rotX) + z1 * Math.cos(rotX);

        const perspective = 400 / (400 + z2 * scale);
        const px = x1 * scale * perspective;
        const py = y2 * scale * perspective;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = 'rgba(216, 185, 154, 0.85)';
      ctx.lineWidth = 4;
      ctx.shadowColor = '#8F3D52';
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Chrome Halo Ring orbiting the sculpture
      ctx.beginPath();
      const ringSteps = 32;
      for (let i = 0; i <= ringSteps; i++) {
        const rAngle = (i / ringSteps) * Math.PI * 2;
        const rx = Math.cos(rAngle) * 0.9;
        const ry = Math.sin(rAngle) * 0.25;
        const rz = Math.sin(rAngle + time * 0.5) * 0.5;

        let x1 = rx * Math.cos(rotY + 0.3) + rz * Math.sin(rotY + 0.3);
        let z1 = -rx * Math.sin(rotY + 0.3) + rz * Math.cos(rotY + 0.3);
        let y2 = ry * Math.cos(rotX + 0.2) - z1 * Math.sin(rotX + 0.2);
        let z2 = ry * Math.sin(rotX + 0.2) + z1 * Math.cos(rotX + 0.2);

        const perspective = 400 / (400 + z2 * scale);
        const px = x1 * scale * perspective;
        const py = y2 * scale * perspective;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [mousePos]);

  return (
    <div className="relative w-full h-[520px] lg:h-[640px] flex items-center justify-center select-none group">
      {/* Background ambient lighting orb */}
      <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-[#8F3D52]/25 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-48 h-48 rounded-full bg-[#D8B99A]/15 blur-[80px] pointer-events-none translate-x-20 -translate-y-20" />

      {/* Main 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        onClick={onInteract}
      />

      {/* Spatial HUD Micro-Details & Overlay Labels */}
      <div className="absolute top-4 left-4 z-20 glass-panel px-3 py-1.5 rounded-full border border-white/10 flex items-center space-x-2 text-[11px] font-mono-code tracking-wider text-[#D8B99A]">
        <span className="w-2 h-2 rounded-full bg-[#8F3D52] animate-ping" />
        <span>3D SCULPTURE // MONOLITH-A</span>
      </div>

      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center space-x-1 glass-panel p-1 rounded-lg border border-white/10 text-xs">
        {(['3D', 'X-RAY', 'REFRACTION'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveTab(mode)}
            className={`px-2.5 py-1 rounded-md transition-all font-mono-code text-[10px] tracking-wider ${
              activeTab === mode
                ? 'bg-[#8F3D52] text-white shadow-lg shadow-[#8F3D52]/40'
                : 'text-[#F4EFE8]/60 hover:text-white'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Floating Spatial Tag 1 */}
      <div className="absolute bottom-20 left-6 z-20 glass-panel p-3 rounded-xl border border-[#C98F91]/20 max-w-[200px] backdrop-blur-md hidden md:block animate-float shadow-2xl">
        <div className="flex items-center justify-between text-[10px] font-mono-code text-[#C98F91] mb-1">
          <span>SPECULAR REFLECTION</span>
          <Sparkles className="w-3 h-3 text-[#D8B99A]" />
        </div>
        <p className="text-xs text-[#F4EFE8] font-medium leading-tight">
          Chrome & Borosilicate Glass Prism Matrix
        </p>
        <div className="mt-2 pt-1 border-t border-white/10 flex items-center justify-between text-[9px] font-mono-code text-[#F4EFE8]/50">
          <span>IOR 1.52</span>
          <span>CHROME 99.8%</span>
        </div>
      </div>

      {/* Floating Spatial Tag 2 */}
      <div className="absolute top-28 right-6 z-20 glass-panel p-3 rounded-xl border border-[#D8B99A]/20 max-w-[190px] backdrop-blur-md hidden md:block animate-float-slow shadow-2xl">
        <div className="flex items-center space-x-2 text-[10px] font-mono-code text-[#D8B99A] mb-1">
          <Compass className="w-3 h-3 text-[#C98F91] animate-spin-slow" />
          <span>SPATIAL VECTOR</span>
        </div>
        <div className="text-[11px] font-mono-code text-[#F4EFE8]">
          X: {(mousePos.targetX * 15).toFixed(1)}° | Y: {(mousePos.targetY * 15).toFixed(1)}°
        </div>
        <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#8F3D52] to-[#D8B99A] h-full transition-all duration-300"
            style={{ width: `${Math.abs(mousePos.targetX) * 100}%` }}
          />
        </div>
      </div>

      {/* Interactive Drag Hint */}
      <div className="absolute bottom-4 z-20 pointer-events-none flex items-center space-x-2 text-[11px] font-mono-code text-[#F4EFE8]/50 bg-[#0D0B10]/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
        <Layers className="w-3 h-3 text-[#D8B99A]" />
        <span>MOVE CURSOR TO ROTATE SCULPTURE</span>
      </div>
    </div>
  );
};
