import React from 'react'
import MenuItem from './MenuItem'

export interface MenuProps {
    type: 'top' | 'side'
    sticky?: boolean
    className?: 'string' | undefined
    menu: {
        title: string
        link?: string
        subMenu?: {
            title: string
            link?: string
        }[]
    }[]
}

const Menu: React.FC<MenuProps> = ({
    type,
    sticky,
    className = '',
    menu,
}): JSX.Element => {
    const stickyClassName = sticky ? `u-sticky` : ''
    return (
        <div
            className={`b-menu b-menu--${type}nav ${stickyClassName} ${className}`}
        >
            <nav
                className={`c-nav c-nav--${type}nav`}
                role='presentation'
                aria-label='Main Navigation'
            >
                <ul className='nav__menu'>
                    {menu.map((item, index) => (
                        <MenuItem key={index} id={index.toString()} {...item} />
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default Menu
