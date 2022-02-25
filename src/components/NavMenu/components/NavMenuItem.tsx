import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import useEscToClose from '@hooks/useEscKey'
import { NavMenuTypes } from '../NavMenu'
import NavMenuButton from './NavMenuButton'

export type NavMenuItemTypes = {
    title: string
    link?: string
    className?: string
    color?: string
    subMenu?: NavMenuItemTypes[]
}

export interface NavMenuItemProps {
    type: NavMenuTypes
    item: NavMenuItemTypes
    isMobile?: boolean
    direction?: 'left' | 'right'
}

const NavMenuItem: FC<NavMenuItemProps> = ({
    type,
    item,
    direction = 'left',
    isMobile,
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
                <a href={link}>{title}</a>
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
