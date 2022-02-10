import React, { FC } from 'react'
import { MastheadMenuProps } from './MastHeadInterfaces'
import MastheadMenuItem from './MastheadMenuItem'

const MastheadMenu: FC<MastheadMenuProps> = ({ menu }): JSX.Element => {
    return (
        <nav>
            <div
                className='c-nav c-nav--topnav'
                role='presentation'
                aria-label='Main Navigation'
            >
                <ul className='nav__menu nav__menu--top'>
                    {menu.map((item, index) => {
                        const itemProps = {
                            ...item,
                            id: index,
                        }
                        return (
                            <MastheadMenuItem
                                key={index.toString()}
                                item={itemProps}
                            />
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default MastheadMenu
