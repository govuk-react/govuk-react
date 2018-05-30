import React from 'react';
import { boolean } from '@storybook/addon-knobs/react';
import InsetText from '.';

const insetText = 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.';

export default () => <InsetText>{insetText}</InsetText>;

export const InsetTextNarrowBorder = () => <InsetText isNarrow={boolean('IsNarrow', true)}>{insetText}</InsetText>;
