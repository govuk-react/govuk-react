import { withKnobs } from '@storybook/addon-knobs';

import { SectionBreak } from '.';
import SectionBreakExample from './fixtures';

export default {
  title: 'Page & Layout/Section break',
  component: SectionBreak,
  decorators: [withKnobs],
};

export const Default = SectionBreakExample;
