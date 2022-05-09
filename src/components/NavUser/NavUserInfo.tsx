import { UserInfoType } from 'types/UserInfo'
import React, { FC } from 'react'

export interface NavUserInfoProps {
    className?: string
}

const NavUserInfo: FC<NavUserInfoProps & UserInfoType> = ({
    className,
    firstName,
    lastName,
}): JSX.Element => (
    <div className={`c-navuser__info ${className}`}>
        {firstName} {lastName}
    </div>
)
export default NavUserInfo
