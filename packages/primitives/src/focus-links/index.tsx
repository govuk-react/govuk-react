'use client';

import * as React from 'react';
import { tagName } from './element.js';

/*
 * Headless focus links: the <govuk-react-focus-links> element (./element.ts) makes links to a part
 * of the same page, inside it, move focus there. Links to a form field also scroll its label or
 * legend into view.
 */

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** Classes for a target that isn't a form field while it has focus. */
  focusedClass?: string;
};

export function Root({ focusedClass, ...props }: RootProps) {
  return React.createElement(tagName, { ...props, 'focused-class': focusedClass });
}
