Select
======

### Import
```js
  import Select from '@govuk-react/select';
```
<!-- STORY -->

### Usage

Simple

```jsx
<Select name="group1" label="This is a label">
  <option value="0">GOV.UK elements option 1</option>
  <option value="1">GOV.UK elements option 2</option>
  <option value="2">GOV.UK elements option 3</option>
</Select>
```

Select with hint text

```jsx
<Select
   name="group1"
   label="This is a label"
   hint={[
     'This is and example of hintText/description of what we need from you.',
   ]}
 >
   <option value="0">GOV.UK elements option 1</option>
   <option value="1">GOV.UK elements option 2</option>
   <option value="2">GOV.UK elements option 3</option>
</Select>
```

Select with hint text & error

```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<Select
   name="group1"
   label="This is a label"
   hint={[
     'This is and example of hintText/description of what we need from you.',
   ]}
   meta={meta}
 >
   <option value="0">GOV.UK elements option 1</option>
   <option value="1">GOV.UK elements option 2</option>
   <option value="2">GOV.UK elements option 3</option>
</Select>
```

Standalone input with inline label

```jsx
import LabelText from '@govuk-react/label-text';
import { SelectInput } '@govuk-react/select';

<label>
   <LabelText>Sort by:&nbsp;
     <SelectInput>
       <option value="0">People</option>
       <option value="1">Animals</option>
       <option value="2">Vegetables</option>
     </SelectInput>
   </LabelText>
 </label>
```

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/select

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 
 `errorText` |  | ```undefined``` |  | 
 `hint` |  | ```undefined``` |  | 
 `input` |  | ```{}``` |  | 
 `label` | true | `````` |  | 
 `meta` |  | ```{}``` |  | 


