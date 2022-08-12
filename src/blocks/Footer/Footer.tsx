import React, { ReactElement } from 'react'
import FooterBrand from './components/FooterBrand'
import FooterSimple from './components/FooterSimple'
import FooterSitemap from './components/FooterSitemap'

export interface FooterProps {
    type?: 'brand' | 'simple' | 'sitemap'
    name: string
    address: string
    wrapLink?: any
}

export interface FooterTypes {
    [index: string]: ReactElement
}

const Footer: React.FC<FooterProps> = (props): JSX.Element => {
    const footerTypes: FooterTypes = {
        brand: <FooterBrand {...props} />,
        simple: <FooterSimple {...props} />,
        sitemap: <FooterSitemap {...props} />,
    }

    return footerTypes[props.type || 'brand']
}
export default Footer
