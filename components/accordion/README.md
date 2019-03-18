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

const checkOpen = state => Object.values(state).every(Boolean);

class AccordionComponent extends React.Component {
  constructor() {
    this.state = {
      accordions: {
        accordionOne: false,
        accordionTwo: false,
        accordionThree: false,
        accordionFour: false,
      },
      isAllOpen: false,
    };
    this.individualAccordionSetState = this.individualAccordionSetState.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  componentDidUpdate() {
    return this.setState(({ accordions }) => ({
      isAllOpen: checkOpen(accordions),
    }));
  }

  function toggleAll() {
    return this.setState(({ accordions, isAllOpen }) =>
      Object.entries(accordions).reduce(
        (prev, [key]) => ({
          ...prev,
          [key]: isAllOpen,
        }),
        {},
      );
    )
  }

  function individualAccordionSetState(property) {
     return () => this.setState({
       [property]: !state[property],
     });
  }

  render() {
    const { accordions, isAllOpen } = this.props;
    return (
      <Accordion>
        <Accordion.OpenAll href="#" onClick={this.toggleAll}>
          {`${isAllOpen ? 'Close' : 'Open'} all`}
        </Accordion.OpenAll>
        <Accordion.Group
          heading="Writing well for the web"
          expanded={accordions.accordionOne}
          onClick={this.individualAccordionSetState('accordionOne')}
        >
          <Paragraph mb={0}>This is the content for writing well for the web.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Writing well for specialists"
          expanded={accordions.accordionTwo}
          onClick={this.individualAccordionSetState('accordionTwo')}
        >
          <Paragraph mb={0}>This is the content for writing well for the specialists.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="Know your audience"
          expanded={accordions.accordionThree}
          onClick={this.individualAccordionSetState('accordionThree')}
        >
          <Paragraph mb={0}>This is the content for Know you audience.</Paragraph>
        </Accordion.Group>
        <Accordion.Group
          heading="How people read"
          expanded={accordions.accordionFour}
          onClick={this.individualAccordionSetState('accordionFour')}
        >
          <Paragraph mb={0}>This is the content for How people read.</Paragraph>
        </Accordion.Group>
      </Accordion>
    );
  }
}
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/accordion
- https://design-system.service.gov.uk/components/accordion/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


