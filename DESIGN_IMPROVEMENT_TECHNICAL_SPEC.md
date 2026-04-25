# Shudh India - Design Improvement Technical Spec (V2)

## Scope
Internal technical specification for implementing a rich premium website redesign that stays compatible with the current vanilla stack.

## Strategic Decision

Use **brand-first dark luxury system**:
- Primary surfaces on dark maroon palette.
- Gold accents for action/attention.
- Light content cards only where readability/conversion requires it.

## Core Token Set (V2)

```css
--bg: #2A0A0A;
--bg-2: #1B0707;
--text: #F3ECE6;
--text-muted: #CBB7A4;
--gold: #C5A059;
--gold-soft: #E0BF7B;
--border-gold: rgba(197, 160, 89, 0.25);
--card-dark: rgba(255, 255, 255, 0.06);
```

## Typography
- Heading: `Bodoni Moda` (premium editorial)
- Body/UI: `Manrope`
- Keep heading contrast high and body copy compact.

## Layout System
- Max width: `1200px`
- Section spacing: `54px` desktop, `36px` mobile
- Radius:
  - large panels `18px`
  - cards `16px`
  - pills `999px`

## Interaction Rules
- Hover movement max: `translateY(-8px)`
- Image scale max: `1.05`
- Transition range: `0.25s` to `0.6s`
- Scroll reveal: IntersectionObserver
- Must support `prefers-reduced-motion`

## Component Requirements

### 1) Navigation
- Floating rounded nav bar.
- Blur + border + dark transparency.
- Mobile collapsible nav.

### 2) Hero
- Full-height image with dark gradient overlay.
- One primary statement + two CTAs.
- Secondary rich panel (trust/value points).

### 3) KPI strip
- 4 cards below hero.
- Numeric emphasis, short labels.
- Light cards for contrast.

### 4) Menu section
- Tab-based category switcher.
- 3-column responsive card grid.
- Card anatomy:
  - media 4:3
  - badge
  - concise copy
  - price + CTA

### 5) Process section
- 4-step timeline cards with numbered labels.

### 6) Checkout concept section
- 2-column split:
  - rationale text + bullet benefits
  - QR support block

### 7) Testimonials
- two premium quote cards with subtle border and shadow.

### 8) Footer
- dark panel style.
- 3-column info architecture.

## Implementation Files (Current)
- `pages/menu_design_preview.html`
- `css/menu_design_preview.css`

## Production Rollout Plan

### Phase 1
Apply V2 tokens to `style.css` and common classes.

### Phase 2
Rebuild `index.html` using:
- floating nav
- rich hero
- KPI strip
- upgraded sections

### Phase 3
Rebuild `pages/menu.html` and `css/menu.css` with:
- tabbed category nav
- refined cards
- upgraded cart visibility

### Phase 4
Align `track` and `admin` styling to V2.

## QA Checklist
- No horizontal overflow on 320px width.
- CTA buttons visible and readable on all backgrounds.
- Section hierarchy clear in first 10 seconds of viewing.
- Motion disabled when reduced-motion is enabled.
- Lighthouse visual best-practice issues do not regress.

