import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import ButtonCTA from '@src/components/ButtonCTA/ButtonCTA'
import Icon from '@src/components/Icon/Icon'

interface PanelProps {
    title?: string
    heading?: string
    subheading?: string
    image: HTMLImageElement
    content: string
    button?: ButtonProps
    fakeButton: string
    buttonIcon?: ButtonIconProps
}

interface ButtonProps {
    url: string
    text: string
}

interface ButtonIconProps {
    content: string
}

const Panel: React.FC<PanelProps> = ({
    type: 'base' | 'CTAPanel' | 'icon' 
    title,
    heading,
    subheading,
    image,
    content,
    button,
    fakeButton,
    buttonIcon,
}): JSX.Element => {
    return (
        <Ublock>
            <div className='b-sidebar'>
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                {heading && (
                    <h2 className='sidebar__heading'>
                        <span className='u-icon'>
                            <Icon icon='X' />
                            dangerouslySetInnerHTML={{ __html: heading }}
                        </span>
                    </h2>
                )}
                {subheading && (
                    <h3 dangerouslySetInnerHTML={{ __html: subheading }} />
                )}
                <img src={image.src} alt={image.alt} />
                <p dangerouslySetInnerHTML={{ __html: content }} />
                {button && (
                    <ButtonCTA text={button.text} link={button.url} center />
                )}
                {fakeButton && (
                    <div
                        className='c-buttoncta'
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )}
                {buttonIcon && (
                    <a className='c-buttoncta' href='https://carleton.ca'>
                        <span className='u-icon'>
                        <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z"/></svg>
                            {content}
                        </span>
                    </a>
                )}
            </div>
        </Ublock>
    )
}

export default Panel
