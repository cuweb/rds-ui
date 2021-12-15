import React from 'react'

export interface CardProps {
    articleClassName?: string
    articleItemType: string
    aProp: any
    figureItemType: string
    image: any
    h3Prop: any
    description?: any
    date?: any
    span?: boolean
    svg?: boolean
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
}): JSX.Element => {
    return (
        <article
            className={articleClassName}
            itemScope
            itemType={articleItemType}
        >
            <a href={aProp.href} itemProp={aProp.itemProp}>
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
                    <img
                        src={image.src}
                        alt={image.alt}
                        loading={image.loading}
                    />
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
                    <h3 itemProp={h3Prop.itemProp}>{h3Prop.title}</h3>
                    {description && (
                        <p itemProp={description.itemProp}>
                            {description.title}
                        </p>
                    )}
                </header>
            </a>
        </article>
    )
}
export default Card
