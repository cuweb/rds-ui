import React from 'react';
export interface MultipleHeadingProps {
    header: string;
    subheader?: string;
    description?: string;
    center?: boolean;
}
declare const MultipleHeading: React.FC<MultipleHeadingProps>;
export default MultipleHeading;
