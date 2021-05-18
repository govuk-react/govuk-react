import React from 'react';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';

import Home from './home';
import Form from './form';

import { createGlobalStyle } from 'styled-components';

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
  <GovUK.Page main={(props) => <GovUK.Page.Main padding={{ size: 1 }} {...props} />}>
    <GlobalStyle />

    <GovUK.PhaseBanner level="alpha">This part of GOV.UK is being rebuilt</GovUK.PhaseBanner>
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
  </GovUK.Page>
);

export default ExampleApplication;