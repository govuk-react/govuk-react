/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/skip-link
 */
import styled from 'styled-components';
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, typography, visuallyHidden } from '@govuk-react/lib';

/**
 *
 * Use the skip link component to help keyboard-only users skip to the main content on a page.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/skip-link
 * - https://design-system.service.gov.uk/components/skip-link/
 */
export const SkipLink = styled('a')(
  visuallyHidden.focusable(),
  link.common(),
  link.styleText,
  typography.responsive(16),
  {
    display: 'block',
    padding: `${SPACING_POINTS[2]}px ${SPACING_POINTS[3]}px`,
    '@supports (padding:max(calc(0px)))': {
      paddingRight: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-right)))`,
      paddingLeft: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-left)))`,
    },
  }
);

SkipLink.defaultProps = {
  children: 'Skip to main content',
  href: '#content',
};

SkipLink.displayName = 'SkipLink';

export default SkipLink;
