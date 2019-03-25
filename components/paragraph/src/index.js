import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { spacing, typography } from '@govuk-react/lib';
import Link from '@govuk-react/link';

const StyledParagraph = styled(ReactMarkdown)(
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
 *
 * Supports bold, italic, links, inline code and block code in Markdown ONLY.
 * This is to ensure we follow GDS as closely as possible.
 * It is worth noting that GDS recommends avoiding bold and italics.
 *
 * Bold should be avoided in general as not only can it dilute the message, it will also
 * cause Screenreaders to increase the volume of any bold text to reflect the increase in
 * font-weight.
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Paragraph>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
 * ```
 *
 * As supporting text
 * ```jsx
 * <Paragraph supportingText>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
 * ```
 *
 * With a block of code
 * ````jsx
 * <Paragraph>
 *   Some other text...
 *   ```
 *   Some Code Block
 *   ```
 *   Some more text.
 * </Paragraph>
 * ````
 *
 * With React router
 *
 * ```jsx
 * const ReactRouterLinkRenderer = ({ href, children }) => (
 *   href.match(/^\//)
 *     ? <Link to={href}>{children}</Link>
 *     : <a href={href}>{children}</a>
 * );
 *
 * <Paragraph linkRenderer={ReactRouterLinkRenderer}>
 *   ...
 * </Paragraph>
 * ```
 *
 * ### References
 * - https://govuk-elements.herokuapp.com/typography/#typography-body-copy
 *
 * ### TODO
 * - Add test for supporting text
 * - Review code snippet styling
 * - Remove magic numbers from inline code styling blocks
 */
const Paragraph = ({ children, ...props }) => (
  <StyledParagraph
    source={children}
    escapeHtml={false}
    skipHtml
    allowedTypes={['paragraph', 'emphasis', 'strong', 'link', 'inlineCode', 'code', 'text']}
    renderers={{ link: props.linkRenderer }}
    {...props}
  />
);

Paragraph.propTypes = {
  /**
   * Text content supporting markdown
   */
  children: PropTypes.node,
  /**
   * Is this paragraph supporting text for another element?
   */
  supportingText: PropTypes.bool,
  linkRenderer: PropTypes.func,
};

Paragraph.defaultProps = {
  children: '',
  supportingText: false,
  linkRenderer: props => <Link {...props} />,
};

export default Paragraph;
