import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'
import convertDate from '../../../functions/convertDate.js'

export interface ListingNewsProps {
    header: string
    noborder?: boolean
    data: ListProps[]
}

export interface ListProps {
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


const ListingNews: React.FC<ListingNewsProps> = ({
    header,
    noborder,
    data,
}): JSX.Element => {
    return (
            <Ublock>
                <header>
                    <Heading header={header} noborder={noborder} />
                </header>
                <div className="b-listing b-listing--news">
                    <ul itemScope itemType="http://schema.org/ItemList">
                        {data.map((list, index) => (
                            <li itemProp="item" key={index}>
                                <a href={list.src} itemProp="url">
                                    {list.image && (
                                        <figure>
                                            <img src={list.image.src} alt={list.image.alt} itemProp="image" />
                                        </figure>
                                    )}
                                    <header itemScope itemType="http://schema.org/NewsArticle">
                                        <time dateTime={list.datetime} itemProp="datePublished" >{convertDate(list.datetime)}</time>
                                        <h3 itemProp="headline" dangerouslySetInnerHTML={{ __html: list.title }} />
                                        {list.description && <p itemProp="description" dangerouslySetInnerHTML={{ __html: list.description }} />}
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
