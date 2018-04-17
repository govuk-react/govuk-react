import 'normalize.css';

const req = require.context('../../../../', true, /(packages|components)\/[^/]+\/src\/([^/]+\/)*stories.js$/);
req.keys().forEach(req);
