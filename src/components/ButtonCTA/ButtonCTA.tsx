import React from 'react'
import Icon from '@components/Icon/Icon'
import Link from '@components/Link/Link'

export interface ButtonProps {
    ghost?: boolean
    text: string
    link: string
    icon?: string
    full?: boolean
    center?: boolean
    children?: React.ReactNode
    target?: string
    grey?: boolean
    white?: boolean
    shadow?: boolean
    className?: string
    wrapLink?: any
    handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const ButtonCTA: React.FC<ButtonProps> = ({
    ghost,
    center,
    text = 'Click',
    link = '#',
    icon,
    full,
    children,
    target,
    grey,
    white,
    shadow = true,
    className = '',
    wrapLink,
    handleClick,
}): JSX.Element => {
    const isGhost = ghost ? 'c-buttoncta--ghost' : ''
    const isGrey = grey ? 'c-buttoncta--grey' : ''
    const isWhite = white ? 'c-buttoncta--white' : ''
    const isFull = full ? 'c-buttoncta--full' : ''
    const hasIcon = icon ? 'u-icon' : ''
    const isCenter = center ? 'c-buttoncta--center' : ''
    const buttonTarget = target ? `_${target}` : undefined
    const hasShadow = shadow ? `` : `c-buttoncta--no-shadow`

    return (
        <Link
            wrapper={wrapLink}
            className={`c-buttoncta ${hasIcon} ${isFull} ${isGhost} ${isGrey} ${isWhite} ${isCenter} ${hasShadow} ${className}`}
            target={buttonTarget}
            href={link}
            onClick={handleClick}
        >
            {icon && <Icon icon={icon} />}
            {children}
            {text}
        </Link>
    )
}
export default ButtonCTA
