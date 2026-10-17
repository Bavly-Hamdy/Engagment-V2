import React from "react";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function WeddingAnnouncement() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-36 px-4 sm:px-6 select-none"
      style={{
        background: "linear-gradient(180deg, #fdfaf4 0%, #f9f3e8 50%, #f4ead6 100%)",
      }}
    >
      {/* Ambient background glow circles */}
      <div className="absolute top-10 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-[0.16] bg-[#c99a5f] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-[0.14] bg-[#8a6a3d] pointer-events-none" />
      <div className="absolute inset-4 sm:inset-8 border border-[#b8925a]/20 rounded-[36px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Together Forever Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span
            className="inline-block uppercase tracking-[6px] text-[10px] sm:text-[11px] font-bold px-5 py-2 rounded-full border border-[#b8925a]/40 bg-white/70 shadow-sm backdrop-blur-xs"
            style={{ color: "#8a6a3d", fontFamily: "'Montserrat', sans-serif" }}
          >
            Together Forever
          </span>
        </motion.div>

        {/* Concentric Pulsing Golden Heart Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Outer breathing halo ring */}
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-full border-2 border-[#d4af37] pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -inset-1.5 rounded-full border border-[#b8925a]/60 pointer-events-none"
            />

            {/* Glowing Center Orb */}
            <div
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-xl"
              style={{
                background: "linear-gradient(145deg, #ffffff, #f7ecd5)",
                border: "1.5px solid rgba(184,146,90,0.55)",
                boxShadow:
                  "0 15px 35px rgba(120,90,50,0.22), inset 0 2px 4px rgba(255,255,255,0.9)",
              }}
            >
              <Heart size={26} className="text-[#b8925a] fill-[#b8925a] animate-pulse" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="leading-tight mb-4"
          style={{
            color: "#5c4322",
            fontFamily: "'Aref Ruqaa', serif",
            fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
            textShadow: "0 2px 10px rgba(90,66,34,0.12)",
          }}
        >
          حفل زفافنا
        </motion.h2>

        {/* Golden Star Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]" />
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#b8925a]">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
          </svg>
          <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]" />
        </motion.div>

        {/* Warm Invitation Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="max-w-xl mx-auto leading-8 sm:leading-9 text-base sm:text-xl mb-12 sm:mb-16 px-4"
          style={{ color: "#6b5433", fontFamily: "'Amiri', serif" }}
        >
          بكل الحب والسعادة ندعوكم لمشاركتنا أجمل لحظات العمر، والاحتفال بزفافنا وسط الأهل والأصدقاء
        </motion.p>

        {/* Luxury Date Card with 3D Hover & Shimmer Accent */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6, scale: 1.015 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative max-w-md mx-auto group cursor-default"
        >
          {/* Ambient card aura */}
          <div
            className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-65 transition-opacity"
            style={{ background: "radial-gradient(ellipse, #d4b483 0%, transparent 70%)" }}
          />

          <div
            className="relative rounded-[2rem] px-8 py-10 sm:px-12 sm:py-12 overflow-hidden shadow-2xl transition-shadow duration-500"
            style={{
              background: "linear-gradient(160deg, #ffffff 0%, #fdf9f0 100%)",
              border: "1.5px solid rgba(184,146,90,0.45)",
              boxShadow:
                "0 30px 65px rgba(90,66,34,0.18), 0 8px 22px rgba(90,66,34,0.08), inset 0 2px 0 rgba(255,255,255,0.95)",
            }}
          >
            {/* Shimmer sweep light bar */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.6) 50%, transparent 65%)",
              }}
            />

            {/* 4 Golden Filigree Corner Brackets */}
            <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-[#b8925a]/60 rounded-tl-xl transition-all duration-300 group-hover:border-[#b8925a]" />
            <div className="absolute top-4 right-4 w-9 h-9 border-t-2 border-r-2 border-[#b8925a]/60 rounded-tr-xl transition-all duration-300 group-hover:border-[#b8925a]" />
            <div className="absolute bottom-4 left-4 w-9 h-9 border-b-2 border-l-2 border-[#b8925a]/60 rounded-bl-xl transition-all duration-300 group-hover:border-[#b8925a]" />
            <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-[#b8925a]/60 rounded-br-xl transition-all duration-300 group-hover:border-[#b8925a]" />

            {/* Header: موعد الزفاف */}
            <p
              className="uppercase tracking-[4px] text-[11px] sm:text-xs mb-4 font-bold"
              style={{ color: "#b8925a", fontFamily: "'Montserrat', sans-serif" }}
            >
              موعد الزفاف
            </p>

            {/* Date Numbers: 06 / 11 / 2026 */}
            <div
              dir="ltr"
              className="flex items-center justify-center gap-3 sm:gap-5 mb-2"
            >
              {/* Day */}
              <div className="flex flex-col items-center">
                <span
                  className="font-bold leading-none tracking-tight"
                  style={{
                    color: "#5c4322",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.5rem, 7vw, 3.8rem)",
                  }}
                >
                  06
                </span>
                <span
                  className="text-[10px] tracking-[2px] uppercase mt-1 font-bold"
                  style={{ color: "#a97e42", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Day
                </span>
              </div>

              <span className="text-2xl sm:text-3xl pb-4 font-light text-[#d4b483]">
                /
              </span>

              {/* Month */}
              <div className="flex flex-col items-center">
                <span
                  className="font-bold leading-none tracking-tight"
                  style={{
                    color: "#5c4322",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.5rem, 7vw, 3.8rem)",
                  }}
                >
                  11
                </span>
                <span
                  className="text-[10px] tracking-[2px] uppercase mt-1 font-bold"
                  style={{ color: "#a97e42", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Month
                </span>
              </div>

              <span className="text-2xl sm:text-3xl pb-4 font-light text-[#d4b483]">
                /
              </span>

              {/* Year */}
              <div className="flex flex-col items-center">
                <span
                  className="font-bold leading-none tracking-tight"
                  style={{
                    color: "#5c4322",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.5rem, 7vw, 3.8rem)",
                  }}
                >
                  2026
                </span>
                <span
                  className="text-[10px] tracking-[2px] uppercase mt-1 font-bold"
                  style={{ color: "#a97e42", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Year
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="w-20 h-[1px] mx-auto my-5"
              style={{ background: "linear-gradient(90deg, transparent, #b8925a, transparent)" }}
            />

            {/* Arabic Date Subtext */}
            <p
              className="text-sm sm:text-base leading-7 font-bold text-[#8a6a3d]"
              style={{ fontFamily: "'Amiri', serif" }}
            >
              في ليلة مليئة بالفرح والحب ننتظر حضوركم الكريم
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
