import type { ReactNode } from 'react';
import * as Accordion from 'govuk-react/accordion';
import { Body } from 'govuk-react/body';
import { Button } from 'govuk-react/button';
import { ButtonGroup } from 'govuk-react/button-group';
import * as CharacterCount from 'govuk-react/character-count';
import { EnhancedFileUpload } from 'govuk-react/file-upload';
import { Heading } from 'govuk-react/heading';
import { InputField } from 'govuk-react/input';
import * as Modal from 'govuk-react/modal';
import * as PasswordInput from 'govuk-react/password-input';
import * as Radios from 'govuk-react/radios';
import * as SummaryList from 'govuk-react/summary-list';
import * as Tabs from 'govuk-react/tabs';

type ModalFormProps = { trigger: string; title: string; submit: string; children: ReactNode };

/** A button that opens a modal with a form. Submitting the form closes the modal, as a `dialog` form does. */
function ModalForm({ trigger, title, submit, children }: ModalFormProps) {
  return (
    <Modal.Root>
      <Modal.Trigger variant="secondary">{trigger}</Modal.Trigger>
      <Modal.Content>
        <form method="dialog" noValidate>
          <Modal.Title>{title}</Modal.Title>
          {children}
          <ButtonGroup>
            <Button type="submit">{submit}</Button>
            <Modal.Close>Cancel</Modal.Close>
          </ButtonGroup>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}

function Details() {
  return (
    <>
      <Heading size="m" headingLevel={2}>
        Details
      </Heading>
      <SummaryList.Root>
        <SummaryList.RowComposite term="Reference" value="HDJ2123F" />
        <SummaryList.RowComposite term="Licence" value="Premises licence" />
        <SummaryList.RowComposite term="Status" value="Waiting for documents" />
      </SummaryList.Root>
      <ButtonGroup>
        <ModalForm trigger="Change how we contact you" title="Change how we contact you" submit="Save">
          <Radios.Field idPrefix="contact" legend="How should we contact you?" legendSize="s">
            <Radios.ItemComposite
              id="contact"
              name="contact"
              value="email"
              label="Email"
              conditional={
                <InputField id="contact-email" name="email" type="email" autoComplete="email" label="Email address" />
              }
            />
            <Radios.ItemComposite
              id="contact-2"
              name="contact"
              value="phone"
              label="Phone"
              conditional={
                <InputField id="contact-phone" name="phone" type="tel" autoComplete="tel" label="Phone number" />
              }
            />
            <Radios.ItemComposite id="contact-3" name="contact" value="post" label="Post" />
          </Radios.Field>
        </ModalForm>
        <ModalForm trigger="Change your password" title="Change your password" submit="Change password">
          <PasswordInput.Field
            id="current-password"
            name="currentPassword"
            label="Current password"
            autoComplete="current-password"
          />
          <PasswordInput.Field id="new-password" name="newPassword" label="New password" autoComplete="new-password" />
        </ModalForm>
      </ButtonGroup>
    </>
  );
}

const documents = [
  {
    value: 'identity',
    heading: 'Proof of identity',
    content: 'A passport or photocard driving licence.',
  },
  {
    value: 'address',
    heading: 'Proof of address',
    content: 'A bank statement or utility bill from the last 3 months.',
  },
  {
    value: 'plan',
    heading: 'Plan of the premises',
    content: 'A drawing that shows the exits, toilets and where alcohol will be stored.',
  },
];

function Documents() {
  return (
    <>
      <Heading size="m" headingLevel={2}>
        Documents
      </Heading>
      <Body>Send us these documents so we can process your application.</Body>
      <Accordion.Composite
        id="documents"
        rememberExpanded={false}
        sections={documents.map(({ value, heading, content }) => ({
          value,
          heading,
          children: <Body>{content}</Body>,
        }))}
      />
      <ModalForm trigger="Upload a document" title="Upload a document" submit="Upload">
        <EnhancedFileUpload.Field id="document" name="document" label="Upload a file" />
      </ModalForm>
    </>
  );
}

function Messages() {
  return (
    <>
      <Heading size="m" headingLevel={2}>
        Messages
      </Heading>
      <Body>We’ve received your application. We’ll tell you if we need anything else.</Body>
      <ModalForm trigger="Send us a message" title="Send us a message" submit="Send">
        <CharacterCount.Field
          id="message"
          name="message"
          maxLength={500}
          label="Your message"
          hint="Do not include personal or financial information like your National Insurance number or credit card details."
        />
      </ModalForm>
    </>
  );
}

/** A licence application, with tabs, an accordion, and modals holding forms. */
export function Application() {
  return (
    <Tabs.Composite
      title="Contents"
      items={[
        { id: 'details', label: 'Details', panel: <Details /> },
        { id: 'documents', label: 'Documents', panel: <Documents /> },
        { id: 'messages', label: 'Messages', panel: <Messages /> },
      ]}
    />
  );
}
