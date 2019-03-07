import React from 'react';
import { LEVEL_SIZE } from '@govuk-react/constants';
import Heading from '.';

export const H1 = props => <Heading as="h1" size={LEVEL_SIZE[1]} {...props} />;
export const H2 = props => <Heading as="h2" size={LEVEL_SIZE[2]} {...props} />;
export const H3 = props => <Heading as="h3" size={LEVEL_SIZE[3]} {...props} />;
export const H4 = props => <Heading as="h4" size={LEVEL_SIZE[4]} {...props} />;
export const H5 = props => <Heading as="h5" size={LEVEL_SIZE[5]} {...props} />;
export const H6 = props => <Heading as="h6" size={LEVEL_SIZE[6]} {...props} />;
