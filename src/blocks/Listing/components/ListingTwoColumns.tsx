import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'

export interface ListingVideoProps {
    header: string
    noborder?: boolean
    data: ListProps[]
    columndata: ListTwoColumnProps
}

export interface ListProps {
    src: string
    title: string
    image?: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}

export interface ListTwoColumnProps {
    firstColumn: ColumnProp[]
    secondColumn: ColumnProp[]
}

export interface ColumnProp {
    src: string
    title: string
}

const ListingTwoColumns: React.FC<ListingVideoProps> = ({
    data,
    columndata
}): JSX.Element => {
    return (
        <Ublock>
            <div className="u-grid u-grid--2 u-grid--s1">
                <section>
                    <h3>{data[0].title}</h3>
                    <div className="b-listing">
                        <ul itemScope itemType="http://schema.org/ItemList">
                            {columndata["firstColumn"].map((item, index) => (
                                <li itemProp="item" key={index}>
                                    <a href={item.src} itemProp="url">
                                        <header className="listing__body" itemProp="name">
                                            <h4 className="listing__title" dangerouslySetInnerHTML={{ __html: item.title }} />
                                        </header>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section>
                    <h3>{data[1].title}</h3>
                    <div className="b-listing">
                        <ul itemScope itemType="http://schema.org/ItemList">
                            {columndata["secondColumn"].map((item, index) => (
                                <li itemProp="item" key={index}>
                                    <a href={item.src} itemProp="url">
                                        <header className="listing__body" itemProp="name">
                                            <h4 className="listing__title" dangerouslySetInnerHTML={{ __html: item.title }} />
                                        </header>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </Ublock>
    )
}

export default ListingTwoColumns
