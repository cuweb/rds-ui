import React, { FC, MouseEvent } from 'react'

export interface MenuPopupButtonProps {
    isButton?: boolean
    title: string
    link?: string
    icon?: string
    buttonClassName?: string
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const MenuPopupButton: FC<MenuPopupButtonProps> = ({
    isButton = true,
    title,
    link = '#',
    buttonClassName = '',
    onClick,
}): JSX.Element => {
    if (!isButton)
        return (
            <a href={link} className={buttonClassName}>
                {title}
            </a>
        )

    return (
        <button
            type='button'
            aria-label='Toggle Menu'
            className={buttonClassName}
            onClick={(
                event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
            ) => onClick && onClick(event)}
        >
            {title}
        </button>
    )
}
export default MenuPopupButton
