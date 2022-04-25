import React, { ReactNode } from 'react'
import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import Icon from '@components/Icon/Icon'
import MenuPopup from '@components/MenuPopup/MenuPopup'
import { MenuPopupMenuProps } from '@components/MenuPopup/components/MenuPopupMenu'

export interface PanelProps {
    title?: string | undefined
    titleWithHeading?: string | undefined
    children?: ReactNode
    actions?: MenuPopupMenuProps
    icon?: string
    block?: UblockProps
    color?: 'grey' | 'white'
    shadow?: boolean
}

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const {
        title,
        children,
        titleWithHeading,
        icon,
        block,
        actions,
        color = 'grey',
        shadow,
    } = props

    const shadowClassName = shadow ? `b-sidebar--shadow` : ``

    return (
        <Ublock {...block}>
            <div className={`b-sidebar b-sidebar--${color} ${shadowClassName}`}>
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                {titleWithHeading && (
                    <h2 className='sidebar__heading'>
                        {icon && <Icon icon={icon} />} {titleWithHeading}
                    </h2>
                )}
                {actions?.menu && (
                    <div className='b-sidebar__actions'>
                        <MenuPopup
                            icon='kebab-hor'
                            className='custom-classname'
                            buttonClassName='button-classname'
                            isButton
                            direction='right'
                            menu={actions.menu}
                        />
                    </div>
                )}
                {children}
            </div>
        </Ublock>
    )
}

export default Panel
