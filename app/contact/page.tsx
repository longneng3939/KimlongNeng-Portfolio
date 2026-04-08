"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Mail } from "lucide-react";
import Navbar from "../components/Navbar";

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full border border-white/10 p-12 bg-[#050505] relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

          <div className="font-mono text-white/50 text-sm flex justify-center items-center gap-2 mb-6">
            <Terminal size={14} /> ping ./contact
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Let&apos;s Connect</h1>
          <p className="text-white/60 mb-10 leading-relaxed text-lg">
            I&apos;m constantly looking for opportunities to deploy my skills on ambitious problems. Whether you have a
            project in mind or just want to discuss architectures, my inbox is open.
          </p>

          <a
            href="https://www.linkedin.com/in/neng-kimlong-212828363/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold hover:bg-white/90 transition-all mb-12 uppercase tracking-wide"
          >
            <Mail size={20} />
            Contact Both Link and Github
          </a>

          <div className="flex items-center justify-center gap-6 border-t border-white/10 pt-8 mt-4">
            <a
              href="https://github.com/longneng3939"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 hover:border-white hover:bg-white/5 transition-all group"
            >
              <GithubIcon size={24} className="text-white/60 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/neng-kimlong-212828363/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 hover:border-white hover:bg-white/5 transition-all group"
            >
              <LinkedinIcon size={24} className="text-white/60 group-hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-xs font-mono text-white/40">
        <p>SYSTEM INITIATED. © {new Date().getFullYear()} KIMLONG NENG. ALL PROTOCOLS SECURED.</p>
      </footer>
    </div>
  );
}
