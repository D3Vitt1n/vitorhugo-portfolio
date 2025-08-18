import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, TrendingUp, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Visão Estratégica",
      description: "Foco em soluções que agregam valor real ao negócio, sempre alinhadas aos objetivos estratégicos da empresa."
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Experiência em liderar equipes multidisciplinares e facilitar comunicação entre áreas técnicas e negócio."
    },
    {
      icon: TrendingUp,
      title: "Melhoria Contínua",
      description: "Busca constante por otimização de processos, performance e qualidade em todas as entregas."
    },
    {
      icon: Shield,
      title: "Segurança & Qualidade",
      description: "Compromisso com as melhores práticas de desenvolvimento, segurança da informação e compliance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="mb-12 shadow-portfolio-card">
            <CardContent className="p-8 lg:p-12">
              <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
                <p>
                  Sou um <strong>Desenvolvedor Fullstack</strong>
                  , especializado em criar soluções robustas e escaláveis para empresas que lidam com grandes volumes de dados 
                  e processos críticos de negócio.
                </p>
                
                <p>
                  Minha expertise técnica em <strong>C#, .NET e SQL Server</strong> e arquitetura 
                  em camadas, combinada com conhecimento profundo em princípios <strong>SOLID, APIs REST</strong> 
                  e automação de processos, me permite desenvolver sistemas que não apenas funcionam, mas que crescem junto com o negócio.
                </p>
                
                <p>
                  Atualmente, atuo na HSL Tecnologia no desenvolvimento e evolução de uma plataforma financeira responsável por calcular metas e comissões com base em dados de vendas de todo o Brasil. 
                  Faço parte de todas as etapas do projeto, desde o backend com C# e SQL Server até a construção de dashboards interativos para os usuários finais.
                  Tenho perfil analítico, organizado e gosto de propor soluções técnicas alinhadas ao negócio, 
                  sempre buscando escalabilidade, performance e clareza no código. Também tenho conhecimento em Power BI, 
                  Power Automate e estou em constante evolução técnica com foco em desenvolvimento fullstack.
                </p>
                
                <p className="text-primary font-extralight">
                  "Acredito que a tecnologia deve ser um catalisador para o crescimento dos negócios, 
                  sempre priorizando a segurança, escalabilidade e experiência do usuário."
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center shadow-portfolio-card hover:shadow-portfolio-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;