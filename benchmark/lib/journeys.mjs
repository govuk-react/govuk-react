/**
 * The user journeys, one step per page. `interact` is what the user does on the page, which the
 * measurements time, and `leave` is the action that moves on to the next page.
 *
 * @typedef {import('playwright-core').Page} Page
 * @typedef {{ javaScriptEnabled: boolean }} Options
 * @typedef {{ name: string, heading: string, interact?: (page: Page, options: Options) => Promise<void>, leave?: (page: Page) => Promise<unknown> }} Step
 * @typedef {{ name: string, start: string, steps: Step[] }} Journey
 */

/** Types as a person would, one key at a time, so each key press is an interaction. */
const type = (page, label, text) => page.getByLabel(label, { exact: true }).pressSequentially(text, { delay: 80 });

const click = (page, role, name) => page.getByRole(role, { name, exact: true }).click();

/** @type {Journey[]} */
export const journeys = [
  {
    name: 'account',
    start: 'account',
    steps: [
      {
        name: 'Form',
        heading: 'Create an account',
        interact: async (page, { javaScriptEnabled }) => {
          await type(page, 'Username', 'alex');
          await type(page, 'Create a password', 'correct');
          if (javaScriptEnabled) await page.getByRole('button', { name: 'Show password' }).first().click();
        },
        leave: (page) => click(page, 'button', 'Create account'),
      },
      {
        name: 'Form with errors',
        heading: 'There is a problem',
        interact: async (page) => {
          await type(page, 'Create a password', 'correct horse');
          await type(page, 'Confirm password', 'correct horse');
        },
        leave: (page) => click(page, 'button', 'Create account'),
      },
      { name: 'Confirmation', heading: 'Account created' },
    ],
  },
  {
    name: 'licence',
    start: 'licence',
    steps: [
      { name: 'Task list', heading: 'Apply for an event licence', leave: (page) => click(page, 'link', 'Contact details') },
      {
        name: 'Radios with a conditional reveal',
        heading: 'How would you like to be contacted?',
        interact: async (page) => {
          await page.getByLabel('Email', { exact: true }).check();
          await type(page, 'Email address', 'alex@example.com');
        },
        leave: (page) => click(page, 'button', 'Save and continue'),
      },
      { name: 'Task list, 1 task done', heading: 'Apply for an event licence', leave: (page) => click(page, 'link', 'Event details') },
      {
        name: 'Character count',
        heading: 'Event details',
        interact: async (page) => {
          await type(page, 'Event name', 'Street party');
          await type(page, 'Describe your event', 'A street party on Acacia Avenue in June');
        },
        leave: (page) => click(page, 'button', 'Save and continue'),
      },
      {
        name: 'Task list, 2 tasks done',
        heading: 'Apply for an event licence',
        leave: (page) => click(page, 'link', 'Check and submit'),
      },
      { name: 'Check answers', heading: 'Check your answers', leave: (page) => click(page, 'button', 'Submit application') },
      { name: 'Confirmation', heading: 'Application complete' },
    ],
  },
];

export const variants = [
  {
    name: 'govuk-frontend',
    description: 'govuk-frontend’s Nunjucks macros, CSS and JavaScript',
  },
  {
    name: 'govuk-react',
    description: 'govuk-react rendered on the server, enhanced by inline scripts, with no React in the browser',
  },
  {
    name: 'govuk-react-hydrated',
    description: 'the same, with each page’s content hydrated as a React island with client:load',
  },
];
