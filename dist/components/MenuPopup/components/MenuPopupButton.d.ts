import React, { FC, MouseEvent } from 'react';
export interface MenuPopupButtonProps {
    isButton?: boolean;
    title?: string | React.ReactNode;
    link?: string;
    icon?: string;
    buttonClassName?: string;
    wrapLink?: any;
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
declare const MenuPopupButton: FC<MenuPopupButtonProps>;
export default MenuPopupButton;
