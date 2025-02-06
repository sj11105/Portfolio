"use client";

import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [achievementsRef, achievementsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-500"
      >
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

        <div className="relative z-10 text-center px-4">
          <motion.div variants={item} className="floating">
            <h1 className="hero-text text-7xl md:text-9xl font-bold mb-6">
              Sneha Jain
            </h1>
          </motion.div>
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground mb-12"
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
          <motion.div variants={item} className="flex gap-6 justify-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card p-3 rounded-full"
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            variants={item}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="hero-text text-5xl font-bold mb-16 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="gradient-border glass-card p-8 space-y-6"
            >
              <p className="text-lg leading-relaxed">
                I am a passionate web developer with 2+ years of experience in
                building beautiful, functional, and user-friendly websites. I
                specialize in React, Next.js, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="gradient-border overflow-hidden rounded-[var(--radius)]"
              >
                <img
                  src="/image.jpg"
                  alt="Profile"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        className="py-32 px-4 md:px-8 bg-secondary/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="hero-text text-5xl font-bold mb-16 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="gradient-border"
              >
                <Card className="glass-card overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        ref={achievementsRef}
        initial={{ opacity: 0 }}
        animate={achievementsInView ? { opacity: 1 } : {}}
        className="py-32 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="hero-text text-5xl font-bold mb-16 text-center">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={achievementsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="gradient-border"
              >
                <Card className="glass-card p-8 h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-semibold mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                      {achievement.description}
                    </p>
                    <Badge className="mt-4 self-start" variant="outline">
                      {achievement.year}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        ref={techRef}
        initial={{ opacity: 0 }}
        animate={techInView ? { opacity: 1 } : {}}
        className="py-32 px-4 md:px-8 bg-secondary/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="hero-text text-5xl font-bold mb-16 text-center">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="gradient-border"
              >
                <Card className="glass-card p-6 text-center h-full">
                  <h3 className="text-xl font-semibold mb-4">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.items.map((item, i) => (
                      <Badge key={i} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const socialLinks = [
  { icon: Github, url: "https://github.com/sj11105" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/sneha-jain-4950852a6/" },
  {
    icon: Mail,
    url: "https://drive.google.com/file/d/14ibadtdyz5H3j9LI2eqzHZ-b1-gSquGL/view?usp=drive_link",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "UI/UX Design",
  "Responsive Design",
  "Performance Optimization",
  "Figma",
  "Express",
];
const projects = [
  {
    title: "Platform for Pregnant Women",
    description:
      "A full-stack Pregnancy help platform that uses CV for helping women exercise during their pregnancy and maintaining their health.",
    image: "/project1.png",
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDb",
      "Python",
    ],
  },
  {
    title: "Smart India Hackathon Project",
    description:
      "Platform that helps distinguish standard and non standard school and also helps standardising schools",
    image: "/project2.png",
    technologies: ["Next js", "Node.js", "MongoDB", "Python"],
  },
  {
    title: "ReVisionary",
    description:
      "Platform for revising and understanding concepts for Salesforce Productjam",
    image: "/project3.png",
    technologies: ["Python", "Gemini-API", "React-Native", "Mongodb"],
  },
];

const achievements = [
  {
    title: "Smart India Hackathon 2024",
    description:
      "Selected for grand finale of smart india hackathon nationally",
    year: "2024",
  },
  {
    title: "Track Prize",
    description: "Recieved Track Prize in SheCodes Hackathon ",
    year: "2024",
  },
  {
    title: "Salesforce ProductJam",
    description: "Selected for finals of Salesforce Productjam ",
    year: "2024",
  },
  {
    title: "Hackerrank",
    description: "Recieved 5 star on Hackerrank Platform",
    year: "2025",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Express", "Next js", "MongoDB"],
  },

  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman"],
  },
  {
    category: "Language",
    items: ["C++", "JavaScript"],
  },
];
