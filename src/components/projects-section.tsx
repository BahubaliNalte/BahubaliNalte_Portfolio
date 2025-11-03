import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Diploma2Degree",
    image: "/D2D.png", 
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion", "Razorpay"],
    github: "https://github.com/BahubaliNalte/Diploma2Degree",
    demo: "https://diploma2degree.co.in/",
    description: "A comprehensive platform for diploma students to find engineering colleges, get personalized predictions, and receive expert counseling. Features include college predictor, dynamic filtering, secure payments, and admin dashboard.",
  },
  {
    title: "ClaryGuide",
    image: "/CG.png", 
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion", "Razorpay"],
    github: "https://github.com/BahubaliNalte/ClaryGuide",
    demo: "https://clary-guide.vercel.app/",
    description: "ClaryGuide is a web platform that helps students make better academic and career choices. It offers personalized guidance, study resources, and mentorship to support students in selecting the right courses, colleges, and career paths based on their interests and goals.",
  },
  {
    title: "ReThinkWaste",
    image: "/RTW.png", 
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion", "Razorpay"],
    github: "https://github.com/BahubaliNalte/ReThinkWaste",
    demo: "https://rethinkwaste.onrender.com/",
    description: "ReThinkWaste is a web-based waste management system that connects users with recycling services and promotes sustainable waste disposal. It allows users to manage waste collection requests, track recycling activities, and encourages eco-friendly habits through a simple and user-friendly interface.",
  },
  {
    title: "AgriFarm",
    image: "/AF.png", 
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion", "Razorpay"],
    github: "https://github.com/BahubaliNalte/AgriFarm",
    demo: "https://agrifarm-iy6r.onrender.com/",
    description: "AgriFarm is a farm management system designed to help farmers organize and monitor their daily activities efficiently. It enables users to manage crops, track farm data, and monitor production while promoting smart and sustainable farming practices through an easy-to-use interface.",
  },
 
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-20 px-4 relative overflow-hidden">
      {/* Blurred angled background image */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none select-none">
        <div className="w-[90vw] h-[60vh] max-w-6xl mx-auto bg-gradient-to-br from-[#1a1333] via-[#23213a] to-[#0a1120] opacity-90 rounded-3xl blur-2xl rotate-[-8deg] shadow-2xl" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(80,80,255,0.13)" }}
          >
            <Card className="h-full bg-card/90 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 p-6">
                <CardTitle className="text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </CardTitle>
                <ul className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t) => (
                    <li key={t} className="px-2 py-1 rounded bg-muted text-xs font-medium text-primary/80">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
