// https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss
import React from 'react'
import styled from 'styled-components'
import {css} from 'styled-components'


const BreadcrumbContainer = styled.div`
padding-top: 15px;
padding-bottom: 15px;
font-family: "nta", Arial, sans-serif;
-webkit-font-smoothing: antialiased;
`;

const BreadcrumbList = styled.ol`
margin: 0;
padding: 0;
list-style-type: none;
`;

const BreadcrumbListItem = styled.li`
font-size: 16px;
line-height: 1.25;
font-family: "nta", Arial, sans-serif;
font-weight: 400;
text-transform: none;
font-size: 14px;
line-height: 1.14286;
margin-bottom: 5px;
margin-left: 10px;
padding-left: 15px;
float: left;
> a {
  color: #0b0c0c;
}
`;

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
