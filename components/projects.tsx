"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Urban Green Mapper",
      description: "Interactive GIS platform for urban landscape visualization and planning",
      tags: ["NextJS", "GIS", "React Three Fiber", "Mapbox"],
      featured: true,
    },
    {
      title: "EcoTech Dashboard",
      description: "Real-time monitoring system for sustainable infrastructure metrics",
      tags: ["React", "WebSockets", "D3.js", "Node.js"],
      featured: true,
    },
    {
      title: "Landscape Design Suite",
      description: "Collaborative design tool for landscape architects and planners",
      tags: ["React", "Figma API", "WebGL", "Firebase"],
      featured: false,
    },
    {
      title: "Environmental Analytics",
      description: "Data visualization platform for climate and environmental research",
      tags: ["TypeScript", "Recharts", "Python", "PostgreSQL"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A selection of my recent work combining technology, design, and environmental innovation
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <button className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                      View
                    </button>
                    <button className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                      <Github size={18} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
