import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import './styles.css';
import readme from '../../../../README.md';

// eslint-disable-next-line react/no-danger
storiesOf(' Welcome', module).add('to govuk-react', () => <div style={{ padding: '10px' }} className="markdown-body" dangerouslySetInnerHTML={{ __html: readme }} />);

const req = require.context('../../../../', true, /(packages|components)\/[^/]+\/src\/([^/]+\/)*stories.js$/);
req.keys().forEach(req);
