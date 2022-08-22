import { FC } from 'react';
import { UserInfoType } from 'types/UserInfo';
export interface NavUserImageProps {
    className?: string;
    user: UserInfoType;
}
declare const NavUserImage: FC<NavUserImageProps>;
export default NavUserImage;
