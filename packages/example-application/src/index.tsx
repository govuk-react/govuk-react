import * as React from 'react';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './home';
import Forms from './forms/forms';

const ExampleApplication: React.FC<ExampleApplicationProps> = ({ routerEntries }: ExampleApplicationProps) => (
  <React.StrictMode>
    <Router initialEntries={routerEntries}>
      <GovUK.Page
        header={
          <>
            <GovUK.Header.Composite />
            <GovUK.ServiceNavigation.Root as="section">
              <GovUK.ServiceNavigation.WidthContainer>
                <GovUK.ServiceNavigation.Container>
                  <GovUK.ServiceNavigation.ServiceName>
                    <GovUK.ServiceNavigation.Link asChild>
                      <Link to="/">React</Link>
                    </GovUK.ServiceNavigation.Link>
                  </GovUK.ServiceNavigation.ServiceName>
                  <GovUK.ServiceNavigation.Wrapper>
                    <GovUK.ServiceNavigation.List>
                      <GovUK.ServiceNavigation.Item>
                        <GovUK.ServiceNavigation.Link asChild>
                          <Link to="/">Home</Link>
                        </GovUK.ServiceNavigation.Link>
                      </GovUK.ServiceNavigation.Item>
                      <GovUK.ServiceNavigation.Item>
                        <GovUK.ServiceNavigation.Link asChild>
                          <Link to="/forms">Forms</Link>
                        </GovUK.ServiceNavigation.Link>
                      </GovUK.ServiceNavigation.Item>
                    </GovUK.ServiceNavigation.List>
                  </GovUK.ServiceNavigation.Wrapper>
                </GovUK.ServiceNavigation.Container>
              </GovUK.ServiceNavigation.WidthContainer>
            </GovUK.ServiceNavigation.Root>
          </>
        }
        footer={<GovUK.Footer.Composite />}
      >
        <Routes>
          <Route path="/forms/*" element={<Forms />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </GovUK.Page>
    </Router>
  </React.StrictMode>
);

export interface ExampleApplicationProps {
  routerEntries?: string[];
}

export default ExampleApplication;
