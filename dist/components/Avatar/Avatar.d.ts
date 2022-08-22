import { UserInfoType } from 'types/UserInfo';
import React, { ReactNode } from 'react';
export interface IAvatar {
    className?: string;
    rounded?: boolean;
    noBorder?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
    user: UserInfoType;
    caption?: ReactNode;
    handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare const Avatar: React.FC<IAvatar>;
export default Avatar;
