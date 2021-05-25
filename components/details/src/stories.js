import { withKnobs } from '@storybook/addon-knobs';

import { DetailsSimple, DetailsOpen, DetailsParagraph } from './fixtures';
import Details from '.';

export default {
  title: 'Core/Details',
  component: Details,
  decorators: [withKnobs],
};

export const Default = DetailsSimple;
export const SetAsOpen = DetailsOpen;
export const WithParagraphContents = DetailsParagraph;
