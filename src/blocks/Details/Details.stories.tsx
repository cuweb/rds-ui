import React from 'react'
import Details, { IDetails, IDetailsList } from './Details'
import { UserInfoType } from 'types/UserInfo'

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
}

const userDetails: IDetailsList[] = [
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

export const Base = () => <Details details={userDetails} />
