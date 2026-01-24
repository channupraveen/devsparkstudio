# DevSpark Studio - Professional Web Development Agency Website

A modern, SEO-optimized website for DevSpark Studio built with React, TypeScript, TailwindCSS, and Vite.

## 🚀 Features

- ✅ **SEO Optimized** - Meta tags, semantic HTML, performance optimization
- ✅ **Responsive Design** - Mobile-first approach with TailwindCSS
- ✅ **Modern Stack** - React 18 + TypeScript + Vite
- ✅ **Component Library** - Radix UI components with shadcn/ui styling
- ✅ **Animations** - Smooth transitions and micro-interactions
- ✅ **Fast Performance** - Optimized bundle size and lazy loading
- ✅ **Type Safety** - Full TypeScript coverage

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or bun

### Setup

1. **Navigate to the project directory:**
```bash
cd C:\Users\pk055\Desktop\devspark-studio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
bun install
```

3. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. **Open browser:**
```
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
devspark-studio/
├── src/
│   ├── components/
│   │   ├── home/           # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── ui/             # Reusable UI components
│   ├── pages/              # Route pages
│   │   ├── Index.tsx       # Homepage
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── lib/                # Utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                 # Static assets
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: "hsl(217 91% 60%)",  // Blue
  secondary: "hsl(280 70% 60%)", // Purple
}
```

### Content
- Edit component files in `src/components/home/` to update content
- Modify `src/pages/` for page-specific content
- Update SEO meta tags in `index.html`

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Radix UI** - Headless components
- **React Router** - Navigation
- **Lucide React** - Icons
- **Framer Motion** - Animations
- **React Query** - Data fetching

## 📝 SEO Checklist

- [x] Meta descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Semantic HTML
- [x] Alt tags for images
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Performance optimization

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder
```

## 📞 Contact

**DevSpark Studio**
- Email: devsparkstudio12@gmail.com
- Phone: +91 8106775767
- Location: Kendrapara, Odisha, India

## 📄 License

Copyright © 2024 DevSpark Studio. All rights reserved.

---

## 🎯 Next Steps

1. ✅ Create all homepage sections
2. ✅ Build responsive header & footer
3. ✅ Add services, portfolio, about pages
4. ✅ Implement contact form
5. ✅ Add animations and transitions
6. ✅ SEO optimization
7. ✅ Performance testing
8. ✅ Deploy to production

**Built with ❤️ by DevSpark Studio**
