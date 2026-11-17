import * as React from 'react';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './home';
import Forms from './forms/forms';

const ExampleApplication: React.FC<ExampleApplicationProps> = ({ routerEntries }: ExampleApplicationProps) => (
  <React.StrictMode>
    <Router initialEntries={routerEntries}>
      <GovUK.TopNav
        serviceTitle={
          <GovUK.TopNav.Anchor as={Link} to="/">
            React
          </GovUK.TopNav.Anchor>
        }
        search={
          <GovUK.SearchBox>
            <GovUK.SearchBox.Input placeholder="Search GOV.UK" />
            <GovUK.SearchBox.Button />
          </GovUK.SearchBox>
        }
      >
        <GovUK.TopNav.NavLink as={Link} to="/">
          Home
        </GovUK.TopNav.NavLink>
        <GovUK.TopNav.NavLink as={Link} to="/forms">
          Forms
        </GovUK.TopNav.NavLink>
      </GovUK.TopNav>
      <GovUK.WidthContainer>
        <GovUK.MainWrapper>
          <Routes>
            <Route path="/forms/*" element={<Forms />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </GovUK.MainWrapper>
      </GovUK.WidthContainer>
      <GovUK.Footer.Composite />
    </Router>
  </React.StrictMode>
);

export interface ExampleApplicationProps {
  routerEntries?: string[];
}

export default ExampleApplication;
