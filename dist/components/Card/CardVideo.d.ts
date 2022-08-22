import React from 'react';
import { CardImageProps } from './components/CardImage';
export interface CardVideoProps {
    link: string;
    image: CardImageProps;
    header: string;
    wrapLink?: any;
}
declare const CardVideo: React.FC<CardVideoProps & CardImageProps>;
export default CardVideo;
