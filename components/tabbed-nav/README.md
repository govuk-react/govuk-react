Tabbed-Nav
========

### Import
```js
  import TabbedNav from '@govuk-react/tabbed-nav';
```
<!-- STORY -->

### Usage

Simple
```jsx
const props = {
  handleNavChange: () => { },
  activeNavTab: 'Example tab 1',
  navItems: ['Example tab 1', 'Example tab 2'],
  };

  const childComponentOne = () => (
    <div>
      First child component
    </div>
  );

  const childComponentTwo = () => (
    <div>
      Second child component
    </div>
  );

 <TabbedNav {...props}>
    {props.activeNavTab === 'Example tab 1' ?
      <childComponentOne />
      :
      <childComponentTwo />
    }
  </TabbedNav>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `activeNavTab` |  | ```'Back'``` | string | A string that determines the active tab
 `children` |  | ```undefined``` | node | Optional child components that can be rendered in tab click
 `handleNavChange` |  | ```undefined``` | func | Custom function to run when the `onClick` event is fired
 `navItems` |  | ```undefined``` | array | Array of items use for tab names


