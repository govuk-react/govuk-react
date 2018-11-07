import React from 'react';
import { TopNav, BackLink, H1 } from 'govuk-react';
import Page from './';

const MyPage = () => (
  <Page
    header={<TopNav />}
    // TODO: no footer component yet
    // footer={<Footer />}
    beforeChildren={<BackLink href="#" />}
  >
    <H1>Page Title</H1>
  </Page>);

export default MyPage;
