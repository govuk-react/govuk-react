import * as React from 'react';
import styled from 'styled-components';
import { BLUE } from 'govuk-colours';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const BottomNavWrapper = styled('div')<BottomNavWrapperComponentProps>(({ fullWidth }) => ({
  borderBottom: `10px solid ${BLUE}`,
  maxWidth: fullWidth ? undefined : '960px',
  margin: '0 auto',
  width: fullWidth ? undefined : `calc(100% - ${SPACING.SCALE_5})`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: fullWidth ? undefined : `calc(100% - ${SPACING.SCALE_6})`,
  },
}));

const BottomNavWrapperComponent: React.FC<BottomNavWrapperComponentProps> = ({ fullWidth }) => {
  return <BottomNavWrapper fullWidth={fullWidth} />;
};

export interface BottomNavWrapperComponentProps {
  fullWidth?: boolean;
}

BottomNavWrapperComponent.defaultProps = {
  fullWidth: false,
};

export default BottomNavWrapperComponent;
