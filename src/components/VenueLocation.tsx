import React, { useState } from "react";
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function VenueLocation() {
  const [copied, setCopied] = useState(false);

  const coordinates = '30°10\'57.5"N 31°08\'04.2"E';
  const mapsUrl = "https://www.google.com/maps?q=30.182625,31.134506";

  const handleCopy = () => {
    navigator.clipboard.writeText(coordinates);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden py-24 sm:py-36 px-4 sm:px-6 select-none"
      style={{
        background: "linear-gradient(180deg, #fdfaf4 0%, #f9f3e8 100%)",
      }}
    >
      {/* Decorative ambient blur */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-[0.12] bg-[#c99a5f] pointer-events-none" />
      <div className="absolute inset-4 sm:inset-8 border border-[#b8925a]/15 rounded-[36px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center"
      >
        {/* Pill */}
        <div className="mb-4">
          <span
            className="inline-block uppercase tracking-[4px] text-[10px] sm:text-[11px] font-bold px-4 py-1.5 rounded-full border border-[#b8925a]/35 bg-white/75 shadow-xs"
            style={{ color: "#8a6a3d", fontFamily: "'Montserrat', sans-serif" }}
          >
            VENUE &amp; LOCATION
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{
            color: "#5c4322",
            fontFamily: "'Aref Ruqaa', serif",
            textShadow: "0 2px 10px rgba(90,66,34,0.1)",
          }}
        >
          مكان حفل زفافنا
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]" />
          <MapPin size={20} className="text-[#b8925a]" />
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]" />
        </div>

        {/* Main Venue Card with 3D Hover Depth */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-2xl bg-white/92 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#b8925a]/40 shadow-2xl mb-12 relative overflow-hidden"
          style={{
            boxShadow:
              "0 25px 60px rgba(90,66,34,0.15), 0 6px 18px rgba(90,66,34,0.06), inset 0 2px 0 rgba(255,255,255,0.95)",
          }}
        >
          {/* Top golden gradient accent bar */}
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#b8925a] via-[#e2c163] to-[#b8925a]" />

          {/* Pin Icon with animated pulse */}
          <div className="relative w-16 h-16 rounded-full bg-[#b8925a]/10 border border-[#b8925a]/35 flex items-center justify-center text-[#b8925a] mx-auto mb-5 shadow-xs">
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#b8925a] pointer-events-none"
            />
            <MapPin size={28} strokeWidth={2} />
          </div>

          {/* Hall Name */}
          <h3
            className="text-3xl sm:text-4xl font-extrabold text-[#5c4322] mb-3"
            style={{ fontFamily: "'Aref Ruqaa', serif" }}
          >
            قاعة سنو وايت
          </h3>

          {/* Address */}
          <p
            className="text-lg sm:text-2xl text-[#b8925a] font-bold mb-4"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            جزيرة الشعير — بجوار نادي ضباط القناطر الخيرية
          </p>

          <div className="w-20 h-px bg-[#b8925a]/30 mx-auto mb-6" />

          {/* Details badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            <div className="flex items-center gap-2 bg-[#fdf9f2] px-4 py-2 rounded-full border border-[#b8925a]/30 text-xs sm:text-sm font-semibold text-[#6b5433]">
              <Clock size={16} className="text-[#b8925a] shrink-0" />
              <span>موعد الحضور: الساعة 7:00 مساءً</span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#fdf9f2] hover:bg-[#f6ecd8] text-[#5c4322] px-4 py-2 rounded-full border border-[#b8925a]/30 transition-colors cursor-pointer text-xs sm:text-sm font-medium"
              title="اضغط لنسخ الإحداثيات"
            >
              {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} className="text-[#b8925a]" />}
              <span dir="ltr" className="font-mono text-xs font-semibold">
                {copied ? "تم النسخ بنجاح!" : coordinates}
              </span>
            </button>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white text-xs sm:text-sm font-bold tracking-wider shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #c99a5f 0%, #b8925a 50%, #8a6a3d 100%)",
                boxShadow: "0 10px 25px rgba(184,146,90,0.35)",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              <Navigation size={18} />
              <span>فتح الاتجاهات على Google Maps</span>
              <ExternalLink size={14} className="opacity-70" />
            </motion.a>
          </div>
        </motion.div>

        {/* Embedded Google Map with Luxury Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#b8925a]" />
            <p
              className="text-xl sm:text-2xl font-bold text-[#5c4322]"
              style={{ fontFamily: "'Aref Ruqaa', serif" }}
            >
              موقع القاعة على الخريطة
            </p>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#b8925a]" />
          </div>

          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl border p-1"
            style={{ borderColor: "rgba(184, 146, 90, 0.4)", background: "#ffffff" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=30.182625,31.134506&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: "1.5rem" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Snow White Hall Location Map"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
