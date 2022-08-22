import React from 'react';
import { ListingHeaderProps } from './components/ListingHeader';
export interface ListingNewsProps {
    data: NewsListProps[];
    noUblock?: boolean;
    lineClamp?: number;
    wrapLink?: any;
}
export interface NewsListProps {
    src: string;
    title: string;
    description?: string;
    datetime: string;
    image?: ImageProps;
}
export interface ImageProps {
    src: string;
    alt: string;
}
declare const ListingNews: React.FC<ListingNewsProps & ListingHeaderProps>;
export default ListingNews;
