import { DetailsSimple, DetailsOpen, DetailsParagraph } from './fixtures';
import { Details } from '.';

export default {
  title: 'Typography/Details',
  component: Details,
};

export const Default = DetailsSimple;
export const SetAsOpen = DetailsOpen;
export const WithParagraphContents = DetailsParagraph;
