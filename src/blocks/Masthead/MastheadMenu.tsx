import React, { FC } from 'react'
import { MastheadMenuProps } from './MastHeadInterfaces'

const MastheadMenu: FC<MastheadMenuProps> = ({ menu }): JSX.Element => {
    return (
        <nav>
            <div
                className='c-nav c-nav--topnav'
                role='presentation'
                aria-label='Main Navigation'
            >
                <ul className='nav__menu nav__menu--top'>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default MastheadMenu
