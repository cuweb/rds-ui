import React from 'react'
import Details from './Details'
import DetailsMeta, { DetailsItemProps } from './DetailsMeta'
import DetailsAside from './DetailsAside'
import Alert from '@components/Alert/Alert'
import Ublock from '@components/Ublock/Ublock'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'

export default {
    component: Details,
    title: `Blocks/Details`,
}

const user = {
    image: {
        src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
        alt: 'Headshot of Danny Brown',
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
        description: 'Director, Enterprise Application',
    },
    {
        title: 'Department',
        description: 'Information Technology Services (ITS)',
    },
    {
        title: 'Office',
        description: '401L Robertson Hall',
    },
    {
        title: 'E-mail',
        description: 'email@email.com',
        url: 'mailto:email@email.com',
    },
    {
        title: 'Phone',
        description: '613-520-2600x8998',
        url: 'tel:6135202600x8998',
    },
    {
        title: 'Reports to',
        description: 'Tim Lott, Chief Information Officer',
        url: '#',
    },
]

const events = {
    date: (
        <>
            April
            <br />
            14
        </>
    ),
    pastDate: (
        <>
            Past
            <br />
            Event!
        </>
    ),
    details: [
        {
            title: 'Date',
            description: 'Monday, April 24th, 2073',
        },
        {
            title: 'Time',
            description: '08:00 AM - 10:30 AM',
        },
        {
            title: 'Location',
            description: 'A602 Loeb Building',
        },
        {
            title: 'Cost',
            description: 'Free',
        },
        {
            title: 'Registration',
            description: 'Not required',
        },
        {
            title: 'Contact',
            description: 'ane Doe, 7373',
            url: 'tel:03832882727',
        },
        {
            title: 'More Info',
            description: 'Event website',
            url: '#',
        },
    ],
}

export const Base = () => (
    <Details title='Base Example'>
        <DetailsMeta details={userDetails} />
    </Details>
)
export const FigureVariant = () => (
    <Details title='Profile Example' variant='figure'>
        <DetailsAside
            image={{
                src: user.image.src,
                alt: user.image.alt,
            }}
            caption={user.info}
        />
        <DetailsMeta details={userDetails} />
    </Details>
)

export const EventsVariant = () => (
    <Ublock full>
        <h2>Past Events</h2>
        <Details variant='event' block={{ noPadding: true }}>
            <DetailsAside caption={events.date} />
            <DetailsMeta details={events.details} />
        </Details>
        <ButtonCTA text={'Register Now'} link={'#'} />
    </Ublock>
)

export const EventsPastVariant = () => (
    <Ublock>
        <h2>Past Events</h2>
        <Alert
            type='warning'
            title={'Warning: Past Event'}
            content={
                'Note, you are viewing an event that occurred back on Monday, April 24th, 2017.'
            }
        />
        <Details variant='eventpast' block={{ noPadding: true }}>
            <DetailsAside caption={events.pastDate} />
            <DetailsMeta details={events.details} />
        </Details>
    </Ublock>
)
