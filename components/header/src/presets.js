import React from 'react';
import { LEVEL_SIZE } from '@govuk-react/constants';
import Header from '.';

export const H1 = props => <Header level={1} size={LEVEL_SIZE[1]} {...props} />;
export const H2 = props => <Header level={2} size={LEVEL_SIZE[2]} {...props} />;
export const H3 = props => <Header level={3} size={LEVEL_SIZE[3]} {...props} />;
export const H4 = props => <Header level={4} size={LEVEL_SIZE[4]} {...props} />;
export const H5 = props => <Header level={5} size={LEVEL_SIZE[5]} {...props} />;
export const H6 = props => <Header level={6} size={LEVEL_SIZE[6]} {...props} />;
