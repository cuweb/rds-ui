import React from 'react';
export interface CardFigureProps {
    link: string;
    description: string;
    caption: string;
    wrapLink?: any;
}
declare const CardFigure: React.FC<CardFigureProps>;
export default CardFigure;
