import React from 'react';
import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem';
export interface SidebarMenuProps {
    sticky?: boolean;
    wrapLink?: any;
    className?: string | undefined;
    menu: NavMenuItemTypes[];
}
declare const SidebarMenu: React.FC<SidebarMenuProps>;
export default SidebarMenu;
