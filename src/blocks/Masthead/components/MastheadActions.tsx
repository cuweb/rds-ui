import React from 'react'
import MastheadLogin from '@blocks/Masthead/components/MastheadLogin'
import MastheadSearch from '@blocks/Masthead/components/MastheadSearch'
import { Actions } from '@blocks/Masthead/MastHeadTypes'
import NavMenuItem from '@components/NavMenu/components/NavMenuItem'

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
                    <NavMenuItem
                        type='top'
                        direction='right'
                        item={{
                            title: item.title,
                            link: item.link,
                            className: `masthead__cta masthead__cta--${
                                item.color || 'white'
                            }`,
                            subMenu: item.subMenu,
                        }}
                        key={index}
                        {...item}
                    />
                ))}
            {login && <MastheadLogin {...login} />}
            {search && <MastheadSearch {...search} />}
        </ul>
    )
}
export default MastheadActions
