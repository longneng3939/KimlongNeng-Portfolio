"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

const SKILLS = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "C++", "SQL", "NoSQL", "Flutter", "Git", "RESTful APIs", "System Architecture", "Ai training"
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6">
        <section id="about" className="min-h-screen flex flex-col justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="font-mono text-white/50 text-sm flex items-center gap-2">
              <Terminal size={14} /> init system
            </div>

            {/* Name + Picture Placeholder Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-tight">
                  Kimlong Neng <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                    Software Development 
                  </span>
                </h1>
              </div>

              {/* Picture Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-shrink-0 w-48 h-56 md:w-64 md:h-72 lg:w-84 lg:h-96 border border-white/20 relative overflow-hidden group rounded-lg 2xl:rounded-none"
              >
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/60" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/60" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/60" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/60" />

                {/* Photo */}
                <Image
                  src="/images/CV.png"
                  alt="Kimlong Neng"
                  fill
                  className="object-cover object-center"
                />

                {/* Scan-line hover effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none" />
              </motion.div>
            </div>

            <p className="max-w-2xl text-lg text-white/60 leading-relaxed pt-2">
              I specialize in building high-performance, scalable web applications and technical infrastructure. Deeply passionate about modern architectures, system optimization, and writing clean, maintainable code.
            </p>

            <div className="pt-8 space-y-4">
              <h3 className="font-mono text-sm text-white/40 uppercase">Technical Stack_</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="px-3 py-1 text-sm border border-white/20 hover:border-white rounded-none bg-black hover:bg-white hover:text-black transition-all font-mono"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="pt-12 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold hover:bg-white/90 transition-colors uppercase tracking-wider text-sm"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/60 transition-colors uppercase tracking-wider text-sm font-mono"
              >
                Contact Me
              </Link>
              <Link
                href="/cv"
                className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm font-mono group"
              >
                <FileText size={16} />
                View CV
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-xs font-mono text-white/40">
        <p>SYSTEM INITIATED. © {new Date().getFullYear()} KIMLONG NENG. ALL PROTOCOLS SECURED.</p>
      </footer>
    </div>
  );
}
