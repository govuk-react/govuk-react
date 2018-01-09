// https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss
import React from 'react'
import glamorous from 'glamorous'


const BreadcrumbContainer = glamorous.div({
backgroundColor: '#999',
color: '#fff',
paddingTop: '15px',
paddingBottom: '15px',
fontFamily: 'nta, Arial, sans-serif',
WebkitFontSmoothing: 'antialiased'
});

const BreadcrumbList = glamorous.ul({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'flex',
});

const BreadcrumbListItem = glamorous.li({
  fontSize: '16px',
  lineHeight: '1.25',
  fontFamily: 'nta, Arial, sans-serif',
  fontWeight: '400',
  textTransform: 'none',
  fontSize: '14px',
  lineHeight: '1.14286',
  marginBottom: '5px',
  marginLeft: '10px',
  paddingLeft: '15px',
  '> a': {
      color: '#fff',
      textDecoration: 'none',
      ':hover': {
        color: '#333'
      }
  }
});


const Breadcrumb = ({children, ...props}) => (<BreadcrumbContainer {...props}>
  <BreadcrumbList>
    {children.length && children.map ? children.map(child =>
      <BreadcrumbListItem>
        {child}
      </BreadcrumbListItem>
    ) : <BreadcrumbListItem>
      {children}
    </BreadcrumbListItem>}
  </BreadcrumbList>
</BreadcrumbContainer>)

export default Breadcrumb
