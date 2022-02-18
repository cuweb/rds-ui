import React, { ReactNode } from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import Icon from '@src/components/Icon/Icon'
import { ImageProps } from '@src/components/Card/components/BaseCard'

export interface PanelProps {
    title?: string | undefined
    titleWithHeading?: string | undefined
    children?: ReactNode
    icon?: string
    image?: ImageProps
}

// interface ImageProps {
//     src: string
//     alt: string
// }


const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const { title, children, titleWithHeading, icon, image } = props

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
