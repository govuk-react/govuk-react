// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import 'normalize.css';

const req = require.context('../../../../components', true, /[^/]+\/src\/stories.js$/);

req.keys().forEach(req);

// TODO: hoc and icons
// import '@govuk-react/hoc/lib/asAnchor/stories';
// import '@govuk-react/hoc/lib/asPaginationItem/stories';
// import '@govuk-react/hoc/lib/withWhiteSpace/stories';
//
// import '@govuk-react/icons/lib/ArrowLeft/stories';
// import '@govuk-react/icons/lib/ArrowRight/stories';
// import '@govuk-react/icons/lib/Search/stories';
// import '@govuk-react/icons/lib/Spinner/stories';
