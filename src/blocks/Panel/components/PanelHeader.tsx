import Icon from '@components/Icon/Icon'
import React, { FC } from 'react'
import { PanelColorsTypes } from '../Panel'

export interface PanelHeaderProps {
    className?: string
    icon?: string
    color?: PanelColorsTypes
}

const PanelHeader: FC<PanelHeaderProps> = ({
    icon,
    className = '',
    children,
    color = 'grey',
}): JSX.Element => {
    return (
        <div
            className={`b-sidebar__header b-sidebar__header--${color} ${className}`}
        >
            {icon && <Icon icon={icon} />}
            <h2>{children}</h2>
        </div>
    )
}
export default PanelHeader
