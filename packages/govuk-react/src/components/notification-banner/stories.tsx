import * as React from 'react';
import type { Meta } from '@storybook/react';
import { Body } from '../body';
import * as NotificationBanner from '.';

export default {
  title: 'Page & Layout/Notification banner',
  id: 'notification-banner',
  component: NotificationBanner.Root,
} satisfies Meta<typeof NotificationBanner.Root>;

export const Default = {
  render: () => (
    <NotificationBanner.Root>
      <NotificationBanner.Header>
        <NotificationBanner.Title />
      </NotificationBanner.Header>
      <NotificationBanner.Content>
        <NotificationBanner.Heading>
          You have 7 days left to send your application.{' '}
          <NotificationBanner.Link href="#">View application</NotificationBanner.Link>.
        </NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner.Root>
  ),
};

export const Success = {
  render: () => (
    <NotificationBanner.Root success>
      <NotificationBanner.Header>
        <NotificationBanner.Title>Success</NotificationBanner.Title>
      </NotificationBanner.Header>
      <NotificationBanner.Content>
        <NotificationBanner.Heading>Training outcome recorded and trainee withdrawn</NotificationBanner.Heading>
        <Body>
          Contact <NotificationBanner.Link href="#">example@department.gov.uk</NotificationBanner.Link> if you think
          there’s a problem.
        </Body>
      </NotificationBanner.Content>
    </NotificationBanner.Root>
  ),
};
