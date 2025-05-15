import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "React + Tailwind site (this one!) with animations and theming.",
    link: "#",
  },
  {
    title: "Mini Game",
    description: "A small Unity game I'm building for fun — stay tuned!",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-sky font-mono py-16 px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Projects 💻</h2>
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-sm mb-4">{p.description}</p>
            <a href={p.link} className="text-pink-600 hover:underline">
              View →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}