import type { Story } from '@storybook/react';

import * as React from 'react';
import styled from 'styled-components';

import BackLink from '@govuk-react/back-link';
import { H1, H3 } from '@govuk-react/heading';
import { MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';

import { Page } from '.';

export default {
  title: 'Page & Layout/Page',
  id: 'page',
  component: Page,
};

const Template: Story<React.ComponentProps<typeof Page>> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  beforeChildren: <BackLink href="#" />,
  children: <H1>Page Title</H1>,
};

export const CustomWidthContainerNoWidthLimit = Template.bind({});
CustomWidthContainerNoWidthLimit.args = {
  container: styled(Page.WidthContainer)({
    maxWidth: 'inherit',
    [MEDIA_QUERIES.MAX]: {
      margin: `0 ${GUTTER}`,
    },
  }),
  children: <H3>Page container has no maxWidth</H3>,
};

export const CustomMainContainerBackgroundColour = Template.bind({});
CustomMainContainerBackgroundColour.args = {
  main: styled(Page.Main)({
    backgroundColor: '#ddd',
  }),
  children: <H3>Main container with custom background colour</H3>,
};

export const CustomMainContainerAdjustedPadding = Template.bind({});
CustomMainContainerAdjustedPadding.args = {
  main: (props) => <Page.Main padding={{ size: 1 }} {...props} />,
  children: <H3>Main container with adjusted padding using withWhiteSpace padding prop</H3>,
};
