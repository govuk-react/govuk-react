// References:
// https://govuk-elements.herokuapp.com/typography/#typography-inset-text
//
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_panels.scss

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Paragraph from '@govuk-react/paragraph';

import { SPACING } from '@govuk-react/constants';
import { BORDER_COLOUR } from 'govuk-colours';

const StyledInsetText = styled(Paragraph)(props => ({
  boxSizing: 'border-box',
  borderLeftStyle: 'solid',
  borderLeftWidth: props.isNarrow ? '5px' : '10px',
  borderColor: BORDER_COLOUR,
  padding: SPACING.SCALE_3,
}));

const InsetText = props => <StyledInsetText {...props} mb="3" />;

InsetText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InsetText;
