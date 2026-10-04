import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, UserCheck, CalendarCheck, Navigation } from "lucide-react";
import Countdown from "./Countdown";
import Sparkles from "./Sparkles";
import Gallery from "./Gallery";
import InteractiveCalendar from "./InteractiveCalendar";
import RSVPModal from "./RSVPModal";
import Guestbook from "./Guestbook";

export default function Invitation() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  const cornerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.95, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className="min-h-screen w-full relative pb-24 overflow-x-hidden flex flex-col items-center bg-transparent font-serif text-brand-primary">
      {/* Responsive Decorative Background Corners */}
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-r-2 sm:border-r-[3px] border-t-2 sm:border-t-[3px] border-brand-border m-3 sm:m-6 md:m-8 origin-top-right pointer-events-none"
      />
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-brand-border m-3 sm:m-6 md:m-8 origin-bottom-left pointer-events-none"
      />
      
      <div className="max-w-4xl w-full px-4 sm:px-6 pt-12 sm:pt-20 md:pt-24 flex flex-col items-center text-center z-10">
        
        {/* Quranic Intro Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 sm:mb-20 mt-4 sm:mt-8 w-full max-w-2xl px-2"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xs border border-brand-border/40 text-brand-accent text-xs font-bold tracking-widest uppercase">
            بسم الله الرحمن الرحيم
          </div>
          <p className="font-arabic text-lg sm:text-2xl md:text-3xl text-brand-primary leading-relaxed sm:leading-loose font-bold">
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <p className="font-arabic text-xs sm:text-sm text-brand-secondary mt-5 tracking-[0.15em] font-bold">
            — صدق الله العظيم —
          </p>
        </motion.div>

        {/* Names Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 relative w-full"
        >
          <span className="absolute text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-sans font-black text-brand-faint -z-10 opacity-70 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            CELEBRATE
          </span>

          <h2 className="font-arabic text-base sm:text-xl text-brand-accent font-extrabold tracking-[0.2em] mb-8 sm:mb-12 uppercase" dir="rtl">
            نتشرف بدعوتكم لحضور حفلة عقد القران
          </h2>
          
          <div className="relative inline-block w-full max-w-lg mt-2 sm:mt-6">
            <Sparkles count={18} />
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-brand-primary z-10 block relative tracking-tight">
              Ahmed
            </h1>
            <span className="text-3xl sm:text-5xl font-serif italic font-normal text-brand-accent block my-3 sm:my-6 relative z-10">
              &amp;
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-brand-primary z-10 block relative tracking-tight">
              Basmala
            </h1>
          </div>
        </motion.div>

        {/* Date & Countdown */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 w-full flex flex-col items-center"
        >
          <div className="inline-block tracking-[0.3em] text-[11px] sm:text-xs uppercase font-sans font-extrabold text-brand-primary mb-3">
            Save The Date
          </div>

          {/* Arabic Date */}
          <h3 className="font-arabic text-2xl sm:text-4xl font-bold text-brand-primary mb-2">
            الجمعة، ٣٠ أكتوبر ٢٠٢٦
          </h3>

          {/* English Date with strict LTR isolation */}
          <p 
            dir="ltr" 
            style={{ direction: "ltr", unicodeBidi: "isolate" }}
            className="text-lg sm:text-2xl font-serif italic text-brand-accent font-semibold mb-8 sm:mb-12"
          >
            Friday, October 30, 2026
          </p>
          
          <Countdown />
        </motion.div>

        {/* Interactive Calendar */}
        <InteractiveCalendar />

        {/* RSVP Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 w-full flex flex-col items-center relative"
        >
          <span className="absolute text-6xl sm:text-8xl md:text-[130px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            RSVP
          </span>

          <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-3">
            <CalendarCheck size={22} strokeWidth={1.5} />
          </div>

          <h2 className="font-serif tracking-[0.25em] text-xs sm:text-sm uppercase font-bold text-brand-primary mb-1">
            RSVP
          </h2>
          <h3 className="font-arabic text-2xl sm:text-3xl font-bold text-brand-accent mb-3">
            تأكيد الحضور
          </h3>
          <p className="font-arabic text-sm text-brand-secondary max-w-sm mx-auto mb-8 font-medium px-4">
            سعادتنا تكتمل بوجودكم، شاركونا فرحتنا وأكدوا حضوركم
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRSVPOpen(true)}
            className="flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 bg-brand-accent text-white text-[11px] sm:text-xs uppercase tracking-[0.3em] font-sans font-bold hover:bg-brand-primary transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer border-none rounded-full"
          >
            <UserCheck size={18} strokeWidth={1.8} />
            أكّد حضورك
          </motion.button>
        </motion.div>

        {/* Photo Gallery Section */}
        <Gallery />

        {/* Location Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full relative text-center flex flex-col items-center mb-16 sm:mb-24"
          dir="rtl"
        >
          <div className="flex items-center gap-4 mb-8 justify-center bg-white/80 backdrop-blur-xs border border-brand-border/60 px-5 py-3 rounded-2xl shadow-xs">
             <div className="w-11 h-11 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
               <MapPin size={22} strokeWidth={1.5} />
             </div>
             <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-secondary">مكان كتب الكتاب</div>
                <div className="text-sm font-arabic font-bold text-brand-primary mt-0.5">31 شارع ابراهيم الدسوقي، عزبة الأهالي، القناطر الخيرية</div>
             </div>
          </div>

          <p className="font-arabic text-lg sm:text-2xl text-brand-primary font-medium mb-8 leading-relaxed max-w-lg px-4">
            بكل الحب والسرور ننتظركم لتشاركونا فرحتنا يوم الجمعة ٣٠ أكتوبر ٢٠٢٦،
            <br />
            في منزل العائلة: 31 شارع إبراهيم الدسوقي، عزبة الأهالي، القناطر الخيرية.
          </p>

          {/* Map */}
          <div className="w-full max-w-2xl h-64 sm:h-80 md:h-96 bg-brand-bg relative mb-8 border border-brand-border/60 overflow-hidden rounded-2xl shadow-md">
            <div className="absolute inset-0 border-[6px] sm:border-[10px] border-white/30 z-10 pointer-events-none rounded-2xl"></div>
            <iframe 
              title="موقع عقد القران على الخريطة"
              src="https://maps.google.com/maps?q=30.200039,31.106838&hl=ar&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="contrast-105 opacity-95 hover:opacity-100 transition-all duration-500 w-full h-full"
            />
          </div>

          <a 
            href="https://www.google.com/maps?q=30.200039,31.106838" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-brand-accent text-white text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-bold hover:bg-brand-primary transition-all duration-300 rounded-full shadow-md hover:shadow-xl"
          >
            <Navigation size={16} />
            الوصول عبر خرائط جوجل (GPS)
          </a>
        </motion.div>

        {/* Guestbook */}
        <Guestbook />
        
        {/* Footer */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-20 sm:mt-32 mb-10 text-center w-full relative"
        >
          <span className="absolute text-5xl sm:text-8xl md:text-[120px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            THANK YOU
          </span>
          <p className="font-serif italic text-3xl sm:text-5xl text-brand-primary mb-4 z-10 relative">
            Thank You
          </p>
          <p className="font-arabic text-base sm:text-lg text-brand-accent font-bold tracking-[0.15em] z-10 relative">
            عقبال عندكم جميعاً 💕
          </p>
        </motion.div>

      </div>

      {/* RSVP Modal */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
    </div>
  );
}
