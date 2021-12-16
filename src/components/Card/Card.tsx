import React from 'react'

export interface CardProps {
    articleClassName?: string
    articleItemType: string
    aProp?: string
    figureItemType?: string
    image?: HTMLImageElement
    h3Prop: React.ElementType
    description?: React.ReactNode
    date?: Date
    span?: boolean
    svg?: boolean
    figureCaptionTitle?: string
    figureVariant?: boolean
}

const Card: React.FC<CardProps> = ({
    articleClassName,
    articleItemType,
    aProp,
    figureItemType,
    image,
    h3Prop,
    description,
    date,
    span,
    svg,
    figureCaptionTitle,
    figureVariant,
}): JSX.Element => (
    <article className={articleClassName} itemScope itemType={articleItemType}>
        {!figureVariant ? (
            <a href={aProp} itemProp='url'>
                <figure itemScope itemType={figureItemType}>
                    {span && (
                        <span
                            className='u-icon u-icon--circle'
                            aria-hidden='true'
                        >
                            {svg && (
                                <svg
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                    aria-hidden='true'
                                >
                                    <path d='M5.61 22.994h.001c-1.178.752-2.611.08-2.611-1.4v-1.197h.013V4.66H3V1.729C3 .251 4.433-.447 5.611.306l14.964 9.867c1.18.752 1.154 1.975-.011 2.714L5.61 22.996z' />
                                </svg>
                            )}
                        </span>
                    )}
                    {image && (
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading={image.loading}
                        />
                    )}
                    {figureCaptionTitle && (
                        <figcaption>{figureCaptionTitle}</figcaption>
                    )}
                </figure>
                <header>
                    {date && (
                        <time
                            dateTime={date.dateTime}
                            itemProp={date.itemProp}
                            content={date.content}
                        >
                            {date.title}
                        </time>
                    )}
                    {h3Prop && (
                        <h3 itemProp={h3Prop.itemProp}>{h3Prop.title}</h3>
                    )}
                    {description && (
                        <p itemProp={description.itemProp}>
                            {description.title}
                        </p>
                    )}
                </header>
            </a>
        ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
                {aProp ? (
                    <a href={aProp} itemProp='url'>
                        <figure>
                            {figureCaptionTitle && (
                                <figcaption>{figureCaptionTitle}</figcaption>
                            )}
                            {description && (
                                <p itemProp={description.itemProp}>
                                    {description.title}
                                </p>
                            )}
                        </figure>
                    </a>
                ) : (
                    <figure>
                        {figureCaptionTitle && (
                            <figcaption>{figureCaptionTitle}</figcaption>
                        )}
                        {description && (
                            <p itemProp={description.itemProp}>
                                {description.title}
                            </p>
                        )}
                    </figure>
                )}
            </>
        )}
    </article>
)
export default Card
