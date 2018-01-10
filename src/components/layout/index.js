// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from 'react'
import glamorous from 'glamorous'
import { BREAKPOINTS, SITE_WIDTH } from '../../constants/index'

const mediaQueries = {
	largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,
}

const RowWrapper = glamorous.div({
  overflow: 'hidden',
  padding: '20px',
  border: '1px solid #ccc',
  [mediaQueries.largeScreen]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const GridRow = glamorous.div({
  margin: '0 -15px',
  [mediaQueries.largeScreen]: {
    display: 'flex',
    maxWidth: SITE_WIDTH
  }
});

const GridCol = glamorous.div({
  backgroundColor: '#7DADD3',
  backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
  marginBottom: '0',
  overflow: 'hidden',
  textIndent: '-999em',
  // margin: '0 15px',
  border: '4px solid white',
  width: '100%',
},
({showContent}) => ({
  textIndent: showContent ? '0' : GridCol.textIndent,
  backgroundColor: showContent ? '' : GridCol.backgroundColor,
  backgroundImage: showContent ? '' : GridCol.backgroundImage
}),
({columnOneThird}) => ({
  [mediaQueries.largeScreen]: {
    width: columnOneThird ? '33.3333%' : GridCol.width
  }
}),
({columnTwoThirds}) => ({
  [mediaQueries.largeScreen]: {
    width: columnTwoThirds ? '66.6667%' : GridCol.width
  }
}),
({columnOneQuarter}) => ({
  [mediaQueries.largeScreen]: {
    width: columnOneQuarter ? '50%' : GridCol.width
  }
}));

const Layout = ({children, ...props}) => (
  <RowWrapper {...props}>
     {children}
  </RowWrapper>)

export { Layout, GridRow, GridCol };
