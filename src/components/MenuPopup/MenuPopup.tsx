import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import useEscToClose from '@hooks/useEscKey'
import MenuPopupButton, {
    MenuPopupButtonProps,
} from './components/MenuPopupButton'

export interface MenuPopupProps {
    menu: {
        title: string
        link: string
        icon?: string
        itemClassName?: string
    }
    menuClassname?: string
    className?: string
}

const MenuPopup: FC<MenuPopupProps & MenuPopupButtonProps> = ({
    isButton = false,
    title,
    className = '',
    buttonClassName = '',
    menuClassname = '',
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuContainer = useRef(null)
    useOnClickOutside(menuContainer, () => setIsOpen(false))
    useEscToClose(menuContainer, () => setIsOpen(false))

    const buttonProps = {
        isButton,
        title,
        buttonClassName,
        setIsOpen,
        isOpen,
    }
    return (
        <div className={`c-menupopup ${className}`} ref={menuContainer}>
            <MenuPopupButton {...buttonProps} />
            {isOpen && (
                <ul
                    className={`menupopup__menu ${menuClassname}`}
                    aria-label='menupopup'
                >
                    <li className='menupopup__sep'>
                        <a href='https://graduate.carleton.ca'>
                            Graduate Admissions
                        </a>
                    </li>
                    <li>
                        <a href='https://graduate.carleton.ca/programs/'>
                            Graduate Programs
                        </a>
                    </li>
                    <li>
                        <a href='https://graduate.carleton.ca/apply-online/'>
                            Apply Online
                        </a>
                    </li>
                </ul>
            )}
        </div>
    )
}
export default MenuPopup
