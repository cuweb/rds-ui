import React from 'react'

export interface CardProps {
    articleClassName?: string
    articleItemType: string
    aProp: any
    figureItemType: string
    image: any
    h3Prop: any
    description?: any
    time?: any
}

const Card: React.FC<CardProps> = ({
    articleClassName,
    articleItemType,
    aProp,
    figureItemType,
    image,
    h3Prop,
    description,
    time,
}): JSX.Element => (
    <article className={articleClassName} itemScope itemType={articleItemType}>
        <a href={aProp.href} itemProp={aProp.itemProp}>
            <figure itemScope itemType={figureItemType}>
                <img src={image.src} alt={image.alt} loading={image.loading} />
            </figure>
            <header>
                {time && (
                    <time
                        dateTime='2018-03-11'
                        itemProp='datePublished'
                        content='2018-03-11'
                    >
                        Sunday, March 11th
                    </time>
                )}
                <h3 itemProp={h3Prop.itemProp}>{h3Prop.title}</h3>
                {description && (
                    <p itemProp={description.itemProp}>{description.title}</p>
                )}
            </header>
        </a>
    </article>
)
export default Card
