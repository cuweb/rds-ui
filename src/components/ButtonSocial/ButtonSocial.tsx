import React from 'react'
import Icon from '@components/Icon/Icon'
import Link from '@components/Link/Link'

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
        | string
    className?: string
    wrapLink?: any
}

const ButtonSocial: React.FC<ButtonSocialProps> = ({
    type,
    url,
    text,
    className,
    wrapLink,
}): JSX.Element => {
    return (
        <div className={className || ''}>
            <Link
                wrapper={wrapLink}
                className={`c-buttonsocial c-buttonsocial--${type} u-icon u-icon--circle`}
                href={url}
            >
                <Icon icon={type} />
                <span className='u-visually-hidden'>{text}</span>
            </Link>
        </div>
    )
}
export default ButtonSocial
