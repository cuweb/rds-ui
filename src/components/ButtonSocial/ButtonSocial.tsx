import React from 'react'
import Icon from '@src/components/Icon/Icon'

interface ButtonProps {
    url: string
    text: string
    type:
        | 'facebook'
        | 'instagram'
        | 'twitter'
        | 'youtube'
        | 'linkedin'
        | 'pinterest'
}

const ButtonSocial: React.FC<ButtonProps> = ({
    type,
    url,
    text,
}): JSX.Element => {
    return (
        <a
            className={`c-buttonsocial c-buttonsocial--${type} u-icon u-icon--circle`}
            href={url}
        >
            <Icon icon={type} />
            <span className='u-visually-hidden'>{text}</span>
        </a>
    )
}
export default ButtonSocial
