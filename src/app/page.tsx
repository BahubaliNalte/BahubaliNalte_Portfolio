"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Typewriter effect hook
function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}
import { Download, Mail, Sparkles, ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { SkillsSection } from "@/components/skills-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";

const heroVariants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 16,
      delay: 0.1,
    },
  },
};

const ctaVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.7 } },
};


// Accessibility: Skip links
function SkipLinks() {
  return (
    <nav aria-label="Skip links" className="sr-only focus-within:not-sr-only z-[100] absolute top-2 left-2">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <a href="#skills" className="skip-link">Skip to skills</a>
      <a href="#projects" className="skip-link">Skip to projects</a>
      <a href="#experience" className="skip-link">Skip to experience</a>
      <a href="#contact" className="skip-link">Skip to contact</a>
    </nav>
  );
}

// --- Footer Section ---
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram } from "react-icons/fa";

function FooterSection() {
  return (
    <footer id="contact" className="w-full bg-gradient-to-t from-[#0a1120] via-secondary/30 to-primary/10 border-t border-blue-900/40 pt-12 pb-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* About */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-xl font-bold text-white mb-2">Bahubali<span className="text-blue-500"> .</span></h3>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            Crafting digital experiences with code, creativity (& a bit of caffeine of course!).<br />
            Thanks for stopping by!
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors text-muted-foreground">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors text-muted-foreground">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors text-muted-foreground">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors text-muted-foreground">Contact</a></li>
          </ul>
        </div>
        {/* Get in Touch */}
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-semibold text-white mb-2">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:bahubali.nalte@gmail.com" className="hover:text-blue-400 transition-colors">bahubali.nalte@gmail.com</a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Mathura, UtterPradesh, India</span>
            </li>
          </ul>
        </div>
        {/* Connect */}
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-2">Connect</h4>
          <div className="flex gap-4 mt-1">
            <a href="https://github.com/bahubali-nalte" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl text-muted-foreground hover:text-blue-400 transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com/in/bahubali-nalte" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl text-muted-foreground hover:text-blue-400 transition-colors"><FaLinkedin /></a>
            <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-2xl text-muted-foreground hover:text-sky-400 transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl text-muted-foreground hover:text-pink-400 transition-colors"><FaInstagram /></a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-2xl text-muted-foreground hover:text-green-400 transition-colors"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900/40 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
        <span>&copy; {new Date().getFullYear()} Bahubali Nalte | Portfolio. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

// Default export for Next.js page
export default function Home() {
  // Hydration-safe: Only render client-only effects after mount
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Array<{
    width: number;
    height: number;
    top: number;
    left: number;
  }>>([]);
  const [typewriterRole, setTypewriterRole] = useState("Full-Stack Developer");

  // Move style injection to client only
  useEffect(() => {
    setMounted(true);
    // Only run client-side
    const arr = Array.from({ length: 30 }, () => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 90,
      left: Math.random() * 100,
    }));
    setStars(arr);
    // Typewriter effect for role
    let i = 0;
    setTypewriterRole("");
    const text = "Full-Stack Developer !!!";
    const interval = setInterval(() => {
      setTypewriterRole(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 55);
    // Inject style only on client
    const style = document.createElement('style');
    style.innerHTML = `
      .skip-link {
        position: absolute;
        left: 0;
        top: 0;
        background: #2563eb;
        color: #fff;
        padding: 0.5rem 1.5rem;
        z-index: 1000;
        border-radius: 0 0 0.5rem 0.5rem;
        font-weight: bold;
        transform: translateY(-120%);
        transition: transform 0.2s;
        outline: 2px solid #fff;
        outline-offset: 2px;
      }
      .skip-link:focus {
        transform: translateY(0);
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 32px 8px #3b82f6cc, 0 0 0 0 #fff0; }
        50% { box-shadow: 0 0 48px 16px #3b82f6cc, 0 0 0 8px #60a5fa33; }
      }
      .glow-card {
        animation: pulse-glow 2.5s infinite;
        border: 2.5px solid #3b82f6;
      }
      .floating-badge {
        position: absolute;
        top: -18px;
        left: 18px;
        z-index: 20;
        background: linear-gradient(90deg,#38bdf8 60%,#6366f1 100%);
        color: #fff;
        font-weight: bold;
        font-size: 0.95rem;
        padding: 0.3rem 1.1rem;
        border-radius: 1rem 1rem 1rem 0.2rem;
        box-shadow: 0 2px 12px #0ea5e9cc;
        letter-spacing: 0.04em;
        display: flex;
        align-items: center;
        gap: 0.5em;
      }
      .scroll-down-anim {
        animation: scroll-bounce 1.5s infinite;
      }
      @keyframes scroll-bounce {
        0%, 100% { transform: translateY(0); opacity: 0.7; }
        50% { transform: translateY(16px); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <SkipLinks />
      <main id="main-content" tabIndex={-1} aria-label="Main content">
        <Navbar />
        <motion.section
          className="w-full flex items-center justify-center min-h-[90vh] gap-8 px-4 pt-32 bg-gradient-to-br from-[#0a1120] via-secondary/30 to-primary/10 relative overflow-hidden"
          variants={heroVariants}
          initial="initial"
          animate="animate"
          aria-label="Hero section"
        >
          {/* Static stars background (hydration-safe, covers all hero section) */}
          {mounted && (
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {stars.map((star, i) => (
                <span
                  key={i}
                  className="block absolute rounded-full bg-white opacity-70"
                  style={{
                    width: `${star.width}px`,
                    height: `${star.height}px`,
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    filter: 'blur(0.5px)',
                  }}
                />
              ))}
            </div>
          )}
          {/* Removed animated gradient/particle effect behind code card */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl mx-auto relative z-20">
            <div className="flex flex-col items-center md:items-start justify-center gap-4 max-w-xl w-full text-center md:text-left">
              <span className="text-primary text-lg font-semibold">Hello! I'm</span>
              <motion.h1
                className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-2"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                Bahubali <span className="text-blue-500 font-extrabold">Nalte</span>
              </motion.h1>
              <motion.h2
                className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-2 min-h-[2.5em]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                aria-label="Typewriter role"
              >
                <span aria-live="polite" className="inline-block align-middle">
                  {mounted ? typewriterRole : "Full-Stack Developer"}
                  <span className="text-blue-400 animate-pulse">|</span>
                </span>
              </motion.h2>
              <motion.p
                className="max-w-xl text-base sm:text-lg text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Building elegant solutions to complex problems with modern
                technologies.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:scale-105 hover:bg-blue-700 transition-transform text-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
                >
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors shadow text-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
                >
                  View Resume
                </a>
              </div>
            </div>
            <motion.div
              className="flex-1 flex justify-center items-center p-4 sm:p-8 w-full relative"
              initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, type: 'spring', bounce: 0.22, delay: 0.5 }}
            >
              {/* Floating badge */}
              <span className="floating-badge">
                <Sparkles className="w-4 h-4 text-white" /> Open to Work
              </span>
              <div className="relative w-full max-w-xs sm:max-w-md md:w-[420px] md:h-[320px] h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-700/20 shadow-xl border border-blue-300/40 flex items-center justify-center mx-auto glow-card">
                {/* Browser window bar */}
                <div className="absolute top-0 left-0 w-full flex items-center h-8 px-4 rounded-t-2xl bg-blue-950/80 border-b border-blue-700/30">
                  <span className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
                  </span>
                  <span className="ml-auto text-xs text-blue-200 font-mono opacity-60">developer.js</span>
                </div>
                {/* Code area */}
                <pre className="mt-8 text-left text-xs sm:text-sm md:text-base font-mono text-blue-100 px-2 sm:px-4 py-2 sm:py-4 bg-transparent rounded-b-xl shadow-inner w-full h-full overflow-x-auto select-none flex flex-col justify-start" style={{ tabSize: 2, background: 'linear-gradient(180deg, #1e293b 80%, #334155 100%)' }}>
                  <br />  
                  <span className="text-gray-300 block mb-1 font-semibold tracking-wide" style={{fontSize: '1em', letterSpacing: '0.04em'}}> // About Me </span>
                  <span><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> <span className="text-orange-400">=</span> <span className="text-orange-400">{'{'}</span></span>{"\n"}
                  <span>  <span className="text-purple-400">name</span>: <span className="text-green-400">'Bahubali Nalte'</span>,</span>{"\n"}
                  <span>  <span className="text-purple-400">degree</span>: <span className="text-green-400">'BCA'</span>,</span>{"\n"}
                  <span>  <span className="text-purple-400">skills</span>: [<span className="text-green-400">'MERN-Stack'</span>,<span className="text-green-400">'Next.js'</span>,<span className="text-green-400">'DSA'</span>],</span>{"\n"}
                  <span>  <span className="text-purple-400">focus</span>: [<span className="text-green-400">'Web Dev'</span>,<span className="text-green-400">'Problem Solving'</span>],</span>{"\n"}
                  <span>  <span className="text-purple-400">motto</span>: [<span className="text-green-400">'Think'</span>,<span className="text-green-400">'Develop'</span>,<span className="text-green-400">'Deploy'</span>]</span>{"\n"}
                  <span className="text-orange-400">{'};'}</span>
                </pre>
              </div>
            </motion.div>
          </div>
          {/* Scroll down arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 flex flex-col items-center pointer-events-none select-none">
            <span className="scroll-down-anim text-blue-400 text-3xl opacity-80">
              <ArrowDownRight className="w-8 h-8 animate-bounce" />
            </span>
            <span className="text-xs text-blue-300 mt-1 tracking-wide">Scroll Down</span>
          </div>
        </motion.section>
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.18 }}
          aria-label="Skills section"
        >
          <SkillsSection />
        </motion.section>
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.18, delay: 0.1 }}
          aria-label="Projects section"
        >
          <ProjectsSection />
        </motion.section>
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.18, delay: 0.2 }}
          aria-label="Experience section"
        >
          <ExperienceSection />
        </motion.section>

        <FooterSection />
      </main>
    </>
  );
}

