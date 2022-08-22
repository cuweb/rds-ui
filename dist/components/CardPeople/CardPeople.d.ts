import React from 'react';
export interface CardPeopleProps {
    link: string;
    image: ImageProps;
    description: string;
    firstName: string;
    lastName: string;
    wrapLink?: any;
}
export interface ImageProps {
    src: string;
    alt: string;
}
declare const CardPeople: React.FC<CardPeopleProps>;
export default CardPeople;
