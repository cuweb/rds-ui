import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface CardGridProps {
    title?: string
    columns?: number
    color: 'grey' | 'white' | 'black' | undefined
}

const CardGrid: React.FC<CardGridProps> = ({
    title,
    columns = 3,
    color,
    children,
}): JSX.Element => {
    return (
        <Ublock color={color || 'white'}>
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            <div className={`b-cardgrid u-grid u-grid--${columns}`}>
                {children}
            </div>
        </Ublock>
    )
}

export default CardGrid
