// https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkbox/_checkbox.scss
import React from 'react'
import glamorous from 'glamorous'


const RowWrapper = glamorous.div({
  overflow: 'hidden',
  padding: '20px',
  border: '1px solid #ccc'
});

const GridRow = glamorous.div({
  display: 'flex',
  margin: '0 -15px'
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
  '> p': {
  }
},
function(props) {
  if (props.showContent) {
    return {
      textIndent: '0',
      backgroundColor: '',
      backgroundImage: ''
    }
  }
  if (props.columnOneThird) {
    return {
      width: '33.3333%'
    }
  }
  if (props.columnTwoThirds) {
    return {
      width: '66.6667%'
    }
  }
  if (props.columnOneQuarter) {
    return {
      width: '50%'
    }
  }
}
);

const Layout = ({children, ...props}) => (
  <RowWrapper {...props}>
     {children}
  </RowWrapper>)

export { Layout, GridRow, GridCol };
