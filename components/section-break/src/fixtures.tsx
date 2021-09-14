import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { SectionBreakDocumented as SectionBreak } from '.';

const SectionBreakExample: React.FC = () => (
  <SectionBreak visible={boolean('visible', true)} level={text('level', 'LARGE')} />
);
export default SectionBreakExample;
