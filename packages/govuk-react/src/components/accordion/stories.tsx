import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';

import * as Accordion from '.';

const meta = {
  title: 'Navigation/Accordion',
  id: 'accordion',
  component: Accordion.Composite,
  parameters: {
    docs: {
      description: {
        component:
          'The accordion component lets users show and hide sections of related content on a page. Without JavaScript, every section is shown.',
      },
    },
  },
} satisfies Meta<typeof Accordion.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

const content = (heading: string) => <p className="govuk-body">This is the content for {heading}.</p>;

const headings = ['Writing well for the web', 'Writing well for specialists', 'Know your audience', 'How people read'];

export const Default: Story = {
  args: {
    id: 'accordion-default',
    rememberExpanded: false,
    sections: headings.map((heading) => ({ heading, children: content(heading) })),
  },
};

const list = (links: string[]) => (
  <ul className="govuk-list">
    {links.map((link) => (
      <li key={link}>
        <a className="govuk-link" href="#accordion">
          {link}
        </a>
      </li>
    ))}
  </ul>
);

export const WithSummarySections: Story = {
  args: {
    id: 'accordion-with-summary-sections',
    rememberExpanded: false,
    sections: [
      {
        heading: 'Understanding agile project management',
        summary: 'Introductions, methods, core features.',
        children: list([
          'Agile and government services: an introduction',
          'Agile methods: an introduction',
          'Core principles of agile',
        ]),
      },
      {
        heading: 'Working with agile methods',
        summary: 'Workspaces, tools and techniques, user stories, planning.',
        children: list([
          'Creating an agile working environment',
          'Agile tools and techniques',
          'Set up a team wall',
          'Writing user stories',
          'Planning in agile',
          'Deciding on priorities',
          'Developing a roadmap',
        ]),
      },
    ],
  },
};

/** Some sections open, for visual regression. */
export const SectionsOpen: Story = {
  args: {
    ...Default.args,
    id: 'accordion-sections-open',
    defaultValue: ['accordion-sections-open-content-1', 'accordion-sections-open-content-3'],
  },
};

/** Every section open, so the button says "Hide all sections". */
export const AllOpen: Story = {
  args: {
    ...WithSummarySections.args,
    id: 'accordion-all-open',
    defaultValue: ['accordion-all-open-content-1', 'accordion-all-open-content-2'],
  },
};

export const WithParts: Story = {
  args: Default.args,
  render: () => (
    <Accordion.Root id="accordion-parts" rememberExpanded={false} defaultValue={['parts-1']}>
      <Accordion.Controls />
      {headings.slice(0, 2).map((heading, index) => (
        <Accordion.Section key={heading} value={`parts-${index + 1}`}>
          <Accordion.SectionHeader>
            <Accordion.SectionHeading>
              <Accordion.SectionButton id={`accordion-parts-heading-${index + 1}`}>{heading}</Accordion.SectionButton>
            </Accordion.SectionHeading>
          </Accordion.SectionHeader>
          <Accordion.SectionContent id={`accordion-parts-content-${index + 1}`}>
            {content(heading)}
          </Accordion.SectionContent>
        </Accordion.Section>
      ))}
    </Accordion.Root>
  ),
};

function ControlledAccordion() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <>
      <p className="govuk-body">Open sections: {value.length ? value.join(', ') : 'none'}.</p>
      <button type="button" className="govuk-button govuk-button--secondary" onClick={() => setValue([])}>
        Close every section
      </button>
      <Accordion.Composite
        id="accordion-controlled"
        rememberExpanded={false}
        value={value}
        onValueChange={setValue}
        sections={headings.map((heading, index) => ({
          value: `section-${index + 1}`,
          heading,
          children: content(heading),
        }))}
      />
    </>
  );
}

export const Controlled: Story = {
  args: Default.args,
  render: () => <ControlledAccordion />,
};
