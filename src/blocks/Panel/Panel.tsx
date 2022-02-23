import React, { ReactNode } from 'react'
import Ublock from '@components/Ublock/Ublock'
import Icon from '@components/Icon/Icon'

export interface PanelProps {
    title?: string | undefined
    titleWithHeading?: string | undefined
    children?: ReactNode
    icon?: string
}

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const { title, children, titleWithHeading, icon } = props

    return (
        <Ublock>
            <div className='b-sidebar'>
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                {titleWithHeading && (
                    <h2 className='sidebar__heading'>
                        {icon && <Icon icon={icon} />} {titleWithHeading}
                    </h2>
                )}
                {children}
            </div>
        </Ublock>
    )
}

export default Panel
