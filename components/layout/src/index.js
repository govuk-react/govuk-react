import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { SPACING } from '@govuk-react/constants';

const StyledLayout = styled('div')({
  padding: SPACING.SCALE_2,
  boxSizing: 'border-box',
});

/**
 *
 * ### Usage
 *
 * This component provides default padding.
 * You can use this component to wrap Grid components however it is not required.
 *
 * Simple usage
 * ```jsx
 * import GridRow from '@govuk-react/grid-row';
 * import GridCol from '@govuk-react/grid-col';
 *
 * <Layout>
 *   <GridRow>
 *     <GridCol>
 *       ...
 *     </GridCol>
 *   </GridRow>
 * </Layout>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 *
 */
const Layout = props => <StyledLayout {...props} />;

Layout.propTypes = {
  /** GridRow and GridCol children nodes */
  children: PropTypes.node.isRequired,
};

export default Layout;
