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
