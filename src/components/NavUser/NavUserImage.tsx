import React, { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { UserInfoType } from 'types/UserInfo'

export interface NavUserImageProps {
    className?: string
    user: UserInfoType
}

const NavUserImage: FC<NavUserImageProps> = ({
    className = '',
    user,
}): JSX.Element => {
    return (
        <div className={`c-navuser__image ${className}`}>
            <Avatar
                user={user}
                size='sm'
                rounded
                className='c-navuser__image--avatar'
            />
        </div>
    )
}
export default NavUserImage
