/*
 * Controls a <govuk-react-disclosure>, for React's parts or any other code. It's kept apart from
 * the element so that the element's inline script stays small for pages that never control it.
 *
 * Set `open` to `true` or `false` to control the content. A user's click then only fires the
 * element's change event, and the content changes when `open` does. Set it to `undefined` to stop
 * controlling the content.
 */

import { cancelChanges } from '../utils/cancel-changes.js';
import type { DisclosureElement } from './element.js';

export class DisclosureController {
  readonly element: DisclosureElement;

  private controlledOpen?: boolean;

  private readonly stopCancelling: () => void;

  constructor(element: DisclosureElement) {
    this.element = element;
    this.stopCancelling = cancelChanges(
      element,
      'govuk-react-disclosure:change',
      () => this.controlledOpen !== undefined
    );
  }

  get open(): boolean | undefined {
    return this.controlledOpen;
  }

  set open(open: boolean | null | undefined) {
    this.controlledOpen = open ?? undefined;
    if (open != null) this.element.expanded = open;
  }

  /** Stops controlling the content. */
  disconnect() {
    this.controlledOpen = undefined;
    this.stopCancelling();
  }
}
