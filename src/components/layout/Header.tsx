import { Link } from '@tanstack/react-router';
import ThemeToggle from '../common/ThemeToggle';

/**
 * Header组件
 * 在flex布局中的顶部固定区域
 */
export default function Header() {
  return (
    <header className="w-full h-full p-4 flex gap-2 bg-background/95 backdrop-blur-sm text-foreground border-b border-border justify-between items-center shadow-sm">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link
            to="/"
            className="hover:text-primary transition-colors font-semibold"
            aria-label="返回首页"
          >
            🏠 Home
          </Link>
        </div>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
