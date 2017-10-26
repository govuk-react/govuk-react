import React from 'react';

import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('Button', module).add('Button text', () => <Button>Save and continue</Button>);
storiesOf('Button', module).add('Start Now', () => <Button start>Start now</Button>);
storiesOf('Button', module).add('Disabled', () => <Button disabled>Disabled primary button</Button>);
