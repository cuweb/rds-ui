import React, { FC } from 'react'
import { PanelColorsTypes } from '../Panel'

export interface PanelBodyProps {
    className?: string
    spacing?: boolean
    color?: PanelColorsTypes
}

const PanelBody: FC<PanelBodyProps> = ({
    children,
    className = '',
    spacing = true,
    color = 'white',
}): JSX.Element => {
    const spacingClassName = spacing ? `` : `b-sidebar__body--no-spacing`
    return (
        <div
            className={`b-sidebar__body b-sidebar__body--${color} ${spacingClassName} ${className}`}
        >
            {children}
        </div>
    )
}
export default PanelBody
