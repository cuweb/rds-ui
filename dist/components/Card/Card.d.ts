import React from 'react';
import { CardImageProps } from './components/CardImage';
export interface CardProps {
    link: string;
    header: string;
    description?: string;
    image: CardImageProps;
    wrapLink?: any;
}
declare const Card: React.FC<CardProps & CardImageProps>;
export default Card;
