/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import useEscToClose from '@hooks/useEscKey'
import useOnClickOutside from '@hooks/useOnClickOutside'
import React, { ReactNode, useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISmenuTypes {
    title: string
    content?: ReactNode
    subMenu?: ISmenuTypes[]
}

export interface SmenuProps {
    item: ISmenuTypes
    handleClick?: (params: ReactNode) => void
}

const Smenu: React.FC<SmenuProps> = ({ item, handleClick }): JSX.Element => {
    const { title, subMenu, content } = item
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const subMenuContainer = useRef(null)
    useOnClickOutside(subMenuContainer, () => setIsOpen(false))
    useEscToClose(subMenuContainer, () => setIsOpen(false))

    if (!subMenu)
        return (
            <li
                // eslint-disable-next-line no-console
                onClick={() => handleClick?.(content)}
            >
                {title}
            </li>
        )

    return (
        <li onClick={() => setIsOpen(!isOpen)} ref={subMenuContainer}>
            {title}
            <button
                className='u-margin-left-10'
                type='button'
                aria-expanded={isOpen}
            >
                +
            </button>
            {isOpen && (
                <ul>
                    {subMenu.map((subItem, index) => (
                        <Smenu
                            item={subItem}
                            key={index}
                            handleClick={handleClick}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default Smenu
