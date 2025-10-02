import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="mesh-gradient"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-block floating">
            <span className="text-primary font-semibold text-lg mb-4 block">
              Hi, I'm
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight">
            Dinesh Kumar S
          </h1>
          
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-primary via-blue-400 to-accent rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed pt-6">
            A tech enthusiast bridging <span className="text-primary font-semibold">Electronics</span>, <span className="text-blue-400 font-semibold">AI</span>, and <span className="text-accent font-semibold">Data Science</span> to build smart, impactful solutions
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground hover:opacity-90 transition-opacity shadow-xl hover:shadow-2xl"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-6">
            <a
              href="https://github.com/dineshkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dineshkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dineshkumar22106007@gmail.com"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-accent transition-colors"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
