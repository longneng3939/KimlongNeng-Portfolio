"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "./about" },
    { href: "/projects", label: "./projects" },
    { href: "/cv", label: "./cv" },
    { href: "/contact", label: "./contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono font-bold tracking-tighter text-xl text-white">
          KIMLONG_NENG<span className="animate-pulse">_</span>
        </Link>
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
      </div>
    </nav>
  );
}
