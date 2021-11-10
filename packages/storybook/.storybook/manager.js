
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'govuk-react',
  sortStoriesByKind: true,
  brandUrl: 'https://github.com/govuk-react/govuk-react',
});

addons.setConfig({
  theme,
});

