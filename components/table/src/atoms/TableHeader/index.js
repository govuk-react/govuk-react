// https://govuk-elements.herokuapp.com/data/

import glamorous from 'glamorous';

const TableHeader = glamorous.thead({
  // TODO: avoid cascade
  ' th': {
    fontWeight: 700,
  },
});

export default TableHeader;
