# Deploying `shudh_india_leadgen`

Treat **`shudh_india_leadgen/`** as the deployable unit (public site + admin + shared assets).

## Folder layout

| Path | Purpose |
|------|---------|
| `website/` | Public HTML, entry `index.html` (styles in `../assets/css/styles.css`) |
| `admin/` | Admin HTML (login, dashboard, content, settings, …) |
| `assets/` | Shared JS/CSS, Firebase config, branding media |
| `index.html` (root of this folder) | Sends visitors to `website/index.html` when the host serves this folder as site root |

## Before you upload

1. **`assets/js/firebase-config.js`** — must contain your Firebase web app keys (see `README.md`). For new clones, copy from `assets/js/firebase-config.example.js` and rename.
2. **`assets/logo/logonew.png`** — required by headers, footer, and loaders. Add the file under `assets/logo/` (see `assets/logo/PLACE_LOGO_HERE.txt`).

## Static hosting

- Upload **the contents of** `shudh_india_leadgen/` (or the whole folder) so URLs resolve:
  - `…/website/index.html` for the homepage
  - `…/admin/login.html` for admin
- Paths in HTML use **relative** `../assets/…` from `website/` and `admin/`; do not flatten only `website/` without `assets/` or links will break.

## GitHub Pages

The repository workflow uploads **`shudh_india_leadgen`** as the site artifact so Pages serves this app at the root URL, with `index.html` redirecting into `website/`.
