import * as React from 'react';
import type { Meta } from '@storybook/react';
import { Body } from '../body';
import * as SummaryList from '.';

export default {
  title: 'Typography/Summary list',
  id: 'summary-list',
  component: SummaryList.Root,
} satisfies Meta<typeof SummaryList.Root>;

export const Default = {
  render: () => (
    <SummaryList.Composite>
      <SummaryList.RowComposite
        term="Name"
        value="Sarah Phillips"
        actions={[
          <SummaryList.ActionComposite key="Change" href="#" visuallyHiddenText="name">
            Change
          </SummaryList.ActionComposite>,
        ]}
      />
      <SummaryList.RowComposite
        term="Date of birth"
        value="5 January 1978"
        actions={[
          <SummaryList.ActionComposite key="Change" href="#" visuallyHiddenText="date of birth">
            Change
          </SummaryList.ActionComposite>,
        ]}
      />
      <SummaryList.RowComposite
        term="Address"
        value={
          <>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </>
        }
        actions={[
          <SummaryList.ActionComposite key="Change" href="#" visuallyHiddenText="address">
            Change
          </SummaryList.ActionComposite>,
        ]}
      />
      <SummaryList.RowComposite
        term="Contact details"
        value={
          <>
            <Body>07700 900457</Body>
            <Body>sarah.phillips@example.com</Body>
          </>
        }
        actions={[
          <SummaryList.ActionComposite key="Add" href="#" visuallyHiddenText="contact details">
            Add
          </SummaryList.ActionComposite>,
          <SummaryList.ActionComposite key="Change" href="#" visuallyHiddenText="contact details">
            Change
          </SummaryList.ActionComposite>,
        ]}
      />
    </SummaryList.Composite>
  ),
};

export const WithParts = {
  render: () => (
    <SummaryList.Root>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Phillips</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionComposite href="#" visuallyHiddenText="name">
            Change
          </SummaryList.ActionComposite>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList.Root>
  ),
};

export const Card = {
  render: () => (
    <SummaryList.Card.Root>
      <SummaryList.Card.TitleWrapper>
        <SummaryList.Card.Title>University of Gloucestershire</SummaryList.Card.Title>
        <SummaryList.Card.Actions>
          <SummaryList.ActionComposite href="#" visuallyHiddenText="(University of Gloucestershire)">
            Delete choice
          </SummaryList.ActionComposite>
          <SummaryList.ActionComposite href="#" visuallyHiddenText="(University of Gloucestershire)">
            Withdraw
          </SummaryList.ActionComposite>
        </SummaryList.Card.Actions>
      </SummaryList.Card.TitleWrapper>
      <SummaryList.Card.Content>
        <SummaryList.Root>
          <SummaryList.Row>
            <SummaryList.Key>Course</SummaryList.Key>
            <SummaryList.Value>
              English (3DMD)
              <br />
              PGCE with QTS full time
            </SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Location</SummaryList.Key>
            <SummaryList.Value>
              School name
              <br />
              Road, City, SW1 1AA
            </SummaryList.Value>
          </SummaryList.Row>
        </SummaryList.Root>
      </SummaryList.Card.Content>
    </SummaryList.Card.Root>
  ),
};
