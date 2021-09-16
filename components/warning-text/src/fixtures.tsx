import React from 'react';
import { text } from '@storybook/addon-knobs';

import { WarningText } from '.';

interface Props {
  children?: React.ReactNode;
}

const WarningTextWithKnobs: React.FC<Props> = ({ children }: Props) => (
  <WarningText>{text('Children', `${children}`)}</WarningText>
);

WarningTextWithKnobs.defaultProps = {
  children: 'Example text',
};

export default WarningTextWithKnobs;

export const WarningWithLongText: React.FC = () => (
  <WarningText>
    A very long warning message. This includes a lot of text to give a good representation of a more average length
    warning. That way you can see more than one line wrapping.
  </WarningText>
);
