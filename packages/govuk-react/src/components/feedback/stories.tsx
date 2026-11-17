import * as React from 'react';
import type { Meta } from '@storybook/react';
import { Body } from '../body';
import { Link } from '../link';
import * as Feedback from '.';

export default {
  title: 'Page & Layout/Feedback',
  id: 'feedback',
  component: Feedback.Root,
} satisfies Meta<typeof Feedback.Root>;

export const Default = {
  render: () => (
    <Feedback.Composite title="Help us improve this service">
      <Body>
        Tell us about your experience using this service. <Link href="#">Give us your feedback</Link>
      </Body>
    </Feedback.Composite>
  ),
};

export const WithParts = {
  render: () => (
    <Feedback.Root>
      <Feedback.GridRow>
        <Feedback.GridColumn>
          <Feedback.Title>Help us improve this service</Feedback.Title>
        </Feedback.GridColumn>
      </Feedback.GridRow>
    </Feedback.Root>
  ),
};
