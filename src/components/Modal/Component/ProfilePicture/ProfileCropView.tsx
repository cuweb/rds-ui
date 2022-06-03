/**
 * @name ProfileCropView
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import Avatar from '@components/Avatar/Avatar'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'
import Ugrid from '@components/Ugrid/Ugrid'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProfileCropView {}

const ProfileCropView: React.FC<IProfileCropView> = (): JSX.Element => {
    const user = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Danny',
        lastName: 'Brown',
    }
    return (
        <Ugrid isLayoutRight className='u-no-padding'>
            <div>
                <Ugrid isLayoutRight className='u-no-padding'>
                    <Avatar user={user} size='2xl' noBorder />
                    <p className='i-font-12 i-margin-bottom-10'>
                        Click and drag a handle in the box to select the crop
                        area.
                    </p>
                </Ugrid>
            </div>

            <Avatar
                user={user}
                size='md'
                noBorder
                caption='Preview'
                className='u-margin-auto'
            />
        </Ugrid>
    )
}

export default ProfileCropView
