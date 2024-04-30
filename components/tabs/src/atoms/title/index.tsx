import { MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import React from 'react';
import styled from 'styled-components';

const StyledTabsTitle = styled('h2')(typography.font({ size: 19 }), {
  marginBottom: spacing.simple(1),
  [MEDIA_QUERIES.TABLET]: {
    display: 'none',
  },
});

interface TabsTitleType extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: string | React.ReactNode;
}

const TabsTitle = ({ children = 'Contents', ...props }: TabsTitleType): JSX.Element => {
  return <StyledTabsTitle {...props}>{children}</StyledTabsTitle>;
};

export default TabsTitle;
