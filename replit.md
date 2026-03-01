# Dr. Jorge Luis Córdova Fonseca — Landing Page & Marketing System

## Overview
Professional landing page and marketing material hub for an orthopedic specialist (Dr. Jorge Luis Córdova Fonseca) based in Estado de México, Mexico. The site is designed for patient acquisition via WhatsApp.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS v4 + shadcn/ui components
- **Backend**: Express.js (serves frontend only, no API routes needed)
- **Routing**: wouter (client-side SPA routing)
- **No database**: This is a static brochure/marketing site with no user-generated content

## Pages
- `/` — Landing page (Hero, Problems, Treatments, Doctor Profile, Testimonials, CTA)
- `/marketing` — Marketing materials dashboard (WhatsApp messages, Google Ads copy, SEO, Doctoralia, Google My Business)

## Key Files
- `client/src/pages/Home.tsx` — Main landing page
- `client/src/pages/Marketing.tsx` — Marketing materials with copy-to-clipboard
- `client/src/components/layout/Navbar.tsx` — Navigation bar
- `client/src/components/layout/Footer.tsx` — Footer
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
