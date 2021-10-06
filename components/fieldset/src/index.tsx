/**
 * ### References
 *
 * - https://design-system.service.gov.uk/components/fieldset/
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/fieldset
 * - https://design-system.service.gov.uk/get-started/labels-legends-headings/
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

import Legend from './atoms/legend';

const StyledFieldset = styled('fieldset')<FieldsetProps>(
  {
    border: 0,
    '&:after': {
      content: '""',
      display: 'block',
      clear: 'both',
    },
  },
  spacing.withWhiteSpace({ margin: 0, padding: 0 })
);

/**
 * Use the fieldset component when you need to show a relationship between multiple
 * form inputs. For example, you may need to group a set of text inputs into a single
 * fieldset when [asking for an address](https://design-system.service.gov.uk/patterns/addresses).
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/fieldset
 * - https://design-system.service.gov.uk/components/fieldset/
 */
export const Fieldset: FieldsetType = (props) => <StyledFieldset {...props} />;

export interface FieldsetType extends React.FC<FieldsetProps> {
  Legend: typeof Legend;
}

interface FieldsetProps extends WithWhiteSpaceProps {
  children: React.ReactNode;
}

Fieldset.Legend = Legend;

Fieldset.displayName = 'Fieldset';

export default Fieldset;
