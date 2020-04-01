import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, object, text } from '@storybook/addon-knobs/react';

import BackLink from '@govuk-react/back-link';
import Breadcrumbs from '@govuk-react/breadcrumb';
import Button from '@govuk-react/button';
import Checkbox from '@govuk-react/checkbox';
import DateField from '@govuk-react/date-field';
import ErrorText from '@govuk-react/error-text';
import FileUpload from '@govuk-react/file-upload';
import Heading from '@govuk-react/heading';
import HintText from '@govuk-react/hint-text';
import Input from '@govuk-react/input';
import InputField from '@govuk-react/input-field';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ListItem from '@govuk-react/list-item';
import ListNavigation from '@govuk-react/list-navigation';
import MultiChoice from '@govuk-react/multi-choice';
import OrderedList from '@govuk-react/ordered-list';
import Pagination from '@govuk-react/pagination';
import Panel from '@govuk-react/panel';
import PhaseBanner from '@govuk-react/phase-banner';
import Radio from '@govuk-react/radio';
import RelatedItems from '@govuk-react/related-items';
import SearchBox from '@govuk-react/search-box';
import Select from '@govuk-react/select';
import Tag from '@govuk-react/tag';
import TextArea from '@govuk-react/text-area';
import UnorderedList from '@govuk-react/unordered-list';

import withWhiteSpace from '.';

const stories = storiesOf('Utilities/withWhiteSpace', module);
stories.addDecorator(withKnobs);

const DemoComponent = withWhiteSpace()(
  styled('div')({
    border: '2px solid red',
  })
);

stories.add('demo component, simple single margins and padding', () => (
  <div>
    <DemoComponent
      margin={number('margin', 2, { range: true, min: -9, max: 9 })}
      padding={number('padding', 2, { range: true, min: 0, max: 9 })}
    >
      Component with styles - use knobs to adjust
    </DemoComponent>
    <DemoComponent>Component without styles</DemoComponent>
  </div>
));

stories.add('demo component, single margins and padding (complex)', () => (
  <div>
    <DemoComponent
      // Use knobs for children content to kick knobs to life - storybook bug work-around
      // eslint-disable-next-line react/no-children-prop
      children={text('content', 'Component with styles - use knobs to adjust')}
      margin={{
        size: number('margin.size', 2, { range: true, min: -9, max: 9 }),
        direction: text('margin.direction', 'all'),
        adjustment: number('margin.adjustment', undefined),
      }}
      padding={{
        size: number('padding.size', 2, { range: true, min: 0, max: 9 }),
        direction: text('padding.direction', 'all'),
        adjustment: number('padding.adjustment', undefined),
      }}
    />
    <DemoComponent>Component without styles</DemoComponent>
  </div>
));

stories.add('demo component, multiple margins and padding (complex)', () => (
  <div>
    <DemoComponent
      margin={[
        number('margin (all)', 2, { range: true, min: -9, max: 9 }),
        object('margin (first object)', {
          size: 2,
          direction: 'bottom',
          adjustment: -5,
        }),
      ]}
      padding={[
        number('padding (all)', 2, { range: true, min: 0, max: 9 }),
        object('padding (first object)', {
          size: 4,
          direction: ['top', 'bottom'],
          adjustment: 11,
        }),
      ]}
    >
      Component with styles - use knobs to adjust
    </DemoComponent>
    <DemoComponent>Component without styles</DemoComponent>
  </div>
));

stories.add('existing InputField with spacing size 1', () => (
  <div>
    <InputField mb={number('marginBottom', 1)} name="group1" hint="Change whitespace value with knobs">
      Example 1
    </InputField>
    <Button>Finish</Button>
  </div>
));

stories.add('existing InputField with various spacing sizes', () => (
  <div>
    <InputField mb={number('marginBottom1', 1)} name="group1" hint="hi">
      Example 1
    </InputField>
    <InputField mb={number('marginBottom2', 4)} name="group1" hint="hi">
      Example 2
    </InputField>
    <InputField mb={number('marginBottom3', 7)} name="group1" hint="hi">
      Example 3
    </InputField>
    <InputField mb={number('marginBottom4', 9)} name="group1" hint="okay">
      Example 4
    </InputField>
    <Button>Finish</Button>
  </div>
));

stories.add('multiple existing components', () => (
  <div>
    <BackLink mb={number('BackLink marginBottom', 9)}>Example</BackLink>
    <Breadcrumbs mb={number('Breadcrumbs marginBottom', 9)}>Example</Breadcrumbs>
    <Button mb={number('Button marginBottom', 9)}>Example</Button>
    <Checkbox mb={number('Checkbox marginBottom', 9)}>Example</Checkbox>
    <DateField mb={number('DateField marginBottom', 9)}>Example</DateField>
    <ErrorText mb={number('ErrorText marginBottom', 9)}>Example</ErrorText>
    <FileUpload mb={number('File Upload marginBottom', 9)}>Example</FileUpload>
    <Heading mb={number('Heading marginBottom', 9)}>Example</Heading>
    <HintText mb={number('HintText marginBottom', 9)}>Example</HintText>
    <Input mb={number('Input marginBottom', 9)} />
    <InputField mb={number('Input-text marginBottom', 9)}>Example</InputField>
    <Label mb={number('Label marginBottom', 9)}>Label Example</Label>
    <LabelText mb={number('LabelText marginBottom', 9)}>LabelText Example</LabelText>
    <ListItem mb={number('ListItem marginBottom', 9)}>ListItem Example</ListItem>
    <ListNavigation mb={number('ListNavigation marginBottom', 9)}>ListNavigation Example</ListNavigation>
    <MultiChoice label="example" mb={number('MultiChoice marginBottom', 9)}>
      MultiChoice Example
    </MultiChoice>
    <OrderedList mb={number('OrderedList marginBottom', 9)}>OrderedList Example</OrderedList>
    <Pagination mb={number('Pagination marginBottom', 9)}>Pagination Example</Pagination>
    <Panel panelTitle="Example" mb={number('Panel marginBottom', 9)}>
      Panel Example
    </Panel>
    <PhaseBanner level="EXAMPLE" mb={number('PhaseBanner marginBottom', 9)}>
      PhaseBanner Example
    </PhaseBanner>
    <Radio mb={number('Radio marginBottom', 9)}>Radio Example</Radio>
    <RelatedItems mb={number('RelatedItems marginBottom', 9)}>RelatedItems Example</RelatedItems>
    <SearchBox mb={number('SearchBox marginBottom', 9)}>SearchBox Example</SearchBox>
    <Select label="example" mb={number('Select marginBottom', 9)}>
      Select Example
    </Select>
    <Tag mb={number('Tag marginBottom', 9)}>Tag</Tag>
    <TextArea mb={number('TextArea marginBottom', 9)}>TextArea Example</TextArea>
    <UnorderedList mb={number('UnorderedList marginBottom', 9)}>UnorderedList Example</UnorderedList>
  </div>
));
