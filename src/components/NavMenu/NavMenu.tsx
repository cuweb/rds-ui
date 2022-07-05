import React, { FC, ReactNode } from 'react'
import NavMenuItem, { NavMenuItemTypes } from './components/NavMenuItem'

export type NavMenuTypes = 'side' | 'top'
export interface NavMenuProps {
    type: NavMenuTypes
    label?: string
    isMobile?: boolean
    menu: Array<NavMenuItemTypes>
    handleContent?: ReactNode
}
const NavMenu: FC<NavMenuProps> = ({
    type,
    label = 'Main Navigation',
    menu,
    isMobile,
    handleContent,
}): JSX.Element => {
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
                        isMobile={isMobile}
                        handleContent={handleContent}
                    />
                ))}
            </ul>
        </nav>
    )
}
export default NavMenu
