import Ublock from '@src/components/Ublock/Ublock'

const TextImage = (props: {
    direction: any
    title: string
    image: any
    content: any
}) => {
    const { direction, title, image, content } = props
    const directionClassname = direction === 'left' ? `b-textimg--imgtext` : ''

    return (
        <Ublock>
            <div className={`b-textimg ${directionClassname}`}>
                <div className='textimg__wrapper'>
                    <section>
                        {title && (
                            <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        )}
                        {image && <img src={image.src} alt={image.alt} />}
                        {content && (
                            <div className='textimg__text'>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: content,
                                    }}
                                />
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </Ublock>
    )
}
export default TextImage
