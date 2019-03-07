import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';
import Paragraph from '@govuk-react/paragraph';

import SkipLink from '.';

import ReadMe from '../README.md';

const stories = storiesOf('Navigation/SkipLink', module);
stories.addDecorator(WithDocsCustom(ReadMe));

class AutoFocussed extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the focusable DOM element
    this.focusableRef = React.createRef();
  }

  componentDidMount() {
    this.focusableRef.current.focus();
  }

  render() {
    return (
      <SkipLink
        ref={this.focusableRef}
        focusable
        {...this.props}
      />
    );
  }
}

stories.add(
  'Component default',
  () => (
    <div>
      <Paragraph>
        The skip link component in this example should automatically focus.
        If it loses focus, tab to this example to see it.
      </Paragraph>
      <AutoFocussed href="#content">Skip to main content</AutoFocussed>
    </div>
  ),
  { chromatic: { delay: 300 } },
);
