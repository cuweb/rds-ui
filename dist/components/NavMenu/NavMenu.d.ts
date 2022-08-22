import { FC } from 'react';
import { NavMenuItemTypes } from './components/NavMenuItem';
export declare type NavMenuTypes = 'side' | 'top' | 'modalMenu';
export interface NavMenuProps {
    type: NavMenuTypes;
    label?: string;
    isMobile?: boolean;
    wrapLink?: any;
    menu: Array<NavMenuItemTypes>;
}
declare const NavMenu: FC<NavMenuProps>;
export default NavMenu;
