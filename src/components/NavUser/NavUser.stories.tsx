import React from 'react'
import { Meta } from '@storybook/react'
import NavUser from './NavUser'
import Masthead from '@blocks/Masthead/Masthead'
import { UserInfoType } from 'types/UserInfo'
import MenuPopup from '@components/MenuPopup/MenuPopup'

export default {
    component: NavUser,
    title: `Components/NavUser`,
} as Meta

const user: UserInfoType = {
    firstName: 'Marcelo',
    lastName: 'Maia de Freitas',
    image: {
        src: `https://cu-raven.s3.amazonaws.com/assets/img/photos/fill-murray.jpg`,
    },
}

export const Base = () => {
    return (
        <Masthead title={'User Info'}>
            <NavUser user={user} />
        </Masthead>
    )
}
export const WithLink = () => {
    return (
        <Masthead title={'User Info'}>
            <a href='/'>
                <NavUser user={user} />
            </a>
        </Masthead>
    )
}
export const WithMenu = () => {
    return (
        <Masthead title={'User Info'}>
            <MenuPopup
                title={<NavUser user={user} />}
                isButton
                noArrow
                direction='right'
                menu={[
                    {
                        title: 'Profile',
                        link: '#',
                        icon: 'person',
                    },
                    {
                        title: 'Logout',
                        link: '#',
                        icon: 'X',
                    },
                ]}
            >
                Test
            </MenuPopup>
        </Masthead>
    )
}
