/* eslint-disable jsx-a11y/no-static-element-interactions */
import Icon from '@components/Icon/Icon'
import Link from '@components/Link/Link'
import React, { FC, MouseEvent } from 'react'
import { NavMenuTypes } from '../NavMenu'

export interface NavMenuButtonProps {
    type: NavMenuTypes
    title: string
    link: string
    isOpen: boolean
    icon?: string
    wrapLink?: any
    onClick: (event: MouseEvent) => void
}

const NavMenuButton: FC<NavMenuButtonProps> = ({
    type,
    title,
    link,
    isOpen,
    icon,
    wrapLink,
    onClick,
}): JSX.Element => {
    const buttonTypes = {
        top: (
            <button
                type='button'
                className='nav--menubar__button'
                aria-expanded={isOpen}
                onClick={(e: never) => onClick(e)}
            >
                <span className='u-visually-hidden'>Show submenu for</span>
                {icon && (
                    <Icon className='c-navmenu__icon' icon={icon} size={16} />
                )}
                {title}
            </button>
        ),
        side: (
            <>
                <Link wrapper={wrapLink} href={link}>
                    {title}
                </Link>
                <button
                    type='button'
                    aria-expanded={isOpen}
                    onClick={(e: never) => onClick(e)}
                >
                    +
                </button>
            </>
        ),
        modalMenu: (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div onClick={(e: never) => onClick(e)}>
                {title}
                <button
                    type='button'
                    className='u-margin-right-10'
                    aria-expanded={isOpen}
                >
                    +
                </button>
            </div>
        ),
    }
    return buttonTypes[type]
}
export default NavMenuButton
