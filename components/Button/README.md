The site's only button: one size (44px high, `0 22px`, Roboto 13px/500, 2px radius) in three levels.

## Levels
- **primary**: `white` fill, 1px prism border, `ink` text. Hover: fill turns `ink`, text `white`, border grows to `border-width-hover` (1.5px). The spectrum never changes.
- **secondary**: `paper-inset` fill, 1px prism border, `ink` text. Inside a `paper-inset` section (`data-surface="panel"` on the section) the fill becomes `white`.
- **tertiary**: a link. No border, no fill. Hover draws a 1px `prism-sm` underline.
- **On dark** (`data-theme="dark"`): primary is `ink-on-dark` with `ground` text and hovers to `ground`; secondary is a `ground` fill.

## The consumer provides
`level`, the label as children, `href` for a link, an optional trailing `icon` (an Icons asset in an `<img>` at 16 or 20px).

## Do
- One primary per view. Sentence case labels, two to four words.
- Focus: 2px `focus` outline, 3px offset (built in).

## Don't
- Never a pill or a circle, never a radius above 2px.
- Never fill a button with the prism or with `lilac`. The prism is the border, not the fill.
- No disabled state is defined on the site. Hide an action that can't be taken rather than inventing one.
