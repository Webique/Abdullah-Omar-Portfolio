"use client";

import { Play } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const VideosSection = () => {
  const t = useTranslations("IndexPage.Videos");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    "/videos/vid1.mp4",
    "/videos/vid2.mp4",
    "/videos/vid3.mp4",
    "/videos/vid4.mp4",
    "/videos/vid5.mp4",
    "/videos/vid6.mp4",
    "/videos/vid7.mp4",
    "/videos/vid8.mp4"
  ];

  const handleVideoClick = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video || !video.isConnected) return;

    if (playingIndex === index) {
      // If already playing, just toggle play/pause
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
      return;
    }

    // Set playing index
    setPlayingIndex(index);

    // Wait for React to update the DOM
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Get the video element again after DOM update
    const updatedVideo = videoRefs.current[index];
    if (!updatedVideo || !updatedVideo.isConnected) return;

    // Play the video
    try {
      await updatedVideo.play();
    } catch (error) {
      console.error("Error playing video:", error);
      return;
    }

    // Request fullscreen after a small delay to ensure video is ready
    setTimeout(async () => {
      const videoForFullscreen = videoRefs.current[index];
      if (!videoForFullscreen || !videoForFullscreen.isConnected) return;

      try {
        if (videoForFullscreen.requestFullscreen) {
          await videoForFullscreen.requestFullscreen();
        } else if ((videoForFullscreen as any).webkitRequestFullscreen) {
          // Safari
          await (videoForFullscreen as any).webkitRequestFullscreen();
        } else if ((videoForFullscreen as any).mozRequestFullScreen) {
          // Firefox
          await (videoForFullscreen as any).mozRequestFullScreen();
        } else if ((videoForFullscreen as any).msRequestFullscreen) {
          // IE/Edge
          await (videoForFullscreen as any).msRequestFullscreen();
        }
      } catch (error) {
        console.error("Error attempting to enable fullscreen:", error);
      }
    }, 200);

    // Handle fullscreen exit
    const handleFullscreenChange = () => {
      if (
        !document.fullscreenElement &&
        !(document as any).webkitFullscreenElement &&
        !(document as any).mozFullScreenElement &&
        !(document as any).msFullscreenElement
      ) {
        setPlayingIndex(null);
        const videoToPause = videoRefs.current[index];
        if (videoToPause) {
          videoToPause.pause();
        }
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "webkitfullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "mozfullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "MSFullscreenChange",
          handleFullscreenChange
        );
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);
  };

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32"
    >
      {/* Top Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 top-0 h-1 w-full from-transparent to-transparent"></div>

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="from-primary absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] via-transparent to-transparent"></div>
      </div>

      <div className="layout relative">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-primary/20 bg-primary/10 mb-4 inline-block rounded-full border px-4 py-1.5"
          >
            <span className="text-primary text-sm font-medium">
              {t("badge")}
            </span>
          </m.div>
          <h2 className="mb-4 text-4xl font-bold text-[#F5F5F5] md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#A0A0A0] md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Videos Carousel */}
        <div className="relative mx-auto max-w-3xl">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              duration: 20
            }}
            dir="ltr"
          >
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index} className="basis-full">
                  <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="border-primary/10 hover:border-primary/30 group relative aspect-video overflow-hidden rounded-3xl border bg-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                  >
                    {playingIndex === index ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={video}
                        controls
                        className="h-full w-full object-contain"
                        onClick={() => handleVideoClick(index)}
                      />
                    ) : (
                      <>
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={video}
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-contain"
                          onClick={() => handleVideoClick(index)}
                        />
                        {/* Play Button Overlay */}
                        <div
                          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 transition-all duration-300 group-hover:bg-black/50"
                          onClick={() => handleVideoClick(index)}
                        >
                          <div className="bg-primary/20 group-hover:bg-primary/30 flex h-20 w-20 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                            <Play className="text-primary ms-1 h-10 w-10 fill-current" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Corner Accent */}
                    <div className="bg-primary/5 group-hover:bg-primary/10 absolute end-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full blur-2xl transition-all duration-300 group-hover:-translate-y-8 group-hover:translate-x-8"></div>
                  </m.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary/10 hover:bg-primary/20 border-primary/20 text-primary left-4 h-10 w-10 border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 md:-left-16" />
            <CarouselNext className="bg-primary/10 hover:bg-primary/20 border-primary/20 text-primary right-4 h-10 w-10 border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 md:-right-16" />
          </Carousel>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default VideosSection;
