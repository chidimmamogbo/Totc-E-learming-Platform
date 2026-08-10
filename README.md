# 🎓 TOTC - Modern Online Learning Platform Landing Page

A pixel-perfect, hyper-responsive, and performance-optimized EdTech landing page built using **Next.js (Pages Router)**, **TypeScript**, and **Tailwind CSS**. This platform mimics the layout architecture of **TOTC**, showcasing advanced user interfaces specifically tuned for virtual learning environments and school management frameworks.

---

## 📸 Project Showcase & Previews

### 🖥️ Desktop Interface Preview
![TOTC Desktop Preview](/public/images/screenshots/desktop-preview.png)

### 📱 Mobile UI Preview
<p align="left">
  <!-- Place your mobile screen capture here. Height and width are managed proportionally -->
  <img src="/public/images/screenshots/mobile-preview.png" alt="TOTC Mobile View" width="320" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
</p>

---

## ✨ Engineering Highlights & Features

- **Responsive Grid Fractions:** Implements sophisticated layout distribution tracking (`md:grid-cols-[1.2fr_0.8fr]`) in the Hero section to allocate 60% width to copy typography and 40% to media, mitigating medium-screen squishing issues.
- **Dynamic Structural Array Mapping:** Ensures strict data isolation by keeping metrics, application cards, and interactive lists mapped dynamically via clean `.map()` iterations to guarantee modular scale.
- **State-Controlled Off-Canvas Menu:** Employs an ultra-responsive, React state-managed sliding drawer menu (`translate-x-full` to `translate-x-0`) that eliminates focus leaks and clipping offsets.
- **Retina Fluid Aspect Positioning:** Leverages Next.js `<Image />` tags with `fill` properties inside unified aspect sandboxes (`aspect-[540/340]`), allowing multiple complex avatar overlays to scale without losing geometric proportion.
- **Type-Safe Event Abstractions:** Configured with modern TypeScript compliance, substituting deprecated submission contexts with flexible `React.SyntheticEvent` signatures to ensure error-free builds.

---

## 🛠️ Built With

*   **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
*   **Language:** [TypeScript](https://typescriptlang.org) (Strict `.tsx` compliance)
*   **Styling Engine:** [Tailwind CSS](https://tailwindcss.com)
*   **UI Components:** [DaisyUI Component Suite](https://daisyui.com)
*   **Iconography:** [React Icons](https://github.io)
*   **Typography:** Optimized via [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) loading Vercel's *Geist* typeface.

---

---

## 📂 Component Architecture Directory

The application UI is broken down into granular, self-contained TypeScript components grouped by feature domain:

### 🏗️ Layout Components (`/components/layout`)
*   `Navbar.tsx` — Handles responsive layout structures with an integrated mobile sliding-drawer trigger flush to the right edge.
*   `Footer.tsx` — High-contrast information base featuring an input-safe subscription form structure.

### 🎨 Landing Page Sections (`/components/landing`)
*   `Hero.tsx` — Fluid, grid-fractioned hero block configured with large mobile text scaling and responsive image proportions.
*   `SuccessSection.tsx` — Dynamic metrics tracker grouping analytics numbers into clean, scalable grid maps.
*   `FeaturesSection.tsx` — Grid matrix cards complete with half-overlapped absolute icon badges utilizing `flex-shrink-0` geometry.
*   `FeatureShowcase.tsx` — A highly reusable dual-column showcase component hosting crisp, background-dimmed image overlays.
*   `ClassroomInterfaceFeature.tsx` — High-fidelity replica of a virtual environment stacking 5 overlapping avatars and live toolbars proportionally.
*   `ToolsSection.tsx` — Layout containing abstract decorative vectors layered behind foreground character elements.
*   `QuizShowcase.tsx` & `ManagementShowcase.tsx` — Complex data dashboard layout frames featuring top-ordered responsive stack columns.
*   `DiscussionShowcase.tsx` — Dual-grid layout housing private chat window previews with a centered global actions bar below.

---


---

## 🚀 Getting Started

To spin up a local development instance of the platform, execute the setup guidelines sequentially.

### Installation

1. Clone the project locally:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the root path directory:
   ```bash
   cd YOUR_REPO_NAME
   ```
3. Install package node modules:
   ```bash
   npm install
   # or yarn install / pnpm install / bun install
   ```

### Running the Development Environment

Launch the local compiler script:
```bash
npm run dev
# or yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) inside your web browser viewport configuration to review the live rendering interface. You can modify pages by editing `pages/index.tsx`, which triggers auto-updates via hot reloading.

---

## 🌐 API Routing Space

This template maps the `pages/api` path directly to `/api/*`. Files handled within this structure function as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of typical React templates:
*   Endpoint sample check: [http://localhost:3000/api/hello](http://localhost:3000/api/hello)
*   Editable source file location: `pages/api/hello.ts`

---

## 🚀 Deployment

The fastest method to host your Next.js application live is using the [Vercel Platform](https://vercel.com/new). Review the comprehensive [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for additional context.
