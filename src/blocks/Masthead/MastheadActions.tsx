import React from 'react'
import MastheadSearch from './MastheadSearch'
import { Actions } from './MastHeadTypes'

interface MastheadActionsProps {
    items: Actions
}

const MastheadActions: React.FC<MastheadActionsProps> = ({
    items,
}): JSX.Element => {
    const { search } = items
    return (
        <ul className='masthead__actions'>
            {search && <MastheadSearch {...search} />}
        </ul>
    )
}
export default MastheadActions
