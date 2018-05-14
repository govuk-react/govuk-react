import 'normalize.css';
import './styles.css';

const req = require.context('../../../../', true, /(packages|components)\/[^/]+\/src\/([^/]+\/)*stories.js$/);
req.keys().forEach(req);
