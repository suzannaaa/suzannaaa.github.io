import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Play } from "lucide-react";

const projects = [
  {
    title: "Intergalactic Invasion",
    description: "React + Tailwind site with dark mode & animations.",
    link: "#",
    role: "Intergalactic Invasion is a virtual game designed to simulate a post-apocalyptic environment. Players take on the role of survivors who must learn to navigate, defend, and strategize in hostile conditions. The game focuses on building quick decision-making, resource management, and survival instincts through immersive gameplay. This game aims to blend entertainment with skill-building, making it ideal for casual players and those interested in survival training.",
    videoUrl: "https://res.cloudinary.com/drngi3j2z/video/upload/v1747313528/Intergalactive%20Invasion%20Demo.mp4",
    thumbnail: "https://res.cloudinary.com/drngi3j2z/image/upload/v1747312203/Intergalactic%20Invasion%20Thumbnail.png",
  },
  {
    title: "Mini Game",
    description: "Puzzle platformer built in Unity.",
    link: "#",
    role: "Led gameplay scripting and created original level mechanics. 🎮",
    thumbnail: "/images/minigame.png", // still image only
  },
  {
    title: "Analytics Dashboard",
    description: "Data dashboard with real-time charts.",
    link: "#",
    role: "Designed user flows and integrated live data APIs. 📊",
    thumbnail: "/images/dashboard.png",
  },
];

export default function HeroNoSwipe() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);
  const project = projects[index];
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    setShowVideo(false);
  }, [index]);

  return (

    <section className="h-screen bg-peach dark:bg-gray-900 text-gray-800 dark:text-white pt-20">

      <div className="text-center">
        <h1 className="text-5xl mb-4">Hey, I'm Suzanna 👋</h1>
        <p className="text-lg max-w-xl mx-auto">
          I create fun, user-focused digital experiences powered by React & Tailwind.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-8">
        {/* LEFT: Project Card Carousel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <div className="relative w-full max-w-xl h-96 mb-6">
            {projects.map((p, i) => {
              const isActive = i === index;
              const offset = (i - index + projects.length) % projects.length;
              const z = projects.length - offset;

              return (
                <motion.div
                  key={p.title}
                  className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all"
                  style={{
                    zIndex: z,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.95,
                    y: isActive ? 0 : 20 + offset * 10,
                    opacity: isActive ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {p.videoUrl && i === index && !showVideo ? (
                    <div
                      className="relative w-full h-64 mb-4 rounded overflow-hidden cursor-pointer"
                      onClick={() => setShowVideo(true)}
                    >
                      <img
                        src={p.thumbnail}
                        alt="Video preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition hover:bg-opacity-60">
                        <div className="w-14 h-14 bg-white text-pink-600 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : p.videoUrl && i === index ? (
                    <video
                      src={p.videoUrl}
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                      className="w-full h-64 object-cover mb-4 rounded"
                    />
                  ) : (
                    <img
                      src={p.thumbnail}
                      alt={`${p.title} preview`}
                      className="w-full h-64 object-cover mb-4 rounded"
                    />
                  )}

                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <a
                    href={p.link}
                    className="text-pink-600 font-medium hover:underline"
                  >
                    View →
                  </a>
                </motion.div>
              );
            })}
          </div>

          <div className="flex space-x-4 mb-4">
            <button
              onClick={prev}
              className="px-4 py-1 bg-pink-200 dark:bg-gray-700 rounded hover:bg-pink-300"
            >
              ←
            </button>
            <button
              onClick={next}
              className="px-4 py-1 bg-pink-200 dark:bg-gray-700 rounded hover:bg-pink-300"
            >
              →
            </button>
          </div>

          <a
            href="#projects"
            className="mt-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            View All Projects
          </a>
        </div>

        {/* RIGHT: Synced Intro */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.role}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl font-hero mb-4">{project.title}</h1>
              <p className="max-w-md text-lg leading-relaxed">{project.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}