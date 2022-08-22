import React from 'react';
import { BaseHeadingProps } from './components/BaseHeading';
import { MultipleHeadingProps } from './components/MultipleHeading';
export interface HeadingProps {
    subheader?: string;
    description?: string;
}
declare const Heading: React.FC<HeadingProps & BaseHeadingProps & MultipleHeadingProps>;
export default Heading;
