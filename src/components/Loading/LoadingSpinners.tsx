import React from 'react'

export interface LoadingSpinnersProps {
    center?: boolean
}

const LoadingSpinners: React.FC<LoadingSpinnersProps> = ({
    center,
}): JSX.Element => {
    const isCenter = center ? 'c-loading-container--centered' : ''

    return <div className={`c-loading-spinners ${isCenter}`}>Loading...</div>
}

export default LoadingSpinners
