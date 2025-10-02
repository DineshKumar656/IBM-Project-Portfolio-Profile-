import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "IoT Systems",
      description: "Building smart, connected devices for real-world applications",
    },
    {
      icon: Palette,
      title: "AI & Analytics",
      description: "Leveraging AI and data visualization for intelligent insights",
    },
    {
      icon: Rocket,
      title: "Cross-Domain",
      description: "Combining electronics, software, and data science expertise",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-blue-400 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="card-gradient p-8 rounded-2xl hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-2 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
                <div className="space-y-2 text-lg">
                  <p className="font-semibold text-foreground">B.E in Electronics and Communication Engineering</p>
                  <p className="text-foreground/80">P.T. Lee Chengalvaraya Naicker College of Engineering & Technology</p>
                  <p className="text-foreground/60">2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Final-year ECE student passionate about smart systems, real-time IoT monitoring, and AI-based analytics. 
              My goal is to become a cross-domain professional, using modern technology to solve real-world challenges.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I bridge the gap between Electronics, Artificial Intelligence, and Data Science to create innovative 
              solutions that make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 stagger-fade-in">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-2xl hover-lift group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
