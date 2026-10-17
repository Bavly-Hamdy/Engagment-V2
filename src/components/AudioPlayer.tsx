import React, { useState, useEffect, useRef } from "react";
import { Pause, Play, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

function EqualizerBars({ isPlaying }: { isPlaying: boolean }) {
  const bars = [
    { height: "12px", delay: 0 },
    { height: "18px", delay: 0.15 },
    { height: "10px", delay: 0.3 },
    { height: "16px", delay: 0.1 },
    { height: "14px", delay: 0.25 },
  ];

  return (
    <div className="flex items-end gap-[2px] h-4 sm:h-5">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-[2.5px] rounded-full bg-[#b8925a] transition-all duration-300"
          style={{
            height: isPlaying ? bar.height : "3px",
            animation: isPlaying
              ? `pulseGlow 0.8s ease-in-out infinite alternate ${bar.delay}s`
              : "none",
          }}
        />
      ))}
    </div>
  );
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ isPlaying, onToggle, audioRef }: AudioPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audioRef]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressBarRef.current;
    if (!audio || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 border border-[#b8925a]/40 shadow-2xl"
      style={{
        background: "linear-gradient(135deg, rgba(255, 253, 249, 0.95), rgba(246, 236, 216, 0.92))",
        boxShadow: "0 15px 35px rgba(90, 68, 40, 0.25), 0 4px 10px rgba(90, 68, 40, 0.1)",
        direction: "rtl",
      }}
    >
      <div className="p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={onToggle}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center relative cursor-pointer border-none shadow-md transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 text-white"
          style={{
            background: "linear-gradient(135deg, #c99a5f 0%, #b8925a 50%, #7a5730 100%)",
          }}
          aria-label={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        >
          {isPlaying && (
            <div className="absolute inset-[-3px] rounded-full border border-[#b8925a]/50 border-t-[#d4af37] animate-spin" />
          )}
          {isPlaying ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        {/* Info */}
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? "w-44 sm:w-52" : "w-24 sm:w-28"}`}>
          <div className="flex items-center gap-2">
            <EqualizerBars isPlaying={isPlaying} />
            <div className="min-w-0 flex-1 text-right">
              <div
                className="text-[9px] uppercase tracking-wider font-bold text-[#a1794a]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {isPlaying ? "شغالة الآن" : "موسيقى الدعوة"}
              </div>
              <div
                className="text-xs text-[#5c4322] font-bold truncate"
                style={{ fontFamily: "'Amiri', serif" }}
              >
                الليل وسماه 🎵
              </div>
            </div>
          </div>

          {/* Progress Bar (Visible when expanded) */}
          {isExpanded && (
            <div className="mt-2">
              <div
                ref={progressBarRef}
                onClick={handleProgressClick}
                className="w-full h-1.5 bg-[#b8925a]/25 rounded-full cursor-pointer relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 h-full bg-gradient-to-l from-[#b8925a] to-[#7a5730] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-[8px] font-mono text-[#8a6a3d] tabular-nums" dir="ltr">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="sm:hidden text-[#8a6a3d] p-1 cursor-pointer bg-transparent border-none"
          aria-label="Toggle details"
        >
          <Volume2 size={16} className={isPlaying ? "text-[#b8925a]" : "text-[#8a6a3d]"} />
        </button>
      </div>
    </div>
  );
}
