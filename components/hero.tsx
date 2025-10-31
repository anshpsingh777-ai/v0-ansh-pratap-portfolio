"use client"

import { ArrowRight } from "lucide-react"

export default function Hero({ scrollY }: { scrollY: number }) {
  const offsetY = scrollY * 0.5

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background gradient elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${offsetY}px)` }}
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Welcome, I'm</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-balance">
                Ansh
                <br />
                Pratap
              </h1>
              <p className="text-2xl text-foreground/80">Landscape Technologist & Software Developer</p>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed max-w-xl">
              I blend cutting-edge technology with landscape design principles to create digital experiences that bridge
              the natural and digital worlds. Passionate about eco-tech innovation and sustainable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center gap-2 justify-center">
                Get in Touch
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                View Resume
              </button>
            </div>

            {/* Skills */}
            <div className="pt-8 space-y-3">
              <p className="text-sm font-semibold text-foreground/60">CORE SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "Landscape Design", "UI/UX", "GIS Technology", "Sustainability"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-96 md:w-96 md:h-full">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl blur-3xl" />

              {/* Profile container with border glow */}
              <div className="relative bg-card border border-primary/50 rounded-2xl overflow-hidden glow-ring">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dnfWXrForgPdgm5wbEK3DEgv4T8U1K.png"
                  alt="Ansh Pratap - Landscape Technologist"
                  className="w-full h-full object-cover float"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-secondary/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
