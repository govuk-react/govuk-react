import * as React from 'react';
import type { Meta } from '@storybook/react';
import { Tag } from '../tag';
import * as TaskList from '.';

export default {
  title: 'Navigation/Task list',
  id: 'task-list',
  component: TaskList.Root,
} satisfies Meta<typeof TaskList.Root>;

export const Default = {
  render: () => (
    <TaskList.Composite>
      <TaskList.ItemComposite idPrefix="company-details-1" title="Company Directors" href="#" status="Completed" />
      <TaskList.ItemComposite
        idPrefix="company-details-2"
        title="Registered company details"
        href="#"
        status={<Tag colour="blue">Incomplete</Tag>}
      />
      <TaskList.ItemComposite
        idPrefix="company-details-3"
        title="Financial history"
        href="#"
        hint="Include 5 years of the company’s relevant financial information"
        status={<Tag colour="blue">Incomplete</Tag>}
      />
      <TaskList.ItemComposite
        idPrefix="company-details-4"
        title="Business plan"
        href="#"
        status={<Tag colour="blue">Incomplete</Tag>}
      />
      <TaskList.ItemComposite
        idPrefix="company-details-5"
        title="References"
        href="#"
        status={<Tag colour="blue">Incomplete</Tag>}
      />
    </TaskList.Composite>
  ),
};

export const WithParts = {
  render: () => (
    <TaskList.Root>
      <TaskList.Item withLink>
        <TaskList.NameAndHint>
          <TaskList.Link href="#" aria-describedby="directors-status">
            Company Directors
          </TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status id="directors-status">Completed</TaskList.Status>
      </TaskList.Item>
      <TaskList.Item withLink>
        <TaskList.NameAndHint>
          <TaskList.Link href="#" aria-describedby="details-status">
            Registered company details
          </TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status id="details-status">
          <Tag colour="blue">Incomplete</Tag>
        </TaskList.Status>
      </TaskList.Item>
      <TaskList.Item>
        <TaskList.NameAndHint>
          <div>Submit</div>
        </TaskList.NameAndHint>
        <TaskList.Status id="submit-status" cannotStartYet>
          Cannot start yet
        </TaskList.Status>
      </TaskList.Item>
    </TaskList.Root>
  ),
};
