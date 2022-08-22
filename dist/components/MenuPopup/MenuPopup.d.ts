import React, { FC } from 'react';
import { MenuPopupButtonProps } from './components/MenuPopupButton';
import { MenuPopupMenuProps } from './components/MenuPopupMenu';
export interface MenuPopupProps {
    className?: string;
    direction?: 'left' | 'right';
    noArrow?: boolean;
    children?: React.ReactNode;
}
declare const MenuPopup: FC<MenuPopupProps & MenuPopupButtonProps & MenuPopupMenuProps>;
export default MenuPopup;
