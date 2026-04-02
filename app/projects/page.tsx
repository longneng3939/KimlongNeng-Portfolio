"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Kimleng Samangka Survey",
    description: "An Survey to improve effecicny of the bussines curret state",
    tech: ["NuxtJS", "Tailwind", "Supabase"],
    image: "/images/logo.jpg",
    link: "https://kimleng-survey.vercel.app/", // e.g. "https://your-project-url.com"
  },
  {
    title: "Kimleng-Samangka-Catalog",
    description: "Catalog for the customer online that can not be attended. Want to choose it from online",
    tech: ["NuxtJS", "Tailwind", "Supabase"],
    image: "/images/logo.jpg",
    link: "https://kimleng-samangka.vercel.app/", // e.g. "https://your-project-url.com"
  },
  {
    title: "H20 Management system",
    description: "A system to manage the Beverage stock in and stock out and forecast sale",
    tech: ["Tailwind", "Nuxtjs", "Supabase"],
    image: "/images/h20.png",
    link: "https://h20-management-system.vercel.app/", // e.g. "https://your-project-url.com"
  },
];

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <div className="font-mono text-white/50 text-sm flex items-center gap-2 mb-4">
              <Terminal size={14} /> ls ./projects
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">Projects</h1>
            <div className="h-px w-24 bg-white mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative border border-white/10 bg-black hover:border-white/40 transition-all flex flex-col overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />

                {/* ── Project Image Area ── */}
                <div className="relative w-full h-52 bg-white/5 border-b border-white/10 overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Placeholder shown until you add a real image path */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <span className="font-mono text-xs tracking-widest uppercase">Image</span>
                    </div>
                  )}
                </div>

                {/* ── Card Body ── */}
                <div className="relative z-10 p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="text-white/20 group-hover:text-white transition-colors hover:scale-110 transform duration-200"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        <ExternalLink size={20} className="text-white/10" />
                      )}
                    </div>
                    <p className="text-white/60 mb-6 line-clamp-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-1 border border-white/10 text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-xs font-mono text-white/40">
        <p>SYSTEM INITIATED. © {new Date().getFullYear()} KIMLONG NENG. ALL PROTOCOLS SECURED.</p>
      </footer>
    </div>
  );
}
