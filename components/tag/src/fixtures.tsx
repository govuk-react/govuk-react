import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Tag, { DocumentedTag } from '.';

const TagWithKnobs: React.FC = () => <Tag inactive={boolean('Inactive', false)}>{text('Children', 'beta')}</Tag>;

const TagInactive: React.FC = () => <Tag inactive={boolean('Inactive', true)}>{text('Children', 'beta')}</Tag>;

// Export documented version so that default test will give coverage
export default DocumentedTag;

export { TagWithKnobs, TagInactive };
