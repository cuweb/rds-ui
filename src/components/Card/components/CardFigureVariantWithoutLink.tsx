import React from 'react'

export interface CardFigureVariantWithoutLinkProps {
    articleClassName: string
    articleItemType: string
    descriptionItemProp?: string
    descriptionTitle?: string
    figureCaptionTitle?: string
}

const CardFigureVariantWithoutLink: React.FC<
    CardFigureVariantWithoutLinkProps
> = ({
    articleClassName,
    articleItemType,
    descriptionItemProp,
    descriptionTitle,
    figureCaptionTitle,
}): JSX.Element => (
    <article className={articleClassName} itemScope itemType={articleItemType}>
        <figure>
            {figureCaptionTitle && (
                <figcaption>{figureCaptionTitle}</figcaption>
            )}
            {descriptionItemProp && (
                <p itemProp={descriptionItemProp}>{descriptionTitle}</p>
            )}
        </figure>
    </article>
)
export default CardFigureVariantWithoutLink
