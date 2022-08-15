import React, { FC, ReactNode } from 'react'
import Link from '@components/Link/Link'

export interface DetailsMetaProps {
    details: DetailsItemProps[]
    wrapLink?: any
}

export type DetailsItemProps = {
    title: string
    description: ReactNode
    link?: string
}

const DetailsMeta: FC<DetailsMetaProps> = ({
    details,
    wrapLink,
}): JSX.Element => {
    return (
        <div className='details__meta'>
            <dl className='u-link'>
                {details.map((item, index) => (
                    <React.Fragment key={index}>
                        <dt>{item.title}</dt>
                        <dd>
                            <Link
                                wrapper={wrapLink}
                                href={item.link ? item.link : ''}
                            >
                                {item.description}
                            </Link>
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    )
}

export default DetailsMeta
