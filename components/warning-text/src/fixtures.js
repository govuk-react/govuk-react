import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import WarningText from '.';

export default ({ children = 'Example text' }) => (
  <WarningText>{text('Children', `${children}`)}</WarningText>
);

export const WarningWithLongText = () => (
  <WarningText>
    A very long warning message. This includes a lot of text to give a good
    representation of a more average length warning. That way you can see more
    than one line wrapping.
  </WarningText>
);
