import { MenuPopupMenuProps } from '@components/MenuPopup/components/MenuPopupMenu';
import { FC } from 'react';
export interface PanelActionsProps {
    className?: string;
    actions: MenuPopupMenuProps;
}
declare const PanelActions: FC<PanelActionsProps>;
export default PanelActions;
