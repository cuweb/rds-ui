import React, { FC } from 'react'

export interface MenuPopupButtonProps {
    isButton?: boolean
    title: string
    link?: string
    icon?: string
    buttonClassName?: string
    setIsOpen: (isOpen: boolean) => void
    isOpen: boolean
}

const MenuPopupButton: FC<MenuPopupButtonProps> = ({
    isButton = true,
    title,
    link = '#',
    buttonClassName = '',
    setIsOpen,
    isOpen,
}): JSX.Element => {
    if (!isButton)
        return (
            <a
                href={link}
                className={buttonClassName}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </a>
        )

    return (
        <button
            type='button'
            aria-label='Toggle Menu'
            className={buttonClassName}
            onClick={() => setIsOpen(!isOpen)}
        >
            {title}
        </button>
    )
}
export default MenuPopupButton
