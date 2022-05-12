import Masthead from '@blocks/Masthead/Masthead'
import PanelBody from '@blocks/Panel/components/PanelBody'
import Panel from '@blocks/Panel/Panel'
import Avatar from '@components/Avatar/Avatar'
import Ublock from '@components/Ublock/Ublock'
import Ugrid from '@components/Ugrid/Ugrid'
import Overlay from '@layouts/Overlay/Overlay'
import React, { useEffect, useState } from 'react'
import { UserInfoType } from 'types/UserInfo'
import UserSetting from './components/UserSetting'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SettingPanelProps {}

const SettingPanel: React.FC<SettingPanelProps> = (): JSX.Element => {
    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        // close modal on escape keydown
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setIsHidden(true)
            }
        })
    }, [])
    const user: UserInfoType = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Dnny',
        lastName: 'Brown',
    }
    return (
        <>
            <Masthead title='Intranet' />
            <Ublock color='grey' wide>
                <Ugrid isLayout>
                    <Ugrid columns={1}>
                        <Panel>
                            <PanelBody>
                                <div onClick={() => setIsHidden(false)}>
                                    <Ugrid columns={1}>
                                        <Avatar
                                            user={user}
                                            rounded
                                            size='2xl'
                                        />
                                    </Ugrid>
                                    <Overlay isHidden={isHidden}>
                                        <UserSetting />
                                    </Overlay>
                                </div>
                            </PanelBody>
                        </Panel>
                    </Ugrid>
                </Ugrid>
            </Ublock>
        </>
    )
}

export default SettingPanel
