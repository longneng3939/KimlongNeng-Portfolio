"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "/", label: "./about" },
    { href: "/projects", label: "./projects" },
    { href: "/cv", label: "./cv" },
    { href: "/contact", label: "./contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-mono font-bold tracking-tighter text-xl text-white">
            KIMLONG_NENG<span className="animate-pulse">_</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex gap-6 text-sm font-mono text-white/50">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors hover:text-white ${
                  pathname === href ? "text-white" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="sm:hidden text-white/60 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 w-full z-40 bg-black/95 backdrop-blur-md border-b border-white/10 sm:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-sm py-3 border-b border-white/5 transition-colors hover:text-white flex items-center justify-between ${
                    pathname === href ? "text-white" : "text-white/50"
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <span className="text-white/30 text-xs">← active</span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 sm:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
