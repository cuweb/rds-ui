import React from 'react'
import Listing from './Listing'
import { Meta } from '@storybook/react'

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
                    title: 'White-necked Raven',
                },
                {
                    title: 'Common raven',
                },
                {
                    title: 'Australian raven',
                },
                {
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
                    title: 'White-necked Raven',
                    description: 'Corvus albicollis',
                },
                {
                    title: 'Common raven',
                    description: 'Corvus corax',
                },
                {
                    title: 'Australian raven',
                    description: 'Corvus crassirostris',
                },
                {
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
                    title: 'White-necked Raven',
                    description: 'Corvus albicollis',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-1.jpg',
                        alt: '',
                    },
                },
                {
                    title: 'Common raven',
                    description: 'Corvus corax',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-2.jpg',
                        alt: '',
                    },
                },
                {
                    title: 'Australian raven',
                    description: 'Corvus crassirostris',
                    image: {
                        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-3.jpg',
                        alt: '',
                    },
                },
                {
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
                    title: 'White-necked Raven',
                    badge: '3',
                },
                {
                    title: 'Common raven',
                    badge: '5',
                },
                {
                    title: 'Australian raven',
                    badge: 'v1.0',
                },
                {
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
                    title: 'White-necked Raven',
                    icon: 'mark-ravens',
                },
                {
                    title: 'Common raven',
                    icon: 'mark-ravens',
                },
                {
                    title: 'Australian raven',
                    icon: 'mark-ravens',
                },
                {
                    title: 'Thick-billed raven',
                    icon: 'mark-ravens',
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
                    title: 'Ravens Annual Report (PDF)',
                    description: '73KB - June 15 1973',
                    icon: 'pdf',
                },
                {
                    title: 'Yay, Another Spreadsheet (XLS)',
                    description: '73KB - June 15 1973',
                    icon: 'xls',
                },
                {
                    title: 'Project Charter (DOC)',
                    description: '73KB - June 15 1973',
                    icon: 'doc',
                },
                {
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
            header='Listing block with icons'
            data={[
                {
                    src: '#eventurl',
                    title: 'Event Title',
                    description: 'Event location',
                    date: '2018-04-19',
                    startTime: '2018-04-21 23:15',
                    endTime: '2018-04-21 23:15',
                },
                {
                    src: '#eventurl',
                    title: 'Event Title',
                    description: 'Event location',
                    date: '2018-04-20',
                    startTime: '2018-04-21 23:15',
                    endTime: '2018-04-21 23:15',
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

// export const NewsVariant = Template.bind({})
// const newsVariant = getVariation('news', variations)
// NewsVariant.args = {
//     type: newsVariant.listType,
//     header: newsVariant.header,
//     noborder: newsVariant.noborder,
//     data: newsVariant.data,
// }

// export const NewsImageVariant = Template.bind({})
// const newsImageVariant = getVariation('newsImage', variations)
// NewsImageVariant.args = {
//     type: newsImageVariant.listType,
//     header: newsImageVariant.header,
//     noborder: newsImageVariant.noborder,
//     data: newsImageVariant.data,
// }

// export const PeopleVariant = Template.bind({})
// const peopleVariant = getVariation('people', variations)
// PeopleVariant.args = {
//     type: peopleVariant.listType,
//     header: peopleVariant.header,
//     noborder: peopleVariant.noborder,
//     data: peopleVariant.data,
// }

// export const VideoVariant = Template.bind({})
// const videoVariant = getVariation('video', variations)
// VideoVariant.args = {
//     type: videoVariant.listType,
//     header: videoVariant.header,
//     noborder: videoVariant.noborder,
//     data: videoVariant.data,
// }

// export const TwoColumn = () => {
//     return (
//         <Ublock>
//             <Ugrid columns={2}>
//                 <Listing
//                     //                     data={getVariation('base', variations).data}
//                     hasUblock={false}
//                 />
//                 <Listing
//                     //                     data={getVariation('base', variations).data}
//                     hasUblock={false}
//                 />
//             </Ugrid>
//         </Ublock>
//     )
// }
