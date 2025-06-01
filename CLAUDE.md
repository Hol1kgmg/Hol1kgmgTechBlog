# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start Next.js development server on port 3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Docker
- `docker-compose up` - Start the containerized development environment

### Git & GitHub
- When creating Pull Requests, always assign to `Hol1kgmg`
  ```bash
  gh pr create --title "タイトル" --body "本文" --assignee Hol1kgmg --base develop
  ```

## Architecture

This project uses **Feature-Sliced Design (FSD)** with the following layer hierarchy:

```
src/
├── pages/        # Next.js page routes (Pages Router)
├── widgets/      # Complex UI compositions (Header, DockNavigation)
├── features/     # User interactions (dashboard, profile, stats)
├── entities/     # Business entities (dashboard entities)
├── shared/       # Reusable components and utilities
└── styles/       # Global styles
```

### Key Principles
1. **Layer Dependencies**: Higher layers can import from lower layers only (pages → widgets → features → entities → shared)
2. **Component Naming**: Uses BCCD Design pattern (Base, Case, Common, Domain) - components named like `DashboardCard`, `StatsCard`, `ProfileView`
3. **File Organization**: Each component has its own directory with `index.ts` for exports

## Tech Stack

- **Framework**: Next.js 15.3.2 (Pages Router, not App Router)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom color variables
- **Path Aliases**: `@/*` maps to `./src/*`

## Current Implementation

The project is in early development with:
- Basic page structure (home, dashboard, profile)
- Header component with desktop/mobile menu
- Dock navigation for main navigation
- Dark theme with CSS custom properties
- No testing framework configured yet
- Backend (Go + PostgreSQL) planned but not implemented