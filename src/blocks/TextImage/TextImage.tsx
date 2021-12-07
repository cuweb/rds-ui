import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface TextImageProps {
    direction?: string
    title?: string
    image: React.ReactNode
    content: string
    color?: string
    heading?: string
    subheading?: string
    centered?: boolean
}
const TextImage: React.FC<TextImageProps> = ({
    direction,
    title,
    image,
    content,
    color,
    heading,
    subheading,
    centered,
}): JSX.Element => {
    const directionClassname = direction === 'left' ? `b-textimg--imgtext` : ''
    const centeredClasaname = centered === true ? `c-heading--center` : ''

    return (
        <Ublock color={color}>
            {heading && (
                <h2 className={`c-heading- ${centeredClasaname}`}>{heading}</h2>
            )}
            {subheading && <p>{subheading}</p>}
            <div className={`b-textimg ${directionClassname}`}>
                <div className='textimg__wrapper'>
                    <section>
                        {title && (
                            <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        )}
                        <img src={image.src} alt={image.alt} />
                        <div className='textimg__text'>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </Ublock>
    )
}
export default TextImage
