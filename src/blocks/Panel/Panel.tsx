/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react'
import Ublock from '@components/Ublock/Ublock'
import Icon from '@components/Icon/Icon'
import MenuPopup from '@components/MenuPopup/MenuPopup'

export interface PanelProps {
    title?: string | undefined
    titleWithHeading?: string | undefined
    children?: ReactNode
    submenu?: React.ReactNode
    icon?: string
}

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const { title, children, titleWithHeading, icon } = props
    const menuData = [
        {
            title: 'Item 1',
            link: '#',
        },
        {
            title: 'Item 2',
            link: '#',
            separator: true,
        },
        {
            title: 'Item 3',
            link: '#',
            className: 'item-classname',
        },
        {
            title: 'Item 4',
            link: '#',
        },
    ]
    return (
        <Ublock>
            <div className='b-sidebar'>
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                {titleWithHeading && (
                    <h2 className='sidebar__heading'>
                        {icon && <Icon icon={icon} />} {titleWithHeading}
                    </h2>
                )}
                <div className='b-sidebar__actions'>
                    <MenuPopup
                        icon='kebab-hor'
                        className='custom-classname'
                        buttonClassName='button-classname'
                        isButton
                        menu={menuData}
                    />
                </div>
                {children}
            </div>
        </Ublock>
    )
}

export default Panel
