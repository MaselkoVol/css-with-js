# CSS with JS

The idea is to provide the JavaScript environment with full context of our css design tokens.

### 1. Single Source of Truth

By defining design tokens directly in TypeScript, we achieve two goals:

- **Type Safety:** We get fully typed variables for use within the JS/TS environment.
- **Dynamic Generation:** We automatically generate CSS and SCSS variables from these tokens for use in stylesheets.

### 2. SCSS vs. CSS Custom Properties

For static styles, I prioritize SCSS variables over native CSS variables (`var(--...)`). SCSS variables are compiled at build time, offering better efficiency and a more convenient syntax.

### Comparison: SCSS

```scss
/* ❌ Native CSS Variables (Verbose) */
.element {
  border: var(--bw-sm) solid var(--color-primary);
  font-size: var(--fz-sm);
}

/* ✅ SCSS Variables (Preferred) */
.element {
  border: $bw-sm solid var(--color-primary);
  font-size: $fz-sm;
}
```
