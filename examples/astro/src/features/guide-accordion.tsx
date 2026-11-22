import * as Accordion from 'govuk-react/accordion';
import { guide } from './content';

/**
 * An accordion, which shows every section until React hydrates it. `client:visible` watches the
 * island's child elements, and the accordion's element has `display: contents`, so no box of its
 * own: the `div` gives it one.
 */
export function GuideAccordion({ id }: { id: string }) {
  return (
    <div>
      <Accordion.Composite
        id={id}
        rememberExpanded={false}
        sections={guide.map(({ value, heading, content }) => ({ value, heading, children: content }))}
      />
    </div>
  );
}
