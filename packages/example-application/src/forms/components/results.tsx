import React from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

const Results = ({ backLink, onBackClick, firstName, description, nationality, dob, animal, hasMultiplePets }) => (
  <>
    <GovUK.BackLink as={Link} to={backLink} onClick={onBackClick}>
      Back
    </GovUK.BackLink>
    <GovUK.Panel title="Application complete">Reference: XBR1N21R3</GovUK.Panel>
    <GovUK.LeadParagraph>
      Enim pariatur pariatur commodo incididunt ad nulla ex eu sunt ut ex id veniam veniam.
    </GovUK.LeadParagraph>
    <GovUK.Paragraph>
      Consequat adipisicing aliquip eiusmod nostrud et proident non id consequat aliquip eiusmod aliquip.
    </GovUK.Paragraph>
    <GovUK.UnorderedList>
      <GovUK.ListItem>Name: {firstName}</GovUK.ListItem>
      <GovUK.ListItem>Description: {description}</GovUK.ListItem>
      <GovUK.ListItem>Nationality: {JSON.stringify(nationality)}</GovUK.ListItem>
      <GovUK.ListItem>Date of birth: {JSON.stringify(dob)}</GovUK.ListItem>
      <GovUK.ListItem>Animal: {animal}</GovUK.ListItem>
      <GovUK.ListItem>Multiple pets: {hasMultiplePets}</GovUK.ListItem>
    </GovUK.UnorderedList>
  </>
);

export default Results;
