import React from "react";
import { Form, Field } from "react-final-form";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PropTypes from "prop-types";

import Button from "../Button/index";
import MultiChoice from "../MultiChoice/index";
import Radio from ".";

const required = value => (value ? undefined : "Required");

const RadioGroup = ({ label, hint, options, inline, input, meta }) => (
  <div>
    <MultiChoice label={label} hint={hint} meta={meta}>
      {options.map(o => (
        <div key={o.value}>
          <Radio
            {...input}
            value={o.value}
            inline={inline}
            checked={o.value === input.value}
          >
            {o.title}
          </Radio>
        </div>
      ))}
    </MultiChoice>
  </div>
);

RadioGroup.defaultProps = {
  input: {},
  meta: {},
  hint: undefined,
  inline: false,
  options: {}
};

RadioGroup.propTypes = {
  input: PropTypes.shape({}),
  meta: PropTypes.shape({}),
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  inline: PropTypes.bool,
  options: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string
  })
};

const App = () => (
  <div>
    <Form
      onSubmit={action("submit")}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="likesAnimals"
              label="Do you like animals?"
              hint="You must tell us"
              component={RadioGroup}
              options={[
                { title: "Yep", value: "yes" },
                { title: "Nope", value: "no" }
              ]}
              validate={required}
              inline
            />
          </div>
          <div>
            <Button type="submit" disabled={submitting}>
              Log In
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
  </div>
);

storiesOf("Radio", module).add("Radio stacked", () => (
  <div>
    <Radio name="group1">Waste from animal carcasses</Radio>
    <Radio name="group1">Waste from mines or quarries</Radio>
    <Radio name="group1">Farm or agricultural waste</Radio>
  </div>
));

storiesOf("Radio", module).add("Radio inline", () => (
  <div>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </div>
));

storiesOf("Radio", module).add("Radio disabled", () => (
  <div>
    <Radio name="group1" disabled="disabled">
      Disabled checkbox option
    </Radio>
  </div>
));

storiesOf("Radio", module).add("Radio preselected", () => (
  <div>
    <Radio name="group1" checked>
      Farm or agricultural waste
    </Radio>
  </div>
));

storiesOf("Radio", module).add("Radio preselected & disabled", () => (
  <div>
    <Radio name="group1" disabled="disabled" checked>
      Farm or agricultural waste
    </Radio>
  </div>
));

storiesOf("Radio", module).add(
  "Usage with Final/Redux Form - multi checkbox validation",
  () => <App />
);
