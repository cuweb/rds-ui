import React from 'react'
import Icon from '@components/Icon/Icon'

export interface ButtonSocialProps {
    url: string
    text: string
    type:
        | 'facebook'
        | 'instagram'
        | 'twitter'
        | 'youtube'
        | 'linkedin'
        | 'pinterest'
    className?: string
}

const ButtonSocial: React.FC<ButtonSocialProps> = ({
    type,
    url,
    text,
    className,
}): JSX.Element => {
    return (
        <div className={className || ''}>
            <a
                className={`c-buttonsocial c-buttonsocial--${type} u-icon u-icon--circle`}
                href={url}
            >
                <Icon icon={type} />
                <span className='u-visually-hidden'>{text}</span>
            </a>
        </div>
    )
}
export default ButtonSocial
