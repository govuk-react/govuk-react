import type { ReactNode } from 'react';
import { GridColumn } from 'govuk-react/grid-column';
import { GridRow } from 'govuk-react/grid-row';

export function Columns({ children }: { children: ReactNode }) {
  return (
    <GridRow>
      <GridColumn width="two-thirds">{children}</GridColumn>
    </GridRow>
  );
}
