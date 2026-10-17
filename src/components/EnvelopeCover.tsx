import React, { useState, useEffect, useMemo } from "react";

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export default function EnvelopeCover({ onOpen }: EnvelopeCoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 3800);
  };

  // Pre-generate hearts for rising particle animation
  const hearts = useMemo(
    () =>
      [...Array(28)].map((_, i) => ({
        left: 5 + Math.random() * 90,
        size: 10 + Math.random() * 12,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 80,
        color: ["#c99a5f", "#e3c9a8", "#e8b8ad", "#f0dcc4", "#d4a373"][i % 5],
        opacity: 0.6 + Math.random() * 0.35,
      })),
    []
  );

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 overflow-hidden flex flex-col items-center justify-center cursor-pointer z-50 select-none p-4"
      style={{
        background: `
          radial-gradient(circle at top, #fffaf1 0%, transparent 45%),
          radial-gradient(circle at bottom, #f6ecd8 0%, transparent 55%),
          linear-gradient(180deg, #fdf9f2 0%, #f0e2c8 45%, #e3cda3 100%)
        `,
      }}
    >
      {/* Ambient background glow & ray */}
      <div className="absolute inset-0 bg-[#5c4626]/[0.04] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,242,214,0.6) 0%, transparent 65%)",
          animation: "pulseGlow 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[400px] top-0 w-[600px] h-full opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(240deg, transparent, #ffe9b8, transparent)",
          animation: "shine 10s linear infinite",
        }}
      />

      {/* Frame borders */}
      <div className="absolute inset-4 sm:inset-8 md:inset-10 rounded-[32px] sm:rounded-[42px] border border-[#b8925a]/30 pointer-events-none" />
      <div className="absolute inset-6 sm:inset-10 md:inset-12 rounded-[28px] sm:rounded-[38px] border border-white/75 shadow-[inset_0_0_20px_rgba(255,255,255,0.6)] pointer-events-none" />

      {/* Floating golden sparkle dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#ffedc2" : "#c99f5e",
              opacity: 0.3 + Math.random() * 0.5,
              animation: `floatGentle ${7 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Falling decorative leaves ❦ */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              right: `${10 + i * 16}%`,
              animationDelay: `${i * 2.2}s`,
            }}
            className="absolute -top-16 text-[#9c7a45]/20 text-2xl sm:text-3xl animate-[leafFall_18s_linear_infinite]"
          >
            ❦
          </div>
        ))}
      </div>

      {/* Rising Hearts when clicked */}
      {isOpen && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[45]">
          {hearts.map((h, i) => (
            <svg
              key={i}
              viewBox="0 0 32 29"
              className="absolute"
              style={{
                left: `${h.left}%`,
                bottom: "-40px",
                width: `${h.size}px`,
                height: `${h.size}px`,
                opacity: 0,
                filter: "drop-shadow(0 1px 3px rgba(120,90,50,0.35))",
                animation: `heartRise ${h.duration}s ease-out forwards`,
                animationDelay: `${h.delay}s`,
                // @ts-expect-error CSS custom variable
                "--drift": `${h.drift}px`,
                "--peak-op": h.opacity,
              }}
            >
              <path
                d="M16 28.5C16 28.5 1 18.5 1 8.9C1 3.9 5 0.5 9.3 0.5C12.2 0.5 14.6 2.1 16 4.6C17.4 2.1 19.8 0.5 22.7 0.5C27 0.5 31 3.9 31 8.9C31 18.5 16 28.5 16 28.5Z"
                fill={h.color}
              />
            </svg>
          ))}
        </div>
      )}

      {/* Top Header: دعوة زفاف */}
      <div
        dir="rtl"
        className={`text-center mb-6 sm:mb-10 transition-all duration-700 z-10 ${
          isOpen ? "-translate-y-8 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <h1
          style={{
            fontFamily: "'Amiri', serif",
            letterSpacing: "4px",
            textShadow: "0 4px 14px rgba(120,90,50,0.16)",
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#5c4322] mb-1"
        >
          دعوة زفاف
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#b8925a] to-transparent" />
          <span
            className="tracking-[5px] text-[#8a6a3d] text-xs sm:text-sm font-semibold"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            اضغط للفتح
          </span>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#b8925a] to-transparent" />
        </div>
      </div>

      {/* 3D Envelope Wrapper - STRICT LTR GEOMETRIC LOCK */}
      <div
        dir="ltr"
        className={`relative transition-all duration-700 ${
          isOpen ? "scale-105" : "scale-100"
        }`}
        style={{
          transform: `translate(${-mousePos.x}px, ${mousePos.y}px)`,
          perspective: "1200px",
        }}
      >
        {/* Soft Shadow Underneath Envelope */}
        <div
          className="absolute left-1/2 bottom-[-12px] -translate-x-1/2 w-[320px] h-8 rounded-full blur-xl pointer-events-none"
          style={{ background: "rgba(74,56,34,0.25)" }}
        />

        {/* Envelope Outer Box: EXACT 360px x 240px */}
        <div className="relative w-[360px] h-[240px] max-w-[92vw]">
          
          {/* Envelope Back Base (Rich warm gold paper) */}
          <div
            className="absolute inset-0 rounded-[16px] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #ede0c6 0%, #dfcaa2 100%)",
              border: "1px solid rgba(184,146,90,0.45)",
              boxShadow: "0 10px 25px rgba(90,68,40,0.15)",
            }}
          />

          {/* Invitation Card (Slides Up on Click) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 rounded-[16px] overflow-hidden transition-all duration-[2000ms] cubic-bezier(0.25, 1, 0.5, 1) z-20 flex flex-col items-center justify-center p-6 ${
              isOpen
                ? "-translate-y-[135px] scale-100 opacity-100 shadow-[0_25px_60px_rgba(70,50,25,0.35)]"
                : "translate-y-[20px] scale-95 opacity-0 pointer-events-none"
            }`}
            style={{
              width: "320px",
              height: "210px",
              background: "linear-gradient(180deg, #ffffff 0%, #fffdf8 40%, #fbf4e6 100%)",
              border: "1px solid rgba(184,146,90,0.4)",
            }}
          >
            {/* Double decorative border inside card */}
            <div className="absolute inset-2.5 rounded-[10px] border border-[#dcc298] pointer-events-none" />
            <div className="absolute inset-4 rounded-[8px] border border-dashed border-[#efe0c4] pointer-events-none" />

            {/* Card Content */}
            <div className="relative flex flex-col items-center justify-center text-center z-10 w-full" dir="rtl">
              <span
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  transitionDelay: isOpen ? "700ms" : "0ms",
                }}
                className={`tracking-[3px] text-[11px] text-[#8a6a3d] font-bold transition-all duration-700 ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                تشرفنا بحضوركم
              </span>

              <div
                className={`w-8 h-[1px] bg-[#b8925a] my-2 transition-all duration-700 ${
                  isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{ transitionDelay: isOpen ? "850ms" : "0ms" }}
              />

              <div
                className={`flex flex-col items-center justify-center transition-all duration-[900ms] ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isOpen ? "1000ms" : "0ms" }}
              >
                <h2
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    textShadow: "0 4px 10px rgba(120,90,50,0.2)",
                  }}
                  className="text-[38px] text-[#6b4a26] leading-none tracking-wide"
                >
                  Ahmed
                </h2>
                <div className="text-[#b8925a] text-sm font-light my-0.5">&amp;</div>
                <h2
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    textShadow: "0 4px 10px rgba(120,90,50,0.2)",
                  }}
                  className="text-[38px] text-[#6b4a26] leading-none tracking-wide"
                >
                  Basmala
                </h2>
              </div>

              <div
                className={`mt-2.5 text-[#a97e42] text-xs tracking-[2px] font-semibold transition-all duration-700 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  transitionDelay: isOpen ? "1300ms" : "0ms",
                }}
              >
                احفظ هذا التاريخ
              </div>
            </div>
          </div>

          {/* Front Pocket: Seamless SVG with Side Folds & Bottom Base */}
          {/* Perfectly drawn to cover the bottom 180px with authentic envelope folds */}
          <div className="absolute inset-0 z-25 pointer-events-none rounded-[16px] overflow-hidden">
            <svg
              viewBox="0 0 360 240"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 8px 20px rgba(74,56,34,0.18))" }}
            >
              <defs>
                {/* Pocket gradients */}
                <linearGradient id="pocketGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fffdfa" />
                  <stop offset="50%" stopColor="#f5ead4" />
                  <stop offset="100%" stopColor="#e5cea4" />
                </linearGradient>
                <linearGradient id="leftFoldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#edd8b2" />
                  <stop offset="100%" stopColor="#e0c697" />
                </linearGradient>
                <linearGradient id="rightFoldGrad" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#edd8b2" />
                  <stop offset="100%" stopColor="#e0c697" />
                </linearGradient>
                <linearGradient id="bottomFoldGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#dfc494" />
                  <stop offset="100%" stopColor="#eedcbd" />
                </linearGradient>
              </defs>

              {/* Left Triangular Fold: (0, 0) -> (180, 130) -> (0, 240) */}
              <polygon
                points="0,0 180,130 0,240"
                fill="url(#leftFoldGrad)"
                stroke="rgba(184,146,90,0.25)"
                strokeWidth="1"
              />

              {/* Right Triangular Fold: (360, 0) -> (180, 130) -> (360, 240) */}
              <polygon
                points="360,0 180,130 360,240"
                fill="url(#rightFoldGrad)"
                stroke="rgba(184,146,90,0.25)"
                strokeWidth="1"
              />

              {/* Bottom Triangular Pocket: (0, 240) -> (180, 105) -> (360, 240) */}
              <polygon
                points="0,240 180,105 360,240"
                fill="url(#bottomFoldGrad)"
                stroke="rgba(184,146,90,0.35)"
                strokeWidth="1"
              />

              {/* Bottom subtle ornament */}
              <text
                x="180"
                y="215"
                textAnchor="middle"
                fill="#a1794a"
                fontSize="18"
                opacity="0.85"
              >
                ❧
              </text>
            </svg>
          </div>

          {/* Top Flap (Flips UP 180deg when opened) */}
          {/* Origin is locked at (0, 0) top edge spanning full 360px from corner to corner */}
          <div
            className={`absolute top-0 left-0 w-full h-[140px] origin-top transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) ${
              isOpen ? "-rotate-x-[180deg] z-10 opacity-30" : "rotate-x-0 z-35"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <svg
              viewBox="0 0 360 140"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 6px 12px rgba(60,42,20,0.2))" }}
            >
              <defs>
                <linearGradient id="topFlapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ecdcb9" />
                  <stop offset="50%" stopColor="#e3cfab" />
                  <stop offset="100%" stopColor="#d5bd90" />
                </linearGradient>
              </defs>
              {/* Flawless triangle from top-left (0,0) across to top-right (360,0) down to center point (180,135) */}
              <polygon
                points="0,0 360,0 180,135"
                fill="url(#topFlapGrad)"
                stroke="rgba(184,146,90,0.5)"
                strokeWidth="1.2"
              />
              {/* Inner delicate trim line inside flap */}
              <polyline
                points="18,6 180,128 342,6"
                fill="none"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Golden Wax Seal with "A & B" Monogram */}
          {/* Apex of top flap is at (180, 135) -> Centered directly over the flap apex! */}
          <div
            className="absolute z-40 pointer-events-none"
            style={{
              left: "180px",
              top: "135px",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* IN-PLACE ROTATING ANIMATOR: Centered on its own center — Spins purely in place! */}
            <div
              className={`transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                isOpen ? "scale-0 rotate-[360deg] opacity-0" : "scale-100 rotate-0 opacity-100"
              }`}
              style={{
                transformOrigin: "center center",
              }}
            >
              <div
                className="relative w-[84px] h-[84px] rounded-full flex items-center justify-center border-[3px] border-[#fffdf9]/85 shadow-[0_12px_30px_rgba(90,68,40,0.4),inset_0_4px_8px_rgba(255,255,255,0.5)]"
                style={{
                  background: "radial-gradient(circle at 35% 25%, #fff6e8, #c99a5f 55%, #7a5730 100%)",
                }}
              >
                <div className="absolute inset-[5px] rounded-full border border-white/30 pointer-events-none" />
                <div
                  className="relative w-full h-full flex items-center justify-center select-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="absolute text-[32px] font-light italic text-[#fffdfa] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] -translate-x-[8px] -translate-y-[5px]">
                    A
                  </span>
                  <span className="absolute text-[12px] text-[#fffdfa]/60 font-light translate-y-[2px]">
                    &amp;
                  </span>
                  <span className="absolute text-[32px] font-medium italic text-[#fffaee] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] translate-x-[8px] translate-y-[5px]">
                    B
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom prompt: اضغط للفتح */}
      <div
        dir="rtl"
        className={`text-center mt-12 transition-all duration-700 z-10 ${
          isOpen ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
        }`}
      >
        <h3
          style={{
            fontFamily: "'Cairo', sans-serif",
            textShadow: "0 3px 10px rgba(120,90,50,0.2)",
          }}
          className="text-2xl sm:text-3xl text-[#7a5730] font-bold animate-pulse duration-[2500ms]"
        >
          اضغط للفتح
        </h3>
        <p
          className="mt-1 tracking-[4px] text-[10px] sm:text-[11px] text-[#a1794a] font-medium"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          لمسة من الأناقة والجمال
        </p>
      </div>
    </div>
  );
}
