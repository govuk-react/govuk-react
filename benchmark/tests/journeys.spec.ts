import { expect, test } from '@playwright/test';
import budgets from '../budgets.json' with { type: 'json' };
import { journeys, variants } from '../lib/journeys.mjs';
import { runJourney } from '../lib/run.mjs';

for (const { name: variant } of variants) {
  test.describe(variant, () => {
    for (const journey of journeys) {
      test(`${journey.name} works without JavaScript`, async ({ browser }) => {
        const pages = await runJourney(browser, {
          baseURL: test.info().project.use.baseURL!,
          variant,
          journey,
          contextOptions: { javaScriptEnabled: false },
        });
        expect(pages).toHaveLength(journey.steps.length);
      });

      test(`${journey.name} keeps each page within its JavaScript budget`, async ({ browser }) => {
        const pages = await runJourney(browser, {
          baseURL: test.info().project.use.baseURL!,
          variant,
          journey,
        });
        for (const page of pages) {
          const kB = (page.scripts.bytes + page.inlineBytes) / 1024;
          expect(kB, `${page.step}: ${page.scripts.urls.join(', ')}`).toBeLessThanOrEqual(budgets[variant]);
        }
        if (variant === 'govuk-react-hydrated') {
          for (const page of pages) expect(page.hydratedAt, page.step).toBeGreaterThan(0);
        }
        if (variant === 'govuk-react') {
          expect(pages.flatMap((page) => page.scripts.urls)).toEqual([]);
        }
      });
    }
  });
}
