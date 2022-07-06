import React, { FC, useState, useRef, useEffect } from 'react'
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
        modalMenu: 'c-nav--modalMenunav',
    }

    // const [isActive, setIsActive] = useState('')

    const subMenuContainer = useRef(null)
    useOnClickOutside(subMenuContainer, () => setIsOpen(false))
    useEscToClose(subMenuContainer, () => setIsOpen(false))

    // const activeClass = title === isActive ? 'c-nav-active' : ''

    useEffect(() => {
        if (type === 'modalMenu') {
            const navli = document.querySelectorAll('li a')

            navli.forEach((li) => {
                li.addEventListener('click', () => {
                    navli.forEach((e) => {
                        e.classList.remove('c-nav-active')
                    })

                    li.classList.add('c-nav-active')
                })
            })
        }
    }, [])

    if (!subMenu)
        return (
            <li className={`${className}`}>
                <a
                    href={link}
                    onClick={(e) => {
                        // eslint-disable-next-line no-lone-blocks
                        {
                            // eslint-disable-next-line no-unused-expressions
                            item.preventDefault && e.preventDefault()
                        }
                        // eslint-disable-next-line no-unused-expressions
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
                                handleAction: subItem.handleAction,
                                preventDefault: subItem.preventDefault,
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
