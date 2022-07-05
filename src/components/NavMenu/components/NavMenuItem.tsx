/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import useEscToClose from '@hooks/useEscKey'
import Icon from '@components/Icon/Icon'
import { NavMenuTypes } from '../NavMenu'
import NavMenuButton from './NavMenuButton'

export type NavMenuItemTypes = {
    title: string
    link?: string
    className?: string
    color?: string
    icon?: string
    subMenu?: NavMenuItemTypes[]
    handleAction?: (
        event: React.MouseEvent<MouseEvent | HTMLAnchorElement>
    ) => void
    preventDefault?: boolean
}

export interface NavMenuItemProps {
    type: NavMenuTypes
    item: NavMenuItemTypes
    isMobile?: boolean
    direction?: 'left' | 'right'
    icon?: string
}

const NavMenuItem: FC<NavMenuItemProps> = ({
    type,
    item,
    direction = 'left',
    isMobile,
    icon,
}): JSX.Element => {
    const { title, link = '#', subMenu, className = '' } = item
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isOpenClassName = isOpen ? 'open' : ''
    const subMenuClassName = {
        side: '',
        top: !isMobile ? `c-menupopup c-menupopup--${direction}` : '',
    }

    const subMenuContainer = useRef(null)
    useOnClickOutside(subMenuContainer, () => setIsOpen(false))
    useEscToClose(subMenuContainer, () => setIsOpen(false))

    if (!subMenu)
        return (
            <li className={className}>
                <a
                    href={link}
                    onClick={(e) => {
                        {
                            item.preventDefault && e.preventDefault()
                        }
                        item.handleAction && item.handleAction(e)
                    }}
                >
                    {icon && (
                        <Icon
                            className='c-navmenu__icon'
                            icon={icon}
                            size={16}
                        />
                    )}
                    {title}
                </a>
            </li>
        )

    return (
        <li
            className={`has-submenu ${subMenuClassName[type]} ${isOpenClassName} ${className}`}
            ref={subMenuContainer}
        >
            <NavMenuButton
                type={type}
                title={title}
                link={link}
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                icon={icon}
            />
            <ul className={`is-submenu ${isOpenClassName}`}>
                <ul>
                    {subMenu.map((subItem, index) => (
                        <NavMenuItem
                            type='side'
                            item={{
                                title: subItem.title,
                                link: subItem.link,
                                subMenu: subItem.subMenu,
                                icon: subItem.icon,
                            }}
                            key={index}
                        />
                    ))}
                </ul>
            </ul>
        </li>
    )
}
export default NavMenuItem
