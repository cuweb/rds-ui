/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState, useRef, ReactNode } from 'react'
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
    content?: ReactNode
}

export interface NavMenuItemProps {
    type: NavMenuTypes
    item: NavMenuItemTypes
    isMobile?: boolean
    direction?: 'left' | 'right'
    icon?: string
    handleClick?: (params: ReactNode) => void
}

const NavMenuItem: FC<NavMenuItemProps> = ({
    type,
    item,
    direction = 'left',
    isMobile,
    icon,
    handleClick,
}): JSX.Element => {
    const { title, link = '#', subMenu, className = '', content } = item
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isOpenClassName = isOpen ? 'open' : ''
    const subMenuClassName = {
        ModalMenu: 'nav__menu--ModalMenu',
        side: '',
        top: !isMobile ? `c-menupopup c-menupopup--${direction}` : '',
    }

    const subMenuContainer = useRef(null)
    useOnClickOutside(subMenuContainer, () => setIsOpen(false))
    useEscToClose(subMenuContainer, () => setIsOpen(false))

    if (content) {
        if (!subMenu)
            return (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li
                    // eslint-disable-next-line no-console
                    onClick={() => handleClick?.(content)}
                >
                    {title}
                </li>
            )

        return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
                className={`u-margin-right-10 ${subMenuClassName[type]} ${className}`}
                onClick={() => setIsOpen(true)}
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
                {isOpen && (
                    <ul>
                        {subMenu.map((subItem, index) => (
                            <NavMenuItem
                                item={subItem}
                                key={index}
                                handleClick={handleClick}
                                type='side'
                            />
                        ))}
                    </ul>
                )}
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
