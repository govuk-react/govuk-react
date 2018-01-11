import React from 'react';
import { storiesOf } from '@storybook/react'
import Breadcrumb from '.'
import glamorous from 'glamorous'



storiesOf('Breadcrumb', module).add('Component default', () => (
  <Breadcrumb>
    <a href="/section">Section 1</a>
    <a href="/section/sub-section">Sub-section</a>
    <a href="/section/three">Three sections and a long line</a>
  </Breadcrumb>
));
