import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Accordion from '.';

const meta = {
  title: 'Primitives/Accordion',
  id: 'primitives-accordion',
  component: Accordion.Root,
} satisfies Meta<typeof Accordion.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const sections = [
  { value: 'web', heading: 'Writing well for the web', content: 'This is the content for Writing well for the web.' },
  {
    value: 'specialists',
    heading: 'Writing well for specialists',
    content: 'This is the content for Writing well for specialists.',
  },
  { value: 'research', heading: 'Know your audience', content: 'This is the content for Know your audience.' },
];

export const Default: Story = {
  render: () => (
    <Accordion.Root rememberExpanded={false}>
      <Accordion.Controls>
        <Accordion.ShowAll>
          <Accordion.ShowAllText />
        </Accordion.ShowAll>
      </Accordion.Controls>
      {sections.map((section) => (
        <Accordion.Item key={section.value} value={section.value}>
          <h2>
            <Accordion.Fallback>{section.heading}</Accordion.Fallback>
            <Accordion.Trigger>
              <Accordion.Label>{section.heading}</Accordion.Label> <Accordion.ToggleText />
            </Accordion.Trigger>
          </h2>
          <Accordion.Content id={`accordion-${section.value}`}>
            <p>{section.content}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};
