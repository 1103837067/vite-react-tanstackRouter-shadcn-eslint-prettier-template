import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useTheme } from '@/lib/theme-context';
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import logo from '../logo.svg';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { theme, actualTheme } = useTheme();
  const { t } = useTranslation();

  const features = [
    {
      title: `🎨 ${t('home.features.themeSystem')}`,
      desc: t('home.features.themeSystemDesc'),
    },
    {
      title: `📱 ${t('home.features.responsive')}`,
      desc: t('home.features.responsiveDesc'),
    },
    {
      title: `⚡ ${t('home.features.modernStack')}`,
      desc: t('home.features.modernStackDesc'),
    },
    {
      title: `🎯 ${t('home.features.fixedHeader')}`,
      desc: t('home.features.fixedHeaderDesc'),
    },
    {
      title: `📜 ${t('home.features.scrollArea')}`,
      desc: t('home.features.scrollAreaDesc'),
    },
    {
      title: `♿ ${t('home.features.accessibility')}`,
      desc: t('home.features.accessibilityDesc'),
    },
    {
      title: `🌐 ${t('home.features.i18n')}`,
      desc: t('home.features.i18nDesc'),
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
      <section className="min-h-screen flex flex-col items-center justify-center py-8">
        <img
          src={logo}
          className="h-48 pointer-events-none animate-[spin_20s_linear_infinite] mb-8"
          alt="logo"
        />

        <div className="space-y-6 max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold">{t('home.welcome')}</h1>

          <p className="text-lg text-muted-foreground">
            {t('home.editFile')}{' '}
            <code className="bg-muted px-2 py-1 rounded text-sm">
              src/routes/index.tsx
            </code>{' '}
            {t('home.saveToReload')}
          </p>

          {/* 主题状态卡片 */}
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-center">
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

          {/* 链接按钮 */}
          <div className="flex flex-wrap gap-4 justify-center">
            {links.map(link => (
              <Button key={link.name} variant="outline" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 特性展示 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">
            🚀 {t('home.projectFeatures')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(feature => (
              <Card key={feature.title}>
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

      {/* 技术实现 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">
            📐 {t('home.techImplementation')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('home.layoutStructure')}</CardTitle>
                <CardDescription>
                  {t('home.layoutStructureDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-1 text-sm">
                <p>• {t('home.layoutDetails.flexCol')}</p>
                <p>• {t('home.layoutDetails.headerHeight')}</p>
                <p>• {t('home.layoutDetails.contentFlex')}</p>
                <p>• {t('home.layoutDetails.scrollAreaFull')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('home.scrollHandling')}</CardTitle>
                <CardDescription>
                  {t('home.scrollHandlingDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-1 text-sm">
                <p>• {t('home.scrollDetails.listenScroll')}</p>
                <p>• {t('home.scrollDetails.detectElement')}</p>
                <p>• {t('home.scrollDetails.smoothScroll')}</p>
                <p>• {t('home.scrollDetails.autoShowHide')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 滚动测试区域 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">
            📏 {t('home.scrollTestArea')}
          </h2>
          <div className="space-y-6">
            {Array.from({ length: 3 }, (_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>
                    {t('home.testBlock')} {i + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t('home.scrollTestDesc')}
                  </p>
                  <div className="h-24 bg-gradient-to-r from-primary/5 to-secondary/5 rounded flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      {t('home.scrollButtonHint')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <p className="text-muted-foreground">{t('home.footerScrolled')}</p>
          <p className="text-sm text-muted-foreground">
            © 2024 {t('home.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
