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
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("all");
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    // UGC - Classic Vid
    {
      id: 1,
      category: "ugc",
      subcategory: "classic-vid",
      src: "/videos/ugc/classic-vid/1.mp4"
    },
    {
      id: 2,
      category: "ugc",
      subcategory: "classic-vid",
      src: "/videos/ugc/classic-vid/2.mp4"
    },
    {
      id: 3,
      category: "ugc",
      subcategory: "classic-vid",
      src: "/videos/ugc/classic-vid/3.mp4"
    },
    {
      id: 4,
      category: "ugc",
      subcategory: "classic-vid",
      src: "/videos/ugc/classic-vid/4.mp4"
    },
    {
      id: 5,
      category: "ugc",
      subcategory: "classic-vid",
      src: "/videos/ugc/classic-vid/5.mp4"
    },

    // UGC - High Production UGC
    {
      id: 6,
      category: "ugc",
      subcategory: "high-production",
      src: "/videos/ugc/high-production/1.mp4"
    },
    {
      id: 7,
      category: "ugc",
      subcategory: "high-production",
      src: "/videos/ugc/high-production/2.mp4"
    },
    {
      id: 8,
      category: "ugc",
      subcategory: "high-production",
      src: "/videos/ugc/high-production/3.mp4"
    },
    {
      id: 9,
      category: "ugc",
      subcategory: "high-production",
      src: "/videos/ugc/high-production/4.mp4"
    },

    // UGC - UGC
    {
      id: 10,
      category: "ugc",
      subcategory: "ugc",
      src: "/videos/ugc/ugc/1.mp4"
    },
    {
      id: 11,
      category: "ugc",
      subcategory: "ugc",
      src: "/videos/ugc/ugc/2.mp4"
    },

    // B-roll (no subcategories)
    {
      id: 11,
      category: "b-roll",
      subcategory: "all",
      src: "/videos/b-roll/1.mp4"
    },
    {
      id: 12,
      category: "b-roll",
      subcategory: "all",
      src: "/videos/b-roll/2.mp4"
    },
    {
      id: 13,
      category: "b-roll",
      subcategory: "all",
      src: "/videos/b-roll/3.mp4"
    },

    // Promo - البنك الاهلي
    {
      id: 14,
      category: "promo",
      subcategory: "bank",
      src: "/videos/promo/bank/1.mp4"
    },
    // Promo - برومو
    {
      id: 15,
      category: "promo",
      subcategory: "promo",
      src: "/videos/promo/promo/1.mp4"
    },
    {
      id: 16,
      category: "promo",
      subcategory: "promo",
      src: "/videos/promo/promo/2.mp4"
    },

    // Promo - ريل
    {
      id: 17,
      category: "promo",
      subcategory: "reel",
      src: "/videos/promo/reel/1.mp4"
    },
    {
      id: 18,
      category: "promo",
      subcategory: "reel",
      src: "/videos/promo/reel/2.mp4"
    },
    {
      id: 19,
      category: "promo",
      subcategory: "reel",
      src: "/videos/promo/reel/3.mp4"
    }
  ];

  const categories = ["all", "ugc", "b-roll", "promo"];

  const subcategories: Record<string, string[]> = {
    ugc: ["all", "classic-vid", "high-production", "ugc"],
    "b-roll": [],
    promo: ["all", "bank", "promo", "reel"]
  };

  const filteredVideos = videos.filter((video) => {
    if (activeCategory === "all") return true;
    if (video.category !== activeCategory) return false;
    if (activeSubcategory === "all") return true;
    return video.subcategory === activeSubcategory;
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveSubcategory("all");
    setPlayingIndex(null);
  };

  const handleVideoClick = async (videoId: number) => {
    const index = filteredVideos.findIndex((v) => v.id === videoId);
    if (index === -1) return;

    const video = videoRefs.current[index];
    if (!video || !video.isConnected) return;

    if (playingIndex === videoId) {
      // If already playing, just toggle play/pause
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
      return;
    }

    // Set playing index
    setPlayingIndex(videoId);

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
          className="mb-12 text-center"
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

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <m.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-6 py-2.5 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-[#0A0A0A] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "border-primary/20 hover:border-primary/40 hover:bg-primary/10 border bg-[#1A1A1A] text-[#F5F5F5]"
              }`}
            >
              {t(`categories.${category}` as "categories.all") as string}
            </m.button>
          ))}
        </div>

        {/* Subcategory Filter */}
        {activeCategory !== "all" &&
          subcategories[activeCategory]?.length > 0 && (
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="-mt-4 mb-8 flex flex-wrap justify-center gap-3"
            >
              {subcategories[activeCategory].map((subcategory) => (
                <m.button
                  key={subcategory}
                  onClick={() => setActiveSubcategory(subcategory)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSubcategory === subcategory
                      ? "bg-primary/20 text-primary border-primary/40 border"
                      : "border-primary/10 hover:border-primary/20 hover:bg-primary/5 border bg-[#1A1A1A]/50 text-[#D0D0D0]"
                  }`}
                >
                  {
                    t(
                      `subcategories.${subcategory}` as "subcategories.all"
                    ) as string
                  }
                </m.button>
              ))}
            </m.div>
          )}

        {/* Videos Carousel */}
        <div className="relative mx-auto max-w-3xl">
          <Carousel
            key={`${activeCategory}-${activeSubcategory}`}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              duration: 20
            }}
            dir="ltr"
          >
            <CarouselContent>
              {filteredVideos.map((video, index) => (
                <CarouselItem key={video.id} className="basis-full">
                  <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="border-primary/10 hover:border-primary/30 group relative aspect-video overflow-hidden rounded-3xl border bg-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                  >
                    {playingIndex === video.id ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={video.src}
                        controls
                        className="h-full w-full object-contain"
                        onClick={() => handleVideoClick(video.id)}
                      />
                    ) : (
                      <>
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={video.src}
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-contain"
                          onClick={() => handleVideoClick(video.id)}
                        />
                        {/* Play Button Overlay */}
                        <div
                          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 transition-all duration-300 group-hover:bg-black/50"
                          onClick={() => handleVideoClick(video.id)}
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
