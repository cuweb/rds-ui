import React from 'react';
export interface BaseHeadingProps {
    header: string;
    center?: boolean;
    noborder?: boolean;
}
declare const BaseHeading: React.FC<BaseHeadingProps>;
export default BaseHeading;
