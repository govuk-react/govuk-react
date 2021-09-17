import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import React from 'react';
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
 *
 * ### Usage
 *
 * Use the fieldset component when you need to show a relationship between multiple
 * form inputs. For example, you may need to group a set of text inputs into a single
 * fieldset when asking for an address.
 *
 * Simple
 *
 * ```jsx
 * import { Fieldset } from 'govuk-react'
 *
 * <Fieldset>
 *   <Fieldset.Legend>Example</Fieldset.Legend>
 * </Fieldset>
 * ```
 *
 * The `Fieldset.Legend` sub-component supports a `size` prop compatible with Heading
 * and a `isPageHeading` prop for use when you wish your legend to be used as a page heading
 *
 * Custom legend
 *
 * ```jsx
 * <Fieldset>
 *   <Fieldset.Legend size="XL" isPageHeading>Legend as page heading</Fieldset.Legend>
 * </Fieldset>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/components/fieldset/
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/fieldset
 * - https://design-system.service.gov.uk/get-started/labels-legends-headings/
 */
export const Fieldset: FieldsetType = (props) => <StyledFieldset {...props} />;

interface FieldsetType extends React.FC<FieldsetProps> {
  Legend: typeof Legend;
}

interface FieldsetProps extends WithWhiteSpaceProps {
  children: React.ReactNode;
}

Fieldset.Legend = Legend;

Fieldset.displayName = 'Fieldset';

export default Fieldset;
