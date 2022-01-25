import React from 'react'

export interface BadgesProps {
    content: string
}

const Badge: React.FC<BadgesProps> = ({ content }): JSX.Element => {
    return (
        <span
            className='c-badge'
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}

export default Badge
