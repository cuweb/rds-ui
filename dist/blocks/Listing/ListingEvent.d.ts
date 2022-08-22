import React from 'react';
import { ListingHeaderProps } from './components/ListingHeader';
export interface ListingEventProps {
    data: EventListProps[];
    noUblock?: boolean;
    lineClamp?: number;
    wrapLink?: any;
}
export interface EventListProps {
    src: string;
    title: string;
    description?: string;
    date: string;
    startTime?: string;
    endTime?: string;
}
export interface ImageProps {
    src: string;
    alt: string;
}
declare const ListingEvent: React.FC<ListingEventProps & ListingHeaderProps>;
export default ListingEvent;
