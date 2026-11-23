# Benchmark

The same two user journeys, built three ways, measured on an emulated low-end phone.

## Variants

- `govuk-frontend`: govuk-frontend's Nunjucks macros and page template, with its CSS and JavaScript, loaded as the Design System's [get started guide](https://frontend.design-system.service.gov.uk/import-javascript/) describes
- `govuk-react`: govuk-react rendered on the server by Astro, with no client directives. Each page inlines only the primitives' scripts its components need, with [`InlineScript`](../packages/primitives/src/inline-script). No React runs in the browser.
- `govuk-react-hydrated`: the same pages, with each page's content hydrated as a React island with `client:load`

All three share one server, one stylesheet (govuk-frontend's, with Arial, as in the [Astro example](../examples/astro)), and the same validation, in [`src/routes.ts`](./src/routes.ts). The server compresses responses and lets browsers cache static files.

## Journeys

Defined in [`lib/journeys.mjs`](./lib/journeys.mjs).

- Account: a form with a text input and two password inputs. The user types into the form, shows the password, submits it with errors, fixes them and submits it again.
- Licence: a task list, radios with a conditional reveal, a text input and a character count, and check answers. The user completes each task and submits the application.

Every journey works without JavaScript in every variant.

## Measurements

[`measure.mjs`](./measure.mjs) runs each journey in Chromium, as a Moto G4 viewport, with:

- the CPU slowed down to match a phone's [Lighthouse BenchmarkIndex](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md): 125 for a low-end phone and 400 for a mid-tier phone. It measures the host's BenchmarkIndex first, and divides it by the target.
- Lighthouse's slow 4G network: 562.5 ms latency, 1.4 Mbps down

Each run starts with an empty cache, and each journey's later pages load with the files its earlier pages cached. Each journey runs twice in each run:

- once with the user waiting for each page to load, for the load metrics and INP
- once with the user starting to type and click as soon as each page's heading appears, for INP while loading

For each page, it records:

- JS parsed: the uncompressed size of every script the page runs, inline or not
- JS transferred: the compressed size of the scripts the page downloads, and of its inline scripts
- LCP: Largest Contentful Paint. Where a page moves focus as it loads, and its first paint is the largest, LCP is its First Contentful Paint.
- TBT: Total Blocking Time, from long tasks between First Contentful Paint and the user's first input
- TTI: when the last of those long tasks ended, or `DOMContentLoaded`, whichever is later. It approximates Lighthouse's Time to Interactive, without the network quiet window.
- INP: Interaction to Next Paint, the slowest of the page's interactions
- Hydrated: when every Astro island on the page has hydrated

It reports the median and 90th percentile over the runs, in `results/results.md` and `results/results.json`.

## Run it

```sh
npm install
npm run build
npm start
```

Then, in another terminal:

```sh
npx playwright install chromium
npm run measure -- --runs 10
```

The `Benchmark` workflow runs the same measurement on GitHub Actions, and uploads the results.

## Test it

The Playwright tests run each journey with JavaScript off, and with it on. With it on, they check each page's JavaScript against its variant's budget in [`budgets.json`](./budgets.json), in kB uncompressed, and that the `govuk-react` variant loads no script files.

```sh
npm run test:e2e
```
