import styled from 'styled-components';
import { BLUE, GREY_1, WHITE } from 'govuk-colours';
import { typography } from '@govuk-react/lib';

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { Tag } from 'govuk-react'
 *
 * <Tag>beta</Tag>
 * ```
 *
 * ### References:
 *
 * - https://design-system.service.gov.uk/components/tag/
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/tag/_tag.scss
 *
 */
export const Tag = styled('strong')<TagProps>(
  typography.font({ size: 16, weight: 'bold', lineHeight: 1.25 }),
  {
    display: 'inline-block',
    padding: '4px 8px',
    paddingBottom: 1,
    outline: '2px solid transparent',
    outlineOffset: -2,

    color: WHITE,
    backgroundColor: BLUE,
    letterSpacing: 1,

    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  ({ inactive }) =>
    inactive
      ? {
          backgroundColor: GREY_1,
        }
      : undefined
);
export interface TagProps {
  inactive?: boolean;
}

Tag.defaultProps = {
  inactive: false,
};

Tag.displayName = 'Tag';

export default Tag;
