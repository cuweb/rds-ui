import React from 'react'
import SettingModal from './SettingModal'

export default {
    component: SettingModal,
    title: 'Components/Modal',
}

export const ModalSetting = () => {
    const args = [
        {
            title: 'User Settings',

            content: <p> user setting details </p>,
        },
        {
            title: 'Applications',

            content: <p className='u-margin-auto'> Hello from Applications</p>,
            subMenu: [
                {
                    title: 'Resource',
                    content: <p>hello resource </p>,
                },
                {
                    title: 'Application1',
                    content: <p> Application 1 </p>,
                },
            ],
        },
        {
            title: 'Links',

            content: (
                <p className='u-margin-auto'> Hello from Link Applications</p>
            ),
            subMenu: [
                {
                    title: 'Resource',
                    content: <p>hello resource </p>,
                },
                {
                    title: 'Application1',
                    content: <p> Application 1 </p>,
                },
            ],
        },
    ]

    return (
        <>
            <SettingModal title='setting' args={args} />
        </>
    )
}
