import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button, DateInput, Layout, GridRow, GridCol } from 'govuk-react';

// based on https://codesandbox.io/s/40mr0v2r87
const DateInputAdapter = ({ input, meta, ...rest }) => (
  <DateInput
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const required = value => (value ? undefined : 'Required');

const App = () => (
  <div>
    <Form
      onSubmit={onSubmit}
      render={({
 handleSubmit, reset, submitting, pristine, values,
}) => (
  <form onSubmit={handleSubmit}>
    <Layout>
      <GridRow>
        <GridCol>
          <Field
            name="dob"
            component={DateInputAdapter}
            validate={required}
            hintText="Date of birth"
            labelPosition="right"
          />
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </GridCol>
        <GridCol>
          <Button
            type="button"
            onClick={reset}
            disabled={submitting || pristine}
          >
            Reset
          </Button>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </GridCol>
      </GridRow>
    </Layout>
  </form>
      )}
    />
  </div>
);

export default App;
