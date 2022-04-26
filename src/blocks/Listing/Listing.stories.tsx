import React from 'react'
import Listing from './Listing'
import { Meta } from '@storybook/react'
import ListingEvent from './ListingEvent'
import ListingNews from './ListingNews'
import ListingPeople from './ListingPeople'
import ListingVideo from './ListingVideo'
import Ublock from '@components/Ublock/Ublock'
import Ugrid from '@components/Ugrid/Ugrid'

export default {
    component: Listing,
    title: `Blocks/Listing`,
} as Meta

export const BaseListing = () => {
    return (
        <Listing
            header='Base Example'
            data={[
                {
                    src: '#',
                    title: 'White-necked Raven',
                },
                {
                    src: '#',
                    title: 'Common raven',
                },
                {
                    src: '#',
                    title: 'Australian raven',
                },
                {
                    src: '#',
                    title: 'Thick-billed raven',
                },
            ]}
        />
    )
}

export const WithoutArrow = () => {
    return (
        <Listing
            header='Example Without Arrow'
            noArrow
            data={[
                {
                    src: '#',
                    title: 'White-necked Raven',
                },
                {
                    src: '#',
                    title: 'Common raven',
                },
                {
                    src: '#',
                    title: 'Australian raven',
                },
                {
                    src: '#',
                    title: 'Thick-billed raven',
                },
            ]}
        />
    )
}

export const WithSubtitles = () => {
    return (
        <Listing
            header='Listing block with subtitles'
            data={[
                {
                    src: '#',
                    title: 'White-necked Raven',
                    description: 'Corvus albicollis',
                },
                {
                    src: '#',
                    title: 'Common raven',
                    description: 'Corvus corax',
                },
                {
                    src: '#',
                    title: 'Australian raven',
                    description: 'Corvus crassirostris',
                },
                {
                    src: '#',
                    title: 'Thick-billed raven',
                    description: 'Corvus cryptoleucus',
                },
            ]}
        />
    )
}

export const WithImage = () => {
    return (
        <Listing
            header='Listing block with image'
            data={[
                {
                    src: '#',
                    title: 'White-necked Raven',
                    description: 'Corvus albicollis',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-1.jpg',
                        alt: '',
                    },
                },
                {
                    src: '#',
                    title: 'Common raven',
                    description: 'Corvus corax',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-2.jpg',
                        alt: '',
                    },
                },
                {
                    src: '#',
                    title: 'Australian raven',
                    description: 'Corvus crassirostris',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-3.jpg',
                        alt: '',
                    },
                },
                {
                    src: '#',
                    title: 'Thick-billed raven',
                    description: 'Corvus cryptoleucus',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg',
                        alt: '',
                    },
                },
            ]}
        />
    )
}

export const WithBadge = () => {
    return (
        <Listing
            header='Listing block with badges'
            data={[
                {
                    src: '#',
                    title: 'White-necked Raven',
                    badge: '3',
                },
                {
                    src: '#',
                    title: 'Common raven',
                    badge: '5',
                },
                {
                    src: '#',
                    title: 'Australian raven',
                    badge: 'v1.0',
                },
                {
                    src: '#',
                    title: 'Thick-billed raven',
                    badge: 'New',
                },
            ]}
        />
    )
}

export const WithIcon = () => {
    return (
        <Listing
            header='Listing block with icons'
            data={[
                {
                    src: '#',
                    title: 'White-necked Raven',
                    icon: 'github',
                },
                {
                    src: '#',
                    title: 'Common raven',
                    icon: 'twitter',
                },
                {
                    src: '#',
                    title: 'Australian raven',
                    icon: 'facebook',
                },
                {
                    src: '#',
                    title: 'Thick-billed raven',
                    icon: 'linkedin',
                },
            ]}
        />
    )
}
export const FilesListing = () => {
    return (
        <Listing
            header='Listing block with icons'
            data={[
                {
                    src: '#',
                    title: 'Ravens Annual Report (PDF)',
                    description: '73KB - June 15 1973',
                    icon: 'pdf',
                },
                {
                    src: '#',
                    title: 'Yay, Another Spreadsheet (XLS)',
                    description: '73KB - June 15 1973',
                    icon: 'xls',
                },
                {
                    src: '#',
                    title: 'Project Charter (DOC)',
                    description: '73KB - June 15 1973',
                    icon: 'doc',
                },
                {
                    src: '#',
                    title: 'Watch me read bullets (PPT)',
                    description: '73KB - June 15 1973',
                    icon: 'ppt',
                },
                {
                    src: '#filepath',
                    title: 'Zip it, Dr. Evil (ZIP)',
                    description: '73KB - June 15 1973',
                    icon: 'zip',
                },
            ]}
        />
    )
}

