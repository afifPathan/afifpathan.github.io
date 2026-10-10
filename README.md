# Afif Pathan — Senior Mobile Architect Portfolio

> Production-ready personal portfolio website for **Afif Pathan** — Senior Mobile Architect, Flutter Tech Lead, and Systems Engineer with 8+ years of experience delivering production cross-platform platforms across e-commerce, EdTech, insurance, healthcare, and algorithmic trading systems.

Live URL: **[https://afifpathan.github.io/](https://afifpathan.github.io/)**

---

## 🎯 Architecture & Technical Highlights

- **Modern Frontend Stack**: Built on React 18, TypeScript 5.7 (strict mode), Vite 6, Tailwind CSS, and Framer Motion.
- **Architectural Storytelling**: Interactive Clean Architecture system blueprint showing Presentation, Application (BLoC/Cubit), Domain Core, and Data/Infrastructure boundaries.
- **Real-Time Telemetry Showcase**: Integrated terminal emulator demonstrating NSE stock trading bot daemon telemetry, Angel One SmartAPI, and sub-second WebSocket observability.
- **Verified Production Evidence**: 100% of projects, dates, roles, responsibilities, and achievements are verified from the professional CV.
- **Accessibility & Motion Standards**: Semantic HTML5 landmarks, keyboard navigation, full WCAG contrast compliance, and strict `prefers-reduced-motion` honoring compositor-thread performance.
- **Automated CI/CD**: Native GitHub Actions pipeline (`.github/workflows/deploy.yml`) with automated Vitest testing, production Vite bundle compilation, and zero-downtime deployment to GitHub Pages.

---

## 🛠️ Technology Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Client UI** | React 18, Tailwind CSS, Lucide Icons, Framer Motion |
| **Language & Tooling** | TypeScript 5.7, Vite 6, ESLint |
| **Testing** | Vitest 3, React Testing Library, jsdom |
| **Static Assets** | Authentic Resume PDF (`/resume.pdf`), SVG Icons, Open Graph 1200x630 |
| **Hosting & CI/CD** | GitHub Pages, GitHub Actions (`deploy-pages@v4`) |

---

## 📁 Repository Structure

```text
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions automated build & Pages deployment
├── public/
│   ├── favicon.svg         # Architectural AP monogram favicon
│   ├── og-image.png        # 1200x630 Open Graph preview image
│   ├── resume.pdf          # Authentic CV PDF download asset
│   └── robots.txt          # Search engine indexing rules
├── src/
│   ├── components/         # Reusable UI & architectural interactive widgets
│   │   ├── ArchitectureDiagram.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TechCluster.tsx
│   │   └── TerminalPreview.tsx
│   ├── data/
│   │   └── portfolioData.ts # Single source of truth containing verified CV facts
│   ├── hooks/              # Custom hooks (scrollspy, reduced motion)
│   ├── sections/           # Modular page sections
│   ├── styles/             # Global tokens, blueprint grid, glassmorphism
│   ├── test/               # Vitest test suite and mocks
│   ├── App.tsx             # Root application orchestrator
│   └── main.tsx            # React DOM mounting
├── vite.config.ts          # Vite configuration with Vitest setup & base '/'
└── tailwind.config.js      # Design tokens & color system
```

---

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/afifPathan/afifpathan.github.io.git
   cd afifpathan.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Execute automated tests**:
   ```bash
   npm run test
   ```

5. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## 📄 Updating the Resume PDF

To update the resume downloadable by recruiters and visitors:
1. Replace `public/resume.pdf` with the updated PDF file.
2. Commit and push the changes:
   ```bash
   git add public/resume.pdf
   git commit -m "chore: update resume PDF"
   git push origin main
   ```
3. GitHub Actions will automatically re-test, build, and deploy the updated resume.

---

## 📬 Contact & Professional Links

- **Email**: [afif.pathan52@gmail.com](mailto:afif.pathan52@gmail.com)
- **Phone**: [+91 8200614344](tel:+918200614344)
- **LinkedIn**: [linkedin.com/in/afif-pathan](https://linkedin.com/in/afif-pathan)
- **GitHub**: [github.com/afifPathan](https://github.com/afifPathan)
