import React from 'react'

export interface LoadingCardProps {
    center?: boolean
}

const LoadingCard: React.FC<LoadingCardProps> = ({ center }): JSX.Element => {
    const isCenter = center ? 'c-loading-container--centered' : ''

    return (
        <div className='b-cardgrid u-grid u-grid--3'>
            <div className={`c-loading-container ${isCenter}`}>
                <span className='c-loading-image w-100' />
                <span className='c-loading-text w-100 ' />
                <span className='c-loading-text w-90' />
                <span className='c-loading-text w-80' />
            </div>
        </div>
    )
}

export default LoadingCard
