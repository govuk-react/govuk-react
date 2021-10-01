import * as React from 'react';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './home';
import Forms from './forms/forms';

const ExampleApplication: React.FC<ExampleApplicationProps> = ({ routerEntries }: ExampleApplicationProps) => (
  <Router initialEntries={routerEntries}>
    <GovUK.GlobalStyle />
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
    <GovUK.Page.WidthContainer>
      <GovUK.Page.Main>
        <Switch>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </GovUK.Page.Main>
    </GovUK.Page.WidthContainer>
    <GovUK.Footer />
  </Router>
);

export interface ExampleApplicationProps {
  routerEntries?: string[];
}

ExampleApplication.defaultProps = {
  routerEntries: undefined,
};

export default ExampleApplication;
