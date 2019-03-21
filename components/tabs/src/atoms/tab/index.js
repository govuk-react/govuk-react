import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { link, spacing, typography } from '@govuk-react/lib';

import { BLACK, BORDER_COLOUR, GREY_4, WHITE } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const spacingSimple1 = spacing.simple(1);
const spacingSimple2 = spacing.simple(2);
const spacingSimple3 = spacing.simple(3);
const spacingSimple4 = spacing.simple(4);
const spacingSimple5 = spacing.simple(5);

const StyledListItem = styled('li')({
  marginLeft: spacingSimple5,
  ':before': {
    content: "'\\2014  '",
    marginLeft: -spacingSimple5,
    paddingRight: spacingSimple1,
  },
  [MEDIA_QUERIES.TABLET]: {
    marginLeft: 0,
    ':before': {
      content: 'none',
    },
  },
});

const StyledHyperLink = styled('a')(
  typography.font({ size: 19 }),
  link.common(),
  link.styleDefault,
  {
    display: 'inline-block',
    paddingTop: spacingSimple2,
    paddingBottom: spacingSimple2,
  },
  ({ selected }) => ({
    color: selected && BLACK,
    textDecoration: selected ? 'none' : undefined,
    [MEDIA_QUERIES.TABLET]: {
      marginRight: spacingSimple1,
      float: 'left',
      textAlign: 'center',
      textDecoration: 'none',
      color: BLACK,
      ':link,:visited': {
        color: BLACK,
      },
      marginTop: selected ? -spacingSimple1 : undefined,
      marginBottom: selected ? -1 : undefined,

      paddingTop: selected ? spacingSimple3 - 1 : undefined,
      paddingRight: selected ? spacingSimple4 - 1 : spacingSimple4,
      paddingBottom: selected ? spacingSimple3 + 1 : undefined,
      paddingLeft: selected ? spacingSimple4 - 1 : spacingSimple4,
      border: selected && `1px solid ${BORDER_COLOUR}`,
      borderBottom: selected ? 0 : 1,
      backgroundColor: selected ? WHITE : GREY_4,
      ':focus': {
        backgroundColor: selected ? 'transparent' : GREY_4,
      },
    },
  })
);

const Tab = ({ children, href, onClick, selected }) => (
  <StyledListItem>
    <StyledHyperLink selected={selected} onClick={onClick} href={href}>
      {children}
    </StyledHyperLink>
  </StyledListItem>
);

Tab.defaultProps = {
  selected: false,
};

Tab.propTypes = {
  /** Different stylings for the Tab displaying content */
  selected: PropTypes.bool,
  /** Join the panel and header together with corresponding panel id. Required for mobile use  */
  href: PropTypes.string.isRequired,
  /** The content to display within the Tab Header */
  children: PropTypes.node.isRequired,
  /** The function to passed to prevent default href behaviour */
  onClick: PropTypes.func.isRequired,
};

export default Tab;
