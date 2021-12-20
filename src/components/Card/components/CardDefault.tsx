import React from 'react'

export interface DefaultCardProps {
    articleClassName: string
    articleItemType: string
    articleProp?: string
    figureItemType?: string
    image?: HTMLImageElement
    imageLoading?: 'eager' | 'lazy' | undefined
    header3ItemProp?: string
    header3Title?: string
    descriptionItemProp?: string
    descriptionTitle?: string
    dateTime?: string
    dateItemProp?: string
    dateTitle?: string
    span?: boolean
    svg?: boolean
    figureCaptionTitle?: string
}

const CardDefault: React.FC<DefaultCardProps> = ({
    articleClassName,
    articleItemType,
    articleProp,
    figureItemType,
    image,
    imageLoading,
    header3ItemProp,
    header3Title,
    descriptionItemProp,
    descriptionTitle,
    dateTime,
    dateItemProp,
    dateTitle,
    span,
    svg,
    figureCaptionTitle,
}): JSX.Element => (
    <article className={articleClassName} itemScope itemType={articleItemType}>
        <a href={articleProp} itemProp='url'>
            <figure itemScope itemType={figureItemType}>
                {span && (
                    <span className='u-icon u-icon--circle' aria-hidden='true'>
                        {svg && (
                            <svg
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                            >
                                <path d='M5.61 22.994h.001c-1.178.752-2.611.08-2.611-1.4v-1.197h.013V4.66header3V1.729C3 .251 4.433-.447 5.611.306l14.964 9.867c1.18.752 1.154 1.975-.011 2.714L5.61 22.996z' />
                            </svg>
                        )}
                    </span>
                )}
                {image && (
                    <img
                        src={image.src}
                        alt={image.alt}
                        loading={imageLoading}
                    />
                )}
                {figureCaptionTitle && (
                    <figcaption>{figureCaptionTitle}</figcaption>
                )}
            </figure>
            <header>
                {dateItemProp && (
                    <time dateTime={dateTime} itemProp={dateItemProp}>
                        {dateTitle}
                    </time>
                )}
                {header3ItemProp && (
                    <h3 itemProp={header3ItemProp}>{header3Title}</h3>
                )}
                {descriptionItemProp && (
                    <p itemProp={descriptionItemProp}>{descriptionTitle}</p>
                )}
            </header>
        </a>
    </article>
)
export default CardDefault
