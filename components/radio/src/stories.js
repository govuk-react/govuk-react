import React from 'react';
import { Field } from 'react-final-form';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { FinalFormWrapper, WithDocsCustom } from '@govuk-react/storybook-components';

import MultiChoice from '@govuk-react/multi-choice';
import Radio from '.';
import ReadMe from '../README.md';

const required = value => (value ? undefined : 'Required');

const RadioGroup = ({
  label, hint, options, inline, input, meta,
}) => (
  <div>
    <MultiChoice label={label} hint={hint} meta={meta}>
      {options.map(o => (
        <div key={o.value}>
          <Radio
            name={input.name}
            value={o.value}
            input={{ onBlur: input.onBlur, onFocus: input.onFocus, onChange: input.onChange }}
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
  options: [],
};

RadioGroup.propTypes = {
  input: PropTypes.shape({}),
  meta: PropTypes.shape({}),
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  inline: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  })),
};

const stories = storiesOf('Form/Radio', module);
const examples = storiesOf('Form/Radio/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Radio name="group1">{text('children', 'radio button text example')}</Radio>
));

examples.add('Radio stacked', () => (
  <div>
    <Radio name="group1">Waste from animal carcasses</Radio>
    <Radio name="group1">Waste from mines or quarries</Radio>
    <Radio name="group1">Farm or agricultural waste</Radio>
  </div>
));

examples.add('Radio inline', () => (
  <div>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </div>
));

examples.add('Radio disabled', () => (
  <div>
    <Radio name="group1" disabled="disabled">
      Disabled checkbox option
    </Radio>
  </div>
));

examples.add('Radio preselected', () => (
  <div>
    <Radio name="group1" checked>
      Farm or agricultural waste
    </Radio>
  </div>
));

examples.add('Radio preselected & disabled', () => (
  <div>
    <Radio name="group1" disabled="disabled" checked>
      Farm or agricultural waste
    </Radio>
  </div>
));

examples.add(
  'Usage with Final/Redux Form - multi checkbox validation',
  () => (
    <FinalFormWrapper>
      <Field
        name="likesAnimals"
        label="Do you like animals?"
        hint="You must tell us"
        component={RadioGroup}
        options={[
          { title: 'Yep', value: 'yes' },
          { title: 'Nope', value: 'no' },
        ]}
        validate={required}
        inline
      />
    </FinalFormWrapper>
  ),
);
