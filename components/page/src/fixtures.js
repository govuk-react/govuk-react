import React from 'react';
import { BackLink, H1 } from 'govuk-react';
import Page from '.';

const MyPage = () => (
  <Page
    beforeChildren={<BackLink href="#" />}
  >
    <H1>Page Title</H1>
  </Page>);

export default MyPage;
