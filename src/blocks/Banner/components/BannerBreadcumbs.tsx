import Link from '@components/Link/Link'
import React from 'react'

interface BannerBreadcrumbsProps {
    links: { link: string; title: string }[]
    title: string
}

const BannerBreadcrumbs: React.FC<BannerBreadcrumbsProps> = ({
    links,
    title,
}): JSX.Element => {
    const list = links.map((item) => (
        <li itemProp='breadcrumb' key={item.title}>
            <Link href={item.link}>{item.title}</Link>
        </li>
    ))

    return (
        <nav aria-label='breadcrumb'>
            <ol itemScope itemType='http://schema.org/BreadcrumbList'>
                {list}
                <li
                    className='u-visually-hidden'
                    itemProp='breadcrumb'
                    aria-current='page'
                >
                    {title}
                </li>
            </ol>
        </nav>
    )
}
export default BannerBreadcrumbs
