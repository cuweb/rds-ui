import React from 'react';
export interface FooterSimpleProps {
    name: string;
    address: string;
    email?: string;
    map?: string;
    contact?: string;
    days?: string;
    start?: string;
    end?: string;
    phone?: string;
    fax?: string;
    wrapLink?: any;
}
export interface SocialButtonsProps {
    url: string;
    text: string;
    type: string;
}
declare const FooterSimple: React.FC<FooterSimpleProps>;
export default FooterSimple;