export const EventsVariant = () => {
    return (
        <ListingEvent
            header='Listing Events'
            data={[
                {
                    src: '#eventurl',
                    title: 'Nulla anim magna labore aliqua culpa. Aute proident et id adipisicing amet. Est minim ut exercitation sint nostrud occaecat laboris ut aliquip magna ut sit. Irure sint amet consectetur minim fugiat eiusmod excepteur proident ullamco ipsum. Ullamco sunt pariatur nostrud proident cupidatat exercitation aliquip nisi incididunt. Elit adipisicing anim officia mollit eu id irure. Adipisicing exercitation tempor eu elit.',
                    description:
                        'Reprehenderit id exercitation occaecat eu consequat sit in. Ad laboris magna tempor eiusmod pariatur. Laborum ut in nisi commodo magna laboris deserunt in excepteur dolor incididunt id. Proident est ad sint excepteur non.',
                    date: '2018-04-19',
                    startTime: '2018-04-21 23:15',
                    endTime: '2018-04-21 23:15',
                },
                {
                    src: '#eventurl',
                    title: 'Nisi velit eiusmod velit eiusmod cillum esse. Occaecat in minim tempor minim. Excepteur mollit voluptate eiusmod anim irure veniam id. Ad enim officia irure mollit velit proident. Eiusmod ut labore sunt consectetur id. Proident et sint id dolore commodo elit nulla incididunt cupidatat dolore duis aliquip. Laboris anim sit labore in amet amet minim sit eu dolore sunt.',
                    description:
                        'Esse sint incididunt deserunt quis non. Cillum Lorem pariatur laborum ea elit. Irure nulla qui mollit sunt aliquip exercitation. Dolore ea anim voluptate nulla incididunt incididunt. Labore sunt do eu enim id eiusmod nulla ipsum. Consequat velit eu consequat deserunt tempor excepteur eu esse.',
                    date: '2018-04-20',
                },
                {
                    src: '#eventurl',
                    title: 'Event Title',
                    description: 'Event location',
                    date: '2018-04-20',
                },
                {
                    src: '#eventurl',
                    title: 'Event Title',
                    description: 'Event location',
                    date: '2018-04-21',
                    startTime: '2018-04-21 23:15',
                    endTime: '2018-04-21 23:15',
                },
            ]}
        />
    )
}

export const NewsVariant = () => {
    return (
        <ListingNews
            header='News Variant'
            data={[
                {
                    src: 'https://goo.gl/LnS148',
                    title: 'News items that have long titles will be allowed to flow over two lines, and will automatically add an ellipsis beyond that',
                    description:
                        'Carleton Ravens football is looking to expand its list of coaches by 1 position.  Having started a program from scratch in 2013, the Ravens have continued to develop and improve over the past four years.',
                    datetime: '2018-03-14',
                },
                {
                    src: 'https://goo.gl/LnS148',
                    title: 'News items that have long titles will be allowed to flow over two lines, and will automatically add an ellipsis beyond that',
                    description:
                        'Carleton Ravens football is looking to expand its list of coaches by 1 position.  Having started a program from scratch in 2013, the Ravens have continued to develop and improve over the past four years.',
                    datetime: '2018-03-14',
                },
                {
                    src: 'https://goo.gl/LnS148',
                    title: 'News items that have long titles will be allowed to flow over two lines, and will automatically add an ellipsis beyond that',
                    description:
                        'Carleton Ravens football is looking to expand its list of coaches by 1 position.  Having started a program from scratch in 2013, the Ravens have continued to develop and improve over the past four years.',
                    datetime: '2018-03-14',
                },
            ]}
        />
    )
}

