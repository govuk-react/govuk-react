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
import RouterLink from './link-renderer';

const StyledParagraph = styled(ReactMarkdown)(
  {
    fontFamily: NTA_LIGHT,
    margin: 0,
    '> p': {
      margin: 0,
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
 * ### Usage
 *
 * Supports bold, italic and links in Markdown ONLY.
 * This is to ensure we follow GDS as closely as possible.
 * It is worth noting that GDS recommends avoiding bold and italics.
 *
 * Simple Usage with markdown
 * ```js
 * <Paragraph>Lorem ipsum **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
 * ```
 *
 * As supporting text
 * ```js
 * <Paragraph supportingText>Lorem ipsum **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
 * ```
 *
 * ### References
 * - https://govuk-elements.herokuapp.com/typography/#typography-body-copy
 *
 * ### TODO
 * - Add test for supporting text
 * - Add test for rendering supported markdown components
 *
 */
const Paragraph = ({ children, ...rest }) => (
  <StyledParagraph
    source={children}
    escapeHtml={false}
    skipHtml
    allowedTypes={['paragraph', 'emphasis', 'strong', 'link']}
    renderers={{ link: RouterLink }}
    {...rest}
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
};

Paragraph.defaultProps = {
  children: '',
  supportingText: false,
};

export default withWhiteSpace({ marginBottom: 5 })(Paragraph);
