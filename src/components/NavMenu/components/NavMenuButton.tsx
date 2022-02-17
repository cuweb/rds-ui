import React, { FC, MouseEvent } from 'react'
import { NavMenuTypes } from '../NavMenu'

export interface NavMenuButtonProps {
    type: NavMenuTypes
    title: string
    onClick: (event: MouseEvent) => void
    isOpen: boolean
}

const NavMenuButton: FC<NavMenuButtonProps> = ({
    type,
    title,
    isOpen,
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
                {title}
            </button>
        ),
        side: (
            <>
                <a href='javacript:void()'>{title}</a>
                <button
                    type='button'
                    aria-expanded={isOpen}
                    onClick={(e: never) => onClick(e)}
                >
                    +
                </button>
            </>
        ),
    }
    return buttonTypes[type]
}
export default NavMenuButton
