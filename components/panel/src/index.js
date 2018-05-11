// https://github.com/alphagov/govuk-frontend/tree/master/src/components/panel
import React from 'react';
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

const Panel = ({ panelTitle, panelBody, className }) => (
  <StyledPanel className={className}>
    <StyledTitle>{panelTitle}</StyledTitle>
    <StyledBody>{panelBody}</StyledBody>
  </StyledPanel>
);
Panel.defaultProps = {
  panelBody: undefined,
  className: undefined,
};

Panel.propTypes = {
  panelTitle: PropTypes.string.isRequired,
  panelBody: PropTypes.string,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 3 })(Panel);
