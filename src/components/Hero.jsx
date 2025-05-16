import { useState, useEffect } from "react";
import CardStack from "./CardStack";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "Intergalactic Invasion",
        link: "#",
        description: "Intergalactic Invasion is a virtual game designed to simulate a post-apocalyptic environment. Players take on the description of survivors who must learn to navigate, defend, and strategise in hostile conditions. The game focuses on building quick decision-making, resource management, and survival instincts through immersive gameplay. This game aims to blend entertainment with skill-building, making it ideal for casual players and those interested in survival training.",
        videoUrl: "https://res.cloudinary.com/drngi3j2z/video/upload/v1747313528/Intergalactive%20Invasion%20Demo.mp4",
        thumbnail: "https://res.cloudinary.com/drngi3j2z/image/upload/v1747312203/Intergalactic%20Invasion%20Thumbnail.png",
        textClass: "text-blue-900 dark:text-blue-900",
        bgClass: "bg-cyan-100 dark:bg-cyan-300",
    },
    {
        title: "Mad Scientist",
        link: "#",
        description: "Mad Scientist is a VR Game designed to simulate a real-life chemistry practical. It is an upgrade of a mobile game which was done using AR to test players' knowledge through a series of questions. Mad Scientist aims to traditional textbook learning into an exciting interactive experience.",
        videoUrl: "https://res.cloudinary.com/drngi3j2z/video/upload/v1747322556/Mad%20Scientist%20Demo.mp4",
        thumbnail: "https://res.cloudinary.com/drngi3j2z/image/upload/v1747322710/Mad%20Scientist%20Thumbnail.png",
        textClass: "text-green-900 dark:text-green-500",
        bgClass: "bg-green-100 dark:bg-green-900",
        font: "font-chem"
    },
    {
        title: "IMCS Form Management",
        link: "#",
        description: "Led a real-client form management system with scoring and workflow logic. Served as Scrum Master and integrated BE Lite form with PostgreSQL and CI/CD deployment.",
        thumbnail: "https://res.cloudinary.com/drngi3j2z/image/upload/v1747346701/IMCS%20Form%20Management%20Thumbnail.png",
        textClass: "text-blue-900 dark:text-blue-100",
        bgClass: "bg-blue-200 dark:bg-blue-900",
    },
    {
        title: "AuthINC (ProjectINC)",
        link: "#",
        description: "Worked in a cross-class team to develop asset management module. Implemented file uploads using Cloudinary & AWS S3.",
        thumbnail: "https://res.cloudinary.com/drngi3j2z/image/upload/v1747342342/AuthINC%20Thumbnail.png",
        textClass: "text-yellow-900 dark:text-yellow-100",
        bgClass: "bg-yellow-100 dark:bg-yellow-500",
    },
    {
        title: "Overseas Sustainability Innovation Project",
        link: "#",
        description: "Collaborated with Indonesian students to solve a local farmer's problem. Prototyped greenhouse layout tools, a fertilising jet, and Excel-based inventory system.",
        videoUrl: "https://res.cloudinary.com/drngi3j2z/video/upload/v1747343661/OSIP%20Demo.mp4",
        thumbnail: "https://res.cloudinary.com/drngi3j2z/image/upload/v1747343862/OSIP%20Thumbnail.png",
        textClass: "text-gray-900 dark:text-white",
        bgClass: "bg-green-100 dark:bg-green-800",
    },
    {
        title: "Sustainability Web App",
        link: "https://suzannaaa.github.io/save-the-pets/index.html",
        description: "Full-stack website to promote sustainable practices. Features user authentication and database-backed dynamic content.",
        thumbnail: "https://res.cloudinary.com/drngi3j2z/image/upload/v1747341097/Save%20The%20Pets%20Thumbnail.png",
        textClass: "text-pink-900 dark:text-fuchsia-200",
        bgClass: "bg-fuchsia-300 dark:bg-fuchsia-900",
    },
];

export default function Hero() {
    const [cards, setCards] = useState(projects);
    const [showVideo, setShowVideo] = useState(false);
    const [showHint, setShowHint] = useState(true);

    const topProject = cards[0];

    const handleSwipe = () => {
        setShowVideo(false);
        setShowHint(false);
        setCards((prev) => [...prev.slice(1), prev[0]]);
    };

    const resetStack = () => {
        setShowVideo(false);
        setCards(projects);
    };

    return (
        <section className="min-h-screen bg-peach dark:bg-gray-900 text-gray-800 dark:text-white pt-20">
            {/* Intro */}
            <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-hero">
                        Hello, I'm Suzanna!
                    </h1>
                    <img
                        src="https://res.cloudinary.com/drngi3j2z/image/upload/v1747319203/Pompompurin%20Greeting.gif"
                        alt="Waving Pompompurin"
                        className="w-14 h-12 sm:w-16 sm:h-14 md:w-20 md:h-16 xl:w-24 xl:h-20"
                    />
                </div>
                <p className="text-base sm:text-lg md:text-xl xl:text-2xl max-w-xl mx-auto px-2 font-hero">
                    Welcome to my Portfolio! I enjoy innovating solutions to real-world problems!
                </p>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-8">
                {/* LEFT: CardStack */}
                <div className="w-full md:w-1/2 justify-center items-center p-8">
                    {/* <p className="text-sm sm:text-sm md:text-md xl:text-lg max-w-xl mx-auto my-2">
                        Swipe to view projects →
                    </p> */}
                    <CardStack
                        cards={cards}
                        setCards={setCards}
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        onSwipe={handleSwipe}
                        onReset={resetStack}
                        showHint={showHint}
                        setShowHint={setShowHint}
                    />
                </div>

                {/* RIGHT: Dynamic Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={topProject.description}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-3xl max-w-md font-hero mb-4">
                                {topProject.title}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl max-w-md leading-relaxed">
                                {topProject.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}