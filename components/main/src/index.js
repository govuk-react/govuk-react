import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING, SITE_WIDTH } from '@govuk-react/constants';

const OuterContainer = styled('div')({
  paddingTop: SPACING.SCALE_5,
  textAlign: 'center',
});

// This is currently 'width-container' and not 'main' from govuk-frontend
// Maybe we should deprecate this component in favour of Page.Main and Page.WidthContainer?
const InnerContainer = styled('div')({
  maxWidth: SITE_WIDTH,
  marginLeft: SPACING.SCALE_3,
  marginRight: SPACING.SCALE_3,
  textAlign: 'left',
  [MEDIA_QUERIES.LARGESCREEN]: {
    marginLeft: SPACING.SCALE_5,
    marginRight: SPACING.SCALE_5,
  },
  // no 1020px breakpoint in constants yet, not sure why
  '@media only screen and (min-width:1020px)': {
    margin: '0 auto',
  },
});

/**
 *
 * Provides a container which aligns to the topNav component,
 * is centered, and provides top padding.
 *
 *
 * ### Usage
 *
 * Example
 * * https://codesandbox.io/s/x917knwm4z
 *
 * Simple
 * ```jsx
 * import GridRow from '@govuk-react/grid-row';
 * import GridCol from '@govuk-react/grid-col';
 *
 * <Main>
 *   <GridRow>
 *     <GridCol>
 *       ...
 *     </GridCol>
 *   </GridRow>
 * </Main>
 * ```
 *
 * ### TODO
 * - Implement the 1020px min-width MQ to constants
 *
 */
const Main = ({ children, ...props }) => (
  <OuterContainer {...props}>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

Main.propTypes = {
  /**
   * Child nodes for the page being built
   */
  children: PropTypes.node,
};

Main.defaultProps = {
  children: undefined,
};

export default Main;
