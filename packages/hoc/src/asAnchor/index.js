import React from 'react';
import Link from '@govuk-react/link';

import deprecated from '../deprecated';

const asAnchor = AnchorType => deprecated(
  props => <Link as={AnchorType} {...props} />,
  '(use of asAnchor HOC - please use Link component instead)',
);

export default asAnchor;
