import type { ReactNode } from 'react';
import * as Footer from 'govuk-react/footer';
import * as Header from 'govuk-react/header';
import { Page } from 'govuk-react/page';
import * as ServiceNavigation from 'govuk-react/service-navigation';
import { serviceName } from '../journeys';

/** The page around each journey's content, as govuk-frontend's page template renders it by default. */
export function Chrome({ serviceHref, children }: { serviceHref: string; children: ReactNode }) {
  return (
    <Page
      header={
        <>
          <Header.Composite />
          <ServiceNavigation.Composite serviceName={serviceName} serviceHref={serviceHref} />
        </>
      }
      footer={<Footer.Composite />}
    >
      {children}
    </Page>
  );
}
