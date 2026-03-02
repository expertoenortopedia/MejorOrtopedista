# Dr. Jorge Luis Córdova Fonseca — Landing Page & Marketing System

## Overview
Professional landing page, blog médico and marketing material hub for an orthopedic specialist (Dr. Jorge Luis Córdova Fonseca) based in Estado de México, Mexico. The site is designed for patient acquisition via WhatsApp.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS v4 + shadcn/ui components
- **Backend**: Express.js with API routes for blog CRUD
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: wouter (client-side SPA routing)

## Pages
- `/` — Landing page (Hero, Problems, Treatments, Doctor Profile, Testimonials, Blog preview, CTA)
- `/blog` — Full blog listing page
- `/blog/:slug` — Individual blog post page
- `/admin/blog` — Admin panel to create/edit/delete blog posts (password: drcordova2025)
- `/marketing` — Marketing materials dashboard (hidden from nav, accessible via direct URL)

## API Routes
- `GET /api/blog` — List published blog posts (add `?all=true` for all including drafts)
- `GET /api/blog/:slug` — Get single blog post by slug
- `POST /api/blog` — Create new blog post
- `PATCH /api/blog/:id` — Update blog post
- `DELETE /api/blog/:id` — Delete blog post

## Database Schema
- `users` — User accounts (varchar id, username, password)
- `blog_posts` — Blog articles (serial id, title, slug, summary, content, image_url, published, created_at)

## Key Files
- `client/src/pages/Home.tsx` — Main landing page with blog section
- `client/src/pages/Blog.tsx` — Blog listing page
- `client/src/pages/BlogPost.tsx` — Individual blog post view
- `client/src/pages/BlogAdmin.tsx` — Admin panel for blog management
- `client/src/pages/Marketing.tsx` — Marketing materials with copy-to-clipboard
- `client/src/components/layout/Navbar.tsx` — Navigation bar
- `client/src/components/layout/Footer.tsx` — Footer
- `client/src/components/icons/WhatsAppIcon.tsx` — WhatsApp SVG icon
- `shared/schema.ts` — Drizzle schema (users + blog_posts)
- `server/storage.ts` — Database storage interface
- `server/routes.ts` — API routes
- `client/src/index.css` — Design system (colors, typography, spacing)
- `vercel.json` — SPA deployment config for Vercel

## Design System
- **Style**: Clean medical/professional
- **Primary color**: Blue (trust/medical)
- **Fonts**: Playfair Display (headings) + Inter (body)
- **CTA color**: Green (WhatsApp branding)

## Deployment
- `vercel.json` configured for Vite SPA with rewrites to index.html
- Build output: `dist/public`
