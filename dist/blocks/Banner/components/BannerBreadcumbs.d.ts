import React from 'react';
import { Url } from 'types/Url';
interface BannerBreadcrumbsProps {
    links: {
        link: string;
        title: string;
    }[];
    title: string;
    wrapLink?: Url;
}
declare const BannerBreadcrumbs: React.FC<BannerBreadcrumbsProps>;
export default BannerBreadcrumbs;
