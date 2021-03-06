import Icon from '@components/Icon/Icon'
import React from 'react'

export type MastHeadBrand = string | undefined

export interface MastheadTitleProps {
    title: string
    url: string
    brand?: MastHeadBrand
}

const MastheadTitle: React.FC<MastheadTitleProps> = ({
    title,
    url,
    brand,
}): JSX.Element => {
    const brandLogo = brand ? (
        <img className='masthead__brand' src={brand} alt='Site Logo' />
    ) : (
        <Icon icon='cushield' size={24} />
    )

    return (
        <h1>
            <a href={url}>
                {brandLogo}
                {!brand && title}
            </a>
        </h1>
    )
}
export default MastheadTitle
