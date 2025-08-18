import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "HSLTX",
      position: "Desenvolvedor Fullstack Jr",
      period: "2024 - 2025",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Atuo no desenvolvimento e evolução de uma plataforma financeira voltada ao setor farmacêutico, responsável pelo cálculo de metas e comissões com base em dados de vendas integrados nacionalmente. A solução permite análises detalhadas por usuários e gestores, por meio de dashboards interativos e consultas personalizadas.",
      achievements: [
        "Desenvolvimento Fullstack com C#, .NET Framework, DevExpress e JavaScript;",
        "Arquitetura em camadas e versionamento com TFS;",
        "Automação de processos internos e melhoria da eficiência operacional;",
        "Criação e otimização de procedures no SQL Server com regras de negócio complexas;",
        "Geração de análises estratégicas para dashboards e indicadores de performance."
      ],
      technologies: ["C#", ".NET Framework", ".NET Maui" ,"SQL Server", "DevExpress", "APIs REST"]
    },
    {
      company: "InterPlayers",
      position: "Aux. Suporte Técnico",
      period: "2023 - 2024",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Responsável pelo desenvolvimento de aplicações web e desktop, com foco em performance e experiência do usuário em ambiente de alta demanda.",
      achievements: [
        "Administração de acessos e controle de usuários, garantindo segurança e funcionalidade nas operações.",
        "Otimizei consultas SQL, melhorando performance de relatórios críticos em 60%",
        "Suporte técnico e gestão de chamados na plataforma Salesforce, assegurando um atendimento ágil e eficiente aos clientes.",
        "Garantia de processos contínuos e atendimento ágil.",
        "Suporte técnico e operacional para Novartis e Viveo, com foco em pedidos e reversão de ordens."
      ],
      technologies: ["SQL", "SalesForce", "Power BI", "SQL Server"]
    },
    {
      company: "Mott Solutions",
      position: "Estagiário Desenvolvedor Web",
      period: "2022 - 2023",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Início da carreira focado em desenvolvimento de funcionalidades e correção de bugs em sistemas legados, com rápida evolução para projetos mais complexos.",
      achievements: [
        "Corrigi bugs críticos em sistemas legados, melhorando estabilidade geral",
        "Desenvolvi novas funcionalidades seguindo padrões estabelecidos pela equipe",
        "Participei de treinamentos intensivos em metodologias ágeis",
        "Contribuí para documentação técnica e processos internos",
        "Demonstrei rápida curva de aprendizado e proatividade"
      ],
      technologies: ["Node.JS", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                  
                  <Card className="md:ml-16 shadow-portfolio-card hover:shadow-portfolio-card-hover transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <Building size={16} />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </div>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp size={16} className="text-primary" />
                          Atividades
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Tecnologias Utilizadas</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-primary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;