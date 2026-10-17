import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function ParentsBlessing() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6 text-center select-none"
      style={{
        background: "linear-gradient(180deg, #fdfaf4 0%, #f6ecd8 100%)",
      }}
    >
      {/* Soft central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#c99a5f]/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* Section Heading */}
        <div className="inline-flex items-center gap-2.5 mb-3">
          <Sparkles size={20} className="text-[#b8925a] animate-pulse" />
          <h2
            className="text-2xl sm:text-4xl leading-snug font-bold"
            style={{ color: "#5c4322", fontFamily: "'Aref Ruqaa', serif" }}
          >
            بمباركة أهلهما الكرام
          </h2>
          <Sparkles size={20} className="text-[#b8925a] animate-pulse" />
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <span className="w-14 h-px bg-gradient-to-r from-transparent to-[#b8925a]" />
          <span className="text-[#b8925a] text-sm">❦</span>
          <span className="w-14 h-px bg-gradient-to-l from-transparent to-[#b8925a]" />
        </div>

        <p
          className="text-sm sm:text-base mb-10 text-[#7a5730] leading-relaxed max-w-lg px-2"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          بقلوب مفعمة بالفرح والامتنان، يتشرف الأهل بدعوتكم للمشاركة في هذه الليلة المباركة، سائلين المولى عز وجل أن يبارك للعروسين ويجمع بينهما في خير.
        </p>

        {/* Dress code & Timing Banner */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg rounded-2xl p-6 sm:p-8 border border-[#b8925a]/35 shadow-xl relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #ffffff, #fdfaf5)",
            boxShadow:
              "0 20px 45px rgba(90,66,34,0.12), inset 0 2px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Top golden strip */}
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#b8925a] to-transparent" />

          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs uppercase tracking-[3px] font-bold text-[#b8925a]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              INVITATION NOTES
            </span>
            <p
              className="text-base sm:text-xl font-bold text-[#5c4322]"
              style={{ fontFamily: "'Aref Ruqaa', serif" }}
            >
              موعد الحضور: من السابعة مساءً (7:00 PM)
            </p>
            <div className="w-16 h-px bg-[#b8925a]/40 my-2" />
            <p
              className="text-xs sm:text-sm text-[#8a6a3d] leading-relaxed"
              style={{ fontFamily: "'Amiri', serif" }}
            >
              فلتتزيّنوا بأبهى حلة، فليلتنا عرس وفرح وسرور يليق بحضوركم البهي وتواجدكم الكريم معنا
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
