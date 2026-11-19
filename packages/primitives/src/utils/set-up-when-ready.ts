/**
 * Runs `setUp` now, and again whenever the element's children change until it succeeds, for parts
 * that are parsed or rendered after the element connects. Returns the observer to disconnect, if
 * `setUp` didn't succeed straight away.
 */
export function setUpWhenReady(element: Element, setUp: () => boolean) {
  if (setUp()) return undefined;
  const observer = new MutationObserver(() => {
    if (setUp()) observer.disconnect();
  });
  observer.observe(element, { childList: true, subtree: true });
  return observer;
}
