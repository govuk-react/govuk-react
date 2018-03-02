// https://github.com/alphagov/govuk-frontend/tree/master/src/components/panel
import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import { TURQUOISE, WHITE } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const PanelInner = glamorous.div({
  backgroundColor: TURQUOISE,
  color: WHITE,
  padding: '25px',
});

const PanelTitle = glamorous.h2({
  fontFamily: "'nta', Arial, sans-serif",
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

const PanelBody = glamorous.div({
  fontFamily: "'nta', Arial, sans-serif",
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '25px',
  marginTop: '15px',
  marginBottom: '10px',
  textAlign: 'center',
  WebkitFontSmoothing: 'antialiased',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: '36px',
    lineHeight: '40px',
  },
});

const Panel = ({ panelTitle, panelBody }) => (
  <PanelInner>
    <PanelTitle>{panelTitle}</PanelTitle>
    <PanelBody>{panelBody}</PanelBody>
  </PanelInner>
);
Panel.defaultProps = {
  panelBody: null,
};

Panel.propTypes = {
  panelTitle: PropTypes.string.isRequired,
  panelBody: PropTypes.string,
};

export default Panel;
