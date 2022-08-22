import React from 'react';
export interface ButtonSocialProps {
    url: string;
    text: string;
    type: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'pinterest' | string;
    className?: string;
    wrapLink?: any;
}
declare const ButtonSocial: React.FC<ButtonSocialProps>;
export default ButtonSocial;
