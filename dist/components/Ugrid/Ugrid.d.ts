import React from 'react';
export interface UgridProps {
    className?: string | undefined;
    columns?: 1 | 2 | 3 | 4;
    gap?: 1 | 2 | 3 | 4;
    isLayout?: boolean;
    isLayoutRight?: boolean;
    children?: React.ReactNode;
}
declare const Ugrid: React.FC<UgridProps>;
export default Ugrid;
