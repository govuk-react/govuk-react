import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import BackLink from '@govuk-react/back-link';
import Breadcrumb from '@govuk-react/breadcrumb';
import Button from '@govuk-react/button';
import Checkbox from '@govuk-react/checkbox';
import DateInput from '@govuk-react/date-input';
import ErrorText from '@govuk-react/error-text';
import FileUpload from '@govuk-react/file-upload';
import Header from '@govuk-react/header';
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
import PhaseBadge from '@govuk-react/phase-badge';
import PhaseBanner from '@govuk-react/phase-banner';
import Radio from '@govuk-react/radio';
import RelatedItems from '@govuk-react/related-items';
import SearchBox from '@govuk-react/search-box';
import Select from '@govuk-react/select';
import TextArea from '@govuk-react/text-area';
import UnorderedList from '@govuk-react/unordered-list';

import withWhiteSpace from '.';

const stories = storiesOf('withWhiteSpace', module);
stories.addDecorator(withKnobs);

const BackLinkWhiteSpace = withWhiteSpace({ marginBottom: 1 })(BackLink);
const BreadcrumbWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Breadcrumb);
const ButtonWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Button);
const CheckboxWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Checkbox);
const DateInputWhiteSpace = withWhiteSpace({ marginBottom: 1 })(DateInput);
const ErrorTextWhiteSpace = withWhiteSpace({ marginBottom: 1 })(ErrorText);
const FileUploadWhiteSpace = withWhiteSpace({ marginBottom: 1 })(FileUpload);
const HeaderWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Header);
const HintTextWhiteSpace = withWhiteSpace({ marginBottom: 1 })(HintText);
const InputWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Input);
const InputFieldWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(InputField);

const LabelWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Label);
const LabelTextWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(LabelText);
const ListItemWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(ListItem);
const ListNavigationWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(ListNavigation);
const MultiChoiceWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(MultiChoice);
const OrderedListWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(OrderedList);
const PaginationWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Pagination);
const PanelWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Panel);
const PhaseBadgeWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(PhaseBadge);
const PhaseBannerWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(PhaseBanner);
const RadioWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Radio);
const RelatedItemsWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(RelatedItems);
const SearchBoxWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(SearchBox);
const SelectWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(Select);
const TextAreaWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(TextArea);
const UnorderedListWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(UnorderedList);

stories.add('with spacing default size 1', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace mb={number('marginBottom', 1)} name="group1" hint="Change whitespace value with knobs">Example 1</InputFieldWithWhiteSpace>
    <Button>Finish</Button>
  </React.Fragment>
));

stories.add('with various spacing sizes', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace mb={number('marginBottom1', 1)} name="group1" hint="hi">Example 1</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace mb={number('marginBottom2', 4)} name="group1" hint="hi">Example 2</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace mb={number('marginBottom3', 7)} name="group1" hint="hi">Example 3</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace mb={number('marginBottom4', 9)} name="group1" hint="okay">Example 4</InputFieldWithWhiteSpace>
    <Button>Finish</Button>
  </React.Fragment>
));

stories.add('with multiple components', () => (
  <React.Fragment>
    <BackLinkWhiteSpace mb={number('BackLink marginBottom', 9)}>Example</BackLinkWhiteSpace>
    <BreadcrumbWhiteSpace mb={number('Breadcrumb marginBottom', 9)}>Example</BreadcrumbWhiteSpace>
    <ButtonWhiteSpace mb={number('Button marginBottom', 9)}>Example</ButtonWhiteSpace>
    <CheckboxWhiteSpace mb={number('Checkbox marginBottom', 9)}>Example</CheckboxWhiteSpace>
    <DateInputWhiteSpace mb={number('DateInput marginBottom', 9)}>Example</DateInputWhiteSpace>
    <ErrorTextWhiteSpace mb={number('ErrorText marginBottom', 9)}>Example</ErrorTextWhiteSpace>
    <FileUploadWhiteSpace mb={number('File Upload marginBottom', 9)}>Example</FileUploadWhiteSpace>
    <HeaderWhiteSpace mb={number('Header marginBottom', 9)}>Example</HeaderWhiteSpace>
    <HintTextWhiteSpace mb={number('HintText marginBottom', 9)}>Example</HintTextWhiteSpace>
    <InputWhiteSpace mb={number('Input marginBottom', 9)} />
    <InputFieldWithWhiteSpace mb={number('Input-text marginBottom', 9)}>Example</InputFieldWithWhiteSpace>

    <LabelWithWhiteSpace mb={number('Label marginBottom', 9)}>Label Example</LabelWithWhiteSpace>
    <LabelTextWithWhiteSpace mb={number('LabelText marginBottom', 9)}>LabelText Example</LabelTextWithWhiteSpace>
    <ListItemWithWhiteSpace mb={number('ListItem marginBottom', 9)}>ListItem Example</ListItemWithWhiteSpace>
    <ListNavigationWithWhiteSpace mb={number('ListNavigation marginBottom', 9)}>ListNavigation Example</ListNavigationWithWhiteSpace>
    <MultiChoiceWithWhiteSpace label="example" mb={number('MultiChoice marginBottom', 9)}>MultiChoice Example</MultiChoiceWithWhiteSpace>
    <OrderedListWithWhiteSpace mb={number('OrderedList marginBottom', 9)}>OrderedList Example</OrderedListWithWhiteSpace>
    <PaginationWithWhiteSpace mb={number('Pagination marginBottom', 9)}>Pagination Example</PaginationWithWhiteSpace>
    <PanelWithWhiteSpace panelTitle="Example" mb={number('Panel marginBottom', 9)}>Panel Example</PanelWithWhiteSpace>
    <PhaseBadgeWithWhiteSpace mb={number('PhaseBadge marginBottom', 9)}>PhaseBadge</PhaseBadgeWithWhiteSpace>
    <PhaseBannerWithWhiteSpace level="EXAMPLE" mb={number('PhaseBanner marginBottom', 9)}>PhaseBanner Example</PhaseBannerWithWhiteSpace>
    <RadioWithWhiteSpace mb={number('Radio marginBottom', 9)}>Radio Example</RadioWithWhiteSpace>
    <RelatedItemsWithWhiteSpace mb={number('RelatedItems marginBottom', 9)}>RelatedItems Example</RelatedItemsWithWhiteSpace>
    <SearchBoxWithWhiteSpace mb={number('SearchBox marginBottom', 9)}>SearchBox Example</SearchBoxWithWhiteSpace>
    <SelectWithWhiteSpace label="example" mb={number('Select marginBottom', 9)}>Select Example</SelectWithWhiteSpace>
    <TextAreaWithWhiteSpace mb={number('TextArea marginBottom', 9)}>TextArea Example</TextAreaWithWhiteSpace>
    <UnorderedListWithWhiteSpace mb={number('UnorderedList marginBottom', 9)}>UnorderedList Example</UnorderedListWithWhiteSpace>
  </React.Fragment>
));
