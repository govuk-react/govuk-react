import React, { Component } from 'react';

import { boolean } from '@storybook/addon-knobs';
import Paragraph from '@govuk-react/paragraph';
import Button from '@govuk-react/button';

import { VisuallyHidden } from '.';

export default {
  title: 'Utility/Visually hidden',
  component: VisuallyHidden,
};

export const Default: React.FC = () => (
  <div>
    <Paragraph>
      Following this paragraph is some hidden content. If `focusable` is enabled then you should be able to tab to it.
    </Paragraph>
    <VisuallyHidden focusable={boolean('focusable', true)}>Some hidden content</VisuallyHidden>
  </div>
);

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
export const FocussedFocusable: React.FC = () => <Focusable>Focussed focusable VisuallyHidden element</Focusable>;
export const FocussedFocusableAsAButton: React.FC = () => (
  <Focusable as={Button}>VisuallyHidden as Button (focusable)</Focusable>
);
