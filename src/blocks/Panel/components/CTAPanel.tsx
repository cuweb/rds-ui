import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface CTAPanelProps {
    title?: string
    content: string
    image: HTMLImageElement
    fakeButton: string
}

const CTAPanel: React.FC<CTAPanelProps> = ({
    title,
    content,
    image,
    fakeButton,
}): JSX.Element => (
    <Ublock>
        <a
            className='b-sidebar'
            href='https://ravendesignsystem.github.io/rds//dev/components/buttons/cta-button/'
        >
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            <img src={image.src} alt={image.alt} />
            <p dangerouslySetInnerHTML={{ __html: content }} />
            {fakeButton && (
                <div
                    className='c-buttoncta'
                    dangerouslySetInnerHTML={{ __html: fakeButton }}
                />
            )}
        </a>
    </Ublock>
)
export default CTAPanel
