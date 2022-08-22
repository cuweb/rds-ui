import React from 'react';
export interface CardGridProps {
    title?: string;
    columns?: 1 | 2 | 3 | 4 | undefined;
    button?: ButtonProps;
    wrapLink?: any;
    color?: 'grey' | 'white' | 'black' | undefined;
    children?: React.ReactNode;
    handleLoad?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
interface ButtonProps {
    url: string;
    text: string;
}
declare const CardGrid: React.FC<CardGridProps>;
export default CardGrid;
