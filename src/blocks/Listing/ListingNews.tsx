import React from 'react'
import convertDate from '@functions/convertDate'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingNewsProps {
    data: NewsListProps[]
    noUblock?: boolean
}

export interface NewsListProps {
    src: string
    title: string
    description?: string
    datetime: string
    image?: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingNews: React.FC<ListingNewsProps & ListingHeaderProps> = ({
    header,
    data,
    noUblock,
}): JSX.Element => {
    return (
        <ListingWrapper type='news' header={header} noUblock={noUblock}>
            <ul itemScope itemType='http://schema.org/ItemList'>
                {data.map((item, index) => (
                    <li itemProp='item' key={index}>
                        <a href={item.src} itemProp='url'>
                            {item.image && (
                                <figure>
                                    <img
                                        src={item.image.src}
                                        alt={item.image.alt}
                                        itemProp='image'
                                    />
                                </figure>
                            )}
                            <header
                                itemScope
                                itemType='http://schema.org/NewsArticle'
                            >
                                <time
                                    dateTime={item.datetime}
                                    itemProp='datePublished'
                                >
                                    {convertDate(item.datetime)}
                                </time>
                                <h3
                                    itemProp='name'
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                                {item.description && (
                                    <p
                                        itemProp='description'
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    />
                                )}
                            </header>
                        </a>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default ListingNews
