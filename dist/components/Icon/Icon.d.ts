import React from 'react';
export interface IconProps {
    icon: string;
    size?: number;
    svg?: React.ReactElement;
    className?: string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
