import React from 'react';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';

import { createGlobalStyle } from 'styled-components';
import Home from './home';
import Form from './form';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter UI', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const ExampleApplication = () => (
  <>
    <GlobalStyle />
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
