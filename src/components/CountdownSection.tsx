import React, { useState, useEffect } from "react";
import { Calendar, CalendarPlus } from "lucide-react";
import { motion } from "motion/react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: Friday, November 6, 2026 at 7:00 PM (19:00)
    const targetDate = new Date("2026-11-06T19:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("حفل زفاف أحمد وبسملة | Ahmed & Basmala Wedding");
    const details = encodeURIComponent(
      "حفل زفاف أحمد وبسملة بقاعة سنو وايت، جزيرة الشعير بجوار نادي ضباط القناطر الخيرية. موعد الحضور الساعة 7:00 مساءً."
    );
    const location = encodeURIComponent("قاعة سنو وايت، جزيرة الشعير، القناطر الخيرية");
    // Start: 2026-11-06 19:00 Cairo
    const startDate = "20261106T170000Z";
    const endDate = "20261106T220000Z";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank");
  };

  const timeBlocks = [
    { labelEn: "Days", labelAr: "يوم", value: timeLeft.days },
    { labelEn: "Hours", labelAr: "ساعة", value: timeLeft.hours },
    { labelEn: "Minutes", labelAr: "دقيقة", value: timeLeft.minutes },
    { labelEn: "Seconds", labelAr: "ثانية", value: timeLeft.seconds },
  ];

  return (
    <section
      dir="rtl"
      className="py-24 sm:py-36 px-4 sm:px-6 text-center relative overflow-hidden select-none"
      style={{
        background: "radial-gradient(circle at top, #fdf9f0 0%, #f6ecd8 55%, #ffffff 100%)",
      }}
    >
      {/* Ambient background circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#c99a5f]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#8a6a3d]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-4 sm:inset-8 border border-[#b8925a]/15 rounded-[36px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* Subtitle tag */}
        <div className="mb-4">
          <span
            className="inline-block uppercase tracking-[4px] text-[10px] sm:text-[11px] font-bold px-4 py-1.5 rounded-full border border-[#b8925a]/35 bg-white/75 shadow-xs"
            style={{ color: "#8a6a3d", fontFamily: "'Montserrat', sans-serif" }}
          >
            COUNTDOWN
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{
            color: "#5c4322",
            fontFamily: "'Aref Ruqaa', serif",
            textShadow: "0 2px 8px rgba(90,66,34,0.12)",
          }}
        >
          كل ثانية تقربنا أكتر من أجمل بداية
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]" />
          <Calendar size={18} className="text-[#b8925a]" />
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]" />
        </div>

        {/* Timer Cards Grid */}
        <div
          dir="ltr"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-6 w-full max-w-2xl mb-12"
        >
          {timeBlocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col items-center justify-center bg-white/85 backdrop-blur-md border border-[#b8925a]/35 shadow-xl transition-all duration-300"
              style={{
                boxShadow:
                  "0 18px 40px rgba(120,90,50,0.14), inset 0 2px 0 rgba(255,255,255,0.95)",
              }}
            >
              {/* Corner decor */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#b8925a]/50 rounded-tl" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#b8925a]/50 rounded-tr" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#b8925a]/50 rounded-bl" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#b8925a]/50 rounded-br" />

              <span
                className="font-bold leading-none mb-2 tabular-nums"
                style={{
                  color: "#5c4322",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
                }}
              >
                {String(block.value).padStart(2, "0")}
              </span>

              <span
                className="text-xs sm:text-sm font-bold text-[#8a6a3d]"
                style={{ fontFamily: "'Aref Ruqaa', serif" }}
              >
                {block.labelAr}
              </span>

              <span
                className="text-[9px] uppercase tracking-[2px] text-[#b8925a] font-bold mt-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.labelEn}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Button with pulse & shine */}
        <motion.button
          type="button"
          onClick={handleAddToCalendar}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white text-xs sm:text-sm font-bold tracking-wider shadow-lg cursor-pointer group"
          style={{
            background: "linear-gradient(135deg, #c99a5f 0%, #b8925a 50%, #8a6a3d 100%)",
            boxShadow: "0 12px 28px rgba(184,146,90,0.4)",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          {/* Subtle shine sweep on button */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
            }}
          />
          <CalendarPlus size={18} className="transition-transform group-hover:rotate-12" />
          <span>أضف موعد الفرح إلى تقويمك 🗓️</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
