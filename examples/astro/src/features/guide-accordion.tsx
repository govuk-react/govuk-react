import * as Accordion from 'govuk-react/accordion';
import { guide } from './content';

/** An accordion, which shows every section until React hydrates it. */
export function GuideAccordion({ id }: { id: string }) {
  return (
    <Accordion.Composite
      id={id}
      rememberExpanded={false}
      sections={guide.map(({ value, heading, content }) => ({ value, heading, children: content }))}
    />
  );
}
