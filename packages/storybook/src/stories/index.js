// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import 'normalize.css';

let req = require.context('../../../../components', true, /[^/]+\/src\/([^/]+\/)*stories.js$/);
req.keys().forEach(req);

req = require.context('../../../../packages', true, /[^/]+\/src\/([^/]+\/)*stories.js$/);
req.keys().forEach(req);
