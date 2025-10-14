"use client";

import { motion } from "framer-motion";
import experienceData from "@/data/experience.json";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My journey in Salesforce development and the impact I&apos;ve made in various roles.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experienceData.map((experience: ExperienceItem, index: number) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-sm border"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                <p className="text-primary font-medium">{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-sm font-medium text-muted-foreground">{experience.period}</p>
              </div>
            </div>

            <p className="text-foreground/80 mb-4 leading-relaxed">
              {experience.description}
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
