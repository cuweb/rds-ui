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
    handleClick?: any
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
    const { title, link = '#', subMenu, className = '', handleClick } = item
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isOpenClassName = isOpen ? 'open' : ''
    const subMenuClassName = {
        side: '',
        top: !isMobile ? `c-menupopup c-menupopup--${direction}` : '',
    }

    const subMenuContainer = useRef(null)
    useOnClickOutside(subMenuContainer, () => setIsOpen(false))
    useEscToClose(subMenuContainer, () => setIsOpen(false))

    if (handleClick) {
        return (
            <li
                className={` ${subMenuClassName[type]} ${className}`}
                onClick={handleClick}
                aria-hidden='true'
            >
                <a> {title} </a>
            </li>
        )
    }

    if (!subMenu)
        return (
            <li className={className}>
                <a href={link}>
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
                                handleClick: subItem.handleClick,
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
