import React from 'react'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle, { CardTitleProps } from './components/CardTitle'
import CardDescription, {
    CardDescriptionProps,
} from './components/CardDescription'

export interface CardProps {
    link: string
    header: CardTitleProps
    description?: CardDescriptionProps
    image: CardImageProps
}

const Card: React.FC<
    CardProps & CardImageProps & CardTitleProps & CardDescriptionProps
> = ({ link, header, description, image }): JSX.Element => (
    <article className='c-card' itemScope itemType='http://schema.org/Article'>
        <a href={link} itemProp='url'>
            <CardImage image={image} />
            <header>
                <CardTitle>{header}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </header>
        </a>
    </article>
)
export default Card
