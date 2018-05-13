// https://govuk-elements.herokuapp.com/data/

import styled from 'react-emotion';

const TableHeader = styled('thead')({
  // TODO: avoid cascade
  ' th': {
    fontWeight: 700,
  },
});

export default TableHeader;
