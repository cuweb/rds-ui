import { MenuPopupMenuProps } from '@components/MenuPopup/components/MenuPopupMenu'
import MenuPopup from '@components/MenuPopup/MenuPopup'
import React, { FC } from 'react'

export interface PanelActionsProps {
    className?: string
    actions: MenuPopupMenuProps
    children?: React.ReactNode
}

const PanelActions: FC<PanelActionsProps> = ({
    className = '',
    actions,
}): JSX.Element => {
    return (
        <div className={`b-sidebar__actions ${className}`}>
            <MenuPopup
                icon='kebab-hor'
                className='custom-classname'
                buttonClassName='button-classname'
                isButton
                direction='right'
                menu={actions.menu}
            />
        </div>
    )
}
export default PanelActions
