# Fabricio Cunha - Personal Portfolio

Welcome to the repository for my personal portfolio website! This project serves to showcase my professional work, open-source contributions, and the various technologies I work with.

## 🚀 Tech Stack

This project is built with modern web technologies:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)

## ✨ Features

- **Dynamic Project Showcase:** A clean, grid-based layout displaying various web development projects, complete with links to live demos, GitHub repositories, and tech stacks used.
- **Modern UI:** Built with premium aesthetic principles, featuring glassmorphism, responsive design, and subtle micro-interactions.
- **GitHub Activity:** Integration to showcase my recent GitHub activity.
- **Performant & SEO Optimized:** Utilizing Next.js's built-in image optimization and server-side rendering where applicable.

## 🛠️ Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/fabriciocunhauk/website.git
cd website
```

### 2. Install dependencies
Using `npm` (or your preferred package manager like `yarn`, `pnpm`, or `bun`):
```bash
npm install
```

### 3. Run the development server
This project uses Turbopack for faster local development:
```bash
npm run dev
```

### 4. View the application
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🧪 Scripts

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Start the dev server (Turbopack) on port 3000 |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm test` | Vitest unit tests |
| `npm run test:coverage` | Unit tests with V8 coverage for `app/lib` |
| `npm run test:e2e` | Playwright smoke tests (starts its own dev server on port 3100) |

Run `npx playwright install chromium` once before the first E2E run.

## 📁 Project Structure

- `app/`: Next.js App Router entry points (`layout.tsx`, `page.tsx`, `robots.ts`, `sitemap.ts`).
- `app/components/`: Page sections and shared UI primitives (`Button`, `Card`, `Container`, `SectionHeading`).
  - `app/components/navbar/`: Navbar, desktop navigation and mobile menu.
  - `app/components/github/`: GitHub activity grid (server-rendered, cached for 1 hour).
- `app/data/`: Static content — projects (`card-data.ts`), skills, tech icons, navigation and social links.
- `app/hooks/`: Client-side React hooks.
- `app/lib/`: Framework-agnostic helpers and site config (`site-config.ts` is the single source for URLs, GA ID and SEO copy), with colocated `*.test.ts` unit tests.
- `e2e/`: Playwright end-to-end specs.
- `public/`: Static assets such as images and icons.

## 🤝 Contributions

Feel free to open an issue or submit a pull request if you find any bugs or have suggestions for improvements.

---

*Designed and built by [Fabricio Cunha](https://github.com/fabriciocunhauk)*
