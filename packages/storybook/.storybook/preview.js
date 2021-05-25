export const parameters = {
  chromatic: {
    viewports: [320, 1200],
    disableSnapshot: true // while we have usage issues we are disabling everthing in order to enable incrementally
  },
  options: {
    storySort: {
      order: ['Core', 'Typography', 'Form', 'Navigation', 'Docs'],
    },
  },
};