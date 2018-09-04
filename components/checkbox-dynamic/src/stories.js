import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import CheckboxDynamic from '.';

const stories = storiesOf('Form/CheckboxDynamic', module);
const examples = storiesOf('Form/CheckboxDynamic/Examples', module);
const checkboxExamples = ['Waste from animal carcasses', 'Waste from mines or quarries', 'Farm or agricultural waste'];

stories.add('Component default', () => (
    <div>
        <CheckboxDynamic list={checkboxExamples} />
    </div>
));
