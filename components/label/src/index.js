// https://github.com/alphagov/govuk-frontend/tree/master/src/components/

import glamorous from 'glamorous';
import React from 'react';

import { ERROR_COLOUR } from 'govuk-colours';
import { MEDIA_QUERIES, SITE_WIDTH, SPACING } from '@govuk-react/constants';

const GLabel = glamorous.label(
  {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '100%',
    ':after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [MEDIA_QUERIES.LARGESCREEN]: {
      maxWidth: SITE_WIDTH,
    },
  },
  ({ error }) => ({
    borderLeft: error ? `4px solid ${ERROR_COLOUR}` : undefined,
    marginRight: error ? SPACING.SCALE_3 : undefined,
    paddingLeft: error ? SPACING.SCALE_2 : undefined,
  }),
);

const Label = props => <GLabel {...props} />;

export default Label;
