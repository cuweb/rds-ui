import React from 'react';
import { ListingHeaderProps } from './components/ListingHeader';
export interface ListingVideoProps {
    data: VideoListProps[];
    noUblock?: boolean;
    lineClamp?: number;
    wrapLink?: any;
}
export interface VideoListProps {
    src: string;
    title: string;
    image?: ImageProps;
}
export interface ImageProps {
    src: string;
    alt: string;
}
declare const ListingVideo: React.FC<ListingVideoProps & ListingHeaderProps>;
export default ListingVideo;
