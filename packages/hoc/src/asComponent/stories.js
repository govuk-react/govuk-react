import React from 'react';
import { storiesOf } from '@storybook/react';
import BackLink from '@govuk-react/back-link';
import Breadcrumb from '@govuk-react/breadcrumb';
import Button from '@govuk-react/button';
import Checkbox from '@govuk-react/checkbox';
import DateInput from '@govuk-react/date-input';
// import DocumentFooterMetadata from '@govuk-react/document-footer-metadata';
import ErrorText from '@govuk-react/error-text';
import FileUpload from '@govuk-react/file-upload';
import GridCol from '@govuk-react/grid-col';
import GridRow from '@govuk-react/grid-row';
import Header from '@govuk-react/header';
import HintText from '@govuk-react/hint-text';
import Input from '@govuk-react/input';
import InputField from '@govuk-react/input-field';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import Layout from '@govuk-react/layout';
import ListItem from '@govuk-react/list-item';
import ListNavigation from '@govuk-react/list-navigation';
import MultiChoice from '@govuk-react/multi-choice';
import OrderedList from '@govuk-react/ordered-list';
import Pagination from '@govuk-react/pagination';
import Panel from '@govuk-react/panel';
import PhaseBadge from '@govuk-react/phase-badge';
import PhaseBanner from '@govuk-react/phase-banner';
import Radio from '@govuk-react/radio';
// import RelatedItems from '@govuk-react/related-items';
import SearchBox from '@govuk-react/search-box';
import Select from '@govuk-react/select';
import TextArea from '@govuk-react/text-area';
import UnorderedList from '@govuk-react/unordered-list';

import asComponent from '.';

const RCBackLink = asComponent(BackLink);
const RCBreadcrumb = asComponent(Breadcrumb);
const RCButton = asComponent(Button);
const RCCheckbox = asComponent(Checkbox);
const RCDateInput = asComponent(DateInput);
const RCErrorText = asComponent(ErrorText);
const RCFileUpload = asComponent(FileUpload);
const RCGridCol = asComponent(GridCol);
const RCGridRow = asComponent(GridRow);
const RCHeader = asComponent(Header);
const RCHintText = asComponent(HintText);
const RCInput = asComponent(Input);
const RCInputField = asComponent(InputField);
const RCLabel = asComponent(Label);
const RCLabelText = asComponent(LabelText);
const RCLayout = asComponent(Layout);
const RCListItem = asComponent(ListItem);
const RCListNavigation = asComponent(ListNavigation);
const RCMultiChoice = asComponent(MultiChoice);
const RCOrderedList = asComponent(OrderedList);
const RCPagination = asComponent(Pagination);
const RCPanel = asComponent(Panel);
const RCPhaseBadge = asComponent(PhaseBadge);
const RCPhaseBanner = asComponent(PhaseBanner);
const RCRadio = asComponent(Radio);
// const RCRelatedItems = asComponent(RelatedItems);
const RCSearchBox = asComponent(SearchBox);
const RCSelect = asComponent(Select);
const RCTextArea = asComponent(TextArea);
const RCUnorderedList = asComponent(UnorderedList);

storiesOf('asComponent', module).add('BackLink', () => (
  <RCBackLink>example</RCBackLink>
));

storiesOf('asComponent', module).add('Breadcrumb', () => (
  <RCBreadcrumb>example</RCBreadcrumb>
));

storiesOf('asComponent', module).add('Button', () => (
  <RCButton>example</RCButton>
));

storiesOf('asComponent', module).add('RCCheckbox', () => (
  <RCCheckbox>example</RCCheckbox>
));

storiesOf('asComponent', module).add('RCDateInput', () => (
  <RCDateInput>example</RCDateInput>
));

storiesOf('asComponent', module).add('RCErrorText', () => (
  <RCErrorText>example</RCErrorText>
));

storiesOf('asComponent', module).add('RCFileUpload', () => (
  <RCFileUpload>example</RCFileUpload>
));

storiesOf('asComponent', module).add('RCGridCol', () => (
  <RCGridCol>example</RCGridCol>
));

storiesOf('asComponent', module).add('RCGridRow', () => (
  <RCGridRow>example</RCGridRow>
));

storiesOf('asComponent', module).add('RCHeader', () => (
  <RCHeader>example</RCHeader>
));

storiesOf('asComponent', module).add('RCHintText', () => (
  <RCHintText>example</RCHintText>
));

storiesOf('asComponent', module).add('RCInput', () => (
  <RCInput />
));

storiesOf('asComponent', module).add('RCInputField', () => (
  <RCInputField>example</RCInputField>
));

storiesOf('asComponent', module).add('RCLabel', () => (
  <RCLabel>example</RCLabel>
));

storiesOf('asComponent', module).add('RCLabelText', () => (
  <RCLabelText>example</RCLabelText>
));

storiesOf('asComponent', module).add('RCLayout', () => (
  <RCLayout>example</RCLayout>
));

storiesOf('asComponent', module).add('RCListItem', () => (
  <RCListItem>example</RCListItem>
));

storiesOf('asComponent', module).add('RCListNavigation', () => (
  <RCListNavigation>example</RCListNavigation>
));

storiesOf('asComponent', module).add('RCMultiChoice', () => (
  <RCMultiChoice>example</RCMultiChoice>
));

storiesOf('asComponent', module).add('RCOrderedList', () => (
  <RCOrderedList>example</RCOrderedList>
));

storiesOf('asComponent', module).add('RCPagination', () => (
  <RCPagination>example</RCPagination>
));

storiesOf('asComponent', module).add('RCPanel', () => (
  <RCPanel>example</RCPanel>
));

storiesOf('asComponent', module).add('RCPhaseBadge', () => (
  <RCPhaseBadge>example</RCPhaseBadge>
));

storiesOf('asComponent', module).add('RCPhaseBanner', () => (
  <RCPhaseBanner>example</RCPhaseBanner>
));

storiesOf('asComponent', module).add('RCRadio', () => (
  <RCRadio>example</RCRadio>
));

// storiesOf('asComponent', module).add('RCRelatedItems', () => (
//   <RCRelatedItems>example</RCRelatedItems>
// ));

storiesOf('asComponent', module).add('RCSearchBox', () => (
  <RCSearchBox>example</RCSearchBox>
));

storiesOf('asComponent', module).add('RCSelect', () => (
  <RCSelect>example</RCSelect>
));

storiesOf('asComponent', module).add('RCTextArea', () => (
  <RCTextArea>example</RCTextArea>
));

storiesOf('asComponent', module).add('RCUnorderedList', () => (
  <RCUnorderedList>example</RCUnorderedList>
));
