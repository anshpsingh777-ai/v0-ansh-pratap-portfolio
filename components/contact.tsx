"use client"

import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@anshpratap.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ]

  return (
    <section id="contact" className="py-20 bg-card/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Get in touch</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together. I'm always interested in
              hearing about innovative ideas.
            </p>
          </div>

          {/* Contact Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
              Send me an email
            </button>
          </div>

          {/* Social Links */}
          <div className="pt-8 space-y-6">
            <p className="text-foreground/60 text-sm">Or connect with me on social media</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                    title={link.label}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
