import React from 'react';
import { storiesOf } from '@storybook/react'
import iconPointer from '../../../images/icon-pointer.png'
import Button from '.'

storiesOf('Button', module).add('Button text', () => <Button>Save and continue</Button>);
storiesOf('Button', module).add('Start', () => <Button start>Start now</Button>);
storiesOf('Button', module).add('Start with icon', () => <Button iconUrl={iconPointer} start>Start now</Button>);
storiesOf('Button', module).add('Disabled', () => <Button disabled aria-disabled='true'>Disabled primary button</Button>);
storiesOf('Button', module).add('Disabled start with icon', () => <Button disabled iconUrl={iconPointer} start aria-disabled='true'>Start now</Button>);
