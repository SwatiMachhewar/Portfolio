import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-foreground/80">
              © 2024 Swati Machhewar. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/SwatiMachhewar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/swati-machhewar-38703713b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:07swati98@gmail.com"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
