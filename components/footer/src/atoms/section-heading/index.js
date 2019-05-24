import styled from 'styled-components';
import { MEDIA_QUERIES } from '@govuk-react/constants';
<<<<<<< HEAD
import { H2 } from '@govuk-react/heading';
import { spacing } from '@govuk-react/lib';
import { BORDER_COLOUR } from 'govuk-colours';

const SectionHeading = styled(H2)(
=======
import Heading from '@govuk-react/heading';
import { spacing } from '@govuk-react/lib';
import { BORDER_COLOUR } from 'govuk-colours';

const SectionHeading = styled(Heading)(
>>>>>>> Footer component (#651)
  {
    borderBottom: `1px solid ${BORDER_COLOUR}`,
    paddingBottom: spacing.simple(2),
    marginTop: 0,
    [MEDIA_QUERIES.DESKTOP]: {
      paddingBottom: spacing.simple(4),
    },
  },
  spacing.withWhiteSpace({ marginBottom: 7 })
);

export default SectionHeading;
