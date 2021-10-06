import type { Story } from '@storybook/react';

import * as React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import { Paragraph } from '.';

export default {
  title: 'Typography/Paragraph',
  id: 'paragraph',
  component: Paragraph,
};

const exampleParagraph =
  'Paragraph fields support markdown and allow for **bold** text and *italics*, as well as [links](https://en.wikipedia.org/wiki/Markdown). `Inline` code snippets are also supported, as well as code blocks PROVIDED they start on their own line';

const Template: Story<React.ComponentProps<typeof Paragraph>> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  supportingText: false,
  children: exampleParagraph,
};

export const SupportingParagaph = Template.bind({});
SupportingParagaph.args = {
  supportingText: true,
  children: exampleParagraph,
};

export const WithABlockOfCode = Template.bind({});
WithABlockOfCode.args = {
  children: "Some text.\n```\nconsole.log('hi')\n```\nSome more text.\n",
};

const LinkRenderer = ({ href, children }: { href: string; children: React.ReactNode }) =>
  href.match(/^\//) ? <Link to={href}>{children}</Link> : <a href={href}>{children}</a>;
LinkRenderer.displayName = 'LinkRenderer';
export const WithReactRouter = Template.bind({});
WithReactRouter.args = {
  linkRenderer: LinkRenderer,
  children: '[Internal Link](./example)',
};
WithReactRouter.decorators = [(storyFn) => <BrowserRouter>{storyFn()}</BrowserRouter>];
WithReactRouter.parameters = {
  docs: {
    storyDescription: `Set the \`linkRenderer\` prop, e.g. as follows:

\`\`\`tsx
const LinkRenderer = ({ href, children }: { href: string; children: React.ReactNode }) =>
  href.match(/^\\//) ? <Link to={href}>{children}</Link> : <a href={href}>{children}</a>;
\`\`\`
    `,
  },
};
