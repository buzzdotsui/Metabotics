# Metabotics — Software for the Physical World

Production-ready website for Metabotics, built with Next.js 14, TypeScript, and a custom design system.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Variables + CSS Modules (design token driven)
- **Animation**: Framer Motion (minimal, for system diagrams)
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + Playwright
- **Deployment**: Vercel

## Design System

The visual identity is monochrome-first:
- Black / White / Grayscale
- Technical typography (Space Grotesk, Inter, IBM Plex Mono)
- System diagrams as primary visual language
- Industrial photography
- Restrained motion

## Getting Started

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint

# Type checking
pnpm typecheck

# Tests
pnpm test
pnpm e2e

# Formatting
pnpm format
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── technology/        # Technology page
│   ├── applications/      # Applications index + detail pages
│   ├── research/          # Research index + article pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/
│   ├── ui/                # Foundation components
│   ├── layout/            # Global layout components
│   ├── hero/              # Hero component
│   ├── diagrams/          # Technical visualization
│   ├── applications/      # Application components
│   ├── research/          # Research components
│   ├── contact/           # Contact form
│   └── sections/          # Composable page sections
├── data/                  # Content separation
├── lib/                   # Utilities, validation, SEO
└── styles/                # Design tokens, global styles, typography
```

## Key Features

- **11 Routes**: Home, Technology, Applications (4), Research (index + articles), About, Contact, 404
- **Design System**: 15+ reusable components with consistent tokens
- **Technical Diagrams**: SystemDiagram, ProcessFlow, DataVisualization with animations
- **Accessibility**: WCAG AA compliant, keyboard navigation, screen reader support
- **SEO**: Complete metadata, Open Graph, sitemap, robots.txt
- **Performance**: Optimized images, self-hosted fonts, minimal JS
- **Security**: Server-side validation, rate limiting ready, no client secrets

## Documentation

See `docs/` for complete specifications:
- `01-SITE-ARCHITECTURE.md` — Information architecture
- `02-DESIGN-SYSTEM.md` — Visual language
- `03-PAGE-LAYOUTS.md` — Page compositions
- `04-COMPONENT-SPECIFICATION.md` — Component contracts
- `05-IMPLEMENTATION-PLAN.md` — Build sequence
- `06-REPOSITORY-AUDIT.md` — Repository state