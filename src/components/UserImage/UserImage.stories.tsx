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
const image = getVariation('base', variations)
UserImg.args = {
    imageUrl: image.imageUrl,
    alt: image.alt,
    firstName: image.firstName,
    lastName: image.lastName,
}

export const UserProfileImg = Template.bind({})
const ProfileImage = getVariation('profile', variations)
UserProfileImg.args = {
    imageUrl: ProfileImage.imageUrl,
    alt: ProfileImage.alt,
    firstName: ProfileImage.firstName,
    lastName: ProfileImage.lastName,
    isProfile: ProfileImage.isProfile,
}

export const UserProfileImgRound = Template.bind({})
const ProfileImageRound = getVariation('profileRound', variations)
UserProfileImgRound.args = {
    imageUrl: ProfileImageRound.imageUrl,
    alt: ProfileImageRound.alt,
    firstName: ProfileImageRound.firstName,
    lastName: ProfileImageRound.lastName,
    isProfile: ProfileImageRound.isProfile,
    isRound: ProfileImageRound.isRound,
}

export const UserNavImg = Template.bind({})
const NavImage = getVariation('nav', variations)
UserNavImg.args = {
    imageUrl: NavImage.imageUrl,
    alt: NavImage.alt,
    firstName: NavImage.firstName,
    lastName: NavImage.lastName,
    isNav: NavImage.isNav,
}
