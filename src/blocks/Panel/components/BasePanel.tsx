import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import ButtonCTA from '@src/components/ButtonCTA/ButtonCTA'

export interface BasePanelProps {
    title?: string
    content: string
    contentLink?: ContentLinkProps
    heading?: string
    image: HTMLImageElement
    button?: ButtonProps
}

export interface ButtonProps {
    url: string
    text: string
}

export interface ContentLinkProps {
    content: string
}

const BasePanel: React.FC<BasePanelProps> = ({
    title,
    content,
    contentLink,
    heading,
    image,
    button,
}): JSX.Element => (
    <Ublock>
        <div className='b-sidebar'>
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            {heading && <h3 dangerouslySetInnerHTML={{ __html: heading }} />}
            <img src={image.src} alt={image.alt} />
            <p dangerouslySetInnerHTML={{ __html: content }} />
            {contentLink && (
                <p>
                    <a href='https://carleton.ca'>{content}</a>
                    {content}
                </p>
            )}
            {button && (
                <ButtonCTA text={button.text} link={button.url} center />
            )}
        </div>
    </Ublock>
)
export default BasePanel
