import React from 'react';
import Link from '@govuk-react/link';

const asAnchor = AnchorType => (props => <Link as={AnchorType} {...props} />);

export default asAnchor;
