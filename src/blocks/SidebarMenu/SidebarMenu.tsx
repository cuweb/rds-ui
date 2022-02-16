import React from 'react'
import NavMenu from '@components/NavMenu/NavMenu'
import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem'

export interface SidebarMenuProps {
    sticky?: boolean
    className?: string | undefined
    menu: Array<NavMenuItemTypes>
}
const SidebarMenu: React.FC<SidebarMenuProps> = ({
    sticky,
    className = '',
    menu,
}): JSX.Element => {
    const stickyClassName = sticky ? `u-sticky` : ''
    return (
        <div className={`b-menu ${stickyClassName} ${className}`}>
            <NavMenu type='side' menu={menu} />
        </div>
    )
}
export default SidebarMenu
