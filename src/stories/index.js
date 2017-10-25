import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import './styles.css'

import { Example, Button } from '..';

storiesOf('Example', module).add('Default', () => <Example />);
storiesOf('Example', module).add('With child text', () => <Example>Example</Example>);

storiesOf('Button', module).add('Default', () => <Button />);
storiesOf('Button', module).add('Save and continue', () => <Button>Save and continue</Button>);
