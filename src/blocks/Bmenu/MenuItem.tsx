import React, { useState } from 'react'
import MenuListItem from './MenuListItem'

interface MenuItemProps {
    id: string
    title: string
    link?: string
    target?: string
    subMenu?: {
        title: string
        link?: string
    }[]
}

const MenuItem: React.FC<MenuItemProps> = ({
    id,
    title,
    target,
    link = '#',
    subMenu,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const isOpenClassName = isOpen ? 'open' : ''
    const subMenuClassName = subMenu ? `has-submenu ${isOpenClassName}` : ''
    const menuId = `menu_id_${id}`
    return (
        <li key={id} className={subMenuClassName}>
            <a href={link} target={target}>
                {title}
            </a>
            {subMenu && (
                <>
                    <button
                        type='button'
                        aria-expanded={isOpen}
                        aria-controls={menuId}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        +
                    </button>
                    <ul id={menuId} className='is-submenu'>
                        {subMenu.map((item, index) => (
                            <MenuListItem
                                key={index.toString()}
                                id={index.toString()}
                                {...item}
                            />
                        ))}
                    </ul>
                </>
            )}
        </li>
    )
}
export default MenuItem
