import { Heading } from 'govuk-react/heading';
import * as TaskList from 'govuk-react/task-list';
import { Tag } from 'govuk-react/tag';
import { Columns } from './Columns';

export type TaskListPageProps = { base: string; contactDone: boolean; eventDone: boolean };

const status = (done: boolean) => (done ? 'Completed' : <Tag colour="blue">Incomplete</Tag>);

export function TaskListPage({ base, contactDone, eventDone }: TaskListPageProps) {
  const ready = contactDone && eventDone;
  return (
    <Columns>
      <Heading size="l" headingLevel={1}>
        Apply for an event licence
      </Heading>
      <TaskList.Composite idPrefix="licence">
        <TaskList.ItemComposite
          idPrefix="licence-1"
          title="Contact details"
          href={`${base}/licence/contact`}
          status={status(contactDone)}
        />
        <TaskList.ItemComposite
          idPrefix="licence-2"
          title="Event details"
          href={`${base}/licence/event`}
          status={status(eventDone)}
        />
        <TaskList.ItemComposite
          idPrefix="licence-3"
          title="Check and submit"
          href={ready ? `${base}/licence/check` : undefined}
          status={ready ? <Tag colour="blue">Incomplete</Tag> : 'Cannot start yet'}
          cannotStartYet={!ready}
        />
      </TaskList.Composite>
    </Columns>
  );
}
