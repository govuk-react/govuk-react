#!/usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');
const doc = require('../dist/govuk-react-api-docs.cjs.prod.js');

program.version(version).usage('<glob-to-components> <markdown-file>');

program.parse(process.argv);

const glob = program.args[0];
const markdown = program.args[1];

doc.default(glob, markdown);
