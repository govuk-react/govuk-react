import * as Accordion from 'govuk-react/accordion';
import * as CharacterCount from 'govuk-react/character-count';
import { guide } from './content';

/** A character count, which counts as the user types once React hydrates. */
export function FeedbackField() {
  return (
    <CharacterCount.Field
      id="feedback"
      name="feedback"
      label="Can you provide more detail?"
      labelSize="m"
      hint="Do not include personal or financial information."
      maxLength={200}
    />
  );
}

/**
 * An accordion, which shows every section until React hydrates it. `client:visible` watches the
 * island's child elements, which need a box: the accordion's element has `display: contents`, so
 * it's wrapped in a `div`.
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
