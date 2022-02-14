import React, { FC } from 'react'
import { MenuItem } from '@src/blocks/Masthead/MastHeadTypes'
import MastheadSubMenu from '@src/blocks/Masthead/components/MastheadSubMenu'

export interface MastheadMenuItemProps {
    item: MenuItem
}

const MastheadMenuItem: FC<MastheadMenuItemProps> = ({ item }): JSX.Element => {
    const { id, text, link, subMenu } = item

    // Base Menu
    if (!subMenu) {
        return (
            <li id={`'id_${id}`}>
                <a href={link}>{text}</a>
            </li>
        )
    }

    // SubMenu
    return <MastheadSubMenu text={text} subMenu={subMenu} />
}

export default MastheadMenuItem
