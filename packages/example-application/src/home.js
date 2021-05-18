import React from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

export default () => (
  <>
    <GovUK.LeadParagraph>Welcome to the govuk-react example application.</GovUK.LeadParagraph>
    <GovUK.Paragraph>Click Start to continue.</GovUK.Paragraph>
    <GovUK.Button as={Link} to="form">
      Start
    </GovUK.Button>
  </>
);
