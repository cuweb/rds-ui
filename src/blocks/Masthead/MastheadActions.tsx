import React from 'react'
import { MastheadActionsProps } from './MastHeadInterfaces'

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
