import React from 'react'

export interface ImageCaptionProps {
    id: string
    caption: string
    image: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}

const ImageCaption: React.FC<ImageCaptionProps> = ({
    id,
    caption,
    image,
}): JSX.Element => {
    return (
        <figure
            className='c-imgcaption'
            aria-labelledby={`figcaption_id_${id}`}
        >
            <img src={image.src} alt={image.alt} />
            <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        </figure>
    )
}
export default ImageCaption
