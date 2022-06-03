/**
 * @name ProfilePicture
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import PanelBody from '@blocks/Panel/components/PanelBody'
import PanelHeader from '@blocks/Panel/components/PanelHeader'
import Panel from '@blocks/Panel/Panel'
import Avatar from '@components/Avatar/Avatar'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'
import Icon from '@components/Icon/Icon'
import Ugrid from '@components/Ugrid/Ugrid'
import React, { useState } from 'react'
import { ActionsComponent } from './ActionComponent'
import ProfileCropView from './ProfileCropView'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProfilePicture {
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleClick?: Function
}

const ProfilePicture: React.FC<IProfilePicture> = (props): JSX.Element => {
    const { handleClick } = props
    const [isCropClicked, setIsCropClicked] = useState<boolean>(false)
    const [userHasImage, setuserHasImage] = useState<boolean>(true)
    const user = {
        firstName: 'Danny',
        lastName: 'Brown',
    }

    return (
        <Panel
            actionComponent={
                <ActionsComponent handleInputClick={handleClick} />
            }
        >
            <PanelHeader color='white'>Add/Edit Profile Picture </PanelHeader>
            <PanelBody>
                <Ugrid columns={1}>
                    <Ugrid columns={2}>
                        {!isCropClicked && (
                            <>
                                <Avatar user={user} size='4xl' noBorder />
                                <div>
                                    <p className='u-font-12  i-margin-bottom-10'>
                                        Upload your profile photo. Suggested
                                        dimensions are 500px by 500px.
                                    </p>
                                    {userHasImage && (
                                        <>
                                            <p className='u-font-12  i-margin-bottom-10'>
                                                File Name
                                            </p>
                                            <div>
                                                <ButtonCTA
                                                    link=''
                                                    text='Edit Photo'
                                                    grey
                                                    shadow={false}
                                                    className='u-font-12 '
                                                />
                                                <span>
                                                    <Icon
                                                        icon='trashcan'
                                                        className='u-margin-left-10 '
                                                    />
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    {!userHasImage && (
                                        <>
                                            <p className='u-font-12  i-margin-bottom-10'>
                                                1 MB Limit
                                            </p>
                                            <ButtonCTA
                                                link=''
                                                text='Upload Photo'
                                                grey
                                                shadow={false}
                                                className='u-font-12 '
                                            />
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </Ugrid>

                    {isCropClicked && <ProfileCropView />}

                    {userHasImage && (
                        <Ugrid columns={2}>
                            <div
                                onClick={() => setIsCropClicked(!isCropClicked)}
                            >
                                <ButtonCTA
                                    link=''
                                    text='Crop'
                                    grey
                                    shadow={false}
                                />
                            </div>

                            <div>
                                <button
                                    onClick={() =>
                                        setIsCropClicked(!isCropClicked)
                                    }
                                    className='alignright'
                                >
                                    Save
                                </button>
                            </div>
                        </Ugrid>
                    )}
                    {!userHasImage && (
                        <Ugrid columns={1}>
                            <div>
                                <ButtonCTA
                                    link=''
                                    text='save'
                                    grey
                                    shadow={false}
                                    className='alignright'
                                />
                            </div>
                        </Ugrid>
                    )}
                </Ugrid>
            </PanelBody>
        </Panel>
    )
}

export default ProfilePicture
