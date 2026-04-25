# Design System Strategy: The Artisanal Gallery

## 1. Overview & Creative North Star
**Creative North Star: "The Artisanal Gallery"**

This design system is not a mere utility; it is a digital canvas for culinary artistry. Inspired by the "Shudh India" identity—where the raw energy of a red chilli meets the fluid grace of handwritten script—this system moves away from rigid, corporate structures. Instead, it adopts a "High-End Editorial" approach. 

We achieve a "Fresh & Designer" feel by prioritizing breathability, intentional asymmetry, and tactile depth. By breaking the standard grid with overlapping elements (e.g., an image of a dish slightly breaking the container boundary) and using high-contrast typography scales, we evoke the feeling of a premium lifestyle magazine rather than a standard catering app.

---

## 2. Colors & The Surface Philosophy
The palette uses a soft, organic `background` (#fbfaee) as the foundation, providing a warmer, more sophisticated feel than pure white.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through:
- **Background Color Shifts:** Use a `surface-container-low` section sitting on a `surface` background to define a zone.
- **Tonal Transitions:** Use subtle shifts between `surface-bright` and `surface-dim` to guide the eye.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-paper sheets. 
- Use `surface-container-lowest` for the most prominent foreground cards (the "hero" content).
- Use `surface-container-high` for recessed areas like sidebars or secondary search zones.
- **Nesting:** To create depth, place a `surface-container-lowest` card inside a `surface-container-low` section. This creates a natural "lift" without the clutter of lines.

### The "Glass & Gradient" Rule
To escape the "flat" look:
- **Glassmorphism:** For floating navigation bars or modal overlays, use `surface` colors at 80% opacity with a `20px` backdrop-blur. This allows the vibrant food photography to bleed through the UI, softening the edges.
- **Signature Textures:** Use a subtle linear gradient from `primary` (#af101a) to `primary_container` (#d32f2f) for primary buttons. This provides a "soul" and three-dimensionality that flat red cannot achieve.

---

## 3. Typography
The typography is a dialogue between precision and personality.

*   **The Signature Accent (Moment):** Used sparingly for "artistic whispers"—short phrases, section labels, or pull-quotes that don't exceed 3 words. It adds the "Designer" touch.
*   **The Authority (Plus Jakarta Sans):** Our `display` and `headline` scales. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create a bold, editorial impact.
*   **The Narrator (Inter):** Our `body` and `label` scales. Inter provides the clean, legible contrast needed against the more expressive headings. 

**Hierarchy Note:** Use `tertiary` (#735c00) for `label-md` to give secondary metadata a sophisticated "Gold Leaf" feel.

---

## 4. Elevation & Depth
In this system, depth is organic, mimicking natural light in a high-end restaurant.

*   **The Layering Principle:** Avoid shadows for standard cards. Achieve hierarchy by stacking `surface-container-lowest` (the "highest" visual layer) on top of `surface-container`.
*   **Ambient Shadows:** If a floating element (like a FAB or Popover) requires a shadow, it must be ultra-diffused. 
    *   *Specification:* `0px 20px 40px rgba(91, 64, 61, 0.08)`. The shadow uses a tint of `on-surface-variant` rather than black, ensuring it feels like a natural shadow cast on a cream surface.
*   **The "Ghost Border" Fallback:** If accessibility requires a border (e.g., in a high-density data table), use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Rounded `full`. Gradient from `primary` to `primary_container`. White text. High-elevation `ambient shadow` on hover.
*   **Secondary:** Rounded `full`. `secondary_container` background with `on-secondary-container` text. No border.
*   **Tertiary:** No background. `on-surface` text with a `Moment` script accent nearby to draw the eye.

### Chips
*   **Filter/Selection:** Use `surface-container-highest` for unselected and `secondary` (#106d20) for selected. This "Fresh Leaf Green" signifies selection and health. Rounded `md` (1.5rem).

### Cards & Lists
*   **The Rule:** No dividers. Use `1.5rem` to `2rem` of vertical whitespace to separate items.
*   **Catering Cards:** Use `surface-container-lowest` with a `lg` (2rem) corner radius. Images should have a subtle scale-up animation on hover to feel "vibrant."

### Input Fields
*   **Styling:** Use `surface-container-low` as the background. On focus, transition to `surface-container-lowest` and add a "Ghost Border" using `tertiary_fixed`. This creates a soft, glowing focus state.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. For example, a heading might be indented more than the body text to create an editorial "ragged" look.
*   **Do** leverage the `tertiary` (Gold) for small highlights—icon fills, bullet points, or price tags.
*   **Do** use the `xl` (3rem) corner radius for large hero images to soften the overall aesthetic.

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#1b1c15) to maintain the "Warm & Fresh" vibe.
*   **Don't** use standard 8px grids for everything. Use larger increments (12px, 24px, 48px) to ensure the "Spacious" requirement is met.
*   **Don't** use 1px dividers to separate list items. Use a background color shift or simply more white space.
*   **Don't** ever use the script font for more than 3-4 words. It is an accent, not a reading font.

---

## 7. Spacing Scale
To maintain the "Light & Spacious" feel, the default padding for containers should be `md` (1.5rem) for mobile and `xl` (3rem) for desktop. Space is our most important premium asset.