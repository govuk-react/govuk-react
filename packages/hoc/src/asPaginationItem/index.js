import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BLUE, GREY_4, PURPLE, YELLOW, WHITE } from 'govuk-colours';
import { FONT_SIZE, LINE_HEIGHT, SPACING, MEDIA_QUERIES, NTA_LIGHT } from '@govuk-react/constants';

import { ArrowRight as NextPageIcon, ArrowLeft as PrevPageIcon } from '@govuk-react/icons';

const PaginationWrapper = styled('li')(
  {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_20,
    lineHeight: LINE_HEIGHT.SIZE_16,
    width: '100%',
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_27,
      lineHeight: LINE_HEIGHT.SIZE_16,
    },
    '> a': {
      boxSizing: 'border-box',
      color: BLUE,
      fill: 'currentColor',
      padding: SPACING.SCALE_3,
      backgroundColor: WHITE,
      textDecoration: 'none',
      outlineColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      ':hover': {
        backgroundColor: GREY_4,
      },
      ':focus': {
        outline: `3px solid ${YELLOW}`,
      },
      ':visited': {
        color: PURPLE,
      },
    },
  },
  ({ previousPage }) => ({
    marginRight: previousPage ? '3px' : undefined,
    ' > a': {
      alignItems: previousPage ? 'flex-start' : undefined,
    },
    ' > a div': {
      justifyContent: previousPage ? 'flex-start' : undefined,
      ' > svg': {
        height: previousPage ? '13px' : undefined,
        width: previousPage ? '17px' : undefined,
        marginRight: previousPage ? '10px' : undefined,
      },
    },
  }),
  ({ nextPage }) => ({
    ' > a': {
      alignItems: nextPage ? 'flex-end' : undefined,
    },
    ' > a div': {
      justifyContent: nextPage ? 'flex-end' : undefined,
      ' > svg': {
        height: nextPage ? '13px' : undefined,
        width: nextPage ? '17px' : undefined,
        marginLeft: nextPage ? '10px' : undefined,
      },
    },
  })
);

const InnerWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const PageTitle = styled('span')({
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  textDecoration: 'underline',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
});

const asPaginationItem = AnchorType => {
  const PaginationItem = props => (
    <PaginationWrapper previousPage={props.previousPage} nextPage={props.nextPage}>
      <AnchorType to={props.to} href={props.href} target={props.target}>
        <InnerWrap>
          {props.previousPage && <PrevPageIcon />}
          {props.children}
          {props.nextPage && <NextPageIcon />}
        </InnerWrap>
        {props.pageTitle && <PageTitle>{props.pageTitle}</PageTitle>}
      </AnchorType>
    </PaginationWrapper>
  );

  PaginationItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    previousPage: PropTypes.bool,
    nextPage: PropTypes.bool,
    pageTitle: PropTypes.string,
    to: PropTypes.string,
    target: PropTypes.string,
    href: PropTypes.string,
  };

  PaginationItem.defaultProps = {
    previousPage: undefined,
    nextPage: undefined,
    pageTitle: undefined,
    to: undefined,
    target: undefined,
    href: undefined,
  };

  return PaginationItem;
};

export default asPaginationItem;
