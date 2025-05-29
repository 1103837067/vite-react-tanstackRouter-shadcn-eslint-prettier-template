import { useTheme } from '@/lib/theme-context';
import { createFileRoute } from '@tanstack/react-router';
import logo from '../logo.svg';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { theme, actualTheme } = useTheme();

  return (
    <div className="text-center">
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground transition-colors duration-300 py-8">
        <img
          src={logo}
          className="h-[30vmin] max-h-48 pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <div className="space-y-4 max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold">欢迎使用 React + TypeScript</h1>

          <p className="text-lg">
            编辑{' '}
            <code className="bg-muted px-2 py-1 rounded text-sm">
              src/routes/index.tsx
            </code>{' '}
            并保存以重新加载。
          </p>

          {/* 主题状态显示 */}
          <div className="bg-card border border-border rounded-lg p-4 my-6 text-left">
            <h2 className="text-lg font-semibold mb-3 text-center">
              🎨 主题切换功能
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">当前主题设置:</span>
                <span className="font-medium text-primary">
                  {theme === 'light'
                    ? '☀️ 亮色'
                    : theme === 'dark'
                      ? '🌙 暗色'
                      : '💻 跟随系统'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">实际应用主题:</span>
                <span className="font-medium text-primary">
                  {actualTheme === 'light' ? '☀️ 亮色模式' : '🌙 暗色模式'}
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Header固定在顶部，使用ScrollArea处理内容滚动！
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="text-primary hover:text-primary/80 hover:underline transition-colors"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              学习 React
            </a>
            <a
              className="text-primary hover:text-primary/80 hover:underline transition-colors"
              href="https://tanstack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              学习 TanStack
            </a>
            <a
              className="text-primary hover:text-primary/80 hover:underline transition-colors"
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              学习 shadcn/ui
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">🚀 项目特性</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🎨 主题系统</h3>
              <p className="text-muted-foreground">
                完整的主题切换系统，支持亮色、暗色和跟随系统三种模式。
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">📱 响应式设计</h3>
              <p className="text-muted-foreground">
                完全响应式布局，在桌面和移动设备上都有出色的体验。
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">⚡ 现代技术栈</h3>
              <p className="text-muted-foreground">
                使用React 19、TypeScript、TanStack Router和shadcn/ui构建。
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🎯 固定Header</h3>
              <p className="text-muted-foreground">
                Header固定在顶部，提供持续的导航访问能力。
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">📜 ScrollArea</h3>
              <p className="text-muted-foreground">
                使用shadcn ScrollArea组件实现优雅的滚动体验。
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">♿ 无障碍设计</h3>
              <p className="text-muted-foreground">
                遵循Web无障碍设计原则，确保所有用户都能使用。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">📐 新布局系统</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">
                ScrollArea + 固定Header
              </h3>
              <ul className="text-left space-y-2 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>使用flexbox布局，Header固定高度</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>内容区域使用ScrollArea组件</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>ScrollToTop按钮适配ScrollArea滚动</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>完全占满视窗高度，无需padding调整</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">技术实现细节</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">布局结构</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• flex flex-col 垂直布局</li>
                    <li>• Header: h-[69px] flex-none</li>
                    <li>• 内容: flex-1 overflow-hidden</li>
                    <li>• ScrollArea: h-full 完全填充</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">滚动处理</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 监听ScrollArea内部滚动</li>
                    <li>• 智能检测滚动元素</li>
                    <li>• 平滑滚动到顶部</li>
                    <li>• 自动显示/隐藏按钮</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            📏 滚动测试区域
          </h2>
          <div className="space-y-8">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold mb-4">测试区块 {i + 1}</h3>
                <p className="text-muted-foreground mb-4">
                  这是一个测试滚动功能的区块。当您滚动到页面下方时，
                  右下角会出现一个&ldquo;滚动到顶部&rdquo;的按钮。
                </p>
                <div className="h-24 bg-gradient-to-r from-primary/5 to-secondary/5 rounded flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    滚动距离足够时，右下角会显示返回顶部按钮
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground mb-4">
            现在您已经滚动到底部了！试试点击右下角的按钮返回顶部！
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 React + TypeScript 主题切换系统演示 - ScrollArea版本
          </p>
        </div>
      </footer>
    </div>
  );
}
