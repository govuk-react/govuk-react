import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import Button from '@govuk-react/button';

const FinalFormWrapper = ({ children }) => (
  <Form
    onSubmit={action('submit')}
    render={({
      handleSubmit, form: { reset }, submitting, pristine, values,
    }) => (
      <form onSubmit={handleSubmit}>
        <div>{children}</div>
        <div>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </div>
        <div>
          <Button onClick={reset} disabled={submitting || pristine}>
            Reset
          </Button>
        </div>
        <div>
          <hr />
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </div>
      </form>
    )}
  />
);

FinalFormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FinalFormWrapper;
