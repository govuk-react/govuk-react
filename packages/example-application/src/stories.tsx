import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
  title: 'Example Application',
  component: Component,
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      docs: { hidden: true },
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'canvas',
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleApplication: Story = {};

export const Form: Story = {
  args: { routerEntries: ['/forms/form'] },
};

export const FinalForm: Story = {
  args: { routerEntries: ['/forms/final-form'] },
};

export const Formik: Story = {
  args: { routerEntries: ['/forms/formik'] },
};

export const ReactHookForm: Story = {
  args: { routerEntries: ['/forms/react-hook-form'] },
};

export const ReactJSONSchemaForm: Story = {
  args: { routerEntries: ['/forms/react-jsonschema-form'] },
};
