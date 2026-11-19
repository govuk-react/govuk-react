import * as React from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <>
    <GovUK.Heading size="l">Welcome to the govuk-react example application.</GovUK.Heading>
    <GovUK.Body>Click Start to continue.</GovUK.Body>
    <GovUK.StartButton as={Link} to="/forms">
      Start now
    </GovUK.StartButton>
  </>
);

export default Home;
