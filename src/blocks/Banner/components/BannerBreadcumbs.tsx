import React from 'react'

interface BannerBreadcrumbsProps {
    links: { link: string; title: string }[]
}

const BannerBreadcrumbs: React.FC<BannerBreadcrumbsProps> = ({
    links,
}): JSX.Element => {
    const list = links.map((item) => (
        <li itemProp='breadcrumb' key={item.title}>
            <a href={item.link}>{item.title}</a>
        </li>
    ))

    return (
        <nav aria-label='breadcrumb'>
            <ol itemScope itemType='http://schema.org/BreadcrumbList'>
                {list}
            </ol>
        </nav>
    )
}
export default BannerBreadcrumbs
