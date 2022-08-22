import React from 'react';
export declare type MastHeadBrand = string | undefined;
export interface MastheadTitleProps {
    title: string;
    url: string;
    brand?: MastHeadBrand;
    wrapLink?: any;
}
declare const MastheadTitle: React.FC<MastheadTitleProps>;
export default MastheadTitle;
