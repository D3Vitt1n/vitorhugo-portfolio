import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import GitHubProjectsSection from '@/components/GitHubProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-foreground text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            © 2025 Vitor Hugo Gaspar de Souza.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;