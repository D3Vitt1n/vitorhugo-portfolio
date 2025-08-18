import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone, MapPin, Download, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "v.gaspar.souza@gmail.com",
      href: "mailto:v.gaspar.souza@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/d3vitor/",
      href: "https://www.linkedin.com/in/d3vitor/",
      primary: true
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 95424-2173",
      href: "tel:+5511954242173",
      primary: false
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: null,
      primary: false
    }
  ];

  const quickActions = [
    {
      icon: Download,
      label: "Download do Currículo",
      description: "Baixe meu CV completo em PDF",
      action: "download",
      variant: "default" as const
    },
    {
      icon: Send,
      label: "Enviar E-mail",
      description: "Entre em contato diretamente",
      action: "email",
      variant: "outline" as const
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      description: "Conecte-se comigo profissionalmente",
      action: "linkedin",
      variant: "outline" as const
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contatos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className={`text-center shadow-portfolio-card hover:shadow-portfolio-card-hover transition-all duration-300 hover:-translate-y-1 ${
                  contact.primary ? 'border-primary/20 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    contact.primary ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <contact.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;