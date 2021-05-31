import styled from 'styled-components';
import { MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const TabsTitle = styled('h2')(typography.font({ size: 19 }), {
  marginBottom: spacing.simple(1),
  [MEDIA_QUERIES.TABLET]: {
    display: 'none',
  },
});

TabsTitle.defaultProps = {
  children: 'Contents',
};

export default TabsTitle;