export const NewsVariantWithImage = () => {
    return (
        <ListingNews
            header='News Variant With Image'
            data={[
                {
                    src: 'https://goo.gl/LnS148',
                    title: 'News items that have long titles will be allowed to flow over two lines, and will automatically add an ellipsis beyond that',
                    description:
                        'Carleton Ravens football is looking to expand its list of coaches by 1 position.  Having started a program from scratch in 2013, the Ravens have continued to develop and improve over the past four years.',
                    datetime: '2018-03-14',
                    image: {
                        src: 'https://goravens.ca/wp-content/uploads/football-helmet.jpg',
                        alt: '',
                    },
                },
                {
                    src: 'https://goo.gl/LnS148',
                    title: 'News items that have long titles will be allowed to flow over two lines, and will automatically add an ellipsis beyond that',
                    description:
                        'Carleton Ravens football is looking to expand its list of coaches by 1 position.  Having started a program from scratch in 2013, the Ravens have continued to develop and improve over the past four years.',
                    datetime: '2018-03-14',
                    image: {
                        src: 'https://goravens.ca/wp-content/uploads/football-helmet.jpg',
                        alt: '',
                    },
                },
                {
                    src: 'https://goo.gl/LnS148',
                    title: 'News items that have long titles will be allowed to flow over two lines, and will automatically add an ellipsis beyond that',
                    description:
                        'Carleton Ravens football is looking to expand its list of coaches by 1 position.  Having started a program from scratch in 2013, the Ravens have continued to develop and improve over the past four years.',
                    datetime: '2018-03-14',
                    image: {
                        src: 'https://goravens.ca/wp-content/uploads/football-helmet.jpg',
                        alt: '',
                    },
                },
            ]}
        />
    )
}
export const PeopleVariant = () => {
    return (
        <ListingPeople
            header='People Variant'
            data={[
                {
                    src: 'http://www.imdb.com/name/nm0000195/',
                    title: 'Bill Murray',
                    description: 'Actor/Writer',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/photos/fill-murray.jpg',
                        alt: '',
                    },
                },
                {
                    src: 'http://www.imdb.com/name/nm0000195/',
                    title: 'Bill Murray',
                    description: 'Actor/Writer',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/photos/fill-murray.jpg',
                        alt: '',
                    },
                },
                {
                    src: 'http://www.imdb.com/name/nm0000195/',
                    title: 'Bill Murray',
                    description: 'Actor/Writer',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/photos/fill-murray.jpg',
                        alt: '',
                    },
                },
            ]}
        />
    )
}

export const VideoVariant = () => {
    return (
        <ListingVideo
            header='People Variant'
            data={[
                {
                    src: 'https://www.youtube.com/watch?v=Nrmj0fIUJAc',
                    title: 'White-necked Raven',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-1.jpg',
                        alt: '',
                    },
                },
                {
                    src: 'https://www.youtube.com/watch?v=Nrmj0fIUJAc',
                    title: 'White-necked Raven',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-1.jpg',
                        alt: '',
                    },
                },
                {
                    src: 'https://www.youtube.com/watch?v=Nrmj0fIUJAc',
                    title: 'White-necked Raven',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-1.jpg',
                        alt: '',
                    },
                },
            ]}
        />
    )
}

export const TwoColumn = () => {
    return (
        <Ublock>
            <Ugrid columns={2}>
                <Listing
                    noUblock
                    data={[
                        {
                            src: '#',
                            title: 'White-necked Raven',
                        },
                        {
                            src: '#',
                            title: 'Common raven',
                        },
                        {
                            src: '#',
                            title: 'Australian raven',
                        },
                        {
                            src: '#',
                            title: 'Thick-billed raven',
                        },
                    ]}
                />
                <Listing
                    noUblock
                    data={[
                        {
                            src: '#',
                            title: 'White-necked Raven',
                        },
                        {
                            src: '#',
                            title: 'Common raven',
                        },
                        {
                            src: '#',
                            title: 'Australian raven',
                        },
                        {
                            src: '#',
                            title: 'Thick-billed raven',
                        },
                    ]}
                />{' '}
            </Ugrid>
        </Ublock>
    )
}
