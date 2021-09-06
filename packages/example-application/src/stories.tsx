import React from 'react';

import Component from '.';

export default {
  title: 'Example Application',
  component: Component,
};
// bind
const Template = (args) => <Component {...args} />;
Template.parameters = {
  layout: 'fullscreen',
  previewTabs: {
    docs: { hidden: true },
    'storybook/docs/panel': { hidden: true },
  },
  viewMode: 'canvas',
};

export const ExampleApplication = Template.bind({});
ExampleApplication.parameters = Template.parameters;

export const Form = Template.bind({});
Form.args = {
  routerEntries: ['/forms/form'],
};
Form.parameters = Template.parameters;

export const FinalForm = Template.bind({});
FinalForm.args = {
  routerEntries: ['/forms/final-form'],
};
FinalForm.parameters = Template.parameters;

export const Formik = Template.bind({});
Formik.args = {
  routerEntries: ['/forms/formik'],
};
Formik.parameters = Template.parameters;

export const ReactHookForm = Template.bind({});
ReactHookForm.args = {
  routerEntries: ['/forms/react-hook-form'],
};
ReactHookForm.parameters = Template.parameters;

export const ReactJSONSchemaForm = Template.bind({});
ReactJSONSchemaForm.args = {
  routerEntries: ['/forms/react-jsonschema-form'],
};
ReactJSONSchemaForm.parameters = Template.parameters;
