import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, Globe } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Pós-Tech Desenvolvimento FullStack",
      institution: "FIAP",
      period: "2024 - 2025",
      status: "Concluído",
      description: "Pós-graduação em Full Stack, com foco em arquitetura de software, bancos de dados e metodologias ágeis. Experiência em projetos práticos como a plataforma educacional Conexão Escola.",
      highlights: [
        "Arquitetura Cloud",
        "Banco de Dados",
        "Clean Architecture",
        "DevOps",
        "Low Code Development",
        "Microfrontend",
        "Microserviços",
        "Next.js",
        "Node JS",
        "Qualidade de Software",
        "React",
        "React Native",
        "TypeScript",
        "UI/UX para desenvolvedores",
        "Domain-Driven Design (DDD)"
      ]
    },
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: " Universidade Cruzeiro do Sul",
      period: "2022 - 2023",
      status: "Concluído",
      description: "Formação sólida em desenvolvimento de software, banco de dados e gestão de projetos tecnológicos.",
      highlights: [
        "Desenvolvimento de Software",
        "Banco de Dados e Modelagem",
        "Gestão de Projetos de TI"
      ]
    }
  ];

  // Certifications section removed as requested

  const courses = [
    "Clean Code e SOLID Principles - Alura",
    "Curso de Programação C# Completo - Udemy",
    "API REST com .NET Core - Udemy",
    "SQL para Análise de Dados: Do básico ao avançado",
    "Microsoft Sql Server 2022: Manipulando Dados - Alura",
    "Microsoft Sql Server 2022: Manipulando Dados - Alura",
    "Microsoft Sql Server 2022: conhecendo SQL - Alura",
    "Modelando aplicações com Domain-Driven Design - Alura",
    "Automatize processos com ferramentas No/Low Code - Alura",
    "Construa Sites com PHP, HTML, CSS e JavaScript - Udemy"
  ];

  const languages = [
    { language: "Português", level: "Nativo", proficiency: 100 },
    { language: "Inglês", level: "Intermediário", proficiency: 85 },
    { language: "Espanhol", level: "Intermediário", proficiency: 60 }
  ];

  return (
    <section id="education" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Formação Acadêmica
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Formal Education */}
          <div className="mb-16">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-portfolio-card hover:shadow-portfolio-card-hover transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-muted-foreground">{edu.period}</span>
                          <Badge 
                            className={edu.status === 'Concluído' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Principais Disciplinas</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <Badge key={hIndex} variant="outline" className="border-primary/20">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications section removed */}

          {/* Additional Courses & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Courses */}
            <Card className="shadow-portfolio-card">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Cursos Complementares
                </h3>
                <ul className="space-y-3">
                  {courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {course}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="shadow-portfolio-card">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  Idiomas
                </h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{lang.language}</span>
                        <Badge variant="secondary">{lang.level}</Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;