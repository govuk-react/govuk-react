// http://alphagov.github.io/govuk_template/example-proposition-menu.html

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@govuk-react/button';
import { BLACK, WHITE } from 'govuk-colours';

import TopNavWrapper from './atoms/top-nav-wrapper';
import TopNavInner from './atoms/top-nav-inner';
import BottomNavWrapper from './atoms/bottom-nav-wrapper';
import Company from './atoms/company';
import LogoSearchWrapper from './atoms/logo-search-wrapper';
import RightHandSide from './atoms/right-hand-side';
import SearchWrapper from './atoms/search-wrapper';
import Ul from './atoms/ul';
import Li from './atoms/li';

const TopNav = ({
  active,
  bgColor,
  color,
  company,
  serviceTitle,
  search,
  children,
  ...props
}) => (
  <React.Fragment>
    <TopNavWrapper bgColor={bgColor} color={color} {...props}>
      <TopNavInner>
        <LogoSearchWrapper>
          <Company>
            {company}
          </Company>
          {search &&
            <SearchWrapper>
              {search}
            </SearchWrapper>
          }
        </LogoSearchWrapper>
        <RightHandSide>
          {serviceTitle}
          {children &&
          <React.Fragment>
            <Button mb={0}>menu</Button>
            <Ul serviceTitle={serviceTitle}>
              {children.length && children.map ? (
                children.map((child, i) => (
                  child && (child.length || child.props)
                    ? <Li active={active === i ? 'active' : undefined} key={child.key || i}>{child}</Li>
                    : null
                ))
              ) : (
                <Li active={active}>{children}</Li>
              )}
            </Ul>
          </React.Fragment>
          }
        </RightHandSide>
      </TopNavInner>
    </TopNavWrapper>
    <BottomNavWrapper />
  </React.Fragment>
);

TopNav.defaultProps = {
  active: undefined,
  bgColor: BLACK,
  color: WHITE,
  company: undefined,
  serviceTitle: undefined,
  search: false,
  children: undefined,
};

TopNav.propTypes = {
  active: PropTypes.number,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  company: PropTypes.node,
  serviceTitle: PropTypes.node,
  search: PropTypes.node,
  children: PropTypes.node,
};

export default TopNav;
