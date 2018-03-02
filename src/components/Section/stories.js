import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from '.';
import Button from '../Button/index';
import InputField from '../InputField/index';
import PhaseBanner from '../PhaseBanner/index';

storiesOf('Section', module).add('Section', () => (
  <div>
    <Section>
      <Button>Example button 1</Button>
      <Button>Example button 2</Button>
      <Button>Example button 3</Button>
    </Section>

    <Section>
      <PhaseBanner level="beta">
        This part of GOV.UK is being rebuilt
      </PhaseBanner>
    </Section>

    <Section>
      <InputField
        name="group1"
        hint={[
          'It’s on your National Insurance card, benefit letter, payslip or P60.',
          <br />,
          'For example, ‘QQ 12 34 56 C’.',
        ]}
      >
        National Insurance number
      </InputField>
    </Section>
  </div>
));
