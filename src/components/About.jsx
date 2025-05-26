import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-lavender font-body py-16 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-800 dark:text-white leading-relaxed">
        I'm a developer who blends design, code, and a bit too much caffeine ☕.
        I enjoy building thoughtful interfaces, automating workflows, and
        occasionally breaking things just to fix them again.
      </p>
    </motion.section>
  );
}