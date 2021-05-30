import { withKnobs } from '@storybook/addon-knobs';

import { LinkDocumented as Link } from '.';
import LinkFixture, { LinkWithRouter } from './fixtures';

export default {
  title: 'Navigation/Link',
  component: Link,
  decorators: [withKnobs],
};

export const Default = LinkFixture;
export const WithReactRouter = LinkWithRouter;
