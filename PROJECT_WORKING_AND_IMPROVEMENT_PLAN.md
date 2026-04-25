# Shudh India - Project Working and Improvement Plan

## 1) Project Overview

This project is a static multi-page website for Shudh India catering.

- Public website pages allow users to browse menu items and place orders.
- Orders are stored directly from the browser into Firebase Firestore.
- Admins log in through Firebase Auth and manage live orders from an admin dashboard.
- The website is deployed as static files using GitHub Pages with custom domain `shudh-india.in`.

There is no custom server/backend code in this repository (no Node/Express, Django, etc.).

## 2) Tech Stack (Current)

### Frontend
- Vanilla `HTML`, `CSS`, `JavaScript` (no frontend framework).
- Multi-page structure (separate HTML per page).
- Firebase SDK (compat) loaded from CDN.

### Data and Auth Backend
- Firebase Firestore for order and admin data.
- Firebase Authentication for admin login and admin user creation.
- Firebase is accessed directly from client-side JavaScript.

### Deployment
- GitHub Actions workflow deploys static files to GitHub Pages.
- Custom domain configured via `CNAME`.

## 3) Folder and File Architecture

### Top-level
- `index.html` - landing/home page.
- `script.js`, `style.css` - home page behavior and styling.
- `sitemap.xml` - sitemap for SEO.
- `CNAME` - custom domain mapping.
- `.github/workflows/static.yml` - deployment pipeline.

### Feature folders
- `pages/` - website pages (`menu`, `track`, `admin_page`, etc.).
- `js/` - page logic (`menu.js`, `track.js`, `admin.js`, etc.).
- `css/` - per-page styles.

## 4) How Frontend Works

1. User opens `pages/menu.html`.
2. Adds menu items to cart.
3. Cart is stored in `localStorage`.
4. User fills order form (name, phone, email, address, event details).
5. User uploads payment screenshot.
6. Frontend converts screenshot to base64 and stores order in Firestore (`orders`).
7. User receives order ID confirmation.

Order tracking:
- `pages/track.html` + `js/track.js`
- Uses phone number to query Firestore `orders` by `+91` formatted number.

## 5) Backend Used (Actual)

This project uses Firebase as backend services (BaaS), not a custom API server.

Collections used:
- `orders`
- `admins`

Auth used:
- Firebase Auth (email/password) for admin login.

## 6) How Admin Panel Works

Files:
- `pages/admin_page.html`
- `js/admin.js`

Flow:
- Admin logs in with Firebase Auth.
- Firestore `admins` collection determines role.
- `super_admin` can manage admin users.
- Orders are loaded in realtime using `onSnapshot`.
- Admin can mark order as done or delete order.

## 7) How It Is Deployed

- Workflow: `.github/workflows/static.yml`
- Trigger: push to `main` / manual dispatch
- Hosting: GitHub Pages
- Domain: `shudh-india.in` from `CNAME`
- Backend services live in Firebase (Firestore/Auth)

## 8) Architecture Improvements (Recommended)

Priority P0:
1. Move payment images from Firestore base64 to Firebase Storage.
2. Add strict Firestore security rules (field validation + role constraints).
3. Use Cloud Functions for sensitive operations (create order/admin updates/status updates).

Priority P1:
1. Split JS into reusable modules (`firebase`, `orders`, `admin`, `validation`).
2. Remove duplicated logic across menu variants.
3. Add environment-based configuration handling.

Priority P2:
1. Add lint + smoke tests in CI.
2. Add logging/monitoring for critical failures.
3. Consider TypeScript for safer long-term maintenance.

## 9) New Functionalities to Add

1. Rich order status timeline for users.
2. Order tracking using order ID + OTP (more secure than phone-only).
3. Admin filters (date/status/event type).
4. CSV/Sheet export for operations.
5. WhatsApp/SMS order notifications.
6. Inventory-aware menu with availability toggles.
7. Coupon/referral support.

## 10) Main Design Improvements

1. Build a small design system (colors, spacing, component rules).
2. Improve mobile checkout UX (sticky CTA, faster form flow).
3. Improve accessibility (labels, keyboard navigation, contrast).
4. Add trust UI (policies, testimonials, clearer payment/confirmation states).
5. Improve performance UX (skeletons, optimized images, lighter payloads).

## 11) Suggested Target Architecture

Best next step without full rewrite:
- Keep static hosting (GitHub Pages/Firebase Hosting).
- Keep Firebase Auth + Firestore.
- Add Storage + Cloud Functions + strict security rules.

This gives better security and scalability without high migration cost.
