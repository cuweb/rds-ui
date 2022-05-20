import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import useEscToClose from '@hooks/useEscKey'
import MenuPopupButton, {
    MenuPopupButtonProps,
} from './components/MenuPopupButton'
import MenuPopupMenu, { MenuPopupMenuProps } from './components/MenuPopupMenu'

export interface MenuPopupProps {
    className?: string
    direction?: 'left' | 'right'
    noArrow?: boolean
}

const MenuPopup: FC<
    MenuPopupProps & MenuPopupButtonProps & MenuPopupMenuProps
> = ({
    isButton = false,
    title,
    className = '',
    buttonClassName = '',
    menu,
    icon,
    direction = 'left',
    noArrow = false,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuContainer = useRef(null)
    useOnClickOutside(menuContainer, () => setIsOpen(false))
    useEscToClose(menuContainer, () => setIsOpen(false))

    const noArrowClassName = noArrow ? 'c-menupopup--noarrow' : ''

    const buttonProps = {
        isButton,
        title,
        icon,
        buttonClassName,
    }

    return (
        <div
            className={`c-menupopup c-menupopup--${direction} ${noArrowClassName}  ${className}`}
            ref={menuContainer}
        >
            <MenuPopupButton
                {...buttonProps}
                onClick={() => setIsOpen((openState) => !openState)}
            />
            {isOpen && <MenuPopupMenu menu={menu} />}
        </div>
    )
}
export default MenuPopup
