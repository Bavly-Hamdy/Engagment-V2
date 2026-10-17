import React from "react";
import { motion } from "motion/react";
import fig1 from "../assets/Figure 1.jpeg";
import fig2 from "../assets/Figure 2.jpeg";
import fig3 from "../assets/Figure 3.jpeg";

export default function CoupleStory() {
  const photos = [
    {
      src: fig1,
      alt: "Ahmed & Basmala Moment 1",
      title: "أجمل صدفة",
      caption: "بداية رحلة الحب والوفاق",
      offset: "mb-6 sm:mb-12",
      delay: 0.2,
    },
    {
      src: fig3,
      alt: "Ahmed & Basmala Wedding",
      title: "معاً للأبد",
      caption: "أحمد & بسملة",
      offset: "mb-0",
      featured: true,
      delay: 0.4,
    },
    {
      src: fig2,
      alt: "Ahmed & Basmala Moment 2",
      title: "فرحة العمر",
      caption: "سند وعمر وذكريات لا تغيب",
      offset: "mb-6 sm:mb-12",
      delay: 0.3,
    },
  ];

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden py-24 sm:py-36 px-4 sm:px-6 select-none"
      style={{
        background: "radial-gradient(circle at top, #fdf9f0 0%, #f6ecd8 50%, #ffffff 100%)",
      }}
    >
      {/* Ambient blurs & sparkle accents */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#c99a5f]/14 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-[#8a6a3d]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sparkles */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-12 text-[#c99a5f]/40 text-4xl pointer-events-none"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -45, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-16 text-[#8a6a3d]/30 text-3xl pointer-events-none"
      >
        ✧
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span
            className="inline-block uppercase tracking-[5px] text-[10px] sm:text-[11px] font-bold px-4 py-1.5 rounded-full border border-[#b8925a]/35 bg-white/75 shadow-xs"
            style={{ color: "#8a6a3d", fontFamily: "'Montserrat', sans-serif" }}
          >
            OUR STORY
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-3xl sm:text-5xl font-normal mb-4"
          style={{
            color: "#5c4322",
            fontFamily: "'Aref Ruqaa', serif",
            textShadow: "0 2px 10px rgba(90,66,34,0.1)",
          }}
        >
          بداية أجمل
        </motion.h2>

        {/* Star Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-14 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]" />
          <span className="text-[#b8925a] text-sm">❦</span>
          <span className="w-14 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]" />
        </motion.div>

        {/* Story Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-xl leading-relaxed sm:leading-loose text-[#6b5433] mb-16 px-4"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          في ليلة تملؤها السعادة والدفء نحتفل ببداية فصل جديد مليء بالحب والذكريات الجميلة،
          <br className="hidden sm:inline" />
          وحضوركم الكريم هو أجمل وأبهى تفاصيل هذه الليلة.
        </motion.p>

        {/* Arched Photo Gallery with Staggered Entrance */}
        <div className="w-full relative flex flex-wrap items-end justify-center gap-5 sm:gap-8 pt-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: photo.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col items-center flex-shrink-0 cursor-pointer ${photo.offset}`}
            >
              {/* Hanging decorative line and pin */}
              <div
                className="w-[2px] h-7 sm:h-9 transition-colors group-hover:bg-[#b8925a]"
                style={{ background: "linear-gradient(180deg, #b8925a, #d4b483)" }}
              />
              <div
                className="w-2.5 h-2.5 rounded-full -mt-1 mb-2 transition-transform group-hover:scale-125"
                style={{
                  background: "#b8925a",
                  boxShadow: "0 2px 6px rgba(90,66,34,0.4)",
                }}
              />

              {/* Arched Picture Frame with Royal Gold Ring */}
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden bg-[#faf6ef] shadow-2xl transition-all duration-500 ${
                  photo.featured
                    ? "w-48 sm:w-60 md:w-68 ring-2 ring-[#b8925a]"
                    : "w-36 sm:w-44 md:w-52 ring-1 ring-[#b8925a]/60 hover:ring-[#b8925a]"
                }`}
                style={{
                  borderRadius: "130px 130px 20px 20px",
                  border: "5px solid #fdf9f0",
                  aspectRatio: "3 / 4.4",
                  boxShadow: photo.featured
                    ? "0 25px 60px rgba(90,66,34,0.25), 0 5px 15px rgba(184,146,90,0.2)"
                    : "0 18px 45px rgba(90,66,34,0.18)",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  style={{ objectPosition: "center 20%" }}
                  loading="lazy"
                />

                {/* Inner border and gradient shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d0e]/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-2 rounded-[120px_120px_14px_14px] border border-white/40 pointer-events-none" />

                {/* Shimmer sweep effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.4) 50%, transparent 65%)",
                  }}
                />

                {/* Overlay Text */}
                <div className="absolute bottom-3 right-0 left-0 text-center px-2 z-10 text-white">
                  <span
                    className="block text-sm sm:text-base font-bold drop-shadow-md"
                    style={{ fontFamily: "'Aref Ruqaa', serif" }}
                  >
                    {photo.title}
                  </span>
                </div>
              </motion.div>

              {/* Bottom Caption */}
              <span
                className="mt-3.5 text-xs sm:text-sm font-bold text-[#8a6a3d] group-hover:text-[#5c4322] transition-colors"
                style={{ fontFamily: "'Amiri', serif" }}
              >
                {photo.caption}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
