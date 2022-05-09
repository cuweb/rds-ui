import React from 'react'
import Details from './Details'
import { UserInfoType } from 'types/UserInfo'
import { DetailsItemProps } from './DetailsMeta'

export default {
    component: Details,
    title: `Blocks/Details`,
}

const user: UserInfoType = {
    image: {
        src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    },
    firstName: 'Danny',
    lastName: 'Brown',
    info: (
        <>
            <strong>Danny Brown</strong> <br />
            Director, Enterprise Applications
        </>
    ),
}

const userDetails: DetailsItemProps[] = [
    {
        title: 'Position',
        description: 'IT Manager',
    },
    {
        title: 'E-mail',
        description: 'email@email.com',
        url: 'mailto:email@email.com',
    },
    {
        title: 'Phone',
        description: '+1(999) 9999.99999',
        url: 'tel:+1999999999999',
    },
    {
        title: 'Building',
        description: 'Carleton Uniiversity',
    },
]

export const Base = () => (
    <Details title='Profile Example' details={userDetails} />
)
export const WithImage = () => (
    <Details title='Profile With Image' details={userDetails} user={user} />
)
