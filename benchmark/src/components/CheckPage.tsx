import { Button } from 'govuk-react/button';
import { Heading } from 'govuk-react/heading';
import { Link } from 'govuk-react/link';
import * as SummaryList from 'govuk-react/summary-list';
import { VisuallyHidden } from 'govuk-react/visually-hidden';
import { contactSummary, type Contact, type Event } from '../journeys';
import { Columns } from './Columns';

export type CheckPageProps = { base: string; contact: Contact; event: Event };

const change = (href: string, hidden: string) => (
  <Link href={href}>
    Change<VisuallyHidden> {hidden}</VisuallyHidden>
  </Link>
);

export function CheckPage({ base, contact, event }: CheckPageProps) {
  return (
    <Columns>
      <Heading size="l" headingLevel={1}>
        Check your answers
      </Heading>
      <SummaryList.Composite>
        <SummaryList.RowComposite
          term="Contact"
          value={contactSummary(contact)}
          actions={[change(`${base}/licence/contact`, 'contact')]}
        />
        <SummaryList.RowComposite
          term="Event name"
          value={event.name}
          actions={[change(`${base}/licence/event`, 'event name')]}
        />
        <SummaryList.RowComposite
          term="Description"
          value={event.description}
          actions={[change(`${base}/licence/event`, 'description')]}
        />
      </SummaryList.Composite>
      <form method="post" noValidate>
        <Button>Submit application</Button>
      </form>
    </Columns>
  );
}
