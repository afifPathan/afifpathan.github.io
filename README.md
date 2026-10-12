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

---

## ⚙️ Environment Configuration & Contact Form

The contact section features an interactive dispatch form with:
- Client-side input validation (name >= 2 chars, valid email, message >= 10 chars)
- Hidden honeypot field (`_gotcha`) for automated spam detection
- Dynamic `mailto:` fallback if no custom endpoint is configured
- Quick one-click "Copy email" button with dynamic toast feedback

### Connecting Formspree or EmailJS

To route submissions to your inbox via a webhook service:

1. Create a `.env` or `.env.local` file in the project root:
   ```bash
   # Formspree endpoint example:
   VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id

   # Or EmailJS / Custom Serverless Webhook:
   # VITE_CONTACT_ENDPOINT=https://api.emailjs.com/api/v1.0/email/send
   ```

2. **Note on Default Behavior**: If `VITE_CONTACT_ENDPOINT` is unset or omitted in the environment, the form gracefully falls back to generating a pre-filled `mailto:` draft in the user's native email client, ensuring messages are never lost.

---

## 💬 Adding Testimonials & Recommendations

The portfolio includes an automated `Testimonials` section that remains cleanly unmounted until testimonials are added:

1. Open `src/data/portfolioData.ts`.
2. Populate the `TESTIMONIALS` array with authentic endorsements:
   ```ts
   export const TESTIMONIALS: Testimonial[] = [
     {
       id: 'rec-1',
       name: 'Jane Doe',
       role: 'VP of Engineering',
       company: 'Enterprise Client',
       content: 'Afif established exceptional Clean Architecture standards across our Flutter platform...',
       avatarUrl: '/testimonials/jane.jpg',
       linkedinUrl: 'https://linkedin.com/in/...',
     },
   ];
   ```
3. Once entries exist in `TESTIMONIALS`, the section automatically mounts with smooth carousel navigation and card animations.

---

## 🧪 Comprehensive Verification Pipeline

Run the full end-to-end verification pipeline locally:

```bash
npm run verify
```

This runs in sequence:
1. `tsc --noEmit` — Strict TypeScript type-checking across all source files.
2. `npm test` — 23 Vitest unit tests covering data integrity, state machines, and components.
3. `npm run build` — Production Vite bundle compilation with code-splitting and gzip verification (<120 kB gzip entry JS, <20 kB gzip CSS).
4. `npm run test:e2e` — 28 Playwright automated end-to-end tests across Chromium Desktop (1440x900) and Chromium Mobile (390x844), checking:
   - Zero WCAG 2.1 AA accessibility violations in dark and light modes via `@axe-core/playwright`.
   - Focus traps, keyboard navigation, and `prefers-reduced-motion` compliance.
   - Zero horizontal overflow across all responsive viewports (320px to 1920px).
   - Core Web Vitals (LCP < 600ms, CLS < 0.02, FCP < 30ms).
   - Strict audit for prohibited phrases or synthetic placeholders.

