import Avatar from '@blocks/Avatar/Avatar'
import React, { FC } from 'react'

export interface UserActionsProps {
    user: UserInfo
}

export type UserInfo = {
    firstName: string
    lastName: string
    image: {
        src: string
    }
}

const UserActions: FC<UserActionsProps> = ({ user }): JSX.Element => {
    const { firstName, lastName, image } = user
    return (
        <div className='c-useractions'>
            <div className='c-useractions__image'>
                <Avatar imageUrl={image.src} size='100px' />
            </div>
            <div className='c-useractions__info'>
                {firstName} {lastName}
            </div>
        </div>
    )
}
export default UserActions
