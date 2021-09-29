import { MultiChoice } from '.';
import MultiChoiceWithKnobs, { MultiChoiceWithKnobsHint, MultiChoiceWithKnobsError } from './fixtures';

export default {
  title: 'Form/Multi choice',
  component: MultiChoice,
};

export const Default = MultiChoiceWithKnobs;

export const WithAHint = MultiChoiceWithKnobsHint;
export const WithAnError = MultiChoiceWithKnobsError;
