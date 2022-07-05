import NavMenu from '@components/NavMenu/NavMenu'
import React, { useState } from 'react'

export interface ISettingModal {
    title: string
}

const SettingModal: React.FC<ISettingModal> = ({ title }): JSX.Element => {
    const [content, setContent] = useState('sample content ')

    const handleContent = (updatedContent: React.SetStateAction<string>) => {
        setContent(updatedContent)
    }

    const handleClickMenu = [
        {
            title: 'Item 1',
            content: <p> Hello from Item 1</p>,
            active: false,
        },
        {
            title: 'Item 2',
            content: <p> Hello from Item 2</p>,
            active: false,
            subMenu: [
                {
                    title: 'Item 2.1',
                    content: <p> Hello from Item 2.1</p>,
                    active: false,
                },
                {
                    title: 'Item 2.2',
                    content: <p> Hello from Item 2.2</p>,
                    active: false,
                },
            ],
        },
        {
            title: 'Item 3',
            content: <p> Hello from Item 3</p>,
            active: false,
        },
        {
            title: 'Item 4',
            content: <p> Hello from Item 4</p>,
            active: false,
        },
    ]

    return (
        <div className='u-settings-layout'>
            <div className='u-settings-sideBar'>
                <h3> {title}</h3>
                <NavMenu
                    type='side'
                    menu={handleClickMenu}
                    handleContent={handleContent}
                />
            </div>
            <div className='u-settings-content'>{content}</div>
        </div>
    )
}

export default SettingModal
