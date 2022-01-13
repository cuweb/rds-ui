import React from 'react'

export interface BadgesProps {
    type: 'number' | 'label' | 'notCool' | 'cool'
    content: string
}

const Badge: React.FC<BadgesProps> = ({ type, content }): JSX.Element => {
    return (
        <>
            {type === 'notCool' && <strong>👎 Not cool</strong>}
            {type === 'cool' && <strong>😎 Cool</strong>}
            <span className="c-badge">{content}</span>
        </>
    )
}

export default Badge