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
    subMenu?: {
        title: string
        link: string
        className?: string
    }[]
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
    const [isOpen, setIsOpen] = useState(false)
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
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            />
            <ul className={`is-submenu ${isOpenClassName}`}>
                <ul>
                    {subMenu.map((subItem, index) => (
                        <li className={subItem.className || ''} key={index}>
                            <a href={subItem.link}>{subItem.title}</a>
                        </li>
                    ))}
                </ul>
            </ul>
        </li>
    )
}
export default NavMenuItem
