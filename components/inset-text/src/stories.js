import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import InsetText, { InsetTextNarrowBorder } from './fixtures';

const stories = storiesOf('InsetText', module);

stories.addDecorator(withKnobs);

stories.add('Default wide border', InsetText);

stories.add('Narrow border', InsetTextNarrowBorder);
