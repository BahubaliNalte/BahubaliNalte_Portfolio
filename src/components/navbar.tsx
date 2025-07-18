import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-card/80 border-b border-border/40 shadow-sm backdrop-blur-lg transition-all duration-500">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3 relative">
        <Link
          href="#"
          className="text-xl font-bold text-primary tracking-tight transition-colors duration-300 hover:text-secondary"
        >
          &lt; Bahubali Nalte /&gt;
        </Link>
        {/* Nav links - only visible on desktop */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium mt-2 md:mt-0">
          <li>
            <Link
              href="#skills"
              className="hover:text-primary transition-colors duration-300 relative group"
            >
              <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-300">
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors duration-300 relative group"
            >
              <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-300">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="hover:text-primary transition-colors duration-300 relative group"
            >
              <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-300">
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors duration-300 relative group"
            >
              <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-300">
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
