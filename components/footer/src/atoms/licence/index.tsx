import * as React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

import Link from '../link';

const LicenceLogo = styled('svg')({
  display: 'inline-block',
  marginRight: spacing.simple(2),
  marginBottom: spacing.simple(3),
  verticalAlign: 'top',
  [MEDIA_QUERIES.DESKTOP]: {
    marginBottom: 0,
  },
});

const LicenceDescription = styled('span')({
  display: 'inline-block',
});

const Licence: React.FC = () => (
  <div>
    <LicenceLogo
      role="presentation"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 483.2 195.7"
      height="17"
      width="41"
    >
      <path
        fill="currentColor"
        d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
      />
    </LicenceLogo>
    <LicenceDescription>
      All content is available under the{' '}
      <Link href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">
        Open Government Licence v3.0
      </Link>
      , except where otherwise stated
    </LicenceDescription>
  </div>
);

export default Licence;
