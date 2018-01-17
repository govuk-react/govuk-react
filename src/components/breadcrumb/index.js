// https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss
import React from 'react'
import glamorous from 'glamorous'

import * as COLOUR from 'govuk-colours'
import { BREAKPOINTS } from '../../constants/index'

const mediaQueries = {
	largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,
}

const BreadcrumbContainer = glamorous.div({
  fontFamily: 'nta, Arial, sans-serif',
  fontSize: '14px',
  lineHeight: '16px',
  marginTop: '15px',
  marginBottom: '10px',
  WebkitFontSmoothing: 'antialiased',
  [mediaQueries.largeScreen]: {
    fontSize: '16px',
    lineHeight: '20px'
  }
});

const BreadcrumbList = glamorous.ul({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block',
});

const BreadcrumbListItem = glamorous.li({
  position: 'relative',
  display: 'inline-block',
  whiteSpace: 'no-wrap',
  marginBottom: '5px',
  marginLeft: '10px',
  paddingLeft: '15px',
  ':first-child': {
    marginLeft: 0,
    paddingLeft: 0,
    '::before': {
      display: 'none'
    }
  },
  '::before': {
    content: ' ',
    display: 'block',
    position: 'absolute',
    top: '-1px',
    bottom: '1px',
    left: '-3.31px',
    width: '7px',
    height: '7px',
    margin: 'auto 0',
    transform: 'rotate(45deg)',
    border: 'solid',
    borderWidth: '1px 1px 0 0',
    borderColor: `${COLOUR.GREY_1}`
  },
  '> a': {
    color: `${COLOUR.BLACK}`,
    textDecoration: 'underline',
    ':focus': {
      backgroundColor: `${COLOUR.YELLOW}`,
      outline: `3px solid ${COLOUR.YELLOW}`
    }
  }
});


const Breadcrumb = ({children, ...props}) => (
  <BreadcrumbContainer {...props}>
    <BreadcrumbList>
      {children.length && children.map ? children.map(child => (
        <BreadcrumbListItem>
          {child}
        </BreadcrumbListItem>)) : 
      <BreadcrumbListItem>
        {children}
      </BreadcrumbListItem>}
    </BreadcrumbList>
  </BreadcrumbContainer>
)

export default Breadcrumb
