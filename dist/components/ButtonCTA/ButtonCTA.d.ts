import React from 'react';
export interface ButtonProps {
    ghost?: boolean;
    text: string;
    link: string;
    icon?: string;
    full?: boolean;
    center?: boolean;
    children?: React.ReactNode;
    target?: string;
    grey?: boolean;
    shadow?: boolean;
    className?: string;
    wrapLink?: any;
    handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare const ButtonCTA: React.FC<ButtonProps>;
export default ButtonCTA;
