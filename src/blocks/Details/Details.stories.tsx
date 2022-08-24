import React from 'react'
import Details from './Details'
import DetailsMeta, { DetailsItemProps } from './DetailsMeta'
import DetailsAside from './DetailsAside'
import Alert from '@components/Alert/Alert'
import Ublock from '@components/Ublock/Ublock'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'
import Ugrid from '@components/Ugrid/Ugrid'

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
        link: 'mailto:email@email.com',
    },
    {
        title: 'Phone',
        description: '613-520-2600x8998',
        link: 'tel:6135202600x8998',
    },
    {
        title: 'Reports to',
        description: 'Tim Lott, Chief Information Officer',
        link: '#',
    },
]

const events = {
    date: (
        <>
            Aug
            <br />
            21
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

export const BaseNoPadding = () => (
    <Details title='Base Example with no padding'>
        <DetailsMeta details={userDetails} noPadding />
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
            variant='figure'
        />
        <DetailsMeta details={userDetails} />
    </Details>
)
export const NoImageUrl = () => (
    <Details title='Profile Example' variant='figure'>
        <DetailsAside
            caption={user.info}
            variant='figure'
            firstName='Danny'
            lastName='Brown'
        />
        <DetailsMeta details={userDetails} />
    </Details>
)

export const EventsVariant = () => (
    <Ublock>
        <Ugrid columns={1}>
            <Details
                title='Events Variant'
                variant='event'
                block={{ noPadding: true }}
            >
                <DetailsAside caption={events.date} variant='event' />
                <DetailsMeta details={events.details} />
            </Details>
            <div>
                <ButtonCTA
                    text={'Register Now'}
                    link={'#'}
                    className='u-margin-r'
                    icon='pencil'
                />
                <ButtonCTA
                    text={'Add to calendar'}
                    link={'#'}
                    ghost
                    icon='plus'
                />
            </div>
        </Ugrid>
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
            <DetailsAside caption={events.pastDate} variant='eventpast' />
            <DetailsMeta details={events.details} />
        </Details>
    </Ublock>
)
