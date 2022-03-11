import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'
import convertDate from '../../../functions/convertDate'

export interface ListingPeopleProps {
    header: string
    noborder?: boolean
    data: ListProps[]
}

export interface ListProps {
    src: string
    title: string
    description?: string
    image?: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}


const ListingPeople: React.FC<ListingPeopleProps> = ({
    header,
    noborder,
    data,
}): JSX.Element => {
    return (
        <Ublock>
        <Heading header={header} noborder={noborder} />
            <div className="b-listing b-listing--people">
                <ul itemScope itemType="http://schema.org/Person">
                    {data.map((list, index) => (
                        <li itemProp="item" key={index}>
                            <a href={list.src} itemProp="url">
                                {list.image && (
                                    <figure>
                                        <img src={list.image.src} alt={list.image.alt} itemProp="image" />
                                    </figure>
                                )}
                                <div>
                                    <h3 itemProp="headline" dangerouslySetInnerHTML={{ __html: list.title }} />
                                    {list.description && <p itemProp="description" dangerouslySetInnerHTML={{ __html: list.description }} />}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    </Ublock>

    )
}

export default ListingPeople
