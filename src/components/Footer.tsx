import React from "react";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-18 px-6 text-center select-none"
      style={{
        background: "linear-gradient(180deg, #f4ead6 0%, #ede0c5 100%)",
        borderTop: "1.5px solid rgba(184, 146, 90, 0.3)",
      }}
    >
      <div className="absolute inset-4 sm:inset-6 border border-[#b8925a]/20 rounded-[32px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* Heart icon with breathing pulse */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-13 h-13 rounded-full bg-white/80 border border-[#b8925a]/35 flex items-center justify-center text-[#b8925a] mb-4 shadow-sm"
        >
          <Heart size={22} className="fill-[#b8925a]" />
        </motion.div>

        {/* Names */}
        <h3
          className="text-3xl sm:text-5xl font-bold text-[#5c4322] mb-1"
          style={{ fontFamily: "'Aref Ruqaa', serif" }}
        >
          أحمد &amp; بسملة
        </h3>

        <p
          className="text-2xl sm:text-4xl text-[#8a6a3d] mb-4"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Ahmed &amp; Basmala
        </p>

        <p
          className="text-sm sm:text-base text-[#7a5730] leading-relaxed mb-6 max-w-md px-2"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          فرحتنا تكتمل بوجودكم بيننا، ونسعد بتشريفكم في ليلة العمر.
          <br />
          الجمعة ٦ نوفمبر ٢٠٢٦ — قاعة سنو وايت (جزيرة الشعير)
        </p>

        <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs text-[#a97e42] tracking-wider font-bold">
          <span className="w-10 h-px bg-[#b8925a]/40" />
          <span style={{ fontFamily: "'Montserrat', sans-serif" }}>TOGETHER FOREVER • 2026</span>
          <span className="w-10 h-px bg-[#b8925a]/40" />
        </div>
      </motion.div>
    </footer>
  );
}
