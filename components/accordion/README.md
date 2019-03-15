Accordion
=========

### Import
```js
  import Accordion from '@govuk-react/accordion';
```
<!-- STORY -->

### Usage

Simple
```jsx

import Accordion from '@govuk-react/accordion'

class AccordionComponent extends React.Component {
  render() {
    return (
      <Accordion>
        <Accordion.OpenAll href="#" onClick={toggleAll}>
          {`${areAllOpen ? 'Close' : 'Open'} all`}
        </Accordion.OpenAll>
        <Accordion.Group
          heading="Writing well for the web"
          expanded={state.accordionOne}
          onClick={individualAccordionSetState('accordionOne')}
        >
          <Paragraph mb={0}>This is the content for writing well for the web.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Writing well for specialists"
          expanded={state.accordionTwo}
          onClick={individualAccordionSetState('accordionTwo')}
        >
          <Paragraph mb={0}>This is the content for writing well for the specialists.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Know your audience"
          expanded={state.accordionThree}
          onClick={individualAccordionSetState('accordionThree')}
        >
          <Paragraph mb={0}>This is the content for Know you audience.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="How people read"
          expanded={state.accordionFour}
          onClick={individualAccordionSetState('accordionFour')}
        >
          <Paragraph mb={0}>This is the content for How people read.</Paragraph>
        </Accordion.Group>
      </Accordion>
    );
  }
}
```

### References
- TODO: INSERT A REFERENCE TO EXTERNAL URL IF POSSIBLE

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


