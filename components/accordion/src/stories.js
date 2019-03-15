import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { AccordionClassComponent, ExampleWithoutSummaries, ExampleWithSummaries } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Accordion', module);
const examples = storiesOf('Accordion/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

examples.addDecorator(WithDocsCustom());

stories.add('Component default', () => (
  <ExampleWithSummaries
    initialState={{
      accordionOne: false,
      accordionTwo: false,
      accordionThree: false,
      accordionFour: false,
    }}
  />
));

examples.add('without summaries', () => (
  <ExampleWithoutSummaries
    initialState={{
      accordionOne: false,
      accordionTwo: false,
      accordionThree: false,
      accordionFour: false,
    }}
  />
));

examples.add('with summaries', () => (
  <ExampleWithSummaries
    initialState={{
      accordionOne: false,
      accordionTwo: false,
      accordionThree: false,
      accordionFour: false,
    }}
  />
));

examples.add('as class component', () => <AccordionClassComponent />);
