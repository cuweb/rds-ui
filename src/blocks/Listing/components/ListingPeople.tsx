import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'

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
            <header>
                <Heading header={header} noborder={noborder} />
            </header>
            <div className='b-listing b-listing--people'>
                <ul itemScope itemType='http://schema.org/Person'>
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
                                <div>
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
