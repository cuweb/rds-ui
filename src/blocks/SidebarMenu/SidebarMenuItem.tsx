import React, { useState } from 'react'

interface SidebarMenuItemProps {
    id: string
    text: string
    link?: string
    target?: string
    subMenu?: {
        text: string
        link?: string
    }[]
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
    id,
    text,
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
                {text}
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
                            <SidebarMenuItem
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
export default SidebarMenuItem
