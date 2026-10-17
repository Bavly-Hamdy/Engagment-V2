import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import heroVideo from "../assets/hero-DZoTv5Xn.mp4";
import coupleBg from "../assets/couple.jpg";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const startPlay = () => {
          video.play().catch(() => {});
          window.removeEventListener("click", startPlay);
          window.removeEventListener("touchstart", startPlay);
        };
        window.addEventListener("click", startPlay);
        window.addEventListener("touchstart", startPlay);
      });
    }
  }, []);

  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight * 0.92, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between text-center px-4 py-12 sm:py-16 overflow-hidden select-none">
      {/* Fallback romantic background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${coupleBg})`,
          filter: "brightness(0.38) blur(1px)",
        }}
      />

      {/* Looping Background Video with cinematic grade */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={coupleBg}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-1 transition-opacity duration-1000"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Warm Gradient & Dark Vignette Overlay for maximum depth */}
      <div
        className="absolute inset-0 pointer-events-none z-2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(15,10,5,0.7) 100%), linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 40%, rgba(10,7,4,0.75) 100%)",
        }}
      />

      {/* Decorative Golden Inset Frame */}
      <div className="absolute inset-3 sm:inset-6 border border-[#d4af37]/20 rounded-[28px] sm:rounded-[36px] pointer-events-none z-3" />

      {/* Top Spacer */}
      <div className="z-10" />

      {/* Center Content: Verse, Names, Date with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-2 w-full max-w-3xl flex flex-col items-center my-auto py-6"
      >
        {/* Quranic Verse */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl leading-relaxed font-bold text-[#fffdfa] mb-5 sm:mb-6 max-w-2xl px-2"
          style={{
            fontFamily: "'Amiri', serif",
            textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 4px 25px rgba(0,0,0,0.8)",
          }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>

        {/* Gold Star Divider with Glowing Pulse */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-4 text-[#d4af37] mb-6 sm:mb-8"
        >
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.85))" }}
            >
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
            </svg>
          </motion.div>
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]" />
        </motion.div>

        {/* Arabic Calligraphy Names with Metallic Gold Shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative mb-2 sm:mb-3"
        >
          <h1
            className="leading-tight text-[#fffdfa]"
            style={{
              fontFamily: "'Aref Ruqaa', serif",
              fontSize: "clamp(3.3rem, 9vw, 5.6rem)",
              textShadow:
                "0 3px 10px rgba(0,0,0,0.9), 0 8px 35px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.3)",
            }}
          >
            <span>أحمد</span>
            <span className="text-[#ecd078] mx-3 sm:mx-5 font-normal inline-block hover:scale-110 transition-transform">
              و
            </span>
            <span>بسملة</span>
          </h1>
        </motion.div>

        {/* English Script Names */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-6 sm:mb-8"
        >
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#ecd078] tracking-wide"
            style={{
              fontFamily: "'Great Vibes', cursive",
              textShadow: "0 2px 14px rgba(0,0,0,0.9), 0 0 25px rgba(212,175,55,0.55)",
            }}
          >
            Ahmed &amp; Basmala
          </h2>
        </motion.div>

        {/* Wedding Date Pill with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mb-4"
        >
          <p
            dir="ltr"
            className="text-xs sm:text-sm font-bold tracking-[0.28em] uppercase text-[#fffaee] px-6 sm:px-8 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.4)] inline-block transition-transform hover:scale-105"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            FRIDAY, NOVEMBER 6, 2026
          </p>
        </motion.div>
      </motion.div>

      {/* Circular Scroll Down Button with Glowing Ripple Ring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 pt-2 pb-4"
      >
        <button
          type="button"
          onClick={scrollToContent}
          className="group flex flex-col items-center gap-1.5 cursor-pointer outline-none transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll down"
        >
          <div className="relative">
            {/* Soft pulsing halo */}
            <div className="absolute -inset-1 rounded-full bg-[#d4af37]/30 blur-xs animate-ping opacity-40 pointer-events-none" />
            <div className="relative w-11 h-11 rounded-full border border-[#d4af37] flex items-center justify-center bg-black/45 backdrop-blur-md shadow-xl group-hover:border-[#ffd700] transition-colors">
              <svg
                className="w-4 h-4 text-[#ecd078] animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <span
            className="text-[9px] tracking-[0.26em] text-[#ecd078] font-bold uppercase transition-colors group-hover:text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            SCROLL
          </span>
        </button>
      </motion.div>
    </section>
  );
}
