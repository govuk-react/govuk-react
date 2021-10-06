import type { Story } from '@storybook/react';

import React, { Component } from 'react';

import Paragraph from '@govuk-react/paragraph';

import { SkipLink } from '.';

export default {
  title: 'Navigation/Skip link',
  id: 'skip-link',
  component: SkipLink,
};

export const Default: Story = (args) => <SkipLink {...args} />;
Default.args = {
  href: '#main-content',
  children: 'Skip to main content',
};

class AutoFocussedSkipLink extends Component<{ href: string }> {
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
    return <SkipLink ref={this.focusableRef} {...this.props} />;
  }
}
export const AutoFocussed: React.FC = () => (
  <div>
    <Paragraph>
      The skip link component in this example should automatically focus. This is for visual regression testing.
    </Paragraph>
    <AutoFocussedSkipLink href="#main-content">Skip to main content</AutoFocussedSkipLink>
    <br />
    <br />
    <div id="main-content">
      <Paragraph id="main-content">
        This paragraph is within a div with an id of `main-content` to match the `href=&quot;#main-content&quot;` prop
        set on the SkipLink component in this example.
      </Paragraph>
      <Paragraph>
        NB if you are using Safari you may need to go to Preferences &gt; Advanced to enable keyboard focussing.
      </Paragraph>
    </div>
  </div>
);
