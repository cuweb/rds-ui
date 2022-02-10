import React, { FC, useState } from 'react'
import { MastheadMenuItemProps } from './MastHeadInterfaces'

const MastheadMenuItem: FC<MastheadMenuItemProps> = ({ item }): JSX.Element => {
    const { id, text, link, subMenu } = item
    const [isOpen, setIsOpen] = useState(false)

    if (!subMenu) {
        return (
            <li id={`'id_${id}`}>
                <a href={link}>{text}</a>
            </li>
        )
    }

    return (
        <li className={`has-submenu c-menupopup ${isOpen ? 'open' : ''}`}>
            <button
                className='nav--menubar__button'
                aria-expanded={isOpen}
                aria-controls={`'id_${id}`}
                aria-disabled={isOpen}
                type='button'
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='u-visually-hidden'>Show submenu for</span>
                {text}
            </button>
            {isOpen && (
                <ul id={`'id_${id}`} className='is-submenu'>
                    {subMenu.map((subItem, index) => (
                        <li key={index.toString()}>
                            <a href={subItem.link}>{subItem.text}</a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

export default MastheadMenuItem
