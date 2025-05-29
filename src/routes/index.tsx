import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/lib/theme-context';
import { createFileRoute } from '@tanstack/react-router';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../logo.svg';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { theme, actualTheme } = useTheme();
  const { t } = useTranslation();

  // 根据当前语言设置页面标题
  useEffect(() => {
    document.title = t('meta.title');
  }, [t]);

  const features = [
    {
      title: `🎨 ${t('home.features.themeSystem')}`,
      desc: t('home.features.themeSystemDesc'),
    },
    {
      title: `🌐 ${t('home.features.i18n')}`,
      desc: t('home.features.i18nDesc'),
    },
    {
      title: `⚡ ${t('home.features.modernStack')}`,
      desc: t('home.features.modernStackDesc'),
    },
    {
      title: `📱 ${t('home.features.responsive')}`,
      desc: t('home.features.responsiveDesc'),
    },
  ];

  const links = [
    { name: t('home.learnReact'), url: 'https://reactjs.org' },
    { name: t('home.learnTanStack'), url: 'https://tanstack.com' },
    { name: t('home.learnShadcn'), url: 'https://ui.shadcn.com' },
  ];

  return (
    <div className="text-center space-y-16">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-69px)] flex flex-col items-center justify-center py-8">
        <img
          src={logo}
          className="h-32 pointer-events-none animate-[spin_20s_linear_infinite] mb-8"
          alt="logo"
        />

        <div className="space-y-6 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t('home.welcome')}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.description')}
          </p>

          {/* GitHub链接 */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href="https://github.com/1103837067/vite-react-tanstackRouter-shadcn-eslint-prettier-template"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-5 w-5" />
                {t('home.githubRepo')}
              </a>
            </Button>
            {links.map(link => (
              <Button key={link.name} variant="outline" asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.name}
                </a>
              </Button>
            ))}
          </div>

          {/* 主题状态卡片 */}
          <Card className="text-left max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-lg">
                🎨 {t('home.themeToggle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t('home.currentTheme')}
                </span>
                <span className="font-medium text-primary">
                  {theme === 'light'
                    ? `☀️ ${t('home.lightMode')}`
                    : theme === 'dark'
                      ? `🌙 ${t('home.darkMode')}`
                      : `💻 ${t('home.systemMode')}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t('home.actualTheme')}
                </span>
                <span className="font-medium text-primary">
                  {actualTheme === 'light'
                    ? `☀️ ${t('home.lightModeActive')}`
                    : `🌙 ${t('home.darkModeActive')}`}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 特性展示 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">
            🚀 {t('home.projectFeatures')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map(feature => (
              <Card
                key={feature.title}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 快速开始 */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">🚀 {t('home.quickStart')}</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card>
              <CardHeader>
                <CardTitle>1. {t('home.cloneRepo')}</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="block bg-background p-4 rounded text-sm">
                  git clone
                  https://github.com/1103837067/vite-react-tanstackRouter-shadcn-eslint-prettier-template.git
                </code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. {t('home.installDeps')}</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="block bg-background p-4 rounded text-sm">
                  pnpm install
                </code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. {t('home.startDev')}</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="block bg-background p-4 rounded text-sm">
                  pnpm dev
                </code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>4. {t('home.startBuilding')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('home.editFile')}{' '}
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    src/routes/index.tsx
                  </code>{' '}
                  {t('home.startProject')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {t('home.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
