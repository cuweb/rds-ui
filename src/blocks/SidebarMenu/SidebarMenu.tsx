import React from 'react'
import NavMenu from '@components/NavMenu/NavMenu'
import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem'

export interface SidebarMenuProps {
    sticky?: boolean
    wrapLink?: any
    className?: string | undefined
    menu: NavMenuItemTypes[]
}
const SidebarMenu: React.FC<SidebarMenuProps> = ({
    sticky,
    className = '',
    menu,
    wrapLink,
}): JSX.Element => {
    const stickyClassName = sticky ? `u-sticky` : ''
    return (
        <div className={`b-menu ${stickyClassName} ${className}`}>
            <NavMenu type='side' menu={menu} wrapLink={wrapLink} />
        </div>
    )
}
export default SidebarMenu
