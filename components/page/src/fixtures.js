import React from 'react';
import { TopNav, BackLink, H1 } from 'govuk-react';
import Page from './';

const MyPage = () => (
  <Page
    header={<TopNav />}
    // TODO: no footer component yet
    // footer={<Footer />}
  >
    <React.Fragment>
      <BackLink href="#" />
      <Page.Main>
        <H1>Page Title</H1>
      </Page.Main>
    </React.Fragment>
  </Page>);

export default MyPage;
