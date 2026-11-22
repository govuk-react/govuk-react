# Conform and Astro example

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

## Run it

```sh
npm install
npm run dev
```

## Test it

The Playwright tests submit each form without JavaScript, before React hydrates, and after.

```sh
npx playwright install
npm run test:e2e
```
