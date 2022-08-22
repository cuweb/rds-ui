import React from 'react';
import { ListingHeaderProps } from './components/ListingHeader';
export interface ListingProps {
    data: BaseListProps[];
    noUblock?: boolean;
    noArrow?: boolean;
    lineClamp?: number;
    wrapLink?: any;
}
export interface BaseListProps {
    src: string;
    title: string;
    description?: string;
    image?: ImageProps;
    badge?: string;
    icon?: string;
    children?: React.ReactNode;
}
export interface ImageProps {
    src: string;
    alt: string;
}
declare const Listing: React.FC<ListingProps & ListingHeaderProps>;
export default Listing;
