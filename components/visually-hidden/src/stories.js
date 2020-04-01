import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import Paragraph from '@govuk-react/paragraph';
import Button from '@govuk-react/button';

import VisuallyHidden from '.';

import ReadMe from '../README.md';

const stories = storiesOf('Misc/VisuallyHidden', module);
const examples = storiesOf('Misc/VisuallyHidden/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <div>
    <Paragraph>
      Following this paragraph is some hidden content. If `focusable` is enabled then you should be able to tab to it.
    </Paragraph>
    <VisuallyHidden focusable={boolean('focusable', true)}>Some hidden content</VisuallyHidden>
  </div>
));

class Focusable extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the focusable DOM element
    this.focusableRef = React.createRef();
  }

  componentDidMount() {
    this.focusableRef.current.focus();
  }

  render() {
    return <VisuallyHidden ref={this.focusableRef} focusable {...this.props} />;
  }
}
examples.add('Focussed focusable', () => <Focusable>Focussed focusable VisuallyHidden element</Focusable>, {
  chromatic: { delay: 300 },
});

examples.add(
  'Focussed focusable as a button',
  () => <Focusable as={Button}>VisuallyHidden as Button (focusable)</Focusable>,
  {
    chromatic: { delay: 300 },
  }
);
