import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { visuallyHidden } from '@govuk-react/lib';

const VisuallyHidden = styled('span').attrs(({ focusable, tabIndex }) =>
  // if we're focusable but don't have a `tabIndex` set, add one
  focusable && tabIndex === undefined ? { tabIndex: '0' } : undefined
)(({ focusable, important }) => visuallyHidden({ focusable, important }));

/**
 *
 * ### Usage
 *
 * This component is primarily intended to be used for material that will be visually hidden
 * but visible to screen-reader devices.
 *
 * Simple
 * ```jsx
 * <VisuallyHidden>Example</VisuallyHidden>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/helpers/_visually-hidden.scss
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/utilities/_visually-hidden.scss
 */
const VisuallyHiddenDocumented = props => <VisuallyHidden {...props} />;

VisuallyHiddenDocumented.propTypes = {
  /**
   * Content to be hidden
   */
  children: PropTypes.node.isRequired,
  /**
   * Allow component to be focusable, and thus become visible
   */
  focusable: PropTypes.bool,
  /**
   * Set styles with `!important`
   */
  important: PropTypes.bool,
};

VisuallyHiddenDocumented.defaultProps = {
  focusable: false,
  important: true,
};

VisuallyHidden.propTypes = VisuallyHiddenDocumented.propTypes;
VisuallyHidden.defaultProps = VisuallyHiddenDocumented.defaultProps;

export { VisuallyHiddenDocumented };
export default VisuallyHidden;
