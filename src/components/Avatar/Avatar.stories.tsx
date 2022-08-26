import React from 'react'
import Avatar from './Avatar'
import { UserInfoType } from 'types/UserInfo'
import Ugrid from '@components/Ugrid/Ugrid'

export default {
    component: Avatar,
    title: `Components/Avatar`,
}

const user: UserInfoType = {
    image: {
        src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
        alt: '',
    },
    firstName: 'Danny',
    lastName: 'Brown',
}

const userIamgeUnknown: UserInfoType = {
    image: undefined,
    firstName: 'Danny',
    lastName: 'Brown',
}

const caption = 'Director, Enterprise Application'

export const Base = () => <Avatar user={user} />
export const WithCaption = () => <Avatar user={user} caption={caption} />
export const NoBorder = () => <Avatar user={user} caption={caption} noBorder />
export const Rounded = () => <Avatar user={user} rounded />
export const RoundedWithCaption = () => (
    <Avatar user={user} caption={caption} rounded />
)
export const RoundedNoBorder = () => (
    <Avatar user={user} caption={caption} rounded noBorder />
)

export const HandleClick = () => (
    <Avatar
        user={user}
        caption={caption}
        rounded
        noBorder
        handleClick={() => {
            alert("I'm an alert")
        }}
    />
)
export const Sizes = () => (
    <Ugrid columns={1}>
        <Avatar user={user} rounded size='xs' caption='xs' />
        <Avatar user={user} rounded size='sm' caption='sm' />
        <Avatar user={user} rounded size='md' caption='md' />
        <Avatar user={user} rounded size='lg' caption='lg' />
        <Avatar user={user} rounded size='xl' caption='xl' />
        <Avatar user={user} rounded size='2xl' caption='2xl' />
        <Avatar user={user} rounded size='4xl' caption='4xl' />
    </Ugrid>
)

export const NoImage = () => (
    <Ugrid columns={1}>
        <Avatar user={userIamgeUnknown} size='xs' caption='xs' />
        <Avatar user={userIamgeUnknown} size='sm' caption='sm' />
        <Avatar user={userIamgeUnknown} size='md' caption='md' />
        <Avatar user={userIamgeUnknown} size='lg' caption='lg' />
        <Avatar user={userIamgeUnknown} size='xl' caption='xl' />
        <Avatar user={userIamgeUnknown} size='2xl' caption='2xl' />
        <Avatar user={userIamgeUnknown} size='4xl' caption='4xl' />
    </Ugrid>
)
