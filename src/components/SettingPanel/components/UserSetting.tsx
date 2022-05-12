import Panel from '@blocks/Panel/Panel'
import SidebarMenu from '@blocks/SidebarMenu/SidebarMenu'
import Ublock from '@components/Ublock/Ublock'
import Ugrid from '@components/Ugrid/Ugrid'
import Aside from '@layouts/Layout/Aside'
import Layout from '@layouts/Layout/Layout'
import Main from '@layouts/Layout/Main'
import React, { FC, useState } from 'react'

export interface UserSettingProps {}

const UserSetting: FC<UserSettingProps> = ({}): JSX.Element => {
    const [currentView, setCurrentView] = useState('personal')

    const views: { [key: string]: any } = {
        personal: {
            title: 'Personal User Settings',
            // content: <EditUser />,
            content: <p> Hello from personal setting</p>,
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

    const sideMenu = [
        {
            title: 'Personal User Settings',
            link: '/',
        },
        {
            title: 'Applications',
            link: 'http://carleton.ca',
            target: '_blank',
        },
        {
            title: 'Resources',
            link: 'http://carleton.ca',
            subMenu: [
                {
                    title: 'HR Link',
                    link: '/',
                },
                {
                    title: 'Leave Info',
                    link: '/',
                },
            ],
        },
    ]

    return (
        <Panel block={{ noPadding: true, wide: true }}>
            <Ugrid isLayout gap={1} className='u-no-padding'>
                <Ublock
                    color='grey'
                    heading={{
                        title: 'Settings',
                    }}
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
function handleSettingClick(
    arg0: string
): React.MouseEventHandler<HTMLLIElement> | undefined {
    throw new Error('Function not implemented.')
}
