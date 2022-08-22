import React, { FC } from 'react';
export interface CardImageProps {
    image: ImageProps;
    children?: React.ReactNode;
}
export interface ImageProps {
    src: string;
    alt?: string;
    children?: React.ReactNode;
}
declare const CardImage: FC<CardImageProps>;
export default CardImage;
