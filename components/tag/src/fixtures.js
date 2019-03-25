import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';

import Tag, { DocumentedTag } from '.';

const TagWithKnobs = () => <Tag inactive={boolean('Inactive', false)}>{text('Children', 'beta')}</Tag>;

const TagInactive = () => <Tag inactive={boolean('Inactive', true)}>{text('Children', 'beta')}</Tag>;

// Export documented version so that default test will give coverage
export default DocumentedTag;

export { TagWithKnobs, TagInactive };
