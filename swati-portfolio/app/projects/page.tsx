"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import projectsData from "@/data/projects.json";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
  featured: boolean;
  category: string;
}

export default function Projects() {
  const featuredProjects = projectsData.filter((project: ProjectItem) => project.featured);
  const otherProjects = projectsData.filter((project: ProjectItem) => !project.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my work in Salesforce development, integrations, and full-stack applications.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.longDescription}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
