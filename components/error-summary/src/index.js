// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { NTA_LIGHT, TEXT_COLOUR, ERROR_COLOUR, FOCUS_COLOUR } from 'govuk-colours';

import Header from '@govuk-react/header';
import Paragraph from '@govuk-react/paragraph';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

import {
  FONT_SIZE,
  BORDER_WIDTH,
  BORDER_WIDTH_MOBILE,
  FOCUS_WIDTH,
  LINE_HEIGHT,
  SPACING,
  MEDIA_QUERIES,
  RESPONSIVE_4,
} from '@govuk-react/constants';

import { asAnchor, withWhiteSpace } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

const StyledErrorText = styled(AnchorTag)({
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 700,
  marginBottom: SPACING.SCALE_1,
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
  textTransform: 'none',
  cursor: 'pointer',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  ':visited': {
    color: `${ERROR_COLOUR}`,
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
  color: `${ERROR_COLOUR}`,
  paddingTop: '4px',
  paddingBottom: '2px',
});

const StyledErrorSummary = styled('div')({
  color: TEXT_COLOUR,
  padding: RESPONSIVE_4.mobile,
  border: `${BORDER_WIDTH_MOBILE} solid ${ERROR_COLOUR}`,
  '&:focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: '0',
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: RESPONSIVE_4.tablet,
    border: `${BORDER_WIDTH} solid ${ERROR_COLOUR}`,
  },
});

const ErrorSummary = props => (
  <StyledErrorSummary tabIndex={-1} {...props}>
    <Header level={2}>Message to alert the user to a problem goes here</Header>
    <Paragraph mb={2}>Optional description of the errors and how to correct them</Paragraph>
    <UnorderedList listStyleType="none">
      <ListItem><StyledErrorText href="#target">Descriptive link to the question with an error</StyledErrorText></ListItem>
      <ListItem><StyledErrorText href="#target">Descriptive link to the question with an error</StyledErrorText></ListItem>
    </UnorderedList>
  </StyledErrorSummary>
);

export default withWhiteSpace({ marginBottom: 6 })(ErrorSummary);
