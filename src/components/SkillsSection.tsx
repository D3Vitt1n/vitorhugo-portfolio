import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, CheckCircle } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Linguagens & Frameworks",
      skills: [
        { name: "C#"},
        { name: ".NET Framework"},
        { name: ".NET Core"},
        { name: "JavaScript"},
        { name: "TypeScript"},
        { name: "React"}
      ]
    },
    {
      icon: Database,
      title: "Bancos de Dados & Análise",
      skills: [
        { name: "T-SQL"},
        { name: "Procedures"},
        { name: "Power BI"},
        { name: "ETL Processes"},
      ]
    },
    {
      icon: Wrench,
      title: "Ferramentas & Tecnologias",
      skills: [
        { name: "Git/GitHub"},
        { name: "Azure DevOps" },
        { name: "Docker"},
        { name: "Postman"}
      ]
    },
    {
      icon: CheckCircle,
      title: "Boas Práticas & Metodologias",
      skills: [
        { name: "SOLID Principles" },
        { name: "Clean Architecture"},
        { name: "Design Patterns"},
        { name: "DDD"},
        { name: "CI/CD"},
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico robusto e atualizado, com foco em desenvolvimento de soluções 
            escaláveis para o setor financeiro e empresarial.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-portfolio-card hover:shadow-portfolio-card-hover transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-secondary/50">
                          {skill.name}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Highlights */}
          <Card className="mt-12 shadow-portfolio-card">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-semibold text-center mb-8 text-foreground">
                Diferenciais Competitivos
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <p className="text-muted-foreground">Anos de Experiência</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Projetos Entregues</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Foco em Qualidade</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 