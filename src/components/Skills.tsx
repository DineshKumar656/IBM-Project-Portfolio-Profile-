const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 80 },
        { name: "MATLAB", level: 75 },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Excel (AI)", level: 88 },
        { name: "Firebase", level: 82 },
        { name: "Flask", level: 80 },
      ],
    },
    {
      category: "IoT/AI Frameworks",
      skills: [
        { name: "ESP32", level: 85 },
        { name: "NodeMCU", level: 85 },
        { name: "Blynk", level: 90 },
        { name: "ThingSpeak", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-blue-400 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 stagger-fade-in">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card-gradient p-8 rounded-2xl hover-lift group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-background/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-blue-400 to-accent rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
