import React from 'react';
import Link from '@govuk-react/link';

import deprecate from '../deprecate';

const asAnchor = AnchorType =>
  deprecate(props => <Link as={AnchorType} {...props} />, '(use of asAnchor HOC - please use Link component instead)');

export default asAnchor;
