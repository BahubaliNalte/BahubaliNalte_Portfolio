import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiMariadb, SiMysql, SiVercel, SiPostman } from "react-icons/si";
import { FaNetworkWired, FaLaptopCode } from "react-icons/fa";

const skills = [
  {
	category: "Frontend Development",
	items: [
	  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
	  { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
	  { name: "JavaScript (ES6+)", icon: FaJsSquare, color: "#F7DF1E" },
	  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
	  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
	  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
	  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
	],
  },
  {
	category: "Backend & Database",
	items: [
	  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
	  { name: "Express.js", icon: SiExpress, color: "#fff" },
	  { name: "Python", icon: FaPython, color: "#3776AB" },
	  { name: "Java", icon: FaJava, color: "#f89820" },
	  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
	  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
	  { name: "MariaDB", icon: SiMariadb, color: "#003545" },
	  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
	  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
	],
  },
  {
	category: "Tools & Methodologies",
	items: [
	  { name: "Git", icon: FaGitAlt, color: "#F05032" },
	  { name: "RESTful APIs", icon: FaNetworkWired, color: "#fff" },
	  { name: "Responsive Design", icon: FaLaptopCode, color: "#fff" },
	  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
	  { name: "Docker", icon: FaDocker, color: "#2496ED" },
	  { name: "VS Code", icon: FaLaptopCode, color: "#007ACC" },
	  { name: "Vercel", icon: SiVercel, color: "#fff" },
	  { name: "GitHub", icon: FaGithub, color: "#fff" },
	  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
	],
  },
];


const cardVariants = {
	offscreen: { opacity: 0, y: 60, scale: 0.95 },
	onscreen: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring" as const, bounce: 0.25, duration: 0.8 },
	},
};

export function SkillsSection() {
  return (
	<section id="skills" className="w-full max-w-6xl mx-auto py-20 px-4 relative overflow-hidden">
	  {/* Blurred angled background image */}
	  <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none select-none">
		<div className="w-[90vw] h-[60vh] max-w-6xl mx-auto bg-gradient-to-br from-[#0ea5e9] via-[#0f172a] to-[#0a1120] opacity-80 rounded-3xl blur-2xl rotate-[-8deg] shadow-2xl" />
	  </div>
	  <motion.h2
		className="text-4xl sm:text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg"
		initial={{ opacity: 0, y: -30 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.7 }}
	  >
		Skills
	  </motion.h2>
	  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
		{skills.map((cat, i) => (
		  <motion.div
			key={cat.category}
			className="h-full"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			variants={cardVariants}
		  >
			<Card className="h-full bg-card/90 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow group">
			  <CardHeader className="flex flex-col items-center">
				<CardTitle className="text-2xl text-primary mb-2 flex items-center gap-2">
				  <ChevronRight className="w-6 h-6 text-secondary" />
				  {cat.category}
				</CardTitle>
			  </CardHeader>
			  <CardContent>
				<ul className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-6">
				  {cat.items.map(({ name, icon: Icon, color }, idx) => (
					<motion.li
					  key={name}
					  whileHover={{
						scale: 1.12,
						backgroundColor: "var(--muted)",
						boxShadow: "0 6px 32px 0 rgba(80,80,255,0.13)",
					  }}
					  transition={{
						type: "spring",
						stiffness: 300,
						damping: 18,
					  }}
					  className="flex flex-col items-center gap-2 px-2 py-3 rounded-xl transition-colors cursor-pointer group bg-muted/40 hover:bg-muted/70 shadow-sm hover:shadow-md"
					>
					  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/60 group-hover:bg-primary/25 transition-colors shadow-lg">
						<Icon className="w-7 h-7" style={{ color: color || '#fff' }} />
					  </span>
					  <span className="font-semibold text-base text-center group-hover:text-primary transition-colors">
						{name}
					  </span>
					</motion.li>
				  ))}
				</ul>
			  </CardContent>
			</Card>
		  </motion.div>
		))}
	  </div>
	</section>
  );
}
