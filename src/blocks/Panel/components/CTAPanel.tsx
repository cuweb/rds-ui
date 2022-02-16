import React, { ReactNode } from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface CTAPanelProps {
    title?: string | undefined
    children?: ReactNode
}

const CTAPanel: React.FC<CTAPanelProps> = (props): JSX.Element => {
    const { title, children } = props

    return (
        <Ublock>
            <a
                className='b-sidebar'
                href='https://ravendesignsystem.github.io/rds//dev/components/buttons/cta-button/'
            >
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                {children}
            </a>
        </Ublock>
    )
}

export default CTAPanel
