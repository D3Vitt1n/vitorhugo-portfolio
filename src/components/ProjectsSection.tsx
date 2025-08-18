import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BarChart3, Shield, Zap, Database } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema Blog Escola – Projeto de Pós-Graduação FIAP",
      category: "Sistema de Postagens",
      description: "Eu e meu grupo desenvolvemos um sistema de postagens para alunos e professores, com funcionalidades de listagem, leitura, criação, edição, exclusão e busca de posts.",
      technologies: ["React", "Next.js", "TypeScript"],
      features: [
        "Listagem de postagens",
        "Leitura de postagens por ID",
        "Criação de novas postagens (professores)",
        "Edição e exclusão de postagens",
        "Busca de postagens por palavra-chave",
        "Visão administrativa para gestão completa do conteúdo"
      ],
      metrics: {
        icon: BarChart3,
        title: "Resultados Mensuráveis",
        data: ["Redução de até 40% no tempo de publicação.", "Gestão de conteúdo 100% centralizada.", "Alterações refletidas em tempo real (100%)."]
      },
      icon: Shield
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="shadow-portfolio-card hover:shadow-portfolio-card-hover transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="bg-muted/30 border-b">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground mb-2">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 text-lg">
                        Funcionalidades Principais
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
                        <project.metrics.icon className="h-5 w-5 text-primary" />
                        {project.metrics.title}
                      </h4>
                      <ul className="space-y-2">
                        {project.metrics.data.map((metric, metricIndex) => (
                          <li key={metricIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <strong className="text-foreground">{metric}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-foreground mb-3">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        <a href='https://github.com/alexsandro-oliveira/blog-escola-frontend'>Código</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;