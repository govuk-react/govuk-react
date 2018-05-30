import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import InsetText from '.';

export const insetText = 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.';

export default () => <InsetText isNarrow={boolean('isNarrow', false)}>{text('children', insetText)}</InsetText>;

export const InsetTextNarrowBorder = () => <InsetText isNarrow={boolean('isNarrow', true)}>{text('children', insetText)}</InsetText>;
