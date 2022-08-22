import React, { FC } from 'react';
export interface LinkProps {
    link?: string;
    color?: 'black' | 'blue' | 'red';
    noBorder?: boolean;
    children?: React.ReactNode;
}
declare const LinkWrapper: FC<LinkProps>;
export default LinkWrapper;
