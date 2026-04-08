"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Briefcase, GraduationCap, Code2, Globe, MapPin, Phone, Mail, Wrench, FolderGit2, Users, ExternalLink, ChevronDown, FileText } from "lucide-react";
import Navbar from "../components/Navbar";

/* ─────────────────────────────────────────────
   CV DATA  — edit this section with your info
───────────────────────────────────────────── */
const CV = {
  name: "Kimlong Neng",
  title: "Management Information System Student",
  summary:
    "Management information system student at Paragon International University with a focus on software development and UI design. Proven track record in data management and technical support for 100+ users.",

  contact: {
    address: "St 230, Sangakat Beoung Salang, Khan Sensok",
    phone: "+855 12603939",
    email: "nengkimlong4@gmail.com",
  },

  experience: [
    {
      role: "Technical Lead",
      company: "Kimleng Gold Samangka",
      period: "Present",
      points: [
        "System Architecture & Development: Spearheaded the digital transformation of the business by designing and deploying the Kimleng Samangka Survey web application (https://kimleng-survey.vercel.app/).",
        "Full-Stack Implementation: Leveraged Nuxt.js and Supabase to build a high-performance, responsive platform that allows clients to provide feedback and contact the main office directly, improving customer engagement.",
        "Digital Brand Management: Managed all corporate social media channels, streamlining content strategy and ensuring a cohesive brand identity across various platforms.",
        "Web Strategy: Developed and maintained the business's online presence to serve as the primary bridge between digital marketing efforts and direct customer conversions.",
        "Technical Leadership: Oversaw the technical roadmap for business projects, managing everything from server-side logic and database management to frontend UI/UX design.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's Degree in Management Information System",
      institution: "Paragon International University",
      period: "Dec 2023 – 2028",
      detail: "Specialization in Full-Stack Development · Data Management",
    },
    {
      degree: "Diploma — Graduated",
      institution: "Paññāsāstra International School",
      period: "2018 – 2022",
      detail: "",
    },
  ],

  technicalSkills: [
    "Programming fundamentals",
    "Full stack development basics",
    "Basic cybersecurity concepts",
    "UI/UX design",
  ],

  softSkills: [
    "Teamwork and collaboration",
    "Critical thinking",
    "Time management",
    "Adaptability",
  ],

  tools: [
    "Adobe Illustrator, Photoshop, CapCut, Canva",
    "Google Sheet, Drive and Docs",
    "Figma",
  ],

  languages: [
    { lang: "English", level: "Fluent" },
    { lang: "Khmer", level: "Native" },
    { lang: "Japanese", level: "Basic" },
  ],
  //=================================
  //Base on the project here if want to changge anything in the project and it should be update here
  //
  projects: [
    {
      name: "H20 Website Stock Management",
      tech: "Vue, Typescript, PostgreSQL",
      points: ["Web Platform for stock in / stock out", "Managing Stock"],
      link: "https://h2o-inventory-management.vercel.app/login",
    },
    {
      name: "KimlengGoldSamangka QR & Survey",
      tech: "Vue, Tailwind, Typescript, MongoDB",
      points: [],
      link: "https://kimleng-survey.vercel.app/",
    },
  ],

  certifications: [] as { name: string; issuer: string; year: string }[],
};

/* ─────────────────────────────────────────────
   SECTION WRAPPER
───────────────────────────────────────────── */
function Section({
  icon,
  command,
  title,
  children,
  delay = 0,
}: {
  icon: React.ReactNode;
  command: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="border border-white/10 bg-[#050505] relative overflow-hidden"
    >
      {/* top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="p-8">
        <div className="font-mono text-white/40 text-xs flex items-center gap-2 mb-4">
          {icon} {command}
        </div>
        <h2 className="text-xl font-bold tracking-tighter uppercase mb-6 text-white">
          {title}
        </h2>
        {children}
      </div>
    </motion.section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function CVPage() {
  const [mounted, setMounted] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-white/50 text-sm flex items-center gap-2 mb-4">
            <Terminal size={14} /> cat ./cv.md
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-tight mb-2">
            {CV.name}
          </h1>
          <p className="text-white/40 font-mono text-lg uppercase tracking-widest mb-6">
            {CV.title}
          </p>
          <div className="h-px w-24 bg-white mb-6" />
          <p className="max-w-2xl text-white/60 leading-relaxed text-base">
            {CV.summary}
          </p>

          {/* Download Button */}
        </motion.div>

        
         {/* ══ CV COLLAPSIBLE — bottom of page ══ */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-white/10 bg-[#050505] relative overflow-hidden"
        >
          {/* top accent */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Toggle button */}
          <button
            onClick={() => setCvOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-8 py-5 group"
          >
            <div className="flex items-center gap-3">
              <FileText size={15} className="text-white/20" />
              <span className="font-mono text-cyan-400 text-m uppercase tracking-widest">
                view_cv_document
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-cyan-400 text-xs">
              <span>{cvOpen ? "collapse" : "click to expand"}</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${cvOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>
          </button>

          {/* Collapsible content */}
          <motion.div
            initial={false}
            animate={cvOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-8 pb-8 flex flex-col items-center gap-6">
              <div className="relative w-full max-w-2xl" style={{ aspectRatio: "210/297" }}>
                <Image
                  src="/images/cvfull.png"
                  alt="Kimlong Neng CV"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Download button below image */}
              <a
                href="/images/cvfull.png"
                download="Kimlong_Neng_CV.png"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-white/90 transition-all"
              >
                <FileText size={16} />
                Download CV as Image
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>


        {/* ── Grid Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN — Experience + Education */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Experience */}
            <Section
              icon={<Briefcase size={13} />}
              command="ls ./experience"
              title="Experience"
              delay={0.1}
            >
              <div className="space-y-8">
                {CV.experience.map((exp, i) => (
                  <div key={i} className="relative pl-4 border-l border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                      <span className="font-bold text-white text-base">{exp.role}</span>
                      <span className="font-mono text-white/30 text-xs">{exp.period}</span>
                    </div>
                    <div className="text-white/50 text-sm font-mono mb-3">{exp.company}</div>
                    <ul className="space-y-1">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-white/60 text-sm flex gap-2">
                          <span className="text-white/20 mt-1 flex-shrink-0">›</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section
              icon={<GraduationCap size={13} />}
              command="ls ./education"
              title="Education"
              delay={0.2}
            >
              <div className="space-y-6">
                {CV.education.map((edu, i) => (
                  <div key={i} className="pl-4 border-l border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                      <span className="font-bold text-white text-base">{edu.degree}</span>
                      <span className="font-mono text-white/30 text-xs">{edu.period}</span>
                    </div>
                    <div className="text-white/50 text-sm font-mono">{edu.institution}</div>
                    {edu.detail && (
                      <div className="text-white/40 text-xs font-mono mt-1">{edu.detail}</div>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* RIGHT COLUMN — Contact, Skills, Tools, Languages, Projects */}
          <div className="flex flex-col gap-6">

            {/* Contact */}
            <Section
              icon={<Phone size={13} />}
              command="cat ./contact"
              title="Contact"
              delay={0.1}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0 text-white/30" />
                  <span>{CV.contact.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Phone size={13} className="flex-shrink-0 text-white/30" />
                  <span className="font-mono">{CV.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Mail size={13} className="flex-shrink-0 text-white/30" />
                  <span className="font-mono break-all">{CV.contact.email}</span>
                </div>
              </div>
            </Section>

            {/* Technical Skills */}
            <Section
              icon={<Code2 size={13} />}
              command="ls ./technical-skills"
              title="Technical Skills"
              delay={0.15}
            >
              <ul className="space-y-2">
                {CV.technicalSkills.map((skill) => (
                  <li key={skill} className="text-white/60 text-sm flex gap-2">
                    <span className="text-white/20 flex-shrink-0">›</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Soft Skills */}
            <Section
              icon={<Users size={13} />}
              command="ls ./soft-skills"
              title="Soft Skills"
              delay={0.2}
            >
              <ul className="space-y-2">
                {CV.softSkills.map((skill) => (
                  <li key={skill} className="text-white/60 text-sm flex gap-2">
                    <span className="text-white/20 flex-shrink-0">›</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Tools */}
            <Section
              icon={<Wrench size={13} />}
              command="ls ./tools"
              title="Tools"
              delay={0.25}
            >
              <ul className="space-y-2">
                {CV.tools.map((tool) => (
                  <li key={tool} className="text-white/60 text-sm flex gap-2">
                    <span className="text-white/20 flex-shrink-0">›</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Languages */}
            <Section
              icon={<Globe size={13} />}
              command="ls ./languages"
              title="Languages"
              delay={0.3}
            >
              <div className="space-y-3">
                {CV.languages.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-white text-sm">{lang}</span>
                    <span className="font-mono text-white/40 text-xs border border-white/10 px-2 py-0.5">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section
              icon={<FolderGit2 size={13} />}
              command="ls ./projects"
              title="Projects"
              delay={0.35}
            >
              <div className="space-y-5">
                {CV.projects.map((proj, i) => (
                  <div key={i} className="pl-4 border-l border-white/10">
                    <div className="font-bold text-white text-sm mb-0.5">{proj.name}</div>
                    <div className="font-mono text-white/40 text-xs mb-2">{proj.tech}</div>
                    {proj.points.length > 0 && (
                      <ul className="space-y-1 mb-2">
                        {proj.points.map((p, j) => (
                          <li key={j} className="text-white/60 text-sm flex gap-2">
                            <span className="text-white/20 flex-shrink-0">›</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 border border-white/10 px-2 py-1 hover:border-white/50 hover:text-white transition-all"
                      >
                        <ExternalLink size={25} />
                        View My Project Here
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>

    </div>
  );
}
