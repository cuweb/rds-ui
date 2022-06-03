import React, { ReactNode } from 'react'
import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import { MenuPopupMenuProps } from '@components/MenuPopup/components/MenuPopupMenu'
import PanelActions from './components/PanelActions'
import PanelActionComponent from './components/PanelActionComponent'

export interface PanelProps {
    children?: ReactNode
    actions?: MenuPopupMenuProps
    block?: UblockProps
    color?: PanelColorsTypes
    shadow?: boolean
    className?: string
    actionComponent?: ReactNode
}

export type PanelColorsTypes = 'grey' | 'white'

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const {
        children,
        block,
        actions,
        color = 'grey',
        shadow,
        className,
        actionComponent,
    } = props
    const shadowClassName = shadow ? `b-sidebar--shadow` : ``

    return (
        <Ublock {...block}>
            <div
                className={`b-sidebar b-sidebar--${color} ${shadowClassName} ${className}`}
            >
                {actions && <PanelActions actions={actions} />}

                {actionComponent && (
                    <PanelActionComponent actionComponent={actionComponent} />
                )}
                {children}
            </div>
        </Ublock>
    )
}

export default Panel
