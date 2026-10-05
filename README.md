# Laura Benavente design system

The visual system behind [laurabenavente.com](https://laurabenavente.com). Tokens, React components, icons and imagery for anything that carries Laura Benavente's name.

## Using it

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { Button } = window.LB;
</script>
```

Set `data-theme="dark"` on any container to switch it to the dark ground.

| Path | What |
| --- | --- |
| `tokens.json` | Every token with its value per theme and a usage note. The source of truth |
| `tokens.css` | The same tokens as CSS custom properties, plus one class per type style |
| `components/bundle.js`, `bundle.css` | The components (`window.LB`), React 18 |
| `components/index.d.ts` | Props for every component |
| `components/<Name>/README.md` | Guidelines per component; `preview.html` is a live example |
| `assets/` | Icons, the favicon mark, portfolio imagery |

Source: the live site's `react-portfolio/src/styles/global.css` and `bw.css`.

---

Black and white, with one colour moment: the **prism**, a 1px seven-stop line. This is the system behind laurabenavente.com, for anything that carries Laura Benavente's name: portfolio pages, case studies, decks, CVs, posts.

**The idea in one line.** Ink on white, generous space, one serif voice, and light split into a spectrum that only ever appears as a hairline.

## Rules that are easiest to break

1. The prism (`prism`, `prism-v`, `prism-sm`) is **only ever a 1px line**: borders, separators, the header's bottom rule, the cursor ring, the favicon ring. Never a fill, never a background, never behind text. The one exception is the primary button's hover border at `border-width-hover` (1.5px) and the cursor's link tag (1.5px).
2. There is **no accent colour**. Emphasis comes from the serif, from size and from contrast. `lilac` is legacy: a hover fill only, never text, never a border.
3. **Radius 2px** (`radius-default`) on everything. `radius-round` (50%) only for the cursor, the favicon ring and the sound dot. No pills.
4. **No shadows** (`shadow-none`). Depth comes from lines and contrast.

---

## Visual foundations

### Colour
- **Grounds.** Light sections are `bg-page` (`white`) with `bg-panel` (`paper-inset`) for panels, alternate sections and the surface behind media. `grey-200` is a secondary panel. Dark sections are `ground` (`#0A0A0C`, never pure black) with `ground-raised` for raised surfaces. Switch a section to dark with `data-theme="dark"`; the semantic tokens follow.
- **Text.** Headlines and strong text in `text-primary`, reading text in `text-body`, mono labels and metadata in `text-meta`. Every pair passes 4.5:1 on `bg-page` and `bg-panel` in both themes. On `grey-200`, `ink-meta` is 4.49:1: use `ink-body` there.
- **Lines.** `line-default` is the neutral hairline (tags, tables, quiet dividers). `line-strong` when a neutral line must hold up. The prism is the line that means "this is Laura".
- **Selection** is `selection-bg` / `selection-text` (black on white, inverted on dark). **Focus** is a 2px `focus` outline at a 3px offset.

### Type
- Three families, three jobs. `serif` (Libertinus Serif 400) for headlines only. `sans` (Roboto) for reading and buttons. `mono` (Roboto Mono, uppercase) for labels, kickers, tags and metadata.
- Headlines run from `display-giant` (one per page at most) through `display-hero`, `heading-xl`, `heading-l`, `heading-m` to `heading-s`. All are fluid on the site: use the `type-*` tokens (`clamp()`) for the size and the type style for leading and tracking. Tight leading (.9 to 1.1) and slightly negative tracking (-.015em to -.025em).
- Reading text is `body-default` (17px / 1.6). The opening paragraph is `body-lead`, max width 620px.
- Mono comes in three steps: `label-kicker` (12px, .2em), `label-meta` (11px, .16em), `label-tag` (10px, .12em). Always uppercase.
- Sentence case everywhere. Headlines left-aligned. Serif is weight 400 only: no bold display.
- Do not use Inter, Playfair Display, Poppins, Montserrat or Arial.

### Space and layout
- Max width `max-width` (1440px). Side gutter `gutter` (96px desktop, 20px mobile). Sections pad `section-y` vertically. Header `header-height` (72px).
- A 12-column grid with a 32px `grid-gap`.
- Stack gaps come from `space-4` through `space-48` (4, 8, 12, 16, 20, 24, 32, 48).
- Sections are separated by space and a background change, not by lines. Rows and list items are separated by prism lines (`RowList`).
- Generous margins, one idea per surface, left alignment.

### Borders, radii, shadows
- Every line is `border-width` (1px). The only heavier line is 1.5px: the primary button on hover and the cursor's link tag.
- `radius-default` (2px) on buttons, tags, cards and switches. Nothing rounder except `radius-round` items.
- No shadows, no glows, no blur, no soft gradients, no blobs.

### Imagery
- Real work and real people only: product shots, mockups, the portrait. No stock photography, no illustration.
- Media sits on `bg-panel`. Product shots are reconstructions and the caption says so.
- Confidential client names are withheld with a solid ink bar, never a blur.

### Motion
- Easing `cubic-bezier(0.16, 1, 0.3, 1)` for everything. 180ms for buttons and colour changes; 200 to 320ms for the cursor and the menu underline.
- **Text, images and videos never animate in.** Movement lives only on elements: the portrait, the ticker, the cursor, the lab cards.
- The cursor dot follows the pointer at lerp .55 per frame, the ring at .35.
- With reduced motion, all content shows without movement.

### States
- Hover changes colour or line weight; it never lifts, scales or adds a shadow. The primary button inverts; the tertiary button and text links gain a `prism-sm` underline.
- Active switch options are filled with `text-primary`.

---

## Components

`Button` (three levels, one size), `Card`, `Label` (kicker, meta), `Tag`, `Separator`, `RowList`, `Switch`, `Logo`, `Mark`, `Cursor`. Each has a README with what the consumer provides. Load `tokens.css`, `components/bundle.css` and `components/bundle.js` (namespace `LB`, React 18).

---

## Content fundamentals

- **First person, plain and direct.** "I proposed it, and justified it with research the company already had." Laura is the author of the work and the copy says so, then shows the evidence and its limits.
- **Short declaratives, then the qualifier.** "The test could not be made faster, so the wait had to be made understandable."
- **Sentence case** for headlines, buttons and links. Uppercase belongs to the mono labels only.
- **Numbers do the structuring.** Sections and stories are numbered: `01`, `Story 02`.
- **Confidentiality is part of the voice:** "Developed for Wolters Kluwer. Let's call the product ███████."
- **Never:** emoji, exclamation marks in body copy, "passionate about", "leverage", "seamless", "delightful", "innovative", metrics without their base, invented results. No dashes as punctuation: use a full stop, a comma or a colon.
- The cursor is the one playful place: short phrases like "Say hi", "Go check!", "Meet the AI".

---

## Iconography

- Prefer a mono label or a number to an icon. Structure is carried by lines and labels.
- When a glyph is needed, use the set in **Icons**: 30 SVGs on a 24px grid, 1.25px stroke, butt caps, miter joins, no fills. Sizes 32, 24, 20, 16; never below 16. Never draw new icons in another style.
- The files are single-ink `#111111`. On dark grounds use them inverted (`filter: invert(1)`) or inline the path with `stroke="currentColor"`.
- No emoji, no icon fonts, no decorative icons.

---

## Assets

- **Mark**: the shipped 16px favicon. The `Mark` component draws it at any size.
- **Icons**: the 30-icon line set.
- **Imagery**: the portrait and the case-study product shots and mockups.
