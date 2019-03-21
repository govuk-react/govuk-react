import React from 'react';
import PropTypes from 'prop-types';
import { text } from '@storybook/addon-knobs/react';

import WarningText from '.';

const WarningTextWithKnobs = ({ children = 'Example text' }) => (
  <WarningText>{text('Children', `${children}`)}</WarningText>
);

WarningTextWithKnobs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WarningTextWithKnobs;

export const WarningWithLongText = () => (
  <WarningText>
    A very long warning message. This includes a lot of text to give a good representation of a more average length
    warning. That way you can see more than one line wrapping.
  </WarningText>
);
