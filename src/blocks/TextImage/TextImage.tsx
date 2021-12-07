import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface TextImageProps {
    direction?: string
    title?: string
    groupTitle?: string
    image: React.ReactNode
    content: string
    groupContent?: string
    subcontent?: string
    color?: string
    heading?: string
    subheading?: string
    centered?: boolean
    groupBlock?: boolean
}
const TextImage: React.FC<TextImageProps> = ({
    direction,
    title,
    groupTitle,
    image,
    content,
    groupContent,
    subcontent,
    color,
    heading,
    subheading,
    centered,
    groupBlock,
}) => {
    const directionClassname = direction === 'left' ? `b-textimg--imgtext` : ''
    const centeredClasaname = centered === true ? `c-heading--center` : ''

    return (
        <>
            <Ublock color={color}>
                {heading && (
                    <h2 className={`c-heading- ${centeredClasaname}`}>
                        {heading}
                    </h2>
                )}
                {subheading && <p>{subheading}</p>}
                <div className={`b-textimg ${directionClassname}`}>
                    <div className='textimg__wrapper'>
                        <section>
                            {title && (
                                <h2
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                            )}
                            {image && <img src={image.src} alt={image.alt} />}
                            {content && (
                                <div className='textimg__text'>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: content,
                                        }}
                                    />
                                    {subcontent && <p>{subcontent}</p>}
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </Ublock>
            {groupBlock && (
                <>
                    <Ublock color={color}>
                        <div className={`b-textimg ${directionClassname}`}>
                            <div className='textimg__wrapper'>
                                <section>
                                    {title && (
                                        <h2
                                            dangerouslySetInnerHTML={{
                                                __html: groupTitle,
                                            }}
                                        />
                                    )}
                                    {image && (
                                        <img src={image.src} alt={image.alt} />
                                    )}
                                    {content && (
                                        <div className='textimg__text'>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: groupContent,
                                                }}
                                            />
                                        </div>
                                    )}
                                </section>
                            </div>
                        </div>
                    </Ublock>
                    <Ublock color={color}>
                        <div className={`b-textimg ${directionClassname}`}>
                            <div className='textimg__wrapper'>
                                <section>
                                    {groupTitle && (
                                        <h2
                                            dangerouslySetInnerHTML={{
                                                __html: groupTitle,
                                            }}
                                        />
                                    )}
                                    {image && (
                                        <img src={image.src} alt={image.alt} />
                                    )}
                                    {groupContent && (
                                        <div className='textimg__text'>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: groupContent,
                                                }}
                                            />
                                        </div>
                                    )}
                                </section>
                            </div>
                        </div>
                    </Ublock>
                </>
            )}
        </>
    )
}
export default TextImage
