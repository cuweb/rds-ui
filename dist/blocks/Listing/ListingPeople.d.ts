import React from 'react';
import { ListingHeaderProps } from './components/ListingHeader';
export interface ListingPeopleProps {
    data: ListProps[];
    noUblock?: boolean;
    lineClamp?: number;
    wrapLink?: any;
}
export interface ListProps {
    src: string;
    title: string;
    description?: string;
    image?: ImageProps;
}
export interface ImageProps {
    src: string;
    alt: string;
}
declare const ListingPeople: React.FC<ListingPeopleProps & ListingHeaderProps>;
export default ListingPeople;
