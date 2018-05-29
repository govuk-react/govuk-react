import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Paragraph, { SupportingParagraph } from './fixtures';

const stories = storiesOf('Paragraph', module);

stories.addDecorator(withKnobs);

stories.add('Component default', Paragraph);

stories.add('Supporting paragaph', SupportingParagraph);
