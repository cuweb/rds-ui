import React from 'react'

export interface LoadingProps {
    center?: boolean
}

const Loading: React.FC<LoadingProps> = ({ center }): JSX.Element => {
    const isCenter = center ? 'c-loading-container--centered' : ''

    return (
        <div className={`c-loading-container ${isCenter}`}>
            <span className='c-loading-title w-100 h-100' />
            <span className='c-loading-text w-100 ' />
            <span className='c-loading-text w-90' />
            <span className='c-loading-text w-80' />
            <span className='c-loading-title w-80 h-70' />
            <span className='c-loading-text w-90 ' />
            <span className='c-loading-text w-100' />
            <span className='c-loading-text w-90' />
        </div>
    )
}

export default Loading
