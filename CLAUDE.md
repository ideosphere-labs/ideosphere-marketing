# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ideosphere is a marketing website for a scientific prediction market platform. Built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS, originally scaffolded using Lovable (lovable.dev). The site connects researchers with traders through prediction markets to fund scientific research.

## Development Commands

```bash
# Install dependencies
npm i

# Start dev server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development (includes component tagging)
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Path Aliases
The project uses `@/*` to reference `./src/*` (configured in both vite.config.ts and tsconfig.json)

### Application Structure
- **Entry point**: `src/main.tsx` renders `App.tsx` into `#root`
- **Routing**: React Router configured in `src/App.tsx` with catch-all 404 route
- **State management**: TanStack Query (React Query) for async state
- **UI notifications**: Dual toast system (radix-ui Toaster + Sonner)
- **Theming**: TooltipProvider wraps entire application

### Component Organization
- `src/components/ui/`: shadcn-ui components (accordion, button, card, etc.) - these are framework components that should generally not be modified
- `src/components/`: Custom components (HeroGeometric, PredictionMarketCard)
- `src/pages/`: Route pages (Index.tsx is the main landing page, NotFound.tsx for 404s)
- `src/lib/`: Utilities (`utils.ts` contains `cn()` for className merging)
- `src/hooks/`: Custom React hooks (use-mobile, use-toast)

### Styling System
- Tailwind CSS with custom theme extending default config
- CSS custom properties for theme colors (--primary, --background, etc.)
- Custom animations: float, fade-up, fade-in, pulse, shimmer
- Dark mode support via class-based strategy
- Component styling uses gradient backgrounds, border animations, and hover effects for glassmorphic aesthetic

### TypeScript Configuration
- Relaxed strictness: noImplicitAny, strictNullChecks, noUnusedLocals, noUnusedParameters all disabled
- skipLibCheck enabled for faster builds
- Separate configs for app (tsconfig.app.json) and node (tsconfig.node.json)

### Linting
ESLint configured with TypeScript support, React Hooks rules, and React Refresh. Unused variables rule is disabled.

## Key Pages

**Index (/)**: Single-page marketing site with sections:
- Hero with geometric background animation
- Researchers section (features: funding stream, collective intelligence)
- Traders section (features: liquidity provision, betting, profit, disruption)
- FAQ with collapsible questions
- Footer with navigation

## Important Notes

- Route additions must be placed ABOVE the catch-all "*" route in App.tsx:19
- The site uses Lovable's component tagger in development mode only
- Server runs on IPv6 (::) by default on port 8080
- External tracking script from gpteng.co is included in index.html
