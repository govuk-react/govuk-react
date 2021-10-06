/**
 * ### References
 *
 * - https://govuk-elements.herokuapp.com/typography/#typography-body-copy
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';
import type { ReactMarkdownProps } from 'react-markdown';

import ReactMarkdown from 'react-markdown';
import { spacing, typography } from '@govuk-react/lib';
import Link from '@govuk-react/link';

const StyledParagraph = styled(ReactMarkdown)<ParagraphProps>(
  {
    margin: 0,
    '> p': {
      margin: 0,
    },
    '> p > code': {
      padding: '0.2em 0.4em',
      margin: '0',
      fontSize: '85%',
      backgroundColor: 'rgba(27,31,35,0.05)',
      borderRadius: '3px',
    },
    '> pre': {
      padding: '16px',
      overflow: 'auto',
      fontSize: '85%',
      lineHeight: '1.45',
      backgroundColor: '#f6f8fa',
      borderRadius: '3px',
    },
    '> pre > code': {
      display: 'inline',
      padding: '0',
      margin: '0',
      border: '0',
      overflow: 'visible',
      lineHeight: 'inherit',
      wordWrap: 'normal',
    },
  },
  ({ supportingText }) => typography.font({ size: supportingText ? 16 : 19 }),
  spacing.withWhiteSpace({ marginBottom: 4 })
);

/**
 * Markdown Formatter.
 *
 * Supports bold, italic, links, inline code and block code in Markdown ONLY.
 * This is to ensure we follow GDS as closely as possible.
 * It is worth noting that GDS recommends avoiding bold and italics.
 *
 * Bold should be avoided in general as not only can it dilute the message, it will also
 * cause Screenreaders to increase the volume of any bold text to reflect the increase in
 * font-weight.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/paragraph
 * - https://design-system.service.gov.uk/styles/typography/
 */
export const Paragraph: React.FC<ParagraphProps & ReactMarkdownProps> = ({
  children,
  ...props
}: ParagraphProps & ReactMarkdownProps) => (
  <StyledParagraph
    source={children}
    escapeHtml={false}
    skipHtml
    allowedTypes={['paragraph', 'emphasis', 'strong', 'link', 'inlineCode', 'code', 'text']}
    renderers={{ link: props.linkRenderer }}
    {...props}
  />
);

export interface ParagraphProps extends WithWhiteSpaceProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text content supporting markdown
   */
  children?: string;
  /**
   * Is this paragraph supporting text for another element?
   */
  supportingText?: boolean;
  linkRenderer?: React.ElementType;
}

Paragraph.defaultProps = {
  children: '',
  supportingText: false,
  linkRenderer: (props) => <Link {...props} />,
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
