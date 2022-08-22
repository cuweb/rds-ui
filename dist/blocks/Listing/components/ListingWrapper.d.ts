import { UblockProps } from '@components/Ublock/Ublock';
import React, { FC } from 'react';
import { ListingHeaderProps } from './ListingHeader';
export declare type ListingTypes = 'base' | 'event' | 'news' | 'people' | 'video';
export interface ListingWrapperProps {
    noUblock?: boolean;
    type: ListingTypes;
    uBlockProps?: UblockProps;
    noArrow?: boolean;
    children: React.ReactNode;
}
declare const ListingWrapper: FC<ListingWrapperProps & ListingHeaderProps>;
export default ListingWrapper;
