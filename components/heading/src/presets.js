import React from 'react';
import { LEVEL_SIZE } from '@govuk-react/constants';
import Heading from '.';

export const H1 = props => <Heading level={1} size={LEVEL_SIZE[1]} {...props} />;
export const H2 = props => <Heading level={2} size={LEVEL_SIZE[2]} {...props} />;
export const H3 = props => <Heading level={3} size={LEVEL_SIZE[3]} {...props} />;
export const H4 = props => <Heading level={4} size={LEVEL_SIZE[4]} {...props} />;
export const H5 = props => <Heading level={5} size={LEVEL_SIZE[5]} {...props} />;
export const H6 = props => <Heading level={6} size={LEVEL_SIZE[6]} {...props} />;
