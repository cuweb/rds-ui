import React from 'react'
import LinkWrapper from '@components/LinkWrapper/LinkWrapper'
import CardDescription, {
    CardDescriptionProps,
} from './components/CardDescription'

export interface CardFigureProps {
    link?: string
    description: CardDescriptionProps
    caption: string
}

const CardFigure: React.FC<CardFigureProps & CardDescriptionProps> = ({
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
                <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
                <CardDescription description={description} />
            </figure>
        </LinkWrapper>
    </article>
)
export default CardFigure
