import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import useEscToClose from '@hooks/useEscKey'

export interface MastheadSubMenuProps {
    id?: string | number
    text: string
    direction?: string
    subMenu: {
        text: string
        link: string
    }[]
}

const MastheadSubMenu: FC<MastheadSubMenuProps> = ({
    id,
    text,
    subMenu,
    direction = 'left',
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const subMenuContainer = useRef(null)
    useOnClickOutside(subMenuContainer, () => setIsOpen(false))
    useEscToClose(subMenuContainer, () => setIsOpen(false))

    return (
        <li
            className={`has-submenu c-menupopup  c-menupopup--${direction} ${
                isOpen ? 'open' : ''
            }`}
            ref={subMenuContainer}
        >
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

export default MastheadSubMenu
