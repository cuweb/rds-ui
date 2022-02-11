import React from 'react'
import MastheadLogin from './MastheadLogin'
import MastheadSearch from './MastheadSearch'
import { Actions } from './MastHeadTypes'

interface MastheadActionsProps {
    items: Actions
}

const MastheadActions: React.FC<MastheadActionsProps> = ({
    items,
}): JSX.Element => {
    const { search, login } = items
    return (
        <ul className='masthead__actions'>
            {search && <MastheadSearch {...search} />}
            {login && <MastheadLogin {...login} />}
        </ul>
    )
}
export default MastheadActions
