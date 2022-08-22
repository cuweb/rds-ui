import React from 'react';
import { MastheadActionsTypes } from '@blocks/Masthead/components/MastheadActions';
import { MastHeadBrand } from '@blocks/Masthead/components/MastheadTitle';
export interface MastheadProps {
    title: string;
    url?: string;
    wrapLink?: any;
    brand?: MastHeadBrand;
    actions?: MastheadActionsTypes;
    children?: React.ReactNode;
}
declare const Masthead: React.FC<MastheadProps>;
export default Masthead;
