import React, { FC } from 'react'
import { PanelColorsTypes } from '../Panel'

export interface PanelFooterProps {
    className?: string
    spacing?: boolean
    color?: PanelColorsTypes
    children?: React.ReactNode
}

const PanelFooter: FC<PanelFooterProps> = ({
    children,
    className = '',
    spacing = true,
    color = 'white',
}): JSX.Element => {
    const spacingClassName = spacing ? `` : `b-sidebar__footer--no-spacing`
    return (
        <div
            className={`b-sidebar__footer b-sidebar__footer--${color} ${spacingClassName} ${className}`}
        >
            {children}
        </div>
    )
}
export default PanelFooter
