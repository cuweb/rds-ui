import React from 'react'
import MastheadLogin from '@blocks/Masthead/components/MastheadLogin'
import MastheadSearch from '@blocks/Masthead/components/MastheadSearch'
import NavMenuItem, {
    NavMenuItemTypes,
} from '@components/NavMenu/components/NavMenuItem'
import { SearchFormProps } from '@components/SearchForm/SearchForm'
import { LoginProps } from '@blocks/Login/Login'

export type MastheadActionsTypes = {
    search?: SearchFormProps
    login?: LoginProps
    buttons?: NavMenuItemTypes[]
}

interface MastheadActionsProps {
    items: MastheadActionsTypes
    isMobile?: boolean
    wrapLink?: any
}

const MastheadActions: React.FC<MastheadActionsProps> = ({
    items,
    isMobile,
    wrapLink,
}): JSX.Element => {
    const { search, login, buttons } = items
    const showButtons = !isMobile && buttons
    return (
        <>
            {showButtons &&
                buttons.map((item, index) => (
                    <NavMenuItem
                        wrapLink={wrapLink}
                        type='top'
                        direction='right'
                        item={{
                            title: item.title,
                            link: item.link,
                            className: `u-hide-s masthead__cta masthead__cta--${
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
        </>
    )
}
export default MastheadActions
