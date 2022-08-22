import Icon from '@components/Icon/Icon'
import Link from '@components/Link/Link'
import React from 'react'

export type MastHeadBrand = string | undefined

export interface MastheadTitleProps {
    title: string
    url: string
    brand?: MastHeadBrand
    wrapLink?: any
}

const MastheadTitle: React.FC<MastheadTitleProps> = ({
    title,
    url,
    brand,
    wrapLink,
}): JSX.Element => {
    const brandLogo = brand ? (
        <img className='masthead__brand' src={brand} alt='Site Logo' />
    ) : (
        <Icon icon='cushield' size={24} />
    )

    return (
        <h1>
            <Link wrapper={wrapLink} href={url}>
                <>
                    {brandLogo}
                    {!brand && title}
                </>
            </Link>
        </h1>
    )
}
export default MastheadTitle
