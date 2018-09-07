import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ReactMarkdown from 'react-markdown';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

import Anchor from './atoms/anchor';

const StyledParagraph = styled(ReactMarkdown)(
  {
    fontFamily: NTA_LIGHT,
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
  ({ supportingText }) => ({
    fontSize: supportingText ? FONT_SIZE.SIZE_14 : FONT_SIZE.SIZE_16,
    lineHeight: supportingText ? LINE_HEIGHT.SIZE_14 : LINE_HEIGHT.SIZE_16,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: supportingText ? FONT_SIZE.SIZE_16 : FONT_SIZE.SIZE_19,
      lineHeight: supportingText ? LINE_HEIGHT.SIZE_16 : LINE_HEIGHT.SIZE_19,
    },
  }),
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
    allowedTypes={['paragraph', 'emphasis', 'strong', 'link', 'inlineCode', 'code']}
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
  linkRenderer: props => <Anchor {...props} />,
};

export default withWhiteSpace({ marginBottom: 4 })(Paragraph);
