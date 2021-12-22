import React, { Children } from 'react'

export interface FigureVariantCardProps {
    link?: string
    description: string
    caption: string
}

const LinkWrapper = (props) => {
    const { link, children } = props
    if (link) return <a href={link}>{children}</a>
    return children
}

const FigureVariantCard: React.FC<FigureVariantCardProps> = ({
    link,
    description,
    caption,
}): JSX.Element => (
    <article
        className='c-card c-card--figure'
        itemScope
        itemType='http://schema.org/QuantitativeValue'
    >
        <LinkWrapper link={link}>
            <figure>
                <figcaption>{caption}</figcaption>
                <p
                    itemProp='description'
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </figure>
        </LinkWrapper>
    </article>
)
export default FigureVariantCard
