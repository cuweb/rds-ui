/**
 * @name UserSettings
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { useState } from 'react'
import EditUser from './EditUser'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUserSettings {}

const UserSettings: React.FC<IUserSettings> = (): JSX.Element => {
    const [currentView, setCurrentView] = useState('personal')

    // useOnClickOutside(modalRef, () => setModalIsOpen(false))
    // useEscToClose(modalRef, () => setModalIsOpen(false))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const views: { [key: string]: any } = {
        personal: {
            title: 'Personal User Settings',
            content: <EditUser />,
        },
        applications: {
            title: 'Applications',
            // content: <EditResourceList resourceType='application' />,
            content: <p className='u-margin-auto'> Hello from Applications</p>,
        },
        links: {
            title: 'Links',
            // content: <EditResourceList resourceType='link' />,
            content: (
                <p className='u-margin-auto'> Hello from Link Applications</p>
            ),
        },
    }

    return (
        <div className='UserSettingsLayout'>
            <div className='UserSettingsSideBar'>
                <h3> Settings</h3>
                <ul>
                    <li onClick={() => setCurrentView('personal')}>
                        User Settings
                    </li>
                    <li onClick={() => setCurrentView('applications')}>
                        Applications
                    </li>
                    <li onClick={() => setCurrentView('links')}>Links</li>
                </ul>
            </div>
            <div className='UserSettingsContent'>
                {views[currentView].content}
            </div>
        </div>
    )
}

export default UserSettings
