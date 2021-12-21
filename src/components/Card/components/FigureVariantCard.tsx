import React from 'react'

export interface FigureVariantCardProps {
    link?: string
    description: string
    caption: string
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
        {link ? (
            <a href={link} itemProp='url'>
                <figure>
                    <figcaption>{caption}</figcaption>
                    <p
                        itemProp='description'
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </figure>
            </a>
        ) : (
            <figure>
                <figcaption>{caption}</figcaption>
                <p
                    itemProp='description'
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </figure>
        )}
    </article>
)
export default FigureVariantCard
