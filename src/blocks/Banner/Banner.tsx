import React from 'react'
import Ublock from '../../components/Ublock/Ublock'
import BannerBreadcrumbs from './components/BannerBreadcumbs'

interface BannerProps {
    title: string
    breadcrumbs: { link: string; title: string }[]
    color: 'grey' | 'white' | 'black'
    children: React.ReactNode
}

const Banner: React.FC<BannerProps> = ({
    title,
    breadcrumbs,
    color = 'grey',
    children,
}): JSX.Element => (
    <Ublock color={color}>
        <div className='b-banner'>
            <section>
                {breadcrumbs && <BannerBreadcrumbs links={breadcrumbs} />}
                {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
                {children}
            </section>
        </div>
    </Ublock>
)

export default Banner
