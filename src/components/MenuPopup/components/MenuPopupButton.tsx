import Icon from '@components/Icon/Icon'
import React, { FC, MouseEvent } from 'react'

export interface MenuPopupButtonProps {
    isButton?: boolean
    title?: string
    link?: string
    icon?: string
    buttonClassName?: string
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const MenuPopupButton: FC<MenuPopupButtonProps> = ({
    isButton = true,
    title,
    link = '#',
    icon,
    buttonClassName = '',
    onClick,
}): JSX.Element => {
    if (!isButton)
        return (
            <a href={link} className={buttonClassName}>
                {title}
                {icon && <Icon icon={icon} />}
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
            {icon && <Icon icon={icon} />}
        </button>
    )
}
export default MenuPopupButton
