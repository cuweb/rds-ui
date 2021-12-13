import React from 'react'
import IconPath from './IconPath'

interface IconProps {
    icon: string
    size?: number
    svg?: React.ReactElement
    className?: string
}

const Icon: React.FC<IconProps> = ({
    icon,
    size,
    svg,
    className = '',
}): JSX.Element => {
    if (svg) return svg

    return (
        <svg
            className={`c-icon ${className}`}
            viewBox='0 0 24 24'
            width={size || 16}
            height={size || 16}
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
        >
            <IconPath icon={icon} />
        </svg>
    )
}
export default Icon
