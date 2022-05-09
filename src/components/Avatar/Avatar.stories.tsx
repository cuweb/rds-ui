import React from 'react'
import Avatar from './Avatar'
import { UserInfoType } from 'types/UserInfo'

export default {
    component: Avatar,
    title: `Components/Avatar`,
}

const user: UserInfoType = {
    image: {
        src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    },
    firstName: 'Danny',
    lastName: 'Brown',
}

export const Base = () => <Avatar user={user} />
export const BaseNoBorder = () => <Avatar user={user} noBorder />
export const Rounded = () => <Avatar user={user} rounded />
export const RoundedNoBorder = () => <Avatar user={user} rounded noBorder />
export const Sizes = () => (
    <>
        <Avatar user={{ firstName: 'X', lastName: 'S' }} rounded size='xs' />
        <Avatar user={{ firstName: 'S', lastName: 'M' }} rounded size='sm' />
        <Avatar user={{ firstName: 'M', lastName: 'D' }} rounded size='md' />
        <Avatar user={{ firstName: 'L', lastName: 'G' }} rounded size='lg' />
        <Avatar user={{ firstName: 'X', lastName: 'L' }} rounded size='xl' />
        <Avatar user={{ firstName: '2X', lastName: 'L' }} rounded size='2xl' />
        <Avatar user={{ firstName: '4X', lastName: 'L' }} rounded size='4xl' />
    </>
)
