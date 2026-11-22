import * as Accordion from 'govuk-react/accordion';
import { Body } from 'govuk-react/body';
import * as CharacterCount from 'govuk-react/character-count';
import * as Tabs from 'govuk-react/tabs';
import { guide } from './content';

/** Components rendered on the server only, and enhanced by their elements' inline scripts. */
export function WithoutReact() {
  return (
    <>
      <Accordion.Composite
        id="without-react-guide"
        rememberExpanded={false}
        sections={guide.map(({ value, heading, content }) => ({ value, heading, children: content }))}
      />
      <Tabs.Composite
        title="Contents"
        items={[
          { id: 'past-day', label: 'Past day', panel: <Body>3 cases reported in the past day.</Body> },
          { id: 'past-week', label: 'Past week', panel: <Body>27 cases reported in the past week.</Body> },
          { id: 'past-month', label: 'Past month', panel: <Body>124 cases reported in the past month.</Body> },
        ]}
      />
      <CharacterCount.Field
        id="without-react-feedback"
        name="feedback"
        label="Can you provide more detail?"
        labelSize="m"
        hint="Do not include personal or financial information."
        maxLength={200}
      />
    </>
  );
}
