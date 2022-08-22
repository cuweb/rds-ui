import React from 'react';
interface BannerProps {
    title: string;
    breadcrumbs?: {
        link: string;
        title: string;
    }[];
    children?: React.ReactNode;
    imageUrl?: string;
    imagePosition?: 'top' | 'bottom';
    brightness?: 'light' | 'dark';
}
declare const Banner: React.FC<BannerProps>;
export default Banner;
