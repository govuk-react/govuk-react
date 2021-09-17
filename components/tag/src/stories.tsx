import { withKnobs } from '@storybook/addon-knobs';

import { Tag } from '.';
import { TagWithKnobs, TagInactive } from './fixtures';

export default {
  title: 'Typography/Tag',
  component: Tag,
  decorators: [withKnobs],
};

export const Default = TagWithKnobs;

export const Inactive = TagInactive;
