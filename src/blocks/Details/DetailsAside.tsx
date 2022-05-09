import Avatar from '@components/Avatar/Avatar'
import React, { FC } from 'react'
import { UserInfoType } from 'types/UserInfo'

export interface DetailsAsideProps {
    user: UserInfoType
}

const DetailsAside: FC<DetailsAsideProps> = ({ user }): JSX.Element => {
    return (
        <div className='details__aside'>
            <Avatar user={user} size='2xl' caption={user?.info} />
        </div>
    )
}

export default DetailsAside
