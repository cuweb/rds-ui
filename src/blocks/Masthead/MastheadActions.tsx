import React from 'react'

interface MastheadActionsProps {
    items: {
        text: string
        link: string
    }[]
}

const MastheadActions: React.FC<MastheadActionsProps> = ({
    items,
}): JSX.Element => {
    return (
        <ul className='masthead__actions nav__menu--vert '>
            {items.map((item, index) => (
                <li key={index}>{item.text}</li>
            ))}
        </ul>
    )
}
export default MastheadActions
