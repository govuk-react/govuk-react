import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import {
  ButtonWithKnobs,
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
  ButtonBlue,
  ButtonWacky,
  ButtonAsLink,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Buttons', module);
const examples = storiesOf('Form/Buttons/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component Default', ButtonWithKnobs);

examples.add('Start', ButtonStart);

examples.add('Start with icon', ButtonStartIcon);

examples.add('Disabled', ButtonDisabled);

examples.add('Disabled start with icon', ButtonDisabledStartIcon);

examples.add('Custom colour', ButtonBlue);

examples.add('Custom colours (all options)', ButtonWacky);

examples.add('Router link button', ButtonAsLink);
