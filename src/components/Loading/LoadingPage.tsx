import React from 'react'
import Icon from '@components/Icon/Icon'

export interface LoadingPageProps {
    center?: boolean
}

const LoadingPage: React.FC<LoadingPageProps> = ({ center }): JSX.Element => {
    const isCenter = center ? 'c-loading-container--centered' : ''

    return (
        <div className={`c-loading-page ${isCenter}`}>
            <Icon icon='mark-cushield-blk' />
        </div>
    )
}

export default LoadingPage
