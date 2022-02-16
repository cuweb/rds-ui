import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import useEscToClose from '@hooks/useEscKey'
import { NavMenuTypes } from '../NavMenu'
import NavMenuButton from './NavMenuButton'

export type NavMenuItemTypes = {
    title: string
    link: string
    subMenu?: {
        title: string
        link: string
    }[]
}

export interface NavMenuItemProps {
    type: NavMenuTypes
    item: NavMenuItemTypes
}

const NavMenuItem: FC<NavMenuItemProps> = ({ type, item }): JSX.Element => {
    const { title, link, subMenu } = item
    const [isOpen, setIsOpen] = useState(false)
    const isOpenClassName = isOpen ? 'open' : ''
    const subMenuClassName = {
        side: '',
        top: 'c-menupopup',
    }

    const subMenuContainer = useRef(null)
    useOnClickOutside(subMenuContainer, () => setIsOpen(false))
    useEscToClose(subMenuContainer, () => setIsOpen(false))

    if (!subMenu)
        return (
            <li>
                <a href={link}>{title}</a>
            </li>
        )

    return (
        <li
            className={`has-submenu ${subMenuClassName[type]} ${isOpenClassName}`}
            ref={subMenuContainer}
        >
            <NavMenuButton
                type={type}
                title={title}
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            />
            <ul className={`is-submenu ${isOpenClassName}`}>
                <a href={link}>{title}</a>
                <ul>
                    {subMenu.map((subItem, index) => (
                        <li key={index}>
                            <a href={subItem.link}>{subItem.title}</a>
                        </li>
                    ))}
                </ul>
            </ul>
        </li>
    )
}
export default NavMenuItem
