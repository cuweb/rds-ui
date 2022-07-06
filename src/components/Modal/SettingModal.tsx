import NavMenu from '@components/NavMenu/NavMenu'
import React, { useState } from 'react'

export interface ISettingModal {
    title: string
}

const SettingModal: React.FC<ISettingModal> = ({ title }): JSX.Element => {
    const [content, setContent] = useState('sample content ')

    const args = [
        {
            title: 'User Settings',
            handleAction: () => {
                setContent(' user setting ')
            },
            preventDefault: true,
        },
        {
            title: 'Applications',
            handleAction: () => setContent('Hello from Applications'),
            preventDefault: true,
            subMenu: [
                {
                    title: 'Resource',
                    handleAction: () =>
                        setContent('hello Applications resource'),
                    preventDefault: true,
                },
                {
                    title: 'Application1',
                    handleAction: () => setContent(' Application 1'),
                    preventDefault: true,
                },
            ],
        },
        {
            title: 'Links',
            handleAction: () => setContent('Hello from Link Applications'),
            preventDefault: true,
            subMenu: [
                {
                    title: 'Resource',
                    handleAction: () => setContent('hello Link resource'),
                    preventDefault: true,
                },
                {
                    title: 'Application1',
                    handleAction: () => setContent(' Link Application 1'),
                    preventDefault: true,
                },
            ],
        },
    ]

    // const handleContent = (updatedContent: React.SetStateAction<string>) => {
    //     setContent(updatedContent)
    // }

    return (
        <div className='u-settings-layout'>
            <div className='u-settings-sideBar'>
                <h3> {title}</h3>
                <NavMenu type='modalMenu' menu={args} />
            </div>
            <div className='u-settings-content'>{content}</div>
        </div>
    )
}

export default SettingModal
