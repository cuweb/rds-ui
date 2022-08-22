import React from 'react';
import { MastheadActionsTypes } from '@blocks/Masthead/components/MastheadActions';
import { MastHeadBrand } from '@blocks/Masthead/components/MastheadTitle';
import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem';
export interface MastheadProps {
    title: string;
    url?: string;
    wrapLink?: any;
    brand?: MastHeadBrand;
    actions?: MastheadActionsTypes;
    menu?: NavMenuItemTypes[];
    children?: React.ReactNode;
}
declare const Masthead: React.FC<MastheadProps>;
export default Masthead;
