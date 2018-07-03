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
<TabbedNav
  handleNavChange={this.handleNavChange}
  activeNavTab={this.state.activeNavTab}
  navItems={['Example tab 1', 'Example tab 2', 'Example tab 3']}
/>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `activeNavTab` |  | ```'Back'``` | string | A string that determines the active tab
 `children` |  | ```undefined``` | node | Optional child components that can be rendered in tab click
 `handleNavChange` |  | ```undefined``` | func | Custom function to run when the `onClick` event is fired
 `navItems` |  | ```undefined``` | array | Array of items use for tab names


