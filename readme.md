# uinix-docs

Progressive docs for the uinix ecosystem.

---

## Known Issues
- `fela`
  - FOUC (current hacky workaround relies on a `use-ready.js` hook).
  - `renderer.renderStatic` not applying rules and plugins (see https://github.com/robinweser/fela/issues/876)
  - Cannot programmatically reset/overwrite `renderer.renderStatic` styles (see https://github.com/robinweser/fela/issues/816)
  - Specifying an invalid `typography.fontFaces` source file hangs the Fela `renderer.renderFont` method
