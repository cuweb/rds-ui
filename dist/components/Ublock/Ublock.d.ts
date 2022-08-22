import React from 'react';
export interface UblockProps {
    id?: string;
    heading?: {
        title: string;
        centered?: boolean;
        content?: string;
    };
    color?: 'grey' | 'white' | 'black';
    full?: boolean;
    large?: boolean;
    alert?: boolean;
    waves?: boolean;
    noBlock?: boolean;
    wide?: boolean;
    noPadding?: boolean;
    className?: string;
    children?: React.ReactNode;
}
declare const Ublock: React.FC<UblockProps>;
export default Ublock;
