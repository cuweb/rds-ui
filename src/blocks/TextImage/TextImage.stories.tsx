import React from 'react'
import TextImage from './TextImage'

export default {
    component: TextImage,
    title: 'Blocks/TextImage',
}

const rightProps = {
    direction: 'right',
    title: 'Image to the Right',
    image: {
        src: 'https://via.placeholder.com/640x480',
        alt: 'image',
    },
    content:
        'It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.',
}
export const ImageToTheRight = (args) => <TextImage {...rightProps} />

const leftProps = {
    direction: 'left',
    title: 'Image to the Left',
    image: {
        src: 'https://via.placeholder.com/640x480',
        alt: 'image',
    },
    content:
        'The b-textimg--imgtext modifier is used to move the image to the left. This modifier looks a bit odd at first. But, if the default is text on the left, image on the right - textimg. Then the reverse is -imgtex...image first, then text.',
}

export const ImageToTheLeft = (args) => <TextImage {...leftProps} />
