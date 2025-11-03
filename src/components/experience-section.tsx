import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
 {
    role: "Full Stack Developer",
    company: "Diploma2Degree",
    period: "2024 - Present",
    description:
      "Building modern web applications for engineering counseling and project management using Next.js, Firebase, and Tailwind CSS. Focused on creating responsive UI, real-time data handling, and admin dashboards.",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "ClaryGuide",
    period: "2024 - Present",
    description:
      "Developing an educational guidance platform that helps students choose the right career and college path. Built with React, Node.js, Express, and MongoDB to deliver personalized recommendations and resources.",
  },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-20 px-4 relative overflow-hidden">
      {/* Blurred angled background image */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none select-none">
        <div className="w-[90vw] h-[60vh] max-w-6xl mx-auto bg-gradient-to-br from-[#a78bfa] via-[#6d28d9] to-[#23213a] opacity-80 rounded-3xl blur-2xl rotate-[-8deg] shadow-2xl" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
        Experience
      </h2>
      <div className="relative flex flex-col items-center">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent rounded-full z-0" />
        <ul className="w-full max-w-2xl space-y-12 z-10">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative flex items-center group"
            >
              {/* Timeline dot and icon */}
              <span className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-background">
                  <Briefcase className="w-4 h-4 text-background" />
                </span>
                {i !== experiences.length - 1 && (
                  <span className="w-1 h-12 bg-gradient-to-b from-primary/60 to-secondary/40" />
                )}
              </span>
              {/* Timeline card */}
              <div className="ml-12 md:ml-20 bg-card/90 border border-primary/20 shadow-lg hover:shadow-xl transition-shadow rounded-xl px-6 py-5 w-full">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl font-semibold text-primary">{exp.role}</span>
                  <span className="ml-auto flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </span>
                </div>
                <div className="font-semibold text-base mb-1">{exp.company}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
