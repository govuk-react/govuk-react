import React from "react";
import { Form, Field } from "react-final-form";
import { storiesOf } from "@storybook/react";
import PropTypes from "prop-types";

import Button from "../Button/index";
import GridCol from "../GridCol/index";
import GridRow from "../GridRow/index";
import Layout from "../Layout/index";
import MultiChoice from "../MultiChoice/index";
import Radio from ".";

const onSubmit = values => {
  console.log(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : "Required");

const RadioGroup = ({ label, hint, name, options, inline, ...input }) => (
  <Layout>
    <GridRow>
      <GridCol>
        <MultiChoice {...input} label={label} hint={hint}>
          {options.map(o => (
            <div key={o.value}>
              <Radio
                type="radio"
                {...input}
                inline={inline}
                value={o.value}
                checked={o.value === input.value}
              >
                {o.title}
              </Radio>
            </div>
          ))}
        </MultiChoice>
      </GridCol>
    </GridRow>
  </Layout>
);

RadioGroup.defaultProps = {
  hint: undefined,
  inline: false,
  name: undefined,
  options: {}
};

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  name: PropTypes.string,
  inline: PropTypes.bool,
  options: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string
  })
};

const App = () => (
  <div>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Layout>
            <GridRow>
              <GridCol>
                <Field
                  name="likesAnimals"
                  label="Do you like animals?"
                  hint="You must tell us"
                  component={RadioGroup}
                  type="radio"
                  options={[
                    { title: "Yep", value: "yes" },
                    { title: "Nope", value: "no" }
                  ]}
                  validate={required}
                  inline
                />
                {/* <label>
                  <Field
                    type="radio"
                    component="input"
                    value="yes"
                    name="test"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    type="radio"
                    component="input"
                    value="no"
                    name="test"
                  />
                  No
                </label> */}
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol>
                <Button type="submit" disabled={submitting}>
                  Log In
                </Button>
              </GridCol>
              <GridCol>
                <Button onClick={reset} disabled={submitting || pristine}>
                  Reset
                </Button>
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol>
                <hr />
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </GridCol>
            </GridRow>
          </Layout>
        </form>
      )}
    />
  </div>
);

storiesOf("Radio", module).add("Radio stacked", () => (
  <div>
    <Radio input={{ name: "group1" }}>Waste from animal carcasses</Radio>
    <Radio input={{ name: "group1" }}>Waste from mines or quarries</Radio>
    <Radio input={{ name: "group1" }}>Farm or agricultural waste</Radio>
  </div>
));

storiesOf("Radio", module).add("Radio inline", () => (
  <div>
    <Radio input={{ name: "group1" }} inline>
      Yes
    </Radio>
    <Radio input={{ name: "group1" }} inline>
      No
    </Radio>
  </div>
));

storiesOf("Radio", module).add("Radio disabled", () => (
  <div>
    <Radio input={{ name: "group1" }} disabled="disabled">
      Disabled checkbox option
    </Radio>
  </div>
));

storiesOf("Radio", module).add("Radio preselected", () => (
  <div>
    <Radio input={{ name: "group1", readOnly: true }} defaultChecked>
      Farm or agricultural waste
    </Radio>
  </div>
));

storiesOf("Radio", module).add("Radio preselected & disabled", () => (
  <div>
    <Radio
      input={{ name: "group1", onChange: null }}
      disabled="disabled"
      defaultChecked
    >
      Farm or agricultural waste
    </Radio>
  </div>
));

storiesOf("Radio", module).add(
  "Usage with Final/Redux Form - multi checkbox validation",
  () => <App />
);
