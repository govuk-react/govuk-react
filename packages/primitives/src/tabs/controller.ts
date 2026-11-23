/*
 * Controls a <govuk-react-tabs>, for React's parts or any other code. It's kept apart from the
 * element so that the element's inline script stays small for pages that never control it.
 *
 * Set `value` to control the selected tab. A user's choice then only fires the element's change
 * event, and the tab changes when `value` does. Set it to `undefined` to stop controlling it.
 */

import { cancelChanges } from '../utils/cancel-changes.js';
import type { TabsElement } from './element.js';

export class TabsController {
  readonly element: TabsElement;

  private controlledValue?: string;

  private readonly stopCancelling: () => void;

  constructor(element: TabsElement) {
    this.element = element;
    this.stopCancelling = cancelChanges(element, 'govuk-react-tabs:change', () => this.controlledValue !== undefined);
  }

  get value(): string | undefined {
    return this.controlledValue;
  }

  set value(value: string | null | undefined) {
    const previous = this.controlledValue;
    this.controlledValue = value ?? undefined;
    if (value != null && value !== previous && value !== this.element.selectedValue) this.element.select(value);
  }

  /** Stops controlling the tab. */
  disconnect() {
    this.controlledValue = undefined;
    this.stopCancelling();
  }
}
