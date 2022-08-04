/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { FC } from 'react'
import Icon from '@components/Icon/Icon'
import Link from '@components/Link/Link'

export interface MenuPopupMenuProps {
    menu: {
        title: string
        link: string
        icon?: string
        className?: string
        separator?: boolean
        handleAction?: (
            event: React.MouseEvent<MouseEvent | HTMLAnchorElement>
        ) => void
        preventDefault?: boolean
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
                    <Link
                        href={item.link}
                        className={item.className}
                        onClick={(e) => {
                            {
                                item.preventDefault && e.preventDefault()
                            }
                            item.handleAction && item.handleAction(e)
                        }}
                    >
                        {item.icon && <Icon icon={item.icon} />} {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default MenuPopupMenu
