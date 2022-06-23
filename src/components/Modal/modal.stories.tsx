import useEscToClose from '@hooks/useEscKey'
import useOnClickOutside from '@hooks/useOnClickOutside'
import React, { useRef, useState } from 'react'
import SettingModal from './SettingModal'

export default {
    component: SettingModal,
    title: 'Components/Modal',
}

export const ModalSetting = () => {
    const [isOpen, setisOpen] = useState<boolean>(false)
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

    const modelContainer = useRef(null)
    useOnClickOutside(modelContainer, () => setisOpen(false))
    useEscToClose(modelContainer, () => setisOpen(false))

    return (
        <>
            <div ref={modelContainer}>
                <button
                    className='c-buttoncta'
                    onClick={() => setisOpen(!isOpen)}
                >
                    Setting Modal
                </button>
                {isOpen && <SettingModal title='setting' args={args} />}
            </div>
        </>
    )
}
