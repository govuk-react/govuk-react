import * as React from 'react';
import TabsDemo from './TabsDemo';

// Two instances in one React tree, with no `name`: useId gives each its own radio group.
export default function MultiDemo() {
  return (
    <div>
      <TabsDemo id="m1" />
      <TabsDemo id="m2" />
    </div>
  );
}
