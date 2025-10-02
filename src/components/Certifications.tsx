import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "ML Internship",
      organization: "NoviTech",
      date: "2024",
    },
    {
      title: "Data Analytics",
      organization: "NoviTech",
      date: "2024",
    },
    {
      title: "Power BI Certification",
      organization: "Newton School",
      date: "2024",
    },
    {
      title: "Power BI Advanced",
      organization: "OfficeMaster",
      date: "2024",
    },
    {
      title: "AI Tools & ChatGPT",
      organization: "be10x",
      date: "2024",
    },
    {
      title: "Web Readiness Program",
      organization: "Study Comrade x Startup India",
      date: "2023",
    },
    {
      title: "Excel with AI",
      organization: "OfficeMaster",
      date: "2024",
    },
    {
      title: "Business Visualization",
      organization: "Forage",
      date: "2024",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-blue-400 to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
            Continuous learning and professional development across multiple domains
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-fade-in">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-gradient p-6 rounded-2xl hover-lift group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Award className="text-primary" size={26} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{cert.title}</h3>
                <p className="text-foreground/70 text-sm mb-1 font-medium">{cert.organization}</p>
                <p className="text-primary/80 text-xs font-semibold">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
