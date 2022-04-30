/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/tag/_tag.scss
 */

import styled from 'styled-components';
import { BLUE, WHITE } from 'govuk-colours';
import { typography } from '@govuk-react/lib';

/**
 * Tag tints as defined by GDS
 *
 * - https://design-system.service.gov.uk/components/tag/#additional-colours
 */
const TAG_TINTS = {
  SOLID: { background: BLUE, text: WHITE },
  GREY: { background: '#eeefef', text: '#383f43' },
  GREEN: { background: '#cce2d8', text: '#005a30' },
  TURQUOISE: { background: '#bfe3e0', text: '#10403c' },
  BLUE: { background: '#d2e2f1', text: '#144e81' },
  PURPLE: { background: '#dbd5e9', text: '#3d2375' },
  PINK: { background: '#f7d7e6', text: '#80224d' },
  RED: { background: '#f6d7d2', text: '#942514' },
  ORANGE: { background: '#fcd6c3', text: '#6e3619' },
  YELLOW: { background: '#fff7bf', text: '#594d00' },
};

/**
 * Use the tag component to show users the status of something.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/tag
 * - https://design-system.service.gov.uk/components/tag/
 *
 */
export const Tag = styled('strong')<TagProps>(
  typography.font({ size: 16, weight: 'bold', lineHeight: 1 }),
  {
    display: 'inline-block',
    paddingTop: '5px',
    paddingRight: '8px',
    paddingBottom: '4px',
    paddingLeft: '8px',
    outline: '2px solid transparent',
    outlineOffset: -2,

    letterSpacing: 1,

    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  ({ tint = 'SOLID' }) => ({
    backgroundColor: TAG_TINTS[tint].background,
    color: TAG_TINTS[tint].text,
  }),
  ({ inactive }) =>
    inactive
      ? {
          backgroundColor: TAG_TINTS.GREY.background,
          color: TAG_TINTS.GREY.text,
        }
      : undefined,
  ({ backgroundColor }) => (backgroundColor ? { backgroundColor } : undefined),
  ({ color }) => (color ? { color } : undefined)
);
export interface TagProps {
  /**
   * Deprecated: use grey tint instead
   */
  inactive?: boolean;
  /**
   * Tag tint
   */
  tint?: keyof typeof TAG_TINTS;
  /**
   * Custom colour to override the tag background color
   */
  backgroundColor?: string;
  /**
   * Custom colour to override the tag text color
   */
  color?: string;
}

Tag.defaultProps = {
  inactive: false,
  tint: 'SOLID',
};

Tag.displayName = 'Tag';

export default Tag;
