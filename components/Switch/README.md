The "Full story / In brief" view switch: options in a 1px prism frame, 30px high, Roboto Mono 11px uppercase at .16em.

- Active option: `text-primary` fill, `bg-page` text (black and white on light).
- Inactive: `bg-page` fill, `text-meta` text.

## The consumer provides
`options` (strings or `{value, label}`), `value` + `onChange` to control it or `defaultValue`, and a `label` for the group.

## Don't
- Two or three options at most. It switches a view; it is not a tab bar or a form control.
