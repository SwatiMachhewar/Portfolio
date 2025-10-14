"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import certificationsData from "@/data/certifications.json";

interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
}

export default function Certifications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional certifications that validate my expertise in Salesforce and cloud technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert: CertificationItem, index: number) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {cert.date}
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {cert.name}
            </h3>

            <p className="text-primary font-medium mb-3">
              {cert.issuer}
            </p>

            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
              {cert.description}
            </p>

            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-1">Credential ID:</p>
              <p className="text-xs font-mono bg-secondary px-2 py-1 rounded">
                {cert.credentialId}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Skills Validated:</h4>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <a
                href={`https://trailhead.salesforce.com/credentials/${cert.credentialId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
              >
                View Credential <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
