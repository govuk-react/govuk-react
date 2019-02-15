import React from 'react';

import CrownIcon from '@govuk-react/icon-crown';
import { BrowserRouter, Link } from 'react-router-dom';
import asNavLink from 'as-nav-link';

import TopNav, { asNavLinkAnchor, asTopNavAnchor } from '..';

const LogoLink = asTopNavAnchor(Link);

const NavLink = asNavLink()(asNavLinkAnchor(Link));

export default () => (
  <BrowserRouter>
    <TopNav
      company={(
        <LogoLink to="/section">
          <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
        </LogoLink>
      )}
      serviceTitle={(
        <NavLink to="/section">
          My Service
        </NavLink>
      )}
    >
      <NavLink to="/">Root</NavLink>
      <NavLink to="/section1">Section One</NavLink>
      <NavLink to="/section2">Section Two</NavLink>
    </TopNav>
  </BrowserRouter>
);
