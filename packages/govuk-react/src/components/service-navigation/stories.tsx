import * as React from 'react';
import { useState } from 'react';
import type { Meta } from '@storybook/react';
import * as ServiceNavigation from '.';

export default {
  title: 'Navigation/Service navigation',
  id: 'service-navigation',
  component: ServiceNavigation.Composite,
} satisfies Meta<typeof ServiceNavigation.Composite>;

export const Default = {
  render: () => (
    <ServiceNavigation.Composite>
      <ServiceNavigation.ItemComposite href="#">Navigation item 1</ServiceNavigation.ItemComposite>
      <ServiceNavigation.ItemComposite href="#" active>
        Navigation item 2
      </ServiceNavigation.ItemComposite>
      <ServiceNavigation.ItemComposite href="#">Navigation item 3</ServiceNavigation.ItemComposite>
    </ServiceNavigation.Composite>
  ),
};

export const WithParts = {
  render: () => (
    <ServiceNavigation.Root as="section">
      <ServiceNavigation.WidthContainer>
        <ServiceNavigation.Container>
          <ServiceNavigation.ServiceName>
            <ServiceNavigation.Link href="#">Service name</ServiceNavigation.Link>
          </ServiceNavigation.ServiceName>
          <ServiceNavigation.Wrapper>
            <ServiceNavigation.Toggle />
            <ServiceNavigation.List>
              <ServiceNavigation.Item>
                <ServiceNavigation.Link href="#">Navigation item 1</ServiceNavigation.Link>
              </ServiceNavigation.Item>
              <ServiceNavigation.Item active>
                <ServiceNavigation.Link href="#">
                  <ServiceNavigation.ActiveFallback>Navigation item 2</ServiceNavigation.ActiveFallback>
                </ServiceNavigation.Link>
              </ServiceNavigation.Item>
              <ServiceNavigation.Item>
                <ServiceNavigation.Link href="#">Navigation item 3</ServiceNavigation.Link>
              </ServiceNavigation.Item>
            </ServiceNavigation.List>
          </ServiceNavigation.Wrapper>
        </ServiceNavigation.Container>
      </ServiceNavigation.WidthContainer>
    </ServiceNavigation.Root>
  ),
};

/** Below tablet width, choosing a link closes the menu, as a single-page app would after navigating. */
export const Controlled = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    const close = (event: React.MouseEvent) => {
      event.preventDefault();
      setOpen(false);
    };
    return (
      <ServiceNavigation.Composite serviceName="Service name" serviceHref="#" open={open} onOpenChange={setOpen}>
        <ServiceNavigation.ItemComposite href="#" onClick={close}>
          Navigation item 1
        </ServiceNavigation.ItemComposite>
        <ServiceNavigation.ItemComposite href="#" current onClick={close}>
          Navigation item 2
        </ServiceNavigation.ItemComposite>
        <ServiceNavigation.ItemComposite href="#" onClick={close}>
          Navigation item 3
        </ServiceNavigation.ItemComposite>
      </ServiceNavigation.Composite>
    );
  },
};
