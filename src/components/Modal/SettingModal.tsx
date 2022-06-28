import React, { useState } from 'react'

export interface ISettingModal {
    title: string
}

const SettingModal: React.FC<ISettingModal> = ({ title }): JSX.Element => {
    const [content, setContent] = useState('sample content ')
    return (
        <div className='u-settings-layout'>
            <div className='u-settings-sideBar'>
                <h3> {title}</h3>
            </div>
            <div className='u-settings-content'>{content}</div>
        </div>
    )
}

export default SettingModal
