import React, { FC } from 'react'

export interface MenuPopupMenuProps {
    menu: {
        title: string
        link: string
        icon?: string
        className?: string
        separator?: boolean
    }[]
    className?: string
}

const MenuPopupMenu: FC<MenuPopupMenuProps> = ({
    className = '',
    menu,
}): JSX.Element => {
    return (
        <ul className={`menupopup__menu ${className}`} aria-label='menupopup'>
            {menu.map((item, index) => (
                <li key={index} className={item.separator ? 'popup__sep' : ''}>
                    <a href={item.link} className={item.className}>
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}
export default MenuPopupMenu
