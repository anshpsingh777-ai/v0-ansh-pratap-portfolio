"use client"

import { Code, Leaf, Palette } from "lucide-react"

export default function About() {
  const stats = [
    { value: "120+", label: "Projects Completed", icon: Code },
    { value: "95%", label: "Client Satisfaction", icon: Leaf },
    { value: "10+", label: "Years Experience", icon: Palette },
  ]

  const expertise = [
    {
      category: "Website Development",
      description: "Full-stack web applications with modern frameworks",
    },
    {
      category: "App Development",
      description: "iOS and Android applications with responsive design",
    },
    {
      category: "Website Hosting",
      description: "Secure, scalable cloud infrastructure solutions",
    },
  ]

  return (
    <section id="about" className="py-20 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">About me</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I'm passionate about creating digital solutions that combine technology with environmental consciousness.
              My background spans landscape design, software development, and innovative tech solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              )
            })}
          </div>

          {/* Expertise */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Areas of Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((item) => (
                <div
                  key={item.category}
                  className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">{item.category}</h4>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
