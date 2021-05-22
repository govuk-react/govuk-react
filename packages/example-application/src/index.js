import React from 'react';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';

import Home from './home';
import Form from './form';

const ExampleApplication = () => (
  <>
    <GovUK.GlobalStyle />
    <GovUK.TopNav />
    <GovUK.Page.WidthContainer
      beforeChildren={<GovUK.PhaseBanner level="alpha">This part of GOV.UK is being rebuilt</GovUK.PhaseBanner>}
    >
      <GovUK.Page.Main>
        <Router>
          <Switch>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </GovUK.Page.Main>
    </GovUK.Page.WidthContainer>
    <GovUK.Footer />
  </>
);

export default ExampleApplication;
