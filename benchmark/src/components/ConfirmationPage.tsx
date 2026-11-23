import { Body } from 'govuk-react/body';
import { Link } from 'govuk-react/link';
import * as Panel from 'govuk-react/panel';
import { Columns } from './Columns';

export type ConfirmationPageProps = { title: string; body: string; next: { href: string; text: string } };

export function ConfirmationPage({ title, body, next }: ConfirmationPageProps) {
  return (
    <Columns>
      <Panel.Composite title={title} headingLevel={1}>
        {body}
      </Panel.Composite>
      <Body>
        <Link href={next.href}>{next.text}</Link>
      </Body>
    </Columns>
  );
}
