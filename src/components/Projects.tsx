import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Irrigation System Using AI, Firebase & Telegram",
      description: "AI-powered irrigation system with real-time monitoring and Telegram bot integration for automated notifications and control.",
      tags: ["Python", "AI", "Firebase", "Telegram Bot"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "IoT-Based Water Level Indicator with OLED & Blynk",
      description: "Smart water level monitoring system using IoT sensors, OLED display, and Blynk platform for remote monitoring.",
      tags: ["ESP32", "Blynk", "OLED", "IoT"],
      image: "https://images.unsplash.com/photo-1554695119-286020a2b447?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Traffic Light System with Wokwi & ThingSpeak",
      description: "Intelligent traffic management system simulated in Wokwi with real-time data logging to ThingSpeak cloud platform.",
      tags: ["Wokwi", "ThingSpeak", "IoT", "C++"],
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Heavy Vehicle Monitoring using ESP32, Blynk & Buzzers",
      description: "Real-time heavy vehicle tracking and monitoring system with alerts and notifications through Blynk IoT platform.",
      tags: ["ESP32", "Blynk", "IoT", "Sensors"],
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "AI-based Conversation Bot in Python",
      description: "Intelligent conversational AI bot built with Python, capable of natural language understanding and contextual responses.",
      tags: ["Python", "AI", "NLP", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-blue-400 to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto stagger-fade-in">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-gradient overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-primary/50 bg-primary/5 text-primary hover:bg-primary/20 backdrop-blur-sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground hover:opacity-90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
