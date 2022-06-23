/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
    handleClick?: any
}

export interface NavMenuItemProps {
    type: NavMenuTypes
    item: NavMenuItemTypes
    isMobile?: boolean
    direction?: 'left' | 'right'
    icon?: string
    handleContent?: (params: ReactNode) => void
}

const NavMenuItem: FC<NavMenuItemProps> = ({
    type,
    item,
    direction = 'left',
    isMobile,
    icon,
    handleContent,
}): JSX.Element => {
    const { title, link = '#', subMenu, className = '', handleClick } = item
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

    const subMenuHeading = useRef(null)
    useOnClickOutside(subMenuHeading, () => setIsOpen(false))

    if (handleClick) {
        if (!handleContent) {
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            return (
                <li
                    className={` ${subMenuClassName[type]} ${className}`}
                    onClick={handleClick}
                >
                    <a> {title} </a>
                </li>
            )
        }
        if (!subMenu)
            return (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li onClick={() => handleContent?.(handleClick)}>{title}</li>
            )

        return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
                className={`u-margin-right-10 ${subMenuClassName[type]} ${className}`}
                ref={subMenuHeading}
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
                                handleContent={handleContent}
                                type='ModalMenu'
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
