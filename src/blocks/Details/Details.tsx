import React, { FC } from 'react'
import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import LinkWrapper from '@components/LinkWrapper/LinkWrapper'

export interface IDetails {
    className?: string
    block?: UblockProps
    title?: string
    details: IDetailsList[]
}

export interface IDetailsList {
    title: string
    description: string
    url?: string
}

const Details: FC<IDetails> = ({
    block,
    title,
    className = '',
    details,
}): JSX.Element => {
    return (
        <Ublock {...block}>
            {title && <h2>{title}</h2>}
            <div className={`b-details ${className}`}>
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
            </div>
        </Ublock>
    )
}

export default Details
