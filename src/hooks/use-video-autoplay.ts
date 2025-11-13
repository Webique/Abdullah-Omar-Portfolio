import { useEffect, useRef } from "react";

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export function useVideoAutoplay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const playVideo = async () => {
      try {
        if (isSafari()) {
          video.muted = true;
          video.playsInline = true;
          video.autoplay = true;
          video.loop = true;
          await video.load();
        }

        await video.play();
      } catch (error) {
        console.warn("Video autoplay failed:", error);
      }
    };

    playVideo();

    const handleUserInteraction = () => {
      if (video.paused) {
        video.play().catch(console.warn);
      }
    };

    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true
    });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return { videoRef };
}
