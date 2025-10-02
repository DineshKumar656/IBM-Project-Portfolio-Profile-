import { Database, Cpu, Bot, BarChart3, Presentation } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Visualization with BI Tools",
      description: "Creating insightful dashboards and reports using Power BI, Tableau, and Excel for data-driven decisions.",
    },
    {
      icon: Cpu,
      title: "IoT & Sensor-Based Prototypes",
      description: "Developing smart IoT solutions with ESP32, NodeMCU, and cloud platforms for real-time monitoring.",
    },
    {
      icon: Bot,
      title: "AI Integration for Smart Systems",
      description: "Implementing AI-powered decision systems and automation for intelligent problem-solving.",
    },
    {
      icon: Database,
      title: "Tech-Enabled Automation Dashboards",
      description: "Building comprehensive monitoring and control dashboards with Firebase, Blynk, and ThingSpeak.",
    },
    {
      icon: Presentation,
      title: "AI-Enhanced Presentations & Reporting",
      description: "Delivering impactful presentations and reports enhanced with AI tools and data analytics.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">What I Can Offer Across Domains</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-blue-400 to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
            Cross-domain expertise combining IoT, AI, and Data Science to deliver innovative solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-fade-in">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-gradient p-8 rounded-2xl hover-lift group relative overflow-hidden"
            >
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
