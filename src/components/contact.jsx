
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`py-16 w-full mx-auto  bg-neutral-900 text-white`}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">📩 Contact Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Let’s connect! Whether you have a question, a project idea, or just
          want to say hi, my inbox is always open. I’ll do my best to get back
          to you quickly.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xeozwvbe" 
          method="POST"
          className="max-w-2xl mx-auto bg-[#243b47] rounded-lg shadow-lg p-8 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1b2a2f] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1b2a2f] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1b2a2f] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-lg font-semibold"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Social Links */}
        <div className="sm:flex flex flex-wrap justify-center gap-8 mt-10">
          <a
            href="mailto:hamzuu6971@email.com"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
          >
            <FaEnvelope size={22} /> Email
          </a>
          <a
            href="https://wa.me/923195260580"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/hamzuu6971/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition"
          >
            <FaLinkedin size={22} /> LinkedIn
          </a>
          <a
            href="https://github.com/Mr-hamzuu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FaGithub size={22} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
