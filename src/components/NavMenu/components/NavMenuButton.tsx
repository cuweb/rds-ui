import Icon from '@components/Icon/Icon'
import React, { FC, MouseEvent } from 'react'
import { NavMenuTypes } from '../NavMenu'

export interface NavMenuButtonProps {
    type: NavMenuTypes
    title: string
    link: string
    onClick: (event: MouseEvent) => void
    isOpen: boolean
    icon?: string
}

const NavMenuButton: FC<NavMenuButtonProps> = ({
    type,
    title,
    link,
    isOpen,
    icon,
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
                <a href={link}>{title}</a>
                <button
                    type='button'
                    aria-expanded={isOpen}
                    onClick={(e: never) => onClick(e)}
                >
                    +
                </button>
            </>
        ),
        ModalMenu: (
            <>
                {title}
                <button
                    className='u-margin-left-10'
                    type='button'
                    aria-expanded={isOpen}
                >
                    +
                </button>
            </>
        ),
    }
    return buttonTypes[type]
}
export default NavMenuButton
