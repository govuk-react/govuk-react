import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { BLUE, GREY_1, WHITE } from 'govuk-colours';
import { typography } from '@govuk-react/lib';

const Tag = styled('strong')(
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
 * ```jsx
 * <Tag>beta</Tag>
 * ```
 *
 * ### References:
 * - https://design-system.service.gov.uk/components/tag/
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/tag/_tag.scss
 *
 */
const DocumentedTag = props => <Tag {...props} />;

DocumentedTag.propTypes = {
  inactive: PropTypes.bool,
};
DocumentedTag.defaultProps = {
  inactive: false,
};

Tag.propTypes = DocumentedTag.propTypes;
Tag.defaultProps = DocumentedTag.defaultProps;

export { DocumentedTag };
export default Tag;
