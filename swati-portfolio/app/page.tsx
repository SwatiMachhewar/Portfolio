import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/avatar.png"
              alt="Swati Machhewar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Swati Machhewar
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Senior Salesforce Developer
        </p>

        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          I am a Salesforce Certified Developer with 4 years of IT experience, including over 3.5 years in Salesforce development and administration. My expertise spans Apex, Triggers, Lightning Web Components (LWC), Flows, CPQ, Field Service Lightning (FSL), and the Salesforce Service Cloud. I have hands-on experience working with Sales Cloud, Service Cloud, and Experience Cloud implementations, with a strong focus on Salesforce configuration, security, automation, and custom development. I am passionate about delivering scalable, efficient CRM solutions and excel at collaborating with cross-functional teams to achieve impactful business outcomes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              Get In Touch <ArrowRight size={16} />
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="gap-2">
            <a href="/resume.pdf" download>
              <Download size={16} /> Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/SwatiMachhewar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/swati-machhewar-38703713b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:07swati98@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">4+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">10+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">8+</div>
          <div className="text-sm text-muted-foreground">Certifications</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">100%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Apex",
            "Triggers",
            "Lightning Web Components",
            "Aura Components",
            "Lightning Community",
            "Salesforce CPQ",
            "Field Service Lightning",
            "Process Builder",
            "Flows",
            "Workbench",
            "Data Loader",
            "HTML",
            "CSS",
            "JavaScript"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
