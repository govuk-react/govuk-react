import { withKnobs } from '@storybook/addon-knobs';
import { MultiChoice } from '.';
import MultiChoiceWithKnobs, { MultiChoiceWithKnobsHint, MultiChoiceWithKnobsError } from './fixtures';

export default {
  title: 'Form/Multi choice',
  component: MultiChoice,
  decorators: [withKnobs],
};

export const Default = MultiChoiceWithKnobs;

export const WithAHint = MultiChoiceWithKnobsHint;
export const WithAnError = MultiChoiceWithKnobsError;
