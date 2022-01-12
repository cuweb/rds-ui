import React from 'react'

export interface ImageCaptionProps {
    caption: string
}

const ImageCaption: React.FC<ImageCaptionProps> = ({ caption }): JSX.Element => {
    return (
        <figure className="c-imgcaption" aria-labelledby="figcaption_id_1" >
            <img src="https://www.fillmurray.com/640/360" alt="Bill Murray" />
            <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        </figure>
    )
}

export default ImageCaption