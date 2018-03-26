import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingBox from '.';

storiesOf('LoadingBox', module)
  .add('LoadingBox default', () => (
    <LoadingBox>LoadingBox example</LoadingBox>
  ))
  .add('LoadingBox with black', () => (
    <LoadingBox backgroundColor="#000" backgroundColorOpacity={1}><span style={{ color: '#ffffff' }}>LoadingBox example</span></LoadingBox>
  ));
