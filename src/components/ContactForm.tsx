"use client";

import { Send } from "lucide-react";
import Button from "./ui/Button";

export default function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-dark mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-xl border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-text-dark mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            className="w-full px-4 py-3 rounded-xl border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
            defaultValue=""
          >
            <option value="" disabled>Select range</option>
            <option>Under $5,000</option>
            <option>$5,000 - $15,000</option>
            <option>$15,000 - $50,000</option>
            <option>$50,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-2">
          Service Needed
        </label>
        <select
          id="service"
          className="w-full px-4 py-3 rounded-xl border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          <option>Web Development</option>
          <option>Software Development</option>
          <option>AI Development</option>
          <option>MVP Development</option>
          <option>SaaS Development</option>
          <option>AI Automations</option>
          <option>SEO</option>
          <option>AIEO</option>
          <option>Digital Marketing</option>
          <option>Graphics & Branding</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals, and timeline..."
          className="w-full px-4 py-3 rounded-xl border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="gap-2">
        <Send size={16} />
        Send Message
      </Button>
    </form>
  );
}
