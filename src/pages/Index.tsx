
import { useState, useEffect } from "react";
import { Moon, Sun, Download, Mail, Phone, Github, Linkedin, ExternalLink, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScroll = () => setScrollY(window.scrollY);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hi! I'm ${formData.name}\n\n${formData.message}`;
    const whatsappUrl = `https://wa.me/2348148315382?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to WhatsApp to send your message!",
    });
    
    setFormData({ name: "", message: "" });
  };

  const skills = [
    { name: "Data Annotation", icon: Code, description: "Consistent labeling and review of AI-generated outputs." },
    { name: "Response Evaluation", icon: Palette, description: "Ranking responses for quality, relevance, and clarity." },
    { name: "Quality Assurance", icon: Smartphone, description: "Detecting errors, bias, and inconsistencies with strong attention to detail." }
  ];

  const fallbackProjectImage = "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=center";

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX design and seamless user experience.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Healthcare App",
      description: "Mobile-first healthcare application with intuitive design and accessibility features.",
      tech: ["React Native", "Firebase", "Figma", "TypeScript"],
      image: "/images/healthcare-app.jpg"
    },
    {
      title: "SaaS Dashboard",
      description: "Complex dashboard design with data visualization and responsive layouts.",
      tech: ["Vue.js", "D3.js", "PostgreSQL", "SCSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const kineticScale = 1 + Math.min(scrollY / 1800, 0.2);
  const kineticShift = Math.min(scrollY / 12, 36);
  const heroImageShift = Math.min(scrollY * 0.08, 42);
  const themeClass = isDarkMode ? "theme-dark" : "theme-light";
  const heroProfileImage = "/lovable-uploads/21699817-f288-4dae-b372-5918459d504f.png";

  return (
    <div className={`cyber-page min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-700 ${themeClass}`}>
      <style>{`
        .theme-dark {
          --bg: #050816;
          --panel: rgba(16, 26, 53, 0.72);
          --panel-soft: rgba(11, 19, 42, 0.7);
          --text: #e2e8f0;
          --text-soft: #b6c3dd;
          --line: #24304f;
          --line-strong: #2b6dff;
          --accent: #ff2e88;
          --accent-soft: rgba(255, 46, 136, 0.22);
          --secondary: #7aa5ff;
        }

        .theme-light {
          --bg: #edf2ff;
          --panel: rgba(255, 255, 255, 0.78);
          --panel-soft: rgba(234, 240, 255, 0.85);
          --text: #0d1b3c;
          --text-soft: #334b78;
          --line: #c6d3f2;
          --line-strong: #2b6dff;
          --accent: #ff2e88;
          --accent-soft: rgba(255, 46, 136, 0.16);
          --secondary: #315dd1;
        }

        .cyber-page {
          background: radial-gradient(circle at 12% 8%, rgba(43, 109, 255, 0.14), transparent 34%),
            radial-gradient(circle at 90% 12%, rgba(255, 46, 136, 0.14), transparent 36%),
            var(--bg);
          color: var(--text);
        }

        .themed-section {
          position: relative;
          color: var(--text);
          transition: background-color 700ms ease, color 700ms ease, border-color 700ms ease;
        }

        .themed-panel {
          background: var(--panel);
          border: 1px solid var(--line);
        }

        .themed-soft {
          color: var(--text-soft);
        }

        .cyber-grid {
          background-image: linear-gradient(rgba(70, 86, 126, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 86, 126, 0.16) 1px, transparent 1px);
          background-size: 36px 36px;
          background-position: center;
          animation: gridDrift 18s linear infinite;
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(42px) scale(0.98);
          transition: opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .neo-toggle {
          box-shadow: inset 0 2px 6px rgba(255, 255, 255, 0.08), 0 8px 20px rgba(12, 18, 40, 0.22);
          border: 1px solid var(--line);
          background: var(--panel);
        }

        .kinetic-word {
          display: inline-block;
          transform-origin: left center;
          transition: transform 150ms linear, letter-spacing 150ms linear;
        }

        .float-shard {
          position: absolute;
          border-radius: 14px;
          border: 1px solid var(--line);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(120, 140, 190, 0.08));
          backdrop-filter: blur(4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
          animation: shardFloat 7.5s ease-in-out infinite;
        }

        .float-shard::after {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          opacity: 0.45;
        }

        .feature-track {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--panel);
          border-radius: 12px;
        }

        .feature-track::before {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-45%);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.22), transparent);
          animation: lightScan 3.2s linear infinite;
        }

        .nav-link {
          position: relative;
          transition: color 220ms ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 260ms ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .soft-float {
          animation: softFloat 5.8s ease-in-out infinite;
        }

        .section-glow {
          position: relative;
        }

        .section-glow::before {
          content: "";
          position: absolute;
          inset: auto 8% -40px 8%;
          height: 60px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, var(--accent-soft), transparent);
          filter: blur(24px);
          pointer-events: none;
        }

        .contact-item {
          transition: transform 280ms ease, color 280ms ease;
        }

        .contact-item:hover {
          transform: translateX(8px);
        }

        .tech-pill {
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .tech-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px var(--accent-soft);
        }

        .form-card {
          border: 1px solid var(--line);
          background: var(--panel);
          border-radius: 16px;
          padding: 18px;
          transition: border-color 300ms ease, box-shadow 300ms ease;
        }

        .form-card:hover {
          border-color: var(--line-strong);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
        }

        @keyframes shardFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          35% {
            transform: translate3d(0, -14px, 0) rotate(8deg);
          }
          70% {
            transform: translate3d(0, 8px, 0) rotate(-5deg);
          }
        }

        @keyframes lightScan {
          100% {
            transform: translateX(145%);
          }
        }

        @keyframes softFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes gridDrift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 48px 48px, 48px 48px; }
        }
      `}</style>
      {/* Header */}
      <header className="fixed top-0 w-full bg-[var(--panel)] backdrop-blur-sm border-b border-[var(--line)] z-50 transition-colors duration-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">JOSEPH OLAYINKA</h1>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#about" className="nav-link hover:text-[var(--accent)] font-medium">About</a>
              <a href="#skills" className="nav-link hover:text-[var(--accent)] font-medium">Skills</a>
              <a href="#projects" className="nav-link hover:text-[var(--accent)] font-medium">Projects</a>
              <a href="#contact" className="nav-link hover:text-[var(--accent)] font-medium">Contact</a>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="neo-toggle rounded-full hover:scale-105 transition-all duration-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="themed-section pt-28 pb-16 px-4 relative overflow-hidden cyber-grid">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#2b6dff]/25 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-8 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-3xl animate-pulse [animation-delay:600ms]" />
        </div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span
                className="kinetic-word text-[var(--accent)]"
                style={{ transform: `translateX(${kineticShift}px) scale(${kineticScale})`, letterSpacing: `${Math.min(scrollY / 45, 8)}px` }}
              >
                JOSEPH
              </span>{" "}
              OLAYINKA
            </h2>
            <p className="text-xl md:text-2xl text-[var(--secondary)] font-semibold mb-8">
              AI Data Annotation Specialist
            </p>
            <p className="text-lg text-[var(--text-soft)] max-w-2xl mx-auto lg:mx-0 mb-8">
              Analytical and detail-focused specialist experienced in evaluating and ranking AI responses
              for quality, accuracy, and relevance in fast-paced remote workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="bg-[var(--accent)] hover:opacity-90 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent-soft)]">
                <a 
                  href="https://docs.google.com/document/d/16XN-rtSlVhCztw9MzaGhP0RfmwqBfmRo/edit?usp=drive_link&ouid=116363955327113602822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-[var(--line-strong)] text-[var(--secondary)] hover:bg-[var(--line-strong)] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#2b6dff]/30">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
            <div className="feature-track mt-7 px-4 py-3 text-xs md:text-sm text-[var(--text-soft)]">
              <div className="relative z-10 flex items-center gap-4 font-semibold tracking-wide">
                <span>AI RESPONSE RANKING</span>
                <span className="text-[var(--accent)]">•</span>
                <span>QUALITY ASSURANCE</span>
                <span className="text-[var(--accent)]">•</span>
                <span>DATA LABELING</span>
              </div>
            </div>
          </div>
          <div data-reveal className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[var(--accent-soft)] to-[#2b6dff]/20 blur-2xl" />
            <div className="float-shard w-12 h-12 top-10 -left-6 [animation-delay:0.6s]" />
            <div className="float-shard w-16 h-16 -top-6 right-10 [animation-delay:1.4s]" />
            <div className="float-shard w-10 h-10 bottom-14 -right-5 [animation-delay:2.1s]" />
            <img
              src={heroProfileImage}
              alt="JOSEPH OLAYINKA"
              style={{ transform: `translateY(${heroImageShift}px)` }}
              className="relative w-full max-w-[28rem] h-[32rem] mx-auto rounded-[2rem] object-cover object-[center_65%] border border-[var(--line)] shadow-2xl shadow-black/30 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="themed-section py-16 px-4 bg-[var(--panel-soft)] transition-colors duration-700 section-glow">
        <div className="container mx-auto">
          <h3 data-reveal className="text-3xl font-bold text-center mb-12">About Me</h3>
          <div data-reveal className="max-w-4xl mx-auto text-center">
            <p className="themed-soft text-lg mb-6">
              I support AI training by evaluating model outputs, applying annotation guidelines, and providing
              structured feedback to improve dataset quality and model performance.
            </p>
            <p className="themed-soft text-lg">
              Core strengths include response evaluation, quality assurance, critical thinking, and consistency.
              I work with tools such as Outlier AI, Scale AI, Labelbox, Google Sheets, and Excel.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="themed-section py-16 px-4 section-glow">
        <div className="container mx-auto">
          <h3 data-reveal className="text-3xl font-bold text-center mb-12">My Skills</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
                className="group themed-panel text-center hover:border-[var(--line-strong)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2b6dff]/20"
              >
                <CardHeader>
                  <skill.icon className="h-12 w-12 mx-auto text-[var(--secondary)] mb-4 transition-transform duration-300 group-hover:scale-110 soft-float" />
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="themed-soft">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="themed-section py-16 px-4 bg-[var(--panel-soft)] transition-colors duration-700 section-glow">
        <div className="container mx-auto">
          <h3 data-reveal className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group bento-card themed-panel hover:border-[var(--accent)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--accent-soft)] ${
                  index === 0 ? "md:col-span-2" : "md:col-span-1"
                } ${index === 1 ? "lg:row-span-2" : ""}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackProjectImage;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-4 w-4 text-[var(--accent)]" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="themed-soft mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="tech-pill px-2 py-1 bg-[var(--accent-soft)] text-[var(--accent)] text-sm rounded-md border border-[var(--accent)]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="themed-section py-16 px-4 section-glow">
        <div className="container mx-auto max-w-4xl">
          <h3 data-reveal className="text-3xl font-bold text-center mb-12">Get In Touch</h3>
          <div data-reveal className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div data-reveal>
              <h4 className="text-xl font-semibold mb-6">Let's Connect</h4>
              <div className="space-y-4">
                <div className="contact-item flex items-center gap-3">
                  <span className="h-5 w-5 text-[var(--secondary)] font-semibold text-sm">R</span>
                  <span>Remote</span>
                </div>
                <div className="contact-item flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[var(--secondary)]" />
                  <a 
                    href="mailto:josepholayinka558@gmail.com"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    josepholayinka558@gmail.com
                  </a>
                </div>
                <div className="contact-item flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[var(--secondary)]" />
                  <a 
                    href="https://wa.me/2348148315382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    +234 814 831 5382
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="font-semibold mb-4">Follow Me</h5>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild className="border-[var(--line-strong)] text-[var(--secondary)] hover:bg-[var(--line-strong)] hover:text-white">
                    <a 
                      href="https://github.com/josepholayinka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-[var(--line-strong)] text-[var(--secondary)] hover:bg-[var(--line-strong)] hover:text-white">
                    <a 
                      href="https://linkedin.com/in/josepholayinka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-reveal className="form-card themed-panel">
              <h4 className="text-xl font-semibold mb-6">Send Me a Message via WhatsApp</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="themed-panel text-[var(--text)] focus:border-[var(--line-strong)] transition-all duration-300 focus:scale-[1.01]"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="themed-panel text-[var(--text)] focus:border-[var(--line-strong)] transition-all duration-300 focus:scale-[1.01]"
                />
                <Button type="submit" className="w-full bg-[var(--accent)] hover:opacity-90 text-white">
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-reveal className="bg-[var(--panel)] py-8 px-4 border-t border-[var(--line)] transition-colors duration-700">
        <div className="container mx-auto text-center">
          <p className="text-[var(--text-soft)]">
            © 2026 JOSEPH OLAYINKA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
