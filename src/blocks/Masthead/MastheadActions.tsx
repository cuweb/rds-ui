import React from 'react'
import MastheadCTAButton from './MastheadCTAButton'
import MastheadLogin from './MastheadLogin'
import MastheadSearch from './MastheadSearch'
import { Actions } from './MastHeadTypes'

interface MastheadActionsProps {
    items: Actions
}

const MastheadActions: React.FC<MastheadActionsProps> = ({
    items,
}): JSX.Element => {
    const { search, login, buttons } = items
    return (
        <ul className='masthead__actions'>
            {buttons &&
                buttons.map((item, index) => (
                    <MastheadCTAButton key={index} {...item} />
                ))}
            {search && <MastheadSearch {...search} />}
            {login && <MastheadLogin {...login} />}
        </ul>
    )
}
export default MastheadActions
