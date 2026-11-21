/*
 * DOM writes for elements that watch their own subtree with a MutationObserver. Each write is
 * skipped when nothing would change, because even an unchanged write wakes the observer again.
 */

/** The class names in a space-separated attribute, such as `upgraded-class`. */
export const classesOf = (attribute: string | null) => attribute?.split(/\s+/).filter(Boolean) ?? [];

/**
 * Sets an element's text. Keeps a lone text node, such as one React rendered, rather than
 * replacing it, so React can still update it after hydration.
 */
export function setText(element: Element, text: string) {
  if (element.textContent === text) return;
  const { firstChild } = element;
  if (firstChild instanceof Text && element.childNodes.length === 1) firstChild.nodeValue = text;
  else element.textContent = text;
}

/** Sets an attribute, or removes it for `null`. */
export function setAttribute(element: Element, name: string, value: string | null) {
  if (value === null) element.removeAttribute(name);
  else if (element.getAttribute(name) !== value) element.setAttribute(name, value);
}

/**
 * Shows or hides some content. A `data-hidden` attribute on it says how to hide it: "until-found"
 * so find in page can still reach it, or empty for plain `hidden`. Without one, `fallback` does.
 */
export function setHidden(content: HTMLElement, hidden: boolean, fallback: '' | 'until-found') {
  const requested = content.getAttribute('data-hidden');
  const value = requested === null ? fallback : requested === 'until-found' ? 'until-found' : '';
  setAttribute(content, 'hidden', hidden ? value : null);
}
