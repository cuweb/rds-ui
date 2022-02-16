import React from 'react'
import SidebarMenuItem from '@blocks/SidebarMenu/SidebarMenuItem'

export interface SidebarMenuProps {
    sticky?: boolean
    className?: string | undefined
    menu: {
        text: string
        link?: string
        subMenu?: {
            text: string
            link?: string
        }[]
    }[]
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    sticky,
    className = '',
    menu,
}): JSX.Element => {
    const stickyClassName = sticky ? `u-sticky` : ''
    return (
        <div className={`b-menu ${stickyClassName} ${className}`}>
            <nav
                className='c-nav c-nav--sidenav'
                role='presentation'
                aria-label='Main Navigation'
            >
                <ul className='nav__menu nav__menu--side'>
                    {menu.map((item, index) => (
                        <SidebarMenuItem
                            key={index}
                            id={index.toString()}
                            {...item}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default SidebarMenu
