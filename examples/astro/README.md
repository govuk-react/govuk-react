# Astro example

govuk-react in [Astro](https://astro.build/), with pages that work before and without JavaScript: forms, and how much JavaScript each component needs.

## Forms

[Conform](https://conform.guide/)'s [Astro example](https://github.com/edmundhung/conform/tree/main/examples/astro), rebuilt with govuk-react and the GOV.UK Design System's guidance on how to [recover from validation errors](https://design-system.service.gov.uk/patterns/validation/).

- [Sign in](./src/features/login.tsx): manual validation
- [Create an account](./src/features/signup.tsx): async validation, on the client and the server ([with an async schema](./src/features/signup-async-schema.tsx))
- [Tasks](./src/features/todos.tsx): a list of fields you can add to, remove and reorder

Each form submits to an [Astro Action](https://docs.astro.build/en/guides/actions/), which validates it on the server. The page renders the form, with its errors, as HTML, so it works before React hydrates and without JavaScript. Once React hydrates, Conform also validates in the browser, without a round trip.

When a submission has errors, the page:

- shows the form again, as the user filled it in, except for passwords
- adds ‘Error: ’ to the beginning of the page `<title>`
- shows an error summary at the top of the page, and moves keyboard focus to it
- shows an error message next to each field with an error

The forms validate when the user submits them, not when they leave a field, and turn off HTML5 validation.

The server keeps no state: each submission carries the whole form. The add, remove and move buttons on the Tasks page are submit buttons. Without JavaScript, the server applies them to the submitted list with Conform's `resolveSubmission`, and renders the updated form. With JavaScript, Conform applies them in the browser.

## Hydration

- [Islands](./src/pages/islands.astro): only components with a client directive hydrate, each as its own island. One has no directive, one has `client:idle` and one has `client:visible`.
- [Without React](./src/pages/without-react.astro): components with no client directive, enhanced by their elements' scripts, inlined in the page's head with `InlineScript`. The page sends no React to the browser.
- [Upgrade to React](./src/pages/upgrade.astro): an accordion enhanced by its inline script as soon as the page loads, then hydrated with `client:idle`. React counts the sections the user has read, including those still open when React loaded, which `onValueChange` reports with `beforeHydration`.
- [Working together](./src/pages/together.astro): a licence application with tabs, an accordion, and modals holding forms with radios and conditional reveals, password inputs, a file upload and a character count. It's one island with `client:idle`, and every component's script is inlined, so it all works before React loads. It proves the components work together, rather than recommending this design.

`client:visible` watches the island's child elements, which need a box of their own. The primitives' elements have `display: contents`, so the accordion in [`GuideAccordion`](./src/features/guide-accordion.tsx) is wrapped in a `div`.

## Fonts

govuk-react.com isn't on service.gov.uk, so the example uses Arial rather than GDS Transport. [`govuk-frontend.scss`](./src/styles/govuk-frontend.scss) sets `$govuk-font-family`, which also leaves out govuk-frontend's `@font-face` rules, so the browser downloads no font.

## Run it

```sh
npm install
npm run dev
```

## Test it

The Playwright tests submit each form without JavaScript, before React hydrates, and after. They also check that each hydration page hydrates only what it should.

```sh
npx playwright install
npm run test:e2e
```
