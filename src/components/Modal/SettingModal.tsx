import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem'
import NavMenu from '@components/NavMenu/NavMenu'
import React, { ReactNode, useState } from 'react'

export interface ISettingModal {
    title: string
    args: Array<NavMenuItemTypes>
}

const SettingModal: React.FC<ISettingModal> = ({
    title,
    args,
}): JSX.Element => {
    const [content, setContent] = useState(args[0].content)

    const handleClick = (updatedContent: ReactNode) => {
        setContent(updatedContent)
    }

    return (
        <div className='u-settings-layout'>
            <div className='u-settings-sideBar'>
                <h3> {title}</h3>
                <NavMenu
                    type='ModalMenu'
                    menu={args}
                    handleClick={handleClick}
                />
            </div>
            <div className='u-settings-content'>{content}</div>
        </div>
    )
}

export default SettingModal
