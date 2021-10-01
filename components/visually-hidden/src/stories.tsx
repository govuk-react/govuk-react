import type { Story } from '@storybook/react';

import React, { Component } from 'react';

import Paragraph from '@govuk-react/paragraph';
import Button from '@govuk-react/button';

import { VisuallyHidden } from '.';

export default {
  title: 'Utility/Visually hidden',
  component: VisuallyHidden,
};

export const Default: Story = (args) => (
  <div>
    <Paragraph>
      Following this paragraph is some hidden content. If `focusable` is enabled then you should be able to tab to it.
    </Paragraph>
    <VisuallyHidden {...args}>Some hidden content</VisuallyHidden>
  </div>
);
Default.args = {
  focusable: true,
};

class Focusable extends Component<React.ComponentProps<typeof VisuallyHidden>> {
  focusableRef;

  constructor(props) {
    super(props);
    // create a ref to store the focusable DOM element
    this.focusableRef = React.createRef();
  }

  componentDidMount() {
    this.focusableRef.current?.focus();
  }

  render() {
    return <VisuallyHidden ref={this.focusableRef} focusable {...this.props} />;
  }
}
export const FocussedFocusable: Story = () => <Focusable>Focussed focusable VisuallyHidden element</Focusable>;
export const FocussedFocusableAsAButton: Story = () => (
  <Focusable as={Button}>VisuallyHidden as Button (focusable)</Focusable>
);
