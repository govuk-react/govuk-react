import { withKnobs } from '@storybook/addon-knobs';

import { DocumentedTag } from '.';
import { TagWithKnobs, TagInactive } from './fixtures';

export default {
  title: 'Typography/Tag',
  component: DocumentedTag,
  decorators: [withKnobs],
};

export const Default = TagWithKnobs;

export const Inactive = TagInactive;
