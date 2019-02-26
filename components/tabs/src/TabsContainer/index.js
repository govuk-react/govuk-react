import styled from 'styled-components';
import { TEXT_COLOUR } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';

const TabsContainer = styled('div')(
  typography.font({ size: 19 }),
  {
    color: TEXT_COLOUR,
    marginTop: spacing.responsive({ size: 1, property: 'margin', direction: 'top' }),
    marginBottom: spacing.responsive({ size: 6, property: 'margin', direction: 'bottom' }),
  },
);

export default TabsContainer;
