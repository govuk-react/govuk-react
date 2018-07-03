import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

// styled components
const NavNavContainerli = styled('div')`
  display: block;
  padding: 0;
  margin: 0;
`;

const NavUl = styled('ul')`
    list-style: none;
    margin: 0;
    border-top: 0;
    padding: 0;
    border-bottom: 2px solid #bfc1c3; 
`;

const Navli = styled('li')`
  float: left;
  margin: 0 3px 0 0;
`;

const NavLink = styled('a')`
    font-family: "nta", Arial, sans-serif;
    font-weight: 400;
    text-transform: none;
    cursor: pointer;
    display: block;
    border-bottom: none;
    float: left;
    height: 3.25em;
    line-height: 3.25em;
    margin-bottom: -2px;
    padding: 0 40px;
    border-top: ${props => props.active ? '2px solid #bfc1c3' : 'none'};
    border-left: ${props => props.active ? '2px solid #bfc1c3' : 'none'};
    border-right: ${props => props.active ? '2px solid #bfc1c3' : 'none'};
    border-bottom: ${props => props.active ? '2px solid white' : 'null'};
    color: ${props => props.active ? '#000' : '#005ea5'};
    text-decoration: ${props => props.active ? 'none' : 'underline'};
`;

const ClearFix = styled('li')`
  display: block;
  clear: both;
`;

/**
 *
 * ### Usage
 *
 * ```jsx
 * <TabbedNav
    handleNavChange={this.handleNavChange}
    activeNavTab={this.state.activeNavTab}
    navItems={['Example tab 1', 'Example tab 2', 'Example tab 3']}
  >
 * ```
 */

const TabbedNav = (props) => {
  const {
    navItems,
    activeNavTab,
    handleNavChange,
    children,
  } = props;

  return (
    <div>
      <NavNavContainerli>
        <NavUl>
          {
            navItems.map((item) => {
              return (
                <Navli key={item}>
                  <NavLink
                    onClick={() => handleNavChange({ item })}
                    active={activeNavTab === item ? true : false}
                  >
                    {item}
                  </NavLink>
                </Navli>
              );
            })
          }
          <ClearFix>{null}</ClearFix>
        </NavUl>
      </NavNavContainerli>
      <div>{children}</div>
    </div>
  );
};

TabbedNav.propTypes = {
  activeNavTab: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleNavChange: PropTypes.func.isRequired,
  navItems: PropTypes.array.isRequired,
};

export default TabbedNav;
