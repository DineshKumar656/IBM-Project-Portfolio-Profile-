import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground/70">
            <span>Made with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>by John Developer</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-foreground/70 text-sm">© {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
