import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

const GitHubProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/D3Vitt1n/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Erro ao carregar repositórios do GitHub');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'Python': 'bg-green-500',
      'Java': 'bg-orange-500',
      'C#': 'bg-purple-500',
      'HTML': 'bg-red-500',
      'CSS': 'bg-blue-400',
      'PHP': 'bg-indigo-500',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="github-projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projetos do GitHub
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">Carregando projetos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projetos do GitHub
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">Erro ao carregar projetos: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos do GitHub
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {repos.map((repo) => (
              <Card 
                key={repo.id} 
                className="shadow-portfolio-card hover:shadow-portfolio-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Github size={18} className="text-primary" />
                    {repo.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {repo.description || 'Sem descrição disponível'}
                  </p>

                  {/* Topics/Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Language and Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  {/* Updated Date */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                    <Calendar size={12} />
                    <span>Atualizado em {formatDate(repo.updated_at)}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Código
                    </Button>
                    {repo.homepage && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => window.open(repo.homepage!, '_blank')}
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <Card className="bg-primary/5 border-primary/20 shadow-portfolio-card">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Mais Projetos no GitHub
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estes são apenas alguns dos meus projetos mais recentes. 
                Visite meu perfil no GitHub para ver todos os repositórios e contribuições.
              </p>
              <Button 
                className="bg-primary hover:bg-primary-dark"
                onClick={() => window.open('https://github.com/D3Vitt1n', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                Ver Perfil Completo no GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjectsSection;