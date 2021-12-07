import React from 'react'
import FooterBrand from './components/FooterBrand'
import FooterSimple from './components/FooterSimple'
import FooterSitemap from './components/FooterSitemap'

interface FooterProps {
    type: 'brand' | 'simple' | 'sitemap'
}

const Footer: React.FC<FooterProps> = ({ type }): JSX.Element => {
    if (type === 'brand') return <FooterBrand />
    if (type === 'simple') return <FooterSimple />
    if (type === 'sitemap') return <FooterSitemap />
    return <div>No footer</div>
}
export default Footer
