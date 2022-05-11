import React, { FC } from 'react'
import Ublock, { UblockProps } from '@components/Ublock/Ublock'

export interface IDetails {
    className?: string
    block?: UblockProps
    title?: string
    variant?: 'default' | 'figure' | 'event' | 'eventpast'
}

const Details: FC<IDetails> = ({
    block,
    title,
    className = '',
    variant = 'default',
    children,
}): JSX.Element => {
    const vatiantClassName =
        variant === 'eventpast'
            ? `b-details--event b-details--eventpast`
            : `b-details--${variant}`
    return (
        <Ublock {...block}>
            {title && <h2>{title}</h2>}
            <div className={`b-details ${vatiantClassName} ${className}`}>
                {children}
            </div>
        </Ublock>
    )
}

export default Details
