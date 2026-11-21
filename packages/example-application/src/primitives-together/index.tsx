import * as React from 'react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Accordion,
  CharacterCount,
  EnhancedFileUpload,
  Heading,
  InputField,
  Modal,
  PasswordInput,
  Radios,
  SearchBox,
  Tabs,
} from 'govuk-react';
import * as AutoFocus from '@govuk-react/primitives/auto-focus';

type Section = { id: string; heading: string };
type Tab = { id: string; label: string; sections: Section[] };

export const tabs: Tab[] = [
  {
    id: 'applications',
    label: 'Applications',
    sections: [
      { id: 'driving-licence', heading: 'Driving licence' },
      { id: 'passport', heading: 'Passport' },
      { id: 'blue-badge', heading: 'Blue Badge' },
    ],
  },
  {
    id: 'appeals',
    label: 'Appeals',
    sections: [
      { id: 'benefit-decision', heading: 'Benefit decision' },
      { id: 'tax-decision', heading: 'Tax decision' },
      { id: 'planning-decision', heading: 'Planning decision' },
    ],
  },
  {
    id: 'complaints',
    label: 'Complaints',
    sections: [
      { id: 'council-services', heading: 'Council services' },
      { id: 'health-services', heading: 'Health services' },
      { id: 'transport', heading: 'Transport' },
    ],
  },
];

const ids = (tab: Tab) => tab.sections.map((section) => section.id);

const sections = tabs.flatMap((tab) => tab.sections.map((section) => ({ ...section, tab: tab.id })));

export type State = {
  /** The selected tab. */
  tab: string;
  /** The tab whose modal is open. */
  modal?: string;
  /** The open accordion sections. */
  expanded: string[];
  /** The section whose first field takes focus, and how many times focus has been asked for. */
  focus?: { section: string; request: number };
};

function SectionForm({ section, focus }: { section: Section; focus: State['focus'] }) {
  const id = (field: string) => `${section.id}-${field}`;
  const focusHere = focus?.section === section.id;
  return (
    <form onSubmit={(event) => event.preventDefault()} noValidate>
      <Radios.Field idPrefix={id('contact')} legend="How would you prefer to be contacted?" legendSize="s">
        <AutoFocus.Root key={focusHere ? focus.request : 'idle'} disabled={!focusHere}>
          <Radios.Item>
            <AutoFocus.Target asChild>
              <Radios.Input id={id('contact')} name={id('contact')} value="email" controls={id('contact-email')} />
            </AutoFocus.Target>
            <Radios.Label htmlFor={id('contact')}>Email</Radios.Label>
          </Radios.Item>
          <Radios.Conditional id={id('contact-email')} checked={false}>
            <InputField id={id('email')} name={id('email')} type="email" autoComplete="email" label="Email address" />
          </Radios.Conditional>
        </AutoFocus.Root>
        <Radios.ItemComposite
          id={id('contact-2')}
          name={id('contact')}
          value="phone"
          label="Phone"
          conditional={
            <InputField id={id('phone')} name={id('phone')} type="tel" autoComplete="tel" label="Phone number" />
          }
        />
        <Radios.ItemComposite id={id('contact-3')} name={id('contact')} value="text" label="Text message" />
      </Radios.Field>
      <CharacterCount.Field
        id={id('more-detail')}
        name={id('more-detail')}
        maxLength={200}
        label="Can you provide more detail?"
        labelSize="s"
        hint="Do not include personal or financial information like your National Insurance number or credit card details."
      />
      <EnhancedFileUpload.Field id={id('file')} name={id('file')} label="Upload a file" />
      <PasswordInput.Field id={id('password')} name={id('password')} label="Password" autoComplete="current-password" />
    </form>
  );
}

export function PrimitivesTogether({ initialState }: { initialState?: State }) {
  const [state, setState] = useState<State>(initialState ?? { tab: tabs[0].id, expanded: [] });

  const find = (query: string) => {
    const section = sections.find((found) => found.heading.toLowerCase() === query.trim().toLowerCase());
    if (!section) return;
    setState((previous) => ({
      tab: section.tab,
      modal: section.tab,
      expanded: previous.expanded.includes(section.id) ? previous.expanded : [...previous.expanded, section.id],
      focus: { section: section.id, request: (previous.focus?.request ?? 0) + 1 },
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('q');
    if (typeof query === 'string') find(query);
  };

  return (
    <>
      <form role="search" onSubmit={onSubmit}>
        <SearchBox.AutocompleteComposite
          id="primitives-together-search"
          name="q"
          label="Find a form"
          labelSize="m"
          minLength={1}
          suggestions={sections.map((section) => section.heading)}
          onConfirm={(value, event) => {
            event.preventDefault();
            find(value);
          }}
        />
      </form>
      <Tabs.Root value={state.tab} onValueChange={(tab) => setState((previous) => ({ ...previous, tab }))}>
        <Tabs.Title />
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.ListItem key={tab.id} value={tab.id}>
              <Tabs.Tab value={tab.id}>{tab.label}</Tabs.Tab>
            </Tabs.ListItem>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Panel key={tab.id} value={tab.id}>
            <Heading size="l">{tab.label}</Heading>
            <Modal.Root
              open={state.modal === tab.id}
              onOpenChange={(open) =>
                setState((previous) => ({
                  ...previous,
                  modal: open ? tab.id : undefined,
                  focus: open ? previous.focus : undefined,
                }))
              }
            >
              <Modal.Trigger variant="secondary">Update {tab.label.toLowerCase()}</Modal.Trigger>
              <Modal.Content>
                <Modal.Title>{tab.label}</Modal.Title>
                <Accordion.Root
                  id={`${tab.id}-accordion`}
                  rememberExpanded={false}
                  value={state.expanded.filter((section) => ids(tab).includes(section))}
                  onValueChange={(expanded) =>
                    setState((previous) => ({
                      ...previous,
                      expanded: [...previous.expanded.filter((section) => !ids(tab).includes(section)), ...expanded],
                    }))
                  }
                >
                  <Accordion.Controls />
                  {tab.sections.map((section, index) => (
                    <Accordion.SectionComposite
                      key={section.id}
                      accordionId={`${tab.id}-accordion`}
                      index={index + 1}
                      value={section.id}
                      heading={section.heading}
                    >
                      <SectionForm section={section} focus={state.focus} />
                    </Accordion.SectionComposite>
                  ))}
                </Accordion.Root>
                <div className="govuk-button-group">
                  <Modal.Close>Close</Modal.Close>
                </div>
              </Modal.Content>
            </Modal.Root>
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </>
  );
}
