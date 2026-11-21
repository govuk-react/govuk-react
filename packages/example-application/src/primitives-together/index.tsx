import * as React from 'react';
import {
  Accordion,
  CharacterCount,
  EnhancedFileUpload,
  Heading,
  InputField,
  Modal,
  PasswordInput,
  Radios,
  Tabs,
} from 'govuk-react';

type Section = { id: string; heading: string };
type Tab = { id: string; label: string; sections: Section[] };

const tabs: Tab[] = [
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

function SectionForm({ section }: { section: Section }) {
  const id = (field: string) => `${section.id}-${field}`;
  return (
    <form onSubmit={(event) => event.preventDefault()} noValidate>
      <Radios.Field idPrefix={id('contact')} legend="How would you prefer to be contacted?" legendSize="s">
        <Radios.ItemComposite
          id={id('contact')}
          name={id('contact')}
          value="email"
          label="Email"
          conditional={
            <InputField id={id('email')} name={id('email')} type="email" autoComplete="email" label="Email address" />
          }
        />
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

export type PrimitivesTogetherProps = {
  /** The tab selected at first. */
  defaultTab?: string;
  /** The tab whose modal is open from the start, for visual regression. */
  openModal?: string;
  /** The accordion sections open at first. */
  defaultExpanded?: string[];
};

export function PrimitivesTogether({ defaultTab, openModal, defaultExpanded }: PrimitivesTogetherProps) {
  return (
    <Tabs.Root defaultValue={defaultTab ?? tabs[0].id}>
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
          <Modal.Root open={openModal === tab.id || undefined}>
            <Modal.Trigger variant="secondary">Update {tab.label.toLowerCase()}</Modal.Trigger>
            <Modal.Content>
              <Modal.Title>{tab.label}</Modal.Title>
              <Accordion.Root id={`${tab.id}-accordion`} rememberExpanded={false} defaultValue={defaultExpanded}>
                <Accordion.Controls />
                {tab.sections.map((section, index) => (
                  <Accordion.SectionComposite
                    key={section.id}
                    accordionId={`${tab.id}-accordion`}
                    index={index + 1}
                    value={section.id}
                    heading={section.heading}
                  >
                    <SectionForm section={section} />
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
  );
}
