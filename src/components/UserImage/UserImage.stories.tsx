import React from 'react'
import UserImage from './UserImage'
import data from './User.json'
import getVariation from '../../functions/getVariation'
import { Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: UserImage,
    title: `Components/${title}`,
}

const Template: Story = (args: any) => <UserImage {...args} />

export const UserImg = Template.bind({})
const ProfileImage = getVariation('profile', variations)
UserImg.args = {
    imageUrl: ProfileImage.imageUrl,
    alt: ProfileImage.alt,
    firstName: ProfileImage.firstName,
    lastName: ProfileImage.lastName,
    isProfile: ProfileImage.isProfile,
}

const NavImage = getVariation('navbar', variations)
UserImg.args = {
    imageUrl: NavImage.imageUrl,
    alt: NavImage.alt,
    firstName: NavImage.firstName,
    lastName: NavImage.lastName,
    isNav: NavImage.isNav,
}
