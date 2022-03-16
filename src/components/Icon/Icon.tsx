//
// NOTE: To build the stories, run 'node buildStories.js' in your terminal
//

import React from 'react'
import icons from '@lib/icons'

export interface IconProps {
    icon: string
    size?: number
    svg?: React.ReactElement
    className?: string
    viewBox?: string
}

const getIcon = (type: string) => icons.find((icon) => icon.type === type)

const Icon: React.FC<IconProps> = ({
    icon,
    size,
    svg,
    className = '',
    viewBox,
}): JSX.Element => {
    if (svg) return svg
    const iconPath: string | undefined = getIcon(icon)?.path

    if (!iconPath) return <div>No Icon found.</div>

    return (
        <svg
            className={`c-icon ${className}`}
            viewBox={viewBox || '0 0 24 24'}
            width={size || 16}
            height={size || 16}
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
        >
            <g dangerouslySetInnerHTML={{ __html: iconPath }} />
        </svg>
    )
}
export default Icon
