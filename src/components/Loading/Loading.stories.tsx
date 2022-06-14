import React from 'react'
import { Meta } from '@storybook/react'
import Loading from './Loading'

export default {
    component: Loading,
    title: `Components/Loading`,
} as Meta

export const Listing = () => <Loading />
