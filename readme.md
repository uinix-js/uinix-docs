# uinix-docs

Progressive docs for the uinix ecosystem.

---

## TODOs
- System Components
  - `ScrollingToc`: keeps track of closest heading in a document with a sticky Toc.
  - `SystemKnowledge`: renders and views a provided `system`.  Potentially a modal accessed via an `<Icon icon="book" />
- Demos/Systems
  - Flesh out `SystemPageLayout` with `SystemKnowledge` component.
- Packages
  - Figure out how to dynamically render `index.d.ts` interfaces.
  - `uinix-fp`
    - Update source `readme.md`
  - `uinix-theme`
    - Compare page with `theme-ui`.
    - FAQ page
  - `uinix-ui`
    - System Decisions: explore many ways to achieve the same goal with uinix.
    - Building components
    - Recipes
    - FAQ page
    - Update source `readme.md`
- Home Page: build something fun and interactive.

## Known Issues
- `fela`
  - FOUC (current hacky workaround relies on a `use-ready.js` hook).
  - `renderer.renderStatic` not applying rules and plugins (see https://github.com/robinweser/fela/issues/876)
  - Cannot programmatically reset/overwrite `renderer.renderStatic` styles (see https://github.com/robinweser/fela/issues/816)
  - Specifying an invalid `typography.fontFaces` source file hangs the Fela `renderer.renderFont` method
