import React from 'react';
import * as GovUK from 'govuk-react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Form from './form';
import FinalForm from './final-form';
import Formik from './formik';
import ReactHookForm from './react-hook-form';
import ReactJSONSchemaForm from './react-jsonschema-form';

const Forms: React.FC = () => (
  <Switch>
    <Route path="/forms/form">
      <Form />
    </Route>
    <Route path="/forms/final-form">
      <FinalForm />
    </Route>
    <Route path="/forms/formik">
      <Formik />
    </Route>
    <Route path="/forms/react-hook-form">
      <ReactHookForm />
    </Route>
    <Route path="/forms/react-jsonschema-form">
      <ReactJSONSchemaForm />
    </Route>
    <Route path="/">
      <GovUK.H2>Forms</GovUK.H2>
      <GovUK.Paragraph>Which form example would you like to run?</GovUK.Paragraph>
      <GovUK.ListNavigation>
        <GovUK.Link as={Link} to="/forms/form">
          Basic
        </GovUK.Link>
        <GovUK.Link as={Link} to="/forms/final-form">
          Final Form
        </GovUK.Link>
        <GovUK.Link as={Link} to="/forms/formik">
          Formik
        </GovUK.Link>
        <GovUK.Link as={Link} to="/forms/react-hook-form">
          React Hook Form
        </GovUK.Link>
        <GovUK.Link as={Link} to="/forms/react-jsonschema-form">
          React JSON Schema Form
        </GovUK.Link>
      </GovUK.ListNavigation>
    </Route>
  </Switch>
);

export default Forms;
