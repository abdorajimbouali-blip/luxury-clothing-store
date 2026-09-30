# AGENTS.md — Luxury Clothing Store (ÉLÉGANCE)

## Overview
RTL Arabic luxury clothing e-commerce storefront built with React + Vite + Tailwind CSS + Framer Motion. Frontend-only (no backend/database). All product data is static in `src/data/products.js`.

## Tech Stack
- **Framework:** React 18 + Vite 5 (dev server on port 5173, mapped to host 3000)
- **Styling:** Tailwind CSS 3 with custom luxury theme (gold/cream/noir palette, Playfair Display + Inter fonts)
- **Animations:** Framer Motion 11 (scroll-triggered reveals, hover effects, floating elements, marquee)
- **Language:** Arabic (RTL), `dir="rtl"` set in index.html

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Vite dev server with live reload (HMR) — edits appear instantly
- Healthcheck uses node http.get (no curl in node:22-slim)
- `allowedHosts: true` in vite.config.js required for preview access (Vite 5, not 6.1+)

## Project Structure
- `src/App.jsx` — main app with cart state and drawer
- `src/components/` — Navbar, Hero, Marquee, FeaturedProducts, ProductCard, Categories, Showcase, Testimonials, Newsletter, Footer
- `src/data/products.js` — products, categories, testimonials arrays
- Images are external Unsplash URLs

## Notes
- No external secrets or credentials needed
- No database or migrations
- Cart is client-side state only (not persisted)
