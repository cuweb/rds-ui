import React, { ReactElement } from 'react';
export interface FooterProps {
    type?: 'brand' | 'simple' | 'sitemap';
    name: string;
    address: string;
    wrapLink?: any;
}
export interface FooterTypes {
    [index: string]: ReactElement;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
