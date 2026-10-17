import React, { useMemo } from "react";
import { motion } from "motion/react";

export default function GoldenDust() {
  // Generate random particles once for stable animations
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: `${(i * 3.1 + (i % 7) * 9.3) % 100}%`,
        top: `${(i * 4.7 + (i % 5) * 11.2) % 100}%`,
        size: i % 5 === 0 ? 14 : i % 3 === 0 ? 8 : 3.5, // bokeh orbs vs fine dust
        duration: 9 + (i % 6) * 2.5,
        delay: (i % 8) * 0.7,
        opacity: i % 5 === 0 ? 0.12 : i % 3 === 0 ? 0.25 : 0.5,
        isSparkle: i % 4 === 0,
        driftX: ((i % 5) - 2) * 15,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none">
      {particles.map((p) =>
        p.isSparkle ? (
          <motion.div
            key={p.id}
            className="absolute text-[#d4af37] font-serif select-none pointer-events-none"
            style={{
              left: p.left,
              top: p.top,
              fontSize: `${Math.max(10, p.size * 1.5)}px`,
              opacity: p.opacity,
              filter: "drop-shadow(0 0 6px rgba(212, 175, 55, 0.7))",
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-p.driftX, p.driftX, -p.driftX],
              opacity: [p.opacity * 0.2, p.opacity, p.opacity * 0.2],
              scale: [0.75, 1.25, 0.75],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: p.duration * 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          >
            ✦
          </motion.div>
        ) : (
          <motion.div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background:
                p.size > 10
                  ? "radial-gradient(circle, rgba(236,208,120,0.3) 0%, rgba(184,146,90,0.15) 60%, transparent 100%)"
                  : "radial-gradient(circle, #fff2cc 0%, #b8925a 75%, transparent 100%)",
              boxShadow:
                p.size <= 10
                  ? `0 0 ${p.size * 3}px rgba(212, 175, 55, 0.8)`
                  : "none",
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-p.driftX, p.driftX, -p.driftX],
              opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        )
      )}
    </div>
  );
}
