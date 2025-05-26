import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-white dark:bg-gray-900 font-body py-16 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Let's Connect 📬</h2>
      <form
        action="https://formspree.io/f/your_form_id"
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input name="name" placeholder="Your name" className="w-full p-2 rounded border" required />
        <input name="email" type="email" placeholder="Your email" className="w-full p-2 rounded border" required />
        <textarea name="message" placeholder="Your message" className="w-full p-2 rounded border" required></textarea>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Send
        </button>
      </form>
    </motion.section>
  );
}