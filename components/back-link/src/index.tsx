/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/back-link
 */
import styled from 'styled-components';
import { BLACK } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, shape, spacing, typography } from '@govuk-react/lib';

/**
 * Use the back link component to help users go back to the previous page in a multi-page transaction.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/back-link
 * - https://design-system.service.gov.uk/components/back-link/
 */
export const BackLink = styled('a')(
  typography.font({ size: 16 }),
  link.common(),
  link.styleText,
  {
    display: 'inline-block',
    position: 'relative',
    // margins here are not responsive, hence why they're not specified using withWhiteSpace
    marginTop: SPACING_POINTS[3],
    marginBottom: SPACING_POINTS[3],
    paddingLeft: '14px',
    textDecoration: 'none',
    '&[href]': {
      borderBottom: `1px solid ${BLACK}`,
    },
    '::before': {
      ...shape.arrow({ direction: 'left', base: 10, height: 6 }),

      content: "''",
      position: 'absolute',
      top: '-1px',
      bottom: '1px',
      left: 0,
      margin: 'auto',
    },
  },
  spacing.withWhiteSpace()
);

BackLink.defaultProps = {
  children: 'Back',
};

BackLink.displayName = 'BackLink';

export default BackLink;
