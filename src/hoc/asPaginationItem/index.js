import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BLUE, GREY_4, PURPLE, YELLOW, WHITE } from "govuk-colours";
import { FONT_SIZE, LINE_HEIGHT, SPACING } from "../../constants/index";

import NextPageIcon from "../../icons/ArrowRight/index";
import PrevPageIcon from "../../icons/ArrowLeft/index";

const PaginationWrapper = glamorous.li(
  {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    fontFamily: '"nta", Arial, sans-serif',
    fontWeight: 400,
    textTransform: "none",
    fontSize: FONT_SIZE.SIZE_27,
    lineHeight: LINE_HEIGHT.SIZE_16,
    width: "100%",
    "> a": {
      boxSizing: "border-box",
      color: BLUE,
      fill: "currentColor",
      padding: SPACING.SCALE_3,
      backgroundColor: WHITE,
      textDecoration: "none",
      outlineColor: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      ":hover": {
        backgroundColor: GREY_4
      },
      ":focus": {
        outline: `3px solid ${YELLOW}`
      },
      ":visited": {
        color: PURPLE
      }
    }
  },
  ({ previousPage }) => ({
    marginRight: previousPage ? "3px" : undefined,
    "> a": {
      alignItems: previousPage ? "flex-start" : undefined
    },
    "> a div": {
      justifyContent: previousPage ? "flex-start" : undefined,
      "> svg": {
        marginRight: "10px"
      }
    }
  }),
  ({ nextPage }) => ({
    "> a": {
      alignItems: nextPage ? "flex-end" : undefined
    },
    "> a div": {
      justifyContent: nextPage ? "flex-end" : undefined,
      "> svg": {
        marginLeft: "10px"
      }
    }
  })
);

const InnerWrap = glamorous.div({
  border: "1px solid red",
  display: "flex",
  alignItems: "center",
  width: "100%"
});

const PageTitle = glamorous.span({
  border: "1px solid green"
});

const asPaginationItem = AnchorType => {
  const component = props => (
    <PaginationWrapper {...props}>
      <AnchorType {...props}>
        <InnerWrap>
          {props.previousPage && <PrevPageIcon />}
          {props.children}
          {props.nextPage && <NextPageIcon />}
        </InnerWrap>
        {props.pageTitle && <PageTitle>{props.pageTitle}</PageTitle>}
      </AnchorType>
    </PaginationWrapper>
  );

  component.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    previousPage: PropTypes.bool,
    nextPage: PropTypes.bool,
    pageTitle: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  };

  component.defaultProps = {
    onClick: undefined,
    disabled: undefined,
    previousPage: undefined,
    nextPage: undefined,
    pageTitle: undefined
  };

  return component;
};

export default asPaginationItem;
