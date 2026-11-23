import { gzipSync } from 'node:zlib';
import { observe } from './observe.mjs';

/**
 * Runs a journey in a new browser context, so it starts with an empty cache, and returns what
 * each page cost: its JavaScript, paint timings, main thread work and interaction latency.
 *
 * By default, the user waits for each page to finish loading before using it. With `eager`, they
 * use it as soon as its heading appears, while its scripts may still be loading and running.
 *
 * @param {import('playwright-core').Browser} browser
 * @param {{ baseURL: string, variant: string, journey: import('./journeys.mjs').Journey, contextOptions?: object, throttle?: { cpu: number, network?: object }, eager?: boolean }} options
 */
export async function runJourney(browser, { baseURL, variant, journey, contextOptions = {}, throttle, eager = false }) {
  const context = await browser.newContext({ ...contextOptions, baseURL });
  const javaScriptEnabled = contextOptions.javaScriptEnabled ?? true;
  if (javaScriptEnabled) await context.addInitScript(observe);
  const page = await context.newPage();

  if (throttle) {
    const cdp = await context.newCDPSession(page);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: throttle.cpu });
    if (throttle.network) {
      await cdp.send('Network.enable');
      await cdp.send('Network.emulateNetworkConditions', { offline: false, ...throttle.network });
    }
  }

  let scripts = [];
  page.on('response', async (response) => {
    if (response.request().resourceType() !== 'script') return;
    const entry = { url: response.url(), bytes: 0, transferred: 0 };
    scripts.push(entry);
    try {
      const [body, sizes] = await Promise.all([response.body(), response.request().sizes()]);
      entry.bytes = body.length;
      entry.transferred = Math.max(0, sizes.responseBodySize);
    } catch {
      // The page navigated away before the body arrived.
    }
  });

  try {
    const pages = [];
    await page.goto(`${variant}/${journey.start}`, { waitUntil: 'domcontentloaded' });

    for (const step of journey.steps) {
      await page
        .getByRole('heading', { name: step.heading })
        .first()
        .waitFor()
        .catch(async (error) => {
          const state = await page.evaluate(() => ({
            path: location.pathname,
            title: document.title,
            errors: document.querySelector('.govuk-error-summary')?.textContent?.trim(),
          }));
          throw new Error(`${step.name}: ${JSON.stringify(state)}`, { cause: error });
        });
      if (javaScriptEnabled && !eager) await waitForQuiet(page);
      await step.interact?.(page, { javaScriptEnabled });
      if (javaScriptEnabled) await waitForQuiet(page);
      else await page.waitForLoadState('load');

      pages.push({ step: step.name, ...(await pageMetrics(page, javaScriptEnabled)), scripts: summarise(scripts) });
      scripts = [];

      if (step.leave) {
        await Promise.all([page.waitForNavigation({ waitUntil: 'domcontentloaded' }), step.leave(page)]);
      }
    }

    return pages;
  } finally {
    await context.close();
  }
}

/**
 * Waits for the page to load, its network to go idle, its Astro islands to hydrate, and its main
 * thread to be free of long tasks for 2 seconds.
 */
async function waitForQuiet(page) {
  await page.waitForLoadState('networkidle');
  await page.waitForFunction(
    () => !document.querySelector('astro-island[ssr]'),
    undefined,
    { polling: 250, timeout: 120_000 }
  );
  await page.waitForFunction(
    () => {
      const tasks = window.__benchmark.longTasks;
      const lastEnd = tasks.reduce((end, task) => Math.max(end, task.start + task.duration), 0);
      return performance.now() - lastEnd > 2000;
    },
    undefined,
    { polling: 250, timeout: 120_000 }
  );
}

async function pageMetrics(page, javaScriptEnabled) {
  const inline = await page.evaluate(() =>
    [...document.querySelectorAll('script:not([src])')]
      .filter((script) => !script.type || script.type === 'module' || script.type === 'text/javascript')
      .map((script) => script.textContent ?? '')
  );
  const inlineBytes = inline.reduce((total, text) => total + Buffer.byteLength(text), 0);
  const inlineGzip = inline.length ? gzipSync(inline.join('\n')).length : 0;

  if (!javaScriptEnabled) return { inlineBytes, inlineGzip };

  const timings = await page.evaluate(() => {
    const { fcp, lcp, longTasks, interactions, hydratedAt, firstInputAt = Infinity } = window.__benchmark;
    const [navigation] = performance.getEntriesByType('navigation');
    const loading = longTasks.filter((task) => task.start < firstInputAt);
    const afterFcp = loading.filter((task) => task.start >= (fcp ?? 0));
    const tbt = afterFcp.reduce((total, task) => total + Math.max(0, task.duration - 50), 0);
    const lastLongTaskEnd = loading.reduce((end, task) => Math.max(end, task.start + task.duration), 0);
    const latencies = Object.values(interactions);
    return {
      fcp,
      // A page that moves focus as it loads can scroll before its largest paint, which ends LCP.
      lcp: lcp ?? fcp,
      tbt,
      tti: Math.max(navigation?.domContentLoadedEventEnd ?? 0, fcp ?? 0, lastLongTaskEnd),
      inp: latencies.length ? Math.max(...latencies) : undefined,
      interactions: latencies.length,
      hydratedAt,
      htmlTransferred: navigation?.transferSize,
    };
  });
  return { inlineBytes, inlineGzip, ...timings };
}

function summarise(scripts) {
  return {
    count: scripts.length,
    bytes: scripts.reduce((total, script) => total + script.bytes, 0),
    transferred: scripts.reduce((total, script) => total + script.transferred, 0),
    urls: scripts.map((script) => new URL(script.url).pathname),
  };
}
