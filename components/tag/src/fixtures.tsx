import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Tag } from '.';

const TagWithKnobs: React.FC = () => <Tag inactive={boolean('Inactive', false)}>{text('Children', 'beta')}</Tag>;

const TagInactive: React.FC = () => <Tag inactive={boolean('Inactive', true)}>{text('Children', 'beta')}</Tag>;

export default Tag;

export { TagWithKnobs, TagInactive };
