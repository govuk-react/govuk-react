import React from 'react';
import PropTypes from 'prop-types';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './home';
import Form from './form';
import FinalForm from './final-form';
import Formik from './formik';
import ReactHookForm from './react-hook-form';

const ExampleApplication = ({ routerEntries }) => (
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
      <GovUK.TopNav.NavLink as={Link} to="/form">
        Form
      </GovUK.TopNav.NavLink>
      <GovUK.TopNav.NavLink as={Link} to="/final-form">
        Final Form
      </GovUK.TopNav.NavLink>
      <GovUK.TopNav.NavLink as={Link} to="/formik">
        Formik
      </GovUK.TopNav.NavLink>
      {/* TODO: a single 'Forms' nav option */}
      <GovUK.TopNav.NavLink as={Link} to="/react-hook-form">
        React Hook Form
      </GovUK.TopNav.NavLink>
    </GovUK.TopNav>
    <GovUK.Page.WidthContainer
      beforeChildren={<GovUK.PhaseBanner level="alpha">This part of GOV.UK is being rebuilt</GovUK.PhaseBanner>}
    >
      <GovUK.Page.Main>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/final-form">
            <FinalForm />
          </Route>
          <Route path="/formik">
            <Formik />
          </Route>
          <Route path="/react-hook-form">
            <ReactHookForm />
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

ExampleApplication.propTypes = {
  routerEntries: PropTypes.arrayOf(PropTypes.string),
};

ExampleApplication.defaultProps = {
  routerEntries: undefined,
};

export default ExampleApplication;
