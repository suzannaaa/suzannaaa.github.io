import ProjectCard from "./ProjectCard";

export default function CardStack({
    cards,
    setCards,
    showVideo,
    setShowVideo,
    onSwipe,
    onReset,
    showHint,
}) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full max-w-xl h-96">
                {/* Hint */}
                {showHint && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 z-50 pointer-events-none">
                        <div className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 backdrop-blur-md rounded-lg px-4 py-2 text-sm font-medium shadow-lg max-w-xs text-center">
                            👉 Swipe to view projects
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800" />
                    </div>
                )}

                {/* Card */}
                {cards
                    .slice(0)
                    .reverse()
                    .map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            isTop={i === cards.length - 1}
                            onSwipe={onSwipe}
                            showVideo={showVideo}
                            setShowVideo={setShowVideo}
                        />
                    ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
                <button
                    onClick={onReset}
                    className="px-4 py-1 bg-pink-200 dark:bg-gray-700 rounded hover:bg-pink-300"
                >
                    Reset
                </button>
                <button
                    onClick={onSwipe}
                    className="px-4 py-1 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400"
                >
                    Skip →
                </button>
            </div>
        </div>
    );
}