A static rendering of the site's custom cursor, for specs, mockups and handoff.

- **rest**: a 7px dot in `text-primary` and a 40px ring drawn as a 1px prism line. Live, the dot follows the pointer at lerp .55 per frame and the ring trails at .35.
- **link**: a white tag, 40px high, with a 1.5px prism border and a short phrase in Roboto Mono 12px uppercase that changes with the content: "Say hi", "Go check!", "Meet the AI".
- **text** (not rendered here): a caret sized to the letterform.

## The consumer provides
`state` and the `label` phrase.

## Notes
- The tag's letter spacing is not set by the site tokens; it uses the meta tracking (.16em).
- With reduced motion the cursor stops trailing: dot and ring sit on the pointer.
