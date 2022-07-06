import React from 'react'
import { Meta } from '@storybook/react'
import LoadingCard from './LoadingCard'
import Loading from './Loading'
import LoadingSpinners from './LoadingSpinners'
import LoadingPage from './LoadingPage'

export default {
    component: Loading,
    title: `Components/Loading`,
} as Meta

export const Listing = () => <Loading />
export const Card = () => <LoadingCard />
export const Spinners = () => <LoadingSpinners />
export const Page = () => <LoadingPage />
