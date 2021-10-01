import * as React from 'react';
import styled from 'styled-components';

import BackLink from '@govuk-react/back-link';
import { H1, H3 } from '@govuk-react/heading';
import { MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';

import { Page } from '.';

export default {
  title: 'Page & Layout/Page',
  component: Page,
};

export const Default: React.FC = () => (
  <div>
    <Page beforeChildren={<BackLink href="#" />}>
      <H1>Page Title</H1>
    </Page>
  </div>
);

const WideContainer = styled(Page.WidthContainer)({
  maxWidth: 'inherit',
  [MEDIA_QUERIES.MAX]: {
    margin: `0 ${GUTTER}`,
  },
});

export const CustomWidthContainerNoWidthLimit: React.FC = () => (
  <div>
    <Page container={WideContainer}>
      <H3>Page container has no maxWidth</H3>
    </Page>
  </div>
);

const MainContainer = styled(Page.Main)({
  backgroundColor: '#ddd',
});

export const CustomMainContainerBackgroundColour: React.FC = () => (
  <div>
    <Page main={MainContainer}>
      <H3>Main container with custom background colour</H3>
    </Page>
  </div>
);

export const CustomMainContainerAdjustedPadding: React.FC = () => (
  <div>
    <Page main={(props) => <Page.Main padding={{ size: 1 }} {...props} />}>
      <H3>Main container with adjusted padding using withWhiteSpace padding prop</H3>
    </Page>
  </div>
);
