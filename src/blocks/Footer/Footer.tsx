import React from 'react'
import FooterBrand from './components/FooterBrand'
import FooterSimple from './components/FooterSimple'
import FooterSitemap from './components/FooterSitemap'

interface FooterProps {
    type: 'brand' | 'simple' | 'sitemap'
    name: string
    address: string
}

const Footer: React.FC<FooterProps> = (props): JSX.Element => {
    const { type } = props
    if (type === 'brand') return <FooterBrand />
    if (type === 'simple') return <FooterSimple {...props} />
    if (type === 'sitemap') return <FooterSitemap />
    return <div>No footer</div>
}
export default Footer
