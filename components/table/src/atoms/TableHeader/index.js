// https://govuk-elements.herokuapp.com/data/

import styled from 'styled-components';

const TableHeader = styled('thead')({
  // TODO: avoid cascade
  ' th': {
    fontWeight: 700,
  },
});

export default TableHeader;
