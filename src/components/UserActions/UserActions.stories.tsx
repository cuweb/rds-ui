import React from 'react'
import { Meta } from '@storybook/react'
import UserActions, { UserInfo } from './UserActions'

export default {
    component: UserActions,
    title: `Components/UserActions`,
} as Meta

export const Base = () => {
    const user: UserInfo = {
        firstName: 'Marcelo',
        lastName: 'Maia de Freitas',
        image: {
            src: `https://cu-raven.s3.amazonaws.com/assets/img/photos/fill-murray.jpg`,
        },
    }
    return <UserActions user={user} />
}
