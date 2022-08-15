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
    shadow?: boolean
    className?: string
    wrapLink?: any
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
    shadow = true,
    className = '',
    wrapLink,
}): JSX.Element => {
    const isGhost = ghost ? 'c-buttoncta--ghost' : ''
    const isGrey = grey ? 'c-buttoncta--grey' : ''
    const isFull = full ? 'c-buttoncta--full' : ''
    const hasIcon = icon ? 'u-icon' : ''
    const isCenter = center ? 'c-buttoncta--center' : ''
    const buttonTarget = target ? `_${target}` : undefined
    const hasShadow = shadow ? `` : `c-buttoncta--no-shadow`

    return (
        <Link
            wrapper={wrapLink}
            className={`c-buttoncta ${hasIcon} ${isFull} ${isGhost} ${isGrey} ${isCenter} ${hasShadow} ${className}`}
            target={buttonTarget}
            component='button'
            href={link}
        >
            {icon && <Icon icon={icon} />}
            {children}
            {text}
        </Link>
    )
}
export default ButtonCTA
