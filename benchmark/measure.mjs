import { mkdirSync, writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';
import { chromium, devices } from '@playwright/test';
import { pageFunctions } from 'lighthouse/core/lib/page-functions.js';
import { journeys, variants } from './lib/journeys.mjs';
import { runJourney } from './lib/run.mjs';

const { values: args } = parseArgs({
  options: {
    runs: { type: 'string', default: '10' },
    profiles: { type: 'string', default: 'low-end,mid-tier' },
    'base-url': { type: 'string', default: 'http://localhost:4322/' },
    out: { type: 'string', default: 'results' },
  },
});

/**
 * CPU profiles, as the Lighthouse BenchmarkIndex to slow this machine down to. Lighthouse puts a
 * mid-tier phone, such as a Moto G4, at 125 to 800, and a low-end phone below 125.
 * https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md
 */
const profiles = {
  'mid-tier': { benchmarkIndex: 400, description: 'Mid-tier phone (Lighthouse BenchmarkIndex 400)' },
  'low-end': { benchmarkIndex: 125, description: 'Low-end phone (Lighthouse BenchmarkIndex 125)' },
};

/** Lighthouse’s slow 4G profile, as DevTools applies it. */
const slow4G = {
  latency: 562.5,
  downloadThroughput: (1.6 * 1024 * 1024 * 0.9) / 8,
  uploadThroughput: (750 * 1024 * 0.9) / 8,
};

const runs = Number(args.runs);
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const device = devices['Moto G4'];

async function hostBenchmarkIndex() {
  const page = await browser.newPage();
  const samples = [];
  for (let i = 0; i < 5; i++) samples.push(await page.evaluate(`(${pageFunctions.computeBenchmarkIndex})()`));
  await page.close();
  return median(samples);
}

const host = await hostBenchmarkIndex();
const failures = [];
const results = {
  date: new Date().toISOString(),
  runs,
  host: { benchmarkIndex: host },
  network: slow4G,
  profiles: {},
  failures,
};

for (const profileName of args.profiles.split(',')) {
  const profile = profiles[profileName];
  const cpu = Math.max(1, Math.round((host / profile.benchmarkIndex) * 10) / 10);
  const raw = [];

  for (let run = 0; run < runs; run++) {
    for (const variant of variants) {
      for (const journey of journeys) {
        for (const eager of [false, true]) {
          const pages = await runJourney(browser, {
            baseURL: args['base-url'],
            variant: variant.name,
            journey,
            contextOptions: device,
            throttle: { cpu, network: slow4G },
            eager,
          }).catch((error) => error);
          if (pages instanceof Error) {
            console.error(`${profileName} run ${run + 1}: ${variant.name} ${journey.name} failed. ${pages.message}`);
            failures.push({
              profile: profileName,
              run,
              variant: variant.name,
              journey: journey.name,
              eager,
              error: pages.message,
            });
          } else {
            raw.push({ run, variant: variant.name, journey: journey.name, eager, pages });
          }
        }
        console.log(`${profileName} run ${run + 1}/${runs}: ${variant.name} ${journey.name}`);
      }
    }
  }

  mkdirSync(`${args.out}/raw`, { recursive: true });
  writeFileSync(`${args.out}/raw/${profileName}.json`, JSON.stringify(raw, null, 2));
  results.profiles[profileName] = { ...profile, cpuSlowdown: cpu, results: aggregate(raw) };
}

await browser.close();
writeFileSync(`${args.out}/results.json`, `${JSON.stringify(results, null, 2)}\n`);
writeFileSync(`${args.out}/results.md`, markdown(results));
console.log(markdown(results));

function median(values) {
  return percentile(values, 50);
}

/** The nearest-rank percentile, ignoring missing values. */
function percentile(values, p) {
  const sorted = values.filter((value) => typeof value === 'number').sort((a, b) => a - b);
  if (!sorted.length) return null;
  return sorted[Math.max(0, Math.ceil((p / 100) * sorted.length) - 1)];
}

function stats(values) {
  return { median: round(median(values)), p90: round(percentile(values, 90)) };
}

function round(value) {
  return value === null ? null : Math.round(value);
}

function sum(values) {
  return values.reduce((total, value) => total + (value ?? 0), 0);
}

/** Median and 90th percentile of each metric, for each page, and for each journey as a whole. */
function aggregate(raw) {
  return variants.flatMap((variant) =>
    journeys.map((journey) => {
      const matching = raw.filter((entry) => entry.variant === variant.name && entry.journey === journey.name);
      const journeyRuns = matching.filter((entry) => !entry.eager);
      const eagerRuns = matching.filter((entry) => entry.eager);
      const pages = journey.steps.map((step, index) => {
        const samples = journeyRuns.map((entry) => entry.pages[index]);
        const metric = (name) => stats(samples.map((sample) => sample[name]));
        const eagerSamples = eagerRuns.map((entry) => entry.pages[index]);
        return {
          step: step.name,
          jsParsed: median(samples.map((sample) => sample.scripts.bytes + sample.inlineBytes)),
          jsTransferred: median(samples.map((sample) => sample.scripts.transferred + sample.inlineGzip)),
          fcp: metric('fcp'),
          lcp: metric('lcp'),
          tbt: metric('tbt'),
          tti: metric('tti'),
          inp: metric('inp'),
          inpWhileLoading: stats(eagerSamples.map((sample) => sample.inp)),
          hydrated: metric('hydratedAt'),
        };
      });
      const perRun = (fn, entries = journeyRuns) => stats(entries.map((entry) => fn(entry.pages)));
      const worstInp = (pages) => Math.max(0, ...pages.map((p) => p.inp ?? 0));
      return {
        variant: variant.name,
        journey: journey.name,
        pages,
        total: {
          jsTransferred: median(
            journeyRuns.map((entry) => sum(entry.pages.map((p) => p.scripts.transferred + p.inlineGzip)))
          ),
          tbt: perRun((pages) => sum(pages.map((p) => p.tbt))),
          inp: perRun(worstInp),
          inpWhileLoading: perRun(worstInp, eagerRuns),
          lcp: perRun((pages) => pages[0].lcp),
        },
      };
    })
  );
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} kB`;
}
function ms({ median, p90 }) {
  return median === null ? '–' : `${median} / ${p90} ms`;
}

function markdown({ date, runs, host, profiles: measured, failures }) {
  const lines = [
    `Measured ${date.slice(0, 10)}, ${runs} runs of each journey, host BenchmarkIndex ${host.benchmarkIndex}, slow 4G. Times are median / 90th percentile.`,
  ];
  if (failures.length) {
    lines.push('', `${failures.length} journeys failed, and are left out:`, '');
    for (const failure of failures) {
      lines.push(
        `- ${failure.profile} run ${failure.run + 1}, ${failure.variant} ${failure.journey}${failure.eager ? ' (eager)' : ''}: ${failure.error}`
      );
    }
  }
  for (const profile of Object.values(measured)) {
    lines.push('', `## ${profile.description}, ${profile.cpuSlowdown}x CPU slowdown`);
    for (const journey of journeys) {
      lines.push(
        '',
        `### ${journey.name}`,
        '',
        '| Variant | JS transferred | First page LCP | Total blocking time | Worst INP | Worst INP while loading |',
        '| --- | --- | --- | --- | --- | --- |'
      );
      for (const result of profile.results.filter((r) => r.journey === journey.name)) {
        const { total } = result;
        lines.push(
          `| ${result.variant} | ${kb(total.jsTransferred)} | ${ms(total.lcp)} | ${ms(total.tbt)} | ${ms(total.inp)} | ${ms(total.inpWhileLoading)} |`
        );
      }
      lines.push(
        '',
        '| Variant | Page | JS parsed | JS transferred | LCP | TBT | TTI | INP | INP while loading | Hydrated |',
        '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |'
      );
      for (const result of profile.results.filter((r) => r.journey === journey.name)) {
        for (const page of result.pages) {
          lines.push(
            `| ${result.variant} | ${page.step} | ${kb(page.jsParsed)} | ${kb(page.jsTransferred)} | ${ms(page.lcp)} | ${ms(page.tbt)} | ${ms(page.tti)} | ${ms(page.inp)} | ${ms(page.inpWhileLoading)} | ${ms(page.hydrated)} |`
          );
        }
      }
    }
  }
  return `${lines.join('\n')}\n`;
}
