import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocs } from 'storybook-readme';

import Button, {
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocs(ReadMe));

stories.add('Component Default', Button);

stories.add('Start', ButtonStart);

stories.add('Start with icon', ButtonStartIcon);

stories.add('Disabled', ButtonDisabled);

stories.add('Disabled start with icon', ButtonDisabledStartIcon);
