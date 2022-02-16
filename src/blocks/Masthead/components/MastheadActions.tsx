import React from 'react'
import MastheadCTAButton from '@blocks/Masthead/components/MastheadCTAButton'
import MastheadLogin from '@blocks/Masthead/components/MastheadLogin'
import MastheadSearch from '@blocks/Masthead/components/MastheadSearch'
import { Actions } from '@blocks/Masthead/MastHeadTypes'

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
            {login && <MastheadLogin {...login} />}
            {search && <MastheadSearch {...search} />}
        </ul>
    )
}
export default MastheadActions
