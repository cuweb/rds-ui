import React from 'react'

interface ItemProps {
    id?: string
    title: string
    link?: string
    target?: string
    label?: string
}

const MenuListItem: React.FC<ItemProps> = ({
    id,
    link,
    target,
    title,
    label,
}): JSX.Element => {
    return (
        <li key={id}>
            <a
                href={link}
                rel='noopener noreferrer'
                target={target}
                aria-label={label}
            >
                {title}
            </a>
        </li>
    )
}
export default MenuListItem
