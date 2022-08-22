import React from 'react';
import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem';
import { SearchFormProps } from '@components/SearchForm/SearchForm';
import { LoginProps } from '@blocks/Login/Login';
export declare type MastheadActionsTypes = {
    search?: SearchFormProps;
    login?: LoginProps;
    buttons?: NavMenuItemTypes[];
};
interface MastheadActionsProps {
    items: MastheadActionsTypes;
    isMobile?: boolean;
    wrapLink?: any;
}
declare const MastheadActions: React.FC<MastheadActionsProps>;
export default MastheadActions;
