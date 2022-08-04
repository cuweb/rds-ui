import React, { FC } from 'react'
import { UserInfoType } from 'types/UserInfo'
import NavUserImage from './NavUserImage'
import NavUserInfo from './NavUserInfo'
import NavUserWrapper from './NavUserWrapper'

export interface NavUserProps {
    user: UserInfoType
    className?: string
    href?: string
    children?: React.ReactNode
}

const NavUser: FC<NavUserProps> = ({
    user,
    className = '',
    href,
}): JSX.Element => {
    return (
        <NavUserWrapper className={className} href={href}>
            <NavUserImage user={user} />
            <NavUserInfo {...user} />
        </NavUserWrapper>
    )
}
export default NavUser
