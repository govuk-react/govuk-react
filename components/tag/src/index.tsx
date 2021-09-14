import styled from 'styled-components';
import React from 'react';
import { BLUE, GREY_1, WHITE } from 'govuk-colours';
import { typography } from '@govuk-react/lib';

const Tag: React.FC<TagProps> = styled('strong')(
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
const DocumentedTag: React.FC<TagProps> = (props: TagProps) => <Tag {...props} />;

interface TagProps {
  inactive?: boolean;
}

DocumentedTag.defaultProps = {
  inactive: false,
};

Tag.defaultProps = DocumentedTag.defaultProps;

export { DocumentedTag };
export default Tag;
