import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Label } from '../label';
import * as CharacterCount from '.';

const meta = {
  title: 'Form/Character count',
  id: 'character-count',
  component: CharacterCount.Field,
  parameters: {
    docs: {
      description: {
        component:
          'Help users know how much text they can enter when there is a limit on the number of characters. The count appears when JavaScript runs; without it, the field shows how much users can enter.',
      },
    },
  },
} satisfies Meta<typeof CharacterCount.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

const jobDescription =
  'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.';

export const Default: Story = {
  args: {
    id: 'with-hint',
    name: 'withHint',
    maxLength: 200,
    label: 'Can you provide more detail?',
    labelSize: 'l',
    labelIsPageHeading: true,
    hint: 'Do not include personal or financial information like your National Insurance number or credit card details.',
  },
};

export const CountingWords: Story = {
  args: {
    id: 'with-word-count',
    name: 'withWordCount',
    countType: 'words',
    maxLength: 150,
    label: 'Enter a job description',
    labelSize: 'l',
    labelIsPageHeading: true,
  },
};

export const WithThreshold: Story = {
  args: {
    id: 'threshold',
    name: 'threshold',
    maxLength: 112,
    threshold: 75,
    label: 'Can you provide more detail?',
    labelSize: 'l',
    labelIsPageHeading: true,
    defaultValue: 'Type another letter into this field after this message to see the threshold feature',
  },
};

/** Over the limit, as users see it once they've typed too much. */
export const OverTheLimit: Story = {
  args: {
    id: 'exceeding-characters',
    name: 'exceedingCharacters',
    maxLength: 350,
    label: 'Enter a job description',
    labelSize: 'l',
    labelIsPageHeading: true,
    defaultValue: jobDescription,
  },
};

export const WithErrorMessage: Story = {
  args: {
    id: 'with-error',
    name: 'withError',
    maxLength: 350,
    label: 'Enter a job description',
    labelSize: 'l',
    labelIsPageHeading: true,
    errorMessage: 'Job description must be 350 characters or less',
    defaultValue: jobDescription,
  },
};

export const WithParts: Story = {
  args: { id: 'with-parts', name: 'withParts', label: 'Can you provide more detail?' },
  render: () => (
    <CharacterCount.Root maxLength={200}>
      <Label htmlFor="with-parts">Can you provide more detail?</Label>
      <CharacterCount.Textarea id="with-parts" name="withParts" aria-describedby="with-parts-info" />
      <CharacterCount.Message id="with-parts-info">You can enter up to 200 characters</CharacterCount.Message>
      <CharacterCount.Status />
      <CharacterCount.ScreenReaderStatus />
    </CharacterCount.Root>
  ),
};
