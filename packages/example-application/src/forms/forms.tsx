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
          <GovUK.Heading size="l">Forms</GovUK.Heading>
          <GovUK.Body>Which form example would you like to run?</GovUK.Body>
          <GovUK.List variant="bullet">
            <li>
              <GovUK.Link asChild>
                <Link to="/forms/form">Basic</Link>
              </GovUK.Link>
            </li>
            <li>
              <GovUK.Link asChild>
                <Link to="/forms/final-form">Final Form</Link>
              </GovUK.Link>
            </li>
            <li>
              <GovUK.Link asChild>
                <Link to="/forms/formik">Formik</Link>
              </GovUK.Link>
            </li>
            <li>
              <GovUK.Link asChild>
                <Link to="/forms/react-hook-form">React Hook Form</Link>
              </GovUK.Link>
            </li>
            <li>
              <GovUK.Link asChild>
                <Link to="/forms/react-jsonschema-form">React JSON Schema Form</Link>
              </GovUK.Link>
            </li>
          </GovUK.List>
        </>
      }
    />
  </Routes>
);

export default Forms;
