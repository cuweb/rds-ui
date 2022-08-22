import React from 'react';
import { CardImageProps } from './components/CardImage';
export interface CardNewsProps {
    link: string;
    image: CardImageProps;
    header: string;
    date: string;
    description?: string;
    wrapLink?: any;
}
declare const CardNews: React.FC<CardNewsProps & CardImageProps>;
export default CardNews;
