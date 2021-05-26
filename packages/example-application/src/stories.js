import ExampleApplicationComponent from '.';

export default {
  title: 'Example Application',
  component: ExampleApplicationComponent,
};

export const ExampleApplication = ExampleApplicationComponent;
ExampleApplication.parameters = {
  layout: 'fullscreen',
  chromatic: { disableSnapshot: false },
  previewTabs: {
    docs: { hidden: true },
    'storybook/docs/panel': { hidden: true },
  },
};
