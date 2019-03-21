import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter, Link } from 'react-router-dom';

import asAnchor from '.';

const AnchorTag = asAnchor('a');
const AnchorLink = asAnchor(Link);

const stories = storiesOf('Utilities/asAnchor', module);

stories.add('asAnchor passing in anchor', () => <AnchorTag href="https://cats.org">AsAnchor anchor example</AnchorTag>);

stories.add('asAnchor passing in anchor target=blank', () => (
  <AnchorTag href="https://cats.org" target="_blank">
    AsAnchor anchor example
  </AnchorTag>
));

stories.add('asAnchor passing in React Router Link', () => (
  <BrowserRouter>
    <AnchorLink to="https://dogs.org">AsAnchor Link example</AnchorLink>
  </BrowserRouter>
));
