import React, { FC } from 'react';
import { UserInfoType } from 'types/UserInfo';
export interface NavUserProps {
    user: UserInfoType;
    className?: string;
    children?: React.ReactNode;
}
declare const NavUser: FC<NavUserProps>;
export default NavUser;
