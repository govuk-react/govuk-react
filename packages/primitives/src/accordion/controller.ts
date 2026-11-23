/*
 * Controls a <govuk-react-accordion>, for React's parts or any other code. It's kept apart from
 * the element so that the element's inline script stays small for pages that never control it.
 *
 * Set `value` to an array of the open sections' values to control them. A user's click then only
 * fires the element's change event, and the sections change when `value` does. Find in page still
 * opens the section with the match. Set it to `undefined` to stop controlling them.
 */

import { cancelChanges } from '../utils/cancel-changes.js';
import type { AccordionElement } from './element.js';

export class AccordionController {
  readonly element: AccordionElement;

  private controlledValue?: readonly string[];

  private readonly stopCancelling: () => void;

  constructor(element: AccordionElement) {
    this.element = element;
    this.stopCancelling = cancelChanges(
      element,
      'govuk-react-accordion:change',
      () => this.controlledValue !== undefined
    );
  }

  get value(): readonly string[] | undefined {
    return this.controlledValue;
  }

  set value(value: readonly string[] | null | undefined) {
    this.controlledValue = value ?? undefined;
    if (value) this.element.openValues = value;
  }

  /** Stops controlling the sections. */
  disconnect() {
    this.controlledValue = undefined;
    this.stopCancelling();
  }
}
