import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import convertDate from '../../../functions/convertDate.js'
import ListingHeader, { ListingHeaderProps } from './ListingHeader'

export interface ListingNewsProps {
    data: NewsListProps[]
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
    noborder,
    data,
}): JSX.Element => {
    return (
        <Ublock>
            <ListingHeader header={header} noborder={noborder} />
            <div className='b-listing b-listing--news'>
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
                                        itemProp='headline'
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
            </div>
        </Ublock>
    )
}

export default ListingNews
