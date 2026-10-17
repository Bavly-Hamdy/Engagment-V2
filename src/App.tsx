import React, { useState, useEffect, useRef } from "react";
import EnvelopeCover from "./components/EnvelopeCover";
import HeroVideo from "./components/HeroVideo";
import QuranicVerse from "./components/QuranicVerse";
import WeddingAnnouncement from "./components/WeddingAnnouncement";
import CoupleStory from "./components/CoupleStory";
import ParentsBlessing from "./components/ParentsBlessing";
import CountdownSection from "./components/CountdownSection";
import VenueLocation from "./components/VenueLocation";
import RSVPSection from "./components/RSVPSection";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import GoldenDust from "./components/GoldenDust";
import musicTrack from "./assets/el-leil-we-samah.mpeg";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const isUserInteracting = useRef(false);
  const isAutoScrolling = useRef(false);
  const autoScrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log("Audio play error:", err);
      });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  // Gentle auto-scroll effect inspired by reference site
  useEffect(() => {
    if (!isOpened) return;
    const mainEl = mainRef.current;
    if (!mainEl) return;

    let animId: number;

    const startAutoScroll = () => {
      if (isUserInteracting.current) return;
      isAutoScrolling.current = true;

      const step = () => {
        if (isUserInteracting.current || !mainEl) return;
        const maxScroll = mainEl.scrollHeight - mainEl.clientHeight;
        if (mainEl.scrollTop >= maxScroll) {
          isAutoScrolling.current = false;
          return;
        }
        mainEl.scrollTop += 0.8;
        animId = requestAnimationFrame(step);
      };

      animId = requestAnimationFrame(step);
    };

    // Delay auto-scroll slightly so user can enjoy the hero section first
    const initTimer = setTimeout(() => {
      startAutoScroll();
    }, 4500);

    // Pause auto-scroll whenever the user scrolls or touches the screen
    const handleUserInteraction = () => {
      isUserInteracting.current = true;
      isAutoScrolling.current = false;
      cancelAnimationFrame(animId);

      if (autoScrollTimeout.current) clearTimeout(autoScrollTimeout.current);
      autoScrollTimeout.current = setTimeout(() => {
        isUserInteracting.current = false;
        startAutoScroll();
      }, 5000);
    };

    mainEl.addEventListener("touchstart", handleUserInteraction, { passive: true });
    mainEl.addEventListener("wheel", handleUserInteraction, { passive: true });
    mainEl.addEventListener("mousedown", handleUserInteraction, { passive: true });

    return () => {
      clearTimeout(initTimer);
      if (autoScrollTimeout.current) clearTimeout(autoScrollTimeout.current);
      cancelAnimationFrame(animId);
      mainEl.removeEventListener("touchstart", handleUserInteraction);
      mainEl.removeEventListener("wheel", handleUserInteraction);
      mainEl.removeEventListener("mousedown", handleUserInteraction);
    };
  }, [isOpened]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#fdfaf4] text-[#4a3620]">
      {/* Background Music Audio Element with direct asset import */}
      <audio ref={audioRef} src={musicTrack} loop preload="auto" />

      {/* Envelope Opener or Main Invitation */}
      {!isOpened ? (
        <EnvelopeCover onOpen={handleOpen} />
      ) : (
        <main
          ref={mainRef}
          className="h-screen overflow-y-auto w-full relative scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Ambient Royal Gold Dust Overlay */}
          <GoldenDust />

          <div className="w-full flex flex-col relative z-1">
            <HeroVideo />
            <QuranicVerse />
            <WeddingAnnouncement />
            <CoupleStory />
            <ParentsBlessing />
            <CountdownSection />
            <VenueLocation />
            <RSVPSection />
            <Footer />
          </div>

          {/* Floating Audio Controls */}
          <AudioPlayer
            isPlaying={isPlaying}
            onToggle={toggleAudio}
            audioRef={audioRef}
          />
        </main>
      )}
    </div>
  );
}
