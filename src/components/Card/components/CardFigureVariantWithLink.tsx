import React from 'react'

export interface CardFigureVariantWithLinkProps {
    articleClassName: string
    articleItemType: string
    articleProp?: string
    descriptionItemProp?: string
    descriptionTitle?: string
    figureCaptionTitle?: string
}

const CardFigureVariantWithLink: React.FC<CardFigureVariantWithLinkProps> = ({
    articleClassName,
    articleItemType,
    articleProp,
    descriptionItemProp,
    descriptionTitle,
    figureCaptionTitle,
}): JSX.Element => (
    <article className={articleClassName} itemScope itemType={articleItemType}>
        <a href={articleProp} itemProp='url'>
            <figure>
                {figureCaptionTitle && (
                    <figcaption>{figureCaptionTitle}</figcaption>
                )}
                {descriptionItemProp && (
                    <p itemProp={descriptionItemProp}>{descriptionTitle}</p>
                )}
            </figure>
        </a>
    </article>
)
export default CardFigureVariantWithLink
