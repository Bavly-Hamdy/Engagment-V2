import { motion } from "motion/react";
import Sparkles from "./Sparkles";
import redRoseBg from "../assets/red-rose-bg.jpg";
import type { Key } from "react";

interface CoverProps {
  key?: Key;
  onOpen: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};


export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden font-serif bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('${redRoseBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center justify-center px-4 py-8 sm:p-8 max-w-lg mx-auto text-center z-10 w-full h-full">
        <motion.div 
          className="flex flex-col items-center relative w-full justify-center my-auto bg-white/80 sm:bg-white/85 backdrop-blur-md py-9 sm:py-12 px-6 sm:px-10 rounded-3xl border border-white/90 shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Watermark */}
          <motion.span
            variants={itemVariants}
            className="absolute text-7xl sm:text-9xl md:text-[150px] font-sans font-black text-brand-faint -z-10 opacity-70 uppercase tracking-tighter pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none"
          >
            WEDDING
          </motion.span>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="font-arabic text-base sm:text-xl text-brand-accent mb-4 sm:mb-6 font-extrabold tracking-[0.2em] uppercase"
          >
            دعوة عقد قران
          </motion.h2>
          
          {/* Main Names */}
          <motion.div variants={itemVariants} className="relative z-10 w-full py-2">
            <Sparkles count={15} />
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.08] text-brand-primary relative z-10 tracking-tight">
              Ahmed
              <span className="text-3xl sm:text-5xl font-serif italic font-normal text-brand-accent block my-2 sm:my-3">
                &
              </span>
              Basmala
            </h1>
          </motion.div>

          {/* Date Tag */}
          <motion.p
            variants={itemVariants}
            dir="ltr"
            style={{ direction: "ltr", unicodeBidi: "isolate" }}
            className="font-sans text-[11px] sm:text-xs text-brand-secondary font-bold tracking-[0.3em] uppercase mt-6 sm:mt-10 mb-8 sm:mb-10 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-brand-border/60 shadow-xs"
          >
            30 October 2026
          </motion.p>
          
          {/* Call to action button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpen}
            className="px-8 sm:px-12 py-3.5 sm:py-4 bg-brand-accent text-white text-[11px] sm:text-xs uppercase tracking-[0.3em] font-sans font-bold hover:bg-brand-primary transition-all duration-300 z-20 rounded-full shadow-lg hover:shadow-xl cursor-pointer border-none outline-none"
          >
            افتح الدعوة
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
