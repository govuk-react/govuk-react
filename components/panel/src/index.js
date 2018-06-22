import React, { Fragment } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { TURQUOISE, WHITE } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';

const StyledPanel = styled('div')({
  backgroundColor: TURQUOISE,
  color: WHITE,
  padding: SPACING.SCALE_5,
});

// TODO use standard font constants
const StyledTitle = styled('h2')({
  fontFamily: NTA_LIGHT,
  fontWeight: 'bold',
  WebkitFontSmoothing: 'antialiased',
  fontSize: '32px',
  lineHeight: '35px',
  marginTop: 0,
  textAlign: 'center',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: '48px',
    lineHeight: '50px',
  },
});

// TODO use standard font constants
const StyledBody = styled('div')({
  fontFamily: NTA_LIGHT,
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '25px',
  marginTop: SPACING.SCALE_3,
  marginBottom: SPACING.SCALE_2,
  textAlign: 'center',
  WebkitFontSmoothing: 'antialiased',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: '36px',
    lineHeight: '40px',
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Panel panelTitle="Application complete" />
 * ```
 *
 * Panel with header and HTML body
 * ```jsx
 * <Panel
 *    panelTitle="Application complete"
 *    panelBody={['Your reference number', <br />, <strong>HDJ2123F</strong>]}
 *  />
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/panel
 *
 */

const generatePanelBodyKey = () => {
  return `panelBody_${Math.floor(Math.random() * Math.floor(1000000))}`;
}

const Panel = ({ panelTitle, panelBody, ...props }) => (
  <StyledPanel {...props}>
    <StyledTitle>{panelTitle}</StyledTitle>
    <StyledBody>
      {Array.isArray(panelBody)
        ? panelBody.map((element) => (
          <Fragment key={generatePanelBodyKey()}>{element}</Fragment>
        ))
        : panelBody}
    </StyledBody>
  </StyledPanel>
);
Panel.defaultProps = {
  panelBody: undefined,
};

Panel.propTypes = {
  /** Panel title text */
  panelTitle: PropTypes.string.isRequired,
  /** Panel body text */
  panelBody: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default withWhiteSpace({ marginBottom: 3 })(Panel);
