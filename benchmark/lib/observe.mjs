/**
 * Runs in each page before its own scripts, and records what the measurements need in
 * `window.__benchmark`: paint timings, long tasks, interactions, the first input, and when Astro
 * islands hydrate.
 */
export function observe() {
  const state = {
    fcp: undefined,
    lcp: undefined,
    longTasks: [],
    interactions: {},
    hydratedAt: undefined,
    firstInputAt: undefined,
  };
  window.__benchmark = state;

  const watch = (type, callback, options = {}) => {
    try {
      new PerformanceObserver((list) => list.getEntries().forEach(callback)).observe({
        type,
        buffered: true,
        ...options,
      });
    } catch {
      // The browser doesn't support this entry type.
    }
  };

  watch('paint', (entry) => {
    if (entry.name === 'first-contentful-paint') state.fcp = entry.startTime;
  });
  watch('largest-contentful-paint', (entry) => {
    state.lcp = entry.startTime;
  });
  watch('longtask', (entry) => {
    state.longTasks.push({ start: entry.startTime, duration: entry.duration });
  });
  watch(
    'event',
    (entry) => {
      if (!entry.interactionId) return;
      state.interactions[entry.interactionId] = Math.max(state.interactions[entry.interactionId] ?? 0, entry.duration);
    },
    { durationThreshold: 16 }
  );

  for (const type of ['pointerdown', 'keydown']) {
    addEventListener(type, (event) => (state.firstInputAt ??= event.timeStamp), { capture: true });
  }

  const checkIslands = () => {
    const islands = document.querySelectorAll('astro-island');
    if (islands.length && ![...islands].some((island) => island.hasAttribute('ssr'))) {
      state.hydratedAt ??= performance.now();
    }
  };
  new MutationObserver(checkIslands).observe(document, { subtree: true, attributes: true, attributeFilter: ['ssr'] });
}
