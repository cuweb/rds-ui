import React from 'react'
import MastheadCTAButton from '@src/blocks/Masthead/components/MastheadCTAButton'
import MastheadLogin from '@src/blocks/Masthead/components/MastheadLogin'
import MastheadSearch from '@src/blocks/Masthead/components/MastheadSearch'
import { Actions } from '@src/blocks/Masthead/MastHeadTypes'

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
