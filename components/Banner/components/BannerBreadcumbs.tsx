import React from 'react';

interface BannerBreadcrumbsProps {
    links: {link: string, title: string}[];
};

const BannerBreadcrumbs: React.FC<BannerBreadcrumbsProps> = (props: any): JSX.Element => {
    const { links } = props

    const list = links.map((item, index) => (
        <li itemProp="breadcrumb" key={index}>
            <a href={item.link}>{item.title}</a>
        </li>
    ))

    return (
        <nav aria-label="breadcrumb">
            <ol itemScope itemType="http://schema.org/BreadcrumbList">
                {list}
            </ol>
        </nav>
    )
}
export default BannerBreadcrumbs
