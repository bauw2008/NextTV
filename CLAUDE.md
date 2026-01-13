# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

StreamBox is a modern video streaming application built with Next.js 16 (App Router), featuring a sleek UI with Chinese localization. The app provides video streaming, search functionality, settings management, and a robust video player powered by Artplayer.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Known Issues and Solutions

### Tailwind CSS v4 with Next.js 16

If you encounter `Error: Cannot find module 'lightningcss'` or similar errors:

1. **PostCSS Configuration**: Ensure `postcss.config.mjs` uses the correct v4 syntax:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

2. **Custom Utilities**: Use `@utility` directive instead of `@layer utilities` in CSS:
```css
@utility bg-primary {
  background-color: var(--color-primary);
}
```

3. **Clean Install**: If errors persist, run:
```bash
rm -rf node_modules .next && npm install
```

## Environment Setup

Before running the app, set the `GEMINI_API_KEY` in `.env.local`:
```
GEMINI_API_KEY=your_key_here
```

The environment variables are exposed via `next.config.js` to both `API_KEY` and `GEMINI_API_KEY`.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router (React 19)
- **State Management**: Zustand
- **Styling**: Tailwind CSS 4 with custom theme
- **Video Player**: Artplayer 5.3.0
- **Language**: JavaScript (not TypeScript)

### Directory Structure

```
/app
  /play/[id]/         # Video player page with dynamic routing
  /search/            # Search results page
  /settings/          # Settings management
  layout.js           # Root layout with Navbar and Footer
  page.js             # Home page with search and movie grid
  globals.css         # Tailwind config and custom styles

/components           # Reusable UI components
  Artplayer.js        # Video player wrapper
  MovieCard.js        # Movie card component
  Navbar.js           # Navigation bar
  Footer.js           # Footer component
  Pagination.js       # Pagination controls

/lib
  constants.js        # App constants, mock data, and default sources

/store
  useSettingsStore.js # Zustand store for video/danmaku sources
```

### Key Architectural Patterns

**1. Client-Side State with Zustand**
- Settings are managed globally via `useSettingsStore`
- Store handles video sources and danmaku (bullet comment) sources
- Actions: `toggleSource`, `addSource`, `removeSource`

**2. App Router Patterns**
- All page components use `'use client'` directive
- Dynamic routes: `/play/[id]` for video playback
- Suspense boundaries for loading states (see `/search/page.js`)

**3. Mock Data Architecture**
- `POPULAR_MOVIES` and `SEARCH_RESULTS` in `lib/constants.js`
- Video/danmaku source configurations in same file
- No real API integration yet - using placeholder data

**4. Video Player Integration**
- Artplayer wrapped in custom `Player` component
- Uses useRef and useEffect for lifecycle management
- Cleanup on unmount to prevent memory leaks

**5. Custom Styling System**
- Tailwind 4 with CSS variables defined in `@theme`
- Primary color: `#FAC638` (yellow/gold)
- Material Symbols font for icons
- Custom scrollbar and toggle checkbox styles

## Important Implementation Details

### Styling
- Uses Tailwind CSS 4 with `@import 'tailwindcss'` syntax (not traditional config file)
- Custom theme variables defined in `globals.css` under `@theme`
- Material Symbols icons used throughout (both outlined and filled variants)
- Chinese-optimized UI with Chinese language strings

### State Management
- Video/danmaku sources have `enabled` flag for toggle functionality
- Each source has: `id`, `name`, `url`, `enabled`, `type`
- Default sources provided in `lib/constants.js`

### Component Patterns
- Movie/TV items have: `id`, `title`, `year`, `genre`, `rating`, `type`, `poster`, `backdrop`
- Optional fields: `description`, `actors` (with avatar images)
- Search results filtered by query parameter

### Routing
- Home: `/` - Browse and search
- Search: `/search?q=query` - Search results
- Player: `/play/[id]` - Video playback
- Settings: `/settings` - Source management

## Common Tasks

### Adding a New Video Source
Update `DEFAULT_VIDEO_SOURCES` in `lib/constants.js`:
```javascript
{
  id: 'unique-id',
  name: 'Display Name',
  url: 'https://api.example.com/vod',
  enabled: false,
  type: 'video'
}
```

### Adding a New Movie/Show
Add to `POPULAR_MOVIES` or `SEARCH_RESULTS` in `lib/constants.js` with required fields: `id`, `title`, `year`, `genre`, `rating`, `type`, `poster`, `backdrop`.

### Modifying Theme Colors
Edit CSS variables in `app/globals.css` under `@theme`:
- `--color-primary`: Main accent color
- `--color-background-light`: Page background
- Custom shadows: `--shadow-soft`, `--shadow-card`

### Working with Artplayer
The player component in `components/Artplayer.js` accepts:
- `option`: Artplayer configuration object
- `getInstance`: Callback to get player instance
- `className`, `style`: Styling props

Always ensure proper cleanup in useEffect return function.

## Code Conventions

- **Language**: All UI strings are in Chinese
- **File Extensions**: Use `.js` (not `.ts` or `.tsx`)
- **Client Components**: Mark with `'use client'` at top of file
- **Icons**: Use Material Symbols with class `material-symbols-outlined`
- **Styling**: Prefer Tailwind classes over custom CSS
- **State**: Use Zustand for global state, useState for local state
