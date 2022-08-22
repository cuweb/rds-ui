import React, { ReactNode } from 'react';
import { UblockProps } from '@components/Ublock/Ublock';
import { MenuPopupMenuProps } from '@components/MenuPopup/components/MenuPopupMenu';
export interface PanelProps {
    children?: ReactNode;
    actions?: MenuPopupMenuProps;
    block?: UblockProps;
    color?: PanelColorsTypes;
    shadow?: boolean;
    className?: string;
}
export declare type PanelColorsTypes = 'grey' | 'white';
declare const Panel: React.FC<PanelProps>;
export default Panel;
