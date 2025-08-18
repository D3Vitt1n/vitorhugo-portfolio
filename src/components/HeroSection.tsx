import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';


const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleAction = (action: string) => {
  switch (action) {
    case 'download':
      downloadFile('/Curriculo_Vitor.pdf', 'Curriculo_Vitor_2025');
      break;
    case 'email':
      window.open(
        'mailto:v.gaspar.souza@gmail.com?subject=Contato Profissional - Oportunidade de Trabalho'
      );
      break;
    case 'linkedin':
      window.open('https://www.linkedin.com/in/d3vitor/', '_blank');
      break;
  }
};

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Vitor Hugo
            <span className="block text-3xl md:text-4xl font-normal mt-2">
              Gaspar de Souza
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            FullStack Development Jr | .NET | DevExpress | .NET Maui | SQL Server
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => scrollToSection('#about')}
            >
              Conhecer Melhor
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => handleAction('download')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/d3vitor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-light transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:v.gaspar.souza@gmail.com" 
              className="text-white hover:text-primary-light transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-white hover:text-primary-light transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;