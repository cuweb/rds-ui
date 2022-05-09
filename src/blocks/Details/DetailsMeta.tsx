import React, { FC, ReactNode } from 'react'
import LinkWrapper from '@components/LinkWrapper/LinkWrapper'

export interface DetailsMetaProps {
    details: DetailsItemProps[]
}

export type DetailsItemProps = {
    title: string
    description: ReactNode
    url?: string
}

const DetailsMeta: FC<DetailsMetaProps> = ({ details }): JSX.Element => {
    return (
        <div className='details__meta'>
            <dl className='u-link'>
                {details.map((item, index) => (
                    <React.Fragment key={index}>
                        <dt>{item.title}</dt>
                        <dd>
                            <LinkWrapper link={item?.url}>
                                {item.description}
                            </LinkWrapper>
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    )
}

export default DetailsMeta
