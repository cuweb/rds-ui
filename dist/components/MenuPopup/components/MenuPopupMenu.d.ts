import React, { FC } from 'react';
export interface MenuPopupMenuProps {
    menu: {
        title: string;
        link: string;
        icon?: string;
        className?: string;
        separator?: boolean;
        handleAction?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
        preventDefault?: boolean;
    }[];
    className?: string;
    wrapLink?: any;
}
declare const MenuPopupMenu: FC<MenuPopupMenuProps>;
export default MenuPopupMenu;
