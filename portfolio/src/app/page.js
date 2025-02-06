"use client";

import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, Twitter, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
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
        ref={heroRef}
        initial="hidden"
        animate="show"
        variants={container}
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

        <div className="relative z-10 text-center px-4">
          <motion.div variants={item} className="floating">
            <h1 className="hero-text text-7xl md:text-9xl font-bold mb-6">
              John Doe
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
                I'm a passionate web developer with 5+ years of experience in
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
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
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
  { icon: Github, url: "#" },
  { icon: Linkedin, url: "#" },
  { icon: Twitter, url: "#" },
  { icon: Mail, url: "#" },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "UI/UX Design",
  "Responsive Design",
  "Performance Optimization",
];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "AI Content Generator",
    description: "Content generation tool powered by OpenAI's GPT-3",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
  },
];

const achievements = [
  {
    title: "Best Web Application Award",
    description: "Won first place in the National Web Development Competition",
    year: "2023",
  },
  {
    title: "Open Source Contributor",
    description: "Major contributor to React and Next.js ecosystems",
    year: "2022",
  },
  {
    title: "Tech Conference Speaker",
    description: "Keynote speaker at ReactConf 2023",
    year: "2023",
  },
  {
    title: "Published Author",
    description: "Author of 'Modern Web Development with Next.js'",
    year: "2024",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman"],
  },
];
