"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Globe, Palette, Smartphone } from "lucide-react";
import Image from "next/image";
import Navbar from "./components/Navbar";

const GOALS = [
  {
    icon: <Globe size={22} />,
    title: "Web Developer",
    description:
      "Building fast, scalable, and accessible web applications using modern frameworks. Focused on clean architecture, performance optimization, and seamless user experiences.",
  },
  {
    icon: <Palette size={22} />,
    title: "Software Designer & Maintenance",
    description:
      "Crafting intuitive UI/UX designs and ensuring long-term software health through regular maintenance, refactoring, and system stability improvements.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile App Developer",
    description:
      "Developing cross-platform mobile applications with Flutter. Passionate about delivering native-quality experiences on both iOS and Android from a single codebase.",
  },
];

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

              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-shrink-0 w-48 h-60 md:w-60 md:h-76 lg:w-72 lg:h-96 relative overflow-hidden group rounded-3xl ring-1 ring-white/15 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
              >
                {/* Photo */}
                <Image
                  src="/images/CV.png"
                  alt="Kimlong Neng"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom gradient fade for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Subtle scan-line hover effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none" />
              </motion.div>
            </div>

            <p className="max-w-2xl text-lg text-white/60 leading-relaxed pt-2">
              I specialize in building high-performance, scalable web applications and technical infrastructure. Deeply passionate about modern architectures, system optimization, and writing clean, maintainable code.
            </p>

            {/* Goals Section */}
            <div className="pt-12 space-y-4">
              <h3 className="font-mono text-sm text-white/40 uppercase">Career Goals_</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {GOALS.map((goal, index) => (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="border border-white/10 bg-white/[0.02] p-5 hover:border-white/30 hover:bg-white/[0.05] transition-all group relative overflow-hidden"
                  >
                    {/* top accent */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="text-white/40 group-hover:text-white/70 transition-colors mb-3">
                      {goal.icon}
                    </div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">
                      {goal.title}
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed font-mono">
                      {goal.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>


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
          </motion.div>
        </section>
      </div>

      <footer className="py-6 text-center text-sm font-mono text-white/40 uppercase tracking-widest border-t border-white/10 mt-12">
        Kimlong Neng
      </footer>
    </div>
  );
}
