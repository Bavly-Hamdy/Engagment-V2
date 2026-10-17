import React from "react";
import { motion } from "motion/react";

export default function QuranicVerse() {
  return (
    <section
      className="py-24 sm:py-32 px-4 sm:px-6 text-center relative overflow-hidden select-none"
      style={{
        background: "linear-gradient(180deg, #fdfaf4 0%, #faf5ea 50%, #f5ecd9 100%)",
      }}
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(184,146,90,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Decorative Outer Frame with ornate corners */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-[#d4b483]/35 rounded-[32px] pointer-events-none">
        {/* 4 Corner Arabesque Accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#b8925a]/60 rounded-tl-lg" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#b8925a]/60 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#b8925a]/60 rounded-bl-lg" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#b8925a]/60 rounded-br-lg" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto relative z-10"
      >
        {/* Star Ornament & Lines */}
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a] origin-right"
          />
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-[#b8925a]"
              style={{ filter: "drop-shadow(0 0 8px rgba(184,146,90,0.5))" }}
            >
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
            </svg>
          </motion.div>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a] origin-left"
          />
        </div>

        {/* Full Quranic Verse with Harakat */}
        <motion.p
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="leading-loose text-2xl sm:text-3xl md:text-4xl px-3 sm:px-6 mb-8 text-[#5c4322]"
          style={{
            fontFamily: "'Amiri', serif",
            textShadow: "0 2px 10px rgba(90,66,34,0.12)",
          }}
        >
          ﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ﴾
        </motion.p>

        {/* Delicate divider line with glowing center diamond */}
        <div className="flex items-center justify-center gap-3 my-7">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]"
          />
          <span className="text-[#b8925a] text-xs">◈</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]"
          />
        </div>

        {/* English Translation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-sm sm:text-base italic px-4 max-w-2xl mx-auto leading-relaxed"
          style={{
            lineHeight: "1.9",
            color: "#8a6a3d",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who reflect."
        </motion.p>

        {/* Surah Reference Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6"
        >
          <span
            className="inline-block text-[10px] sm:text-xs tracking-[4px] uppercase font-bold px-4 py-1.5 rounded-full border border-[#b8925a]/30 bg-white/60 shadow-xs"
            style={{ color: "#a97e42", fontFamily: "'Montserrat', sans-serif" }}
          >
            SURAH AR-RUM — 30:21
          </span>
        </motion.div>

        {/* Bottom Arabesque Ornament */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]/60" />
          <span className="text-[#b8925a] text-sm">❧</span>
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]/60" />
        </div>
      </motion.div>
    </section>
  );
}
