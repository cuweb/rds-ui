import Avatar from '@components/Avatar/Avatar'
import NavMenu from '@components/NavMenu/NavMenu'
import React, { ReactNode, useState } from 'react'
import { UserInfoType } from 'types/UserInfo'

export interface ISettingModal {
    title: string
}

const SettingModal: React.FC<ISettingModal> = ({ title }): JSX.Element => {
    const [content, setContent] = useState<ReactNode>(<p>sample content </p>)

    const user: UserInfoType = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Danny',
        lastName: 'Brown',
    }
    const caption = 'Director, Enterprise Application'

    const args = [
        {
            title: 'User Settings',
            handleAction: () => {
                setContent(
                    <p>
                        user setting
                        <Avatar
                            user={user}
                            caption={caption}
                            rounded
                            className='u-margin-auto '
                        />
                    </p>
                )
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
