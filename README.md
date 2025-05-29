# React + TypeScript + 主题切换系统

这是一个现代化的React应用程序，集成了完整的主题切换功能。

## 🚀 快速开始

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用程序。

## ✨ 主要功能

### 🎨 主题切换系统
- **☀️ 亮色模式**: 清爽的浅色主题
- **🌙 暗色模式**: 护眼的深色主题
- **💻 跟随系统**: 自动跟随操作系统主题设置
- **持久化存储**: 主题设置自动保存到本地存储
- **平滑过渡**: 主题切换时有平滑的动画效果

### 🛠️ 技术栈
- **React 19** - 最新版本的React框架
- **TypeScript** - 类型安全的JavaScript
- **TanStack Router** - 现代化的路由系统
- **shadcn/ui** - 高质量的UI组件库
- **Tailwind CSS** - 实用优先的CSS框架
- **Vite** - 快速的构建工具

## 🎯 如何使用主题切换

1. **找到主题按钮**: 位于页面右上角的Header中
2. **点击切换**: 点击按钮打开主题选择菜单
3. **选择主题**: 
   - 亮色 ☀️
   - 暗色 🌙
   - 跟随系统 💻

## 📂 项目结构

```
src/
├── components/           # React组件
│   ├── ui/              # shadcn/ui组件
│   ├── Header.tsx       # 页面头部组件
│   └── ThemeToggle.tsx  # 主题切换按钮
├── lib/                 # 工具库
│   └── theme-context.tsx # 主题上下文管理
├── routes/              # 路由页面
│   ├── __root.tsx       # 根路由
│   └── index.tsx        # 首页
├── styles.css           # 全局样式和主题变量
└── main.tsx            # 应用入口
```

## 🔧 自定义主题

### 修改主题颜色

在 `src/styles.css` 中修改CSS变量：

```css
:root {
  --background: oklch(1 0 0);           /* 背景色 */
  --foreground: oklch(0.141 0.005 285.823); /* 前景色 */
  --primary: oklch(0.21 0.006 285.885);     /* 主色调 */
  /* ... 更多变量 */
}

.dark {
  --background: oklch(0.141 0.005 285.823); /* 暗色背景 */
  --foreground: oklch(0.985 0 0);           /* 暗色前景 */
  /* ... 暗色主题变量 */
}
```

### 在组件中使用主题

```typescript
import { useTheme } from '@/lib/theme-context'

function MyComponent() {
  const { theme, setTheme, actualTheme } = useTheme()
  
  return (
    <div className="bg-background text-foreground">
      <p>当前主题: {actualTheme}</p>
      <button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-primary text-primary-foreground"
      >
        切换主题
      </button>
    </div>
  )
}
```

## 📱 响应式设计

应用程序完全响应式，在以下设备上都能完美工作：
- 📱 手机 (320px+)
- 📱 平板 (768px+)
- 💻 桌面 (1024px+)

## 🧪 测试

```bash
npm run test
# 或
pnpm test
```

## 🏗️ 构建

```bash
npm run build
# 或
pnpm build
```

## 📖 更多文档

- [主题切换功能详细说明](./主题切换功能说明.md)
- [React 官方文档](https://react.dev)
- [TanStack Router](https://tanstack.com/router)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**享受您的开发体验！** 🎉
