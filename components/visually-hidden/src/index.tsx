/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_visually-hidden.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/utilities/_visually-hidden.scss
 */
import * as React from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '@govuk-react/lib';

/**
 * Hide an element visually, but have it available for screen readers.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/visually-hidden
 */
export const VisuallyHidden = styled('span')
  .withConfig<VisuallyHiddenProps>({
    shouldForwardProp: (prop) => !['important', 'focusable'].includes(prop),
  })
  .attrs<VisuallyHiddenProps>(({ focusable, tabIndex }) =>
    // if we're focusable but don't have a `tabIndex` set, add one
    focusable && tabIndex === undefined ? { tabIndex: '0' } : undefined
  )(({ focusable, important }) => visuallyHidden({ focusable, important }));

VisuallyHidden.defaultProps = {
  focusable: false,
  important: true,
};

VisuallyHidden.displayName = 'VisuallyHidden';

export interface VisuallyHiddenProps {
  /**
   * Content to be hidden
   */
  children: React.ReactNode;
  /**
   * Allow component to be focusable, and thus become visible
   */
  focusable?: boolean;
  /**
   * Set styles with `!important`
   */
  important?: boolean;
}

export default VisuallyHidden;
