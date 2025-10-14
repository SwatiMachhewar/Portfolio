"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzzjknvd");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData);
    if (state.succeeded) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and collaborations.
          Let&apos;s discuss how we can work together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:07swati98@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  07swati98@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a
                  href="tel:+919657001059"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9657001059
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">Ichalkaranji, MH 416115</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Let&apos;s Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m currently available for freelance projects and full-time opportunities.
              Whether you have a project in mind or just want to chat about Salesforce development,
              I&apos;d love to hear from you.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out! Your message has been sent successfully and I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button type="submit" disabled={state.submitting} className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
