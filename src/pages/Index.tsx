
import { useState, useEffect } from "react";
import { Moon, Sun, Download, Mail, Phone, Github, Linkedin, ExternalLink, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
    { name: "UI/UX Design", icon: Palette, description: "Creating beautiful and intuitive user interfaces" },
    { name: "Frontend Development", icon: Code, description: "Building responsive web applications with modern technologies" },
    { name: "Mobile Design", icon: Smartphone, description: "Designing mobile-first experiences" }
  ];

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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "SaaS Dashboard",
      description: "Complex dashboard design with data visualization and responsive layouts.",
      tech: ["Vue.js", "D3.js", "PostgreSQL", "SCSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Olayinka Joseph</h1>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-accent transition-colors font-medium">About</a>
              <a href="#skills" className="hover:text-accent transition-colors font-medium">Skills</a>
              <a href="#projects" className="hover:text-accent transition-colors font-medium">Projects</a>
              <a href="#contact" className="hover:text-accent transition-colors font-medium">Contact</a>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="rounded-full hover:bg-accent/10"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/21699817-f288-4dae-b372-5918459d504f.png" 
              alt="Olayinka Joseph"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-accent/30 shadow-lg"
            />
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Olayinka Joseph</span>
            </h2>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-8">
              Web Designer & Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I create beautiful, functional, and user-centered digital experiences. 
              Specializing in UI/UX design and full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a 
                  href="https://docs.google.com/document/d/16XN-rtSlVhCztw9MzaGhP0RfmwqBfmRo/edit?usp=drive_link&ouid=116363955327113602822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate web designer and developer with expertise in both UI/UX design and full-stack development. 
              I love creating digital solutions that not only look great but also provide exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              With a keen eye for design and strong technical skills, I bridge the gap between creative vision and 
              functional implementation, ensuring every project is both beautiful and performant.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">My Skills</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-accent/20 hover:border-accent/40">
                <CardHeader>
                  <skill.icon className="h-12 w-12 mx-auto text-accent mb-4" />
                  <CardTitle className="text-primary">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-accent/20 hover:border-accent/40 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-primary">
                    {project.title}
                    <ExternalLink className="h-4 w-4 text-accent" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-sm rounded-md border border-accent/20"
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
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-primary">Let's Connect</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a 
                    href="mailto:josepholayinka558@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    josepholayinka558@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a 
                    href="https://wa.me/2348148315382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    +234 814 831 5382
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-primary">Follow Me</h5>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <a 
                      href="https://github.com/josepholayinka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
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
            <div>
              <h4 className="text-xl font-semibold mb-6 text-primary">Send Me a Message via WhatsApp</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-accent/30 focus:border-accent"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="border-accent/30 focus:border-accent"
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Olayinka Joseph. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
