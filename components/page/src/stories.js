import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import BackLink from '@govuk-react/back-link';
import { H1, H3 } from '@govuk-react/heading';
import { MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';

import ReadMe from '../README.md';

import Page from '.';

const stories = storiesOf('Layout/Page', module);
const examples = storiesOf('Layout/Page/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <div>
    <Page beforeChildren={<BackLink href="#" />}>
      <H1>Page Title</H1>
    </Page>
  </div>
));

const WideContainer = styled(Page.WidthContainer)({
  maxWidth: 'inherit',
  [MEDIA_QUERIES.MAX]: {
    margin: `0 ${GUTTER}`,
  },
});

examples.add('Custom width container (no width limit)', () => (
  <div>
    <Page container={WideContainer}>
      <H3>Page container has no maxWidth</H3>
    </Page>
  </div>
));

const MainContainer = styled(Page.Main)({
  backgroundColor: '#ddd',
});

examples.add('Custom main container (background colour)', () => (
  <div>
    <Page main={MainContainer}>
      <H3>Main container with custom background colour</H3>
    </Page>
  </div>
));

examples.add('Custom main container (adjusted padding)', () => (
  <div>
    <Page main={props => <Page.Main padding={{ size: 1 }} {...props} />}>
      <H3>Main container with adjusted padding using withWhiteSpace padding prop</H3>
    </Page>
  </div>
));
