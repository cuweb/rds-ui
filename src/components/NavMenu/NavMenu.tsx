import React, { FC } from 'react'
import NavMenuItem, { NavMenuItemTypes } from './components/NavMenuItem'

export type NavMenuTypes = 'side' | 'top' | 'modalMenu'
export interface NavMenuProps {
    type: NavMenuTypes
    label?: string
    isMobile?: boolean
    wrapLink?: any
    menu: Array<NavMenuItemTypes>
}
const NavMenu: FC<NavMenuProps> = ({
    type,
    label = 'Main Navigation',
    menu,
    wrapLink,
    isMobile,
}): JSX.Element => {
    console.log(menu)
    return (
        <nav
            className={`c-nav c-nav--${type}nav`}
            role='presentation'
            aria-label={label}
        >
            <ul className={`nav__menu nav__menu--${type}`}>
                {menu.map((item, index) => (
                    <NavMenuItem
                        item={item}
                        type={type}
                        key={index}
                        wrapLink={wrapLink}
                        isMobile={isMobile}
                    />
                ))}
            </ul>
        </nav>
    )
}
export default NavMenu
