import Panel from '@blocks/Panel/Panel'

import Ublock from '@components/Ublock/Ublock'
import Ugrid from '@components/Ugrid/Ugrid'

import React, { FC, useState } from 'react'
import EditUser from './EditUser'

export interface UserSettingProps {}

const UserSetting: FC<UserSettingProps> = (): JSX.Element => {
    const [currentView, setCurrentView] = useState('personal')

    const views: { [key: string]: any } = {
        personal: {
            title: 'Personal User Settings',
            content: <EditUser />,
            // content: <p> Hello from personal setting</p>,
        },
        applications: {
            title: 'Applications',
            // content: <EditResourceList resourceType='application' />,
            content: <p> Hello from User Applications</p>,
        },
        links: {
            title: 'Links',
            // content: <EditResourceList resourceType='link' />,
            content: <p> Hello from Link Applications</p>,
        },
    }

    return (
        <Panel
            block={{ noPadding: true, wide: true }}
            className='h-fix o-sroll u-margin-top-s'
        >
            <Ugrid isLayout gap={1} className='u-no-padding'>
                <Ublock
                    color='grey'
                    heading={{
                        title: 'Settings',
                    }}
                    className='h-full'
                >
                    <p onClick={() => setCurrentView('personal')}>
                        User Settings
                    </p>
                    <p onClick={() => setCurrentView('applications')}>
                        Applications
                    </p>
                    <p onClick={() => setCurrentView('links')}>Links</p>
                </Ublock>

                <Ugrid columns={1}>{views[currentView].content}</Ugrid>
            </Ugrid>
        </Panel>
    )
}
export default UserSetting
