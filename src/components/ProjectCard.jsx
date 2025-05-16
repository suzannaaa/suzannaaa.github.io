import { motion, useMotionValue, useAnimation } from "framer-motion";
import { Play } from "lucide-react";

export default function ProjectCard({ project, isTop, onSwipe, showVideo, setShowVideo }) {
    const x = useMotionValue(0);
    const controls = useAnimation();

    const handleDragEnd = (_, info) => {
        if (Math.abs(info.offset.x) > 100) {
            controls
                .start({
                    x: info.offset.x > 0 ? 1000 : -1000,
                    opacity: 0,
                    transition: { duration: 0.3 },
                })
                .then(onSwipe);
        } else {
            controls.start({ x: 0 });
        }
    };

    return (
        <motion.div
            className={`absolute w-full h-full rounded-xl shadow-xl p-6 ${project.bgClass || "bg-white dark:bg-gray-800"}`}
            style={{ x }}
            animate={controls}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            initial={{ scale: 1, y: 0 }}
            animate={{ scale: isTop ? 1 : 0.95, y: isTop ? 0 : 10 }}
            transition={{ duration: 0.3 }}
        >
            {!showVideo && isTop && project.videoUrl ? (
                <div
                    className="relative w-full h-64 mb-2 md:mb-4 rounded overflow-hidden cursor-pointer"
                    onClick={() => setShowVideo(true)}
                >
                    <img
                        src={project.thumbnail}
                        alt="Video preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="w-14 h-14 bg-white text-pink-600 rounded-full flex items-center justify-center shadow-lg">
                            <Play className="w-6 h-6 ml-0.5" />
                        </div>
                    </div>
                </div>
            ) : project.videoUrl && isTop ? (
                <video
                    src={project.videoUrl}
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    className="w-full h-64 object-cover mb-2 md:mb-4 rounded"
                />
            ) : (
                <img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    className="w-full h-64 object-cover mb-2 md:mb-4 rounded"
                />
            )}

            <h3 className={`text-xl font-bold mb-1 md:mb-2 ${project.textClass || ""} ${project.font || ""}`}>{project.title}</h3>
            <a
                href={project.link}
                className="text-pink-600 font-medium hover:underline"
            >
                View →
            </a>
        </motion.div>
    );
}