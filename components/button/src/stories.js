import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Button, {
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
} from './fixture';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Button text', Button);

stories.add('Start', ButtonStart);

stories.add('Start with icon', ButtonStartIcon);

stories.add('Disabled', ButtonDisabled);

stories.add('Disabled start with icon', ButtonDisabledStartIcon);
