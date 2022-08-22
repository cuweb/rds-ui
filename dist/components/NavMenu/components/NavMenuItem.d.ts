import React, { FC } from 'react';
import { NavMenuTypes } from '../NavMenu';
export declare type NavMenuItemTypes = {
    title: string;
    link?: string;
    className?: string;
    color?: string;
    icon?: string;
    subMenu?: NavMenuItemTypes[];
    handleAction?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
    preventDefault?: boolean;
};
export interface NavMenuItemProps {
    type: NavMenuTypes;
    item: NavMenuItemTypes;
    isMobile?: boolean;
    direction?: 'left' | 'right';
    icon?: string;
    wrapLink?: any;
}
declare const NavMenuItem: FC<NavMenuItemProps>;
export default NavMenuItem;
