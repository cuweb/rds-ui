import { FC, MouseEvent } from 'react';
import { NavMenuTypes } from '../NavMenu';
export interface NavMenuButtonProps {
    type: NavMenuTypes;
    title: string;
    link: string;
    isOpen: boolean;
    icon?: string;
    wrapLink?: any;
    onClick: (event: MouseEvent) => void;
}
declare const NavMenuButton: FC<NavMenuButtonProps>;
export default NavMenuButton;
