# Dr. Jorge Luis Córdova Fonseca — Landing Page & Marketing System

## Overview
Professional landing page, blog médico and marketing material hub for an orthopedic specialist (Dr. Jorge Luis Córdova Fonseca) based in Estado de México, Mexico. The site is designed for patient acquisition via WhatsApp.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS v4 + shadcn/ui components
- **Backend**: Express.js with API routes for blog CRUD
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: wouter (client-side SPA routing)
- **Deployment**: Vercel (domain: expertoenortopedia.com.mx via Hostinger DNS)

## Blog System (IMPORTANT — DO NOT CHANGE)
- Blog data is **embedded directly in the JavaScript bundle** via `client/src/data/blogPosts.ts`
- `Blog.tsx` and `BlogPost.tsx` import from `@/data/blogPosts` — NO fetch calls, NO API dependency in production
- This is necessary because Vercel does not have access to the PostgreSQL database at runtime
- To add new blog posts: 1) Create via API in dev, 2) Export to `client/src/data/blogPosts.ts`, 3) Publish
- The API routes still exist for dev/admin use but production reads from the embedded data

## Pages
- `/` — Landing page (Hero, Problems, Treatments, Doctor Profile, Testimonials, Blog preview, CTA)
- `/dolor-de-rodilla-cuautitlan-izcalli` — Dolor de Rodilla specialty page
- `/lesion-menisco-cuautitlan-izcalli` — Lesión de Menisco specialty page
- `/ligamento-cruzado-anterior-cuautitlan-izcalli` — Ligamento Cruzado Anterior specialty page
- `/artrosis-rodilla-cadera-cuautitlan-izcalli` — Artrosis specialty page
- `/dolor-hombro-manguito-rotador-cuautitlan-izcalli` — Dolor de Hombro specialty page
- `/lesiones-deportivas-cuautitlan-izcalli` — Lesiones Deportivas specialty page
- `/blog` — Full blog listing page
- `/blog/:slug` — Individual blog post page
- `/admin/blog` — Admin panel to create/edit/delete blog posts
- `/marketing` — Marketing materials dashboard (hidden, password: 5674323)

## API Routes (dev/admin only)
- `GET /api/blog` — List published blog posts (add `?all=true` for all including drafts)
- `GET /api/blog/:slug` — Get single blog post by slug
- `POST /api/blog` — Create new blog post
- `PATCH /api/blog/:id` — Update blog post
- `DELETE /api/blog/:id` — Delete blog post

## Key Configuration
- **WhatsApp number**: 525514961386 (all CTAs)
- **vercel.json**: framework "vite", outputDirectory "dist/public", rewrites for all SPA routes
- **Doctor image**: https://res.cloudinary.com/dcuuvanw3/image/upload/v1772410036/FotodelGeorge_menos5MB_c57hjv.jpg

## Database Schema
- `users` — User accounts (varchar id, username, password)
- `blog_posts` — Blog articles (serial id, title, slug, summary, content, image_url, published, created_at)

## Key Files
- `client/src/data/blogPosts.ts` — Embedded blog post data (production source of truth)
- `client/src/pages/Home.tsx` — Main landing page with blog section
- `client/src/pages/Blog.tsx` — Blog listing (reads from embedded data)
- `client/src/pages/BlogPost.tsx` — Individual blog post (reads from embedded data)
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
- Domain managed via Hostinger, deployed via Vercel
- Static JSON files also exist in `client/public/api/` as backup
