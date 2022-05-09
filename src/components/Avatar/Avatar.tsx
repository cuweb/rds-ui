import { UserInfoType } from 'types/UserInfo'
import React from 'react'

export interface IAvatar {
    className?: string
    rounded?: boolean
    noBorder?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl'
    user: UserInfoType
}

const Avatar: React.FC<IAvatar> = ({
    size = 'xl',
    className = '',
    user,
    noBorder = false,
    rounded,
}): JSX.Element => {
    const { firstName, lastName, image } = user
    const initials =
        !image && `${firstName.split('')[0]} ${lastName.split('')[0]}`

    const roundedClassName = rounded ? 'c-avatar--rounded' : ''
    const noBorderClassName = noBorder ? 'c-avatar--no-border' : ''
    return (
        <div
            className={`c-avatar c-avatar--${size} ${roundedClassName} ${noBorderClassName} ${className}`}
        >
            {image && (
                <figure className='c-avatar__image'>
                    <img
                        src={image.src}
                        alt={image.alt || `Avatar of ${firstName} ${lastName}`}
                    />
                </figure>
            )}
            {initials && <div className='c-avatar__info'>{initials}</div>}
        </div>
    )
}

export default Avatar
