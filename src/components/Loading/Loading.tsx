import React from 'react'

export interface LoadingProps {
    // types?: 'listing' | 'card'
    center?: boolean
}

export type LoadingTypes = 'listing' | 'card'

const Loading: React.FC<LoadingProps> = ({
    // types = 'listing',
    center,
}): JSX.Element => {
    const isCenter = center ? 'c-loading-container--centered' : ''
    return (
        <>
            <div className={`c-loading-container ${isCenter}`}>
                <span className='c-loading-image w-100 h-100' />
                <span className='c-loading-title w-100 h-100' />
                <span className='c-loading-text w-100 ' />
                <span className='c-loading-text w-90' />
                <span className='c-loading-text w-80' />
            </div>
            <div className={`c-loading-container ${isCenter}`}>
                <span className='c-loading-image w-100 h-100' />
                <span className='c-loading-title w-100 h-100' />
                <span className='c-loading-text w-100 ' />
                <span className='c-loading-text w-90' />
                <span className='c-loading-text w-80' />
            </div>
            <div className={`c-loading-container ${isCenter}`}>
                <span className='c-loading-image w-100 h-100' />
                <span className='c-loading-title w-100 h-100' />
                <span className='c-loading-text w-100 ' />
                <span className='c-loading-text w-90' />
                <span className='c-loading-text w-80' />
            </div>
        </>
    )
}

export default Loading
