import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';

import { SectionBreakDocumented as SectionBreak } from '.';

export default () => <SectionBreak visible={boolean('visible', true)} level={text('level', 'LARGE')} />;
