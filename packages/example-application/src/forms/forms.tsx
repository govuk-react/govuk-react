import * as React from 'react';
import * as GovUK from 'govuk-react';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Form from './form';
import FinalForm from './final-form';
import Formik from './formik';
import ReactHookForm from './react-hook-form';
import ReactJSONSchemaForm from './react-jsonschema-form';

const Forms: React.FC = () => (
  <Routes>
    <Route path="form" element={<Form />} />
    <Route path="final-form" element={<FinalForm />} />
    <Route path="formik" element={<Formik />} />
    <Route path="react-hook-form" element={<ReactHookForm />} />
    <Route path="react-jsonschema-form" element={<ReactJSONSchemaForm />} />
    <Route
      path="/"
      element={
        <>
          <GovUK.H2>Forms</GovUK.H2>
          <GovUK.Paragraph>Which form example would you like to run?</GovUK.Paragraph>
          <GovUK.UnorderedList>
            <GovUK.ListItem>
              <GovUK.Link as={Link} to="/forms/form">
                Basic
              </GovUK.Link>
            </GovUK.ListItem>
            <GovUK.ListItem>
              <GovUK.Link as={Link} to="/forms/final-form">
                Final Form
              </GovUK.Link>
            </GovUK.ListItem>
            <GovUK.ListItem>
              <GovUK.Link as={Link} to="/forms/formik">
                Formik
              </GovUK.Link>
            </GovUK.ListItem>
            <GovUK.ListItem>
              <GovUK.Link as={Link} to="/forms/react-hook-form">
                React Hook Form
              </GovUK.Link>
            </GovUK.ListItem>
            <GovUK.ListItem>
              <GovUK.Link as={Link} to="/forms/react-jsonschema-form">
                React JSON Schema Form
              </GovUK.Link>
            </GovUK.ListItem>
          </GovUK.UnorderedList>
        </>
      }
    />
  </Routes>
);

export default Forms;
