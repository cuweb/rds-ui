import React, { FC } from 'react';
import { UblockProps } from '@components/Ublock/Ublock';
export interface IDetails {
    className?: string;
    block?: UblockProps;
    title?: string;
    variant?: 'default' | 'figure' | 'event' | 'eventpast';
    children?: React.ReactNode;
}
declare const Details: FC<IDetails>;
export default Details;
