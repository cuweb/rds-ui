import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface ImageTilesProps {
    uBlockFull: boolean
    mainData: ImageTilesMainProps
    subData: ImageTilesSubProps[]
}

export interface ImageTilesMainProps {
    image: HTMLImageElement
    header: string
    paragraph: string
}

export interface ImageTilesSubProps {
    image: HTMLImageElement
    header: string
    paragraph: string
}

const ImageTiles: React.FC<ImageTilesProps> = ({
    uBlockFull,
    mainData,
    subData,
}): JSX.Element => {

    return (
        <Ublock full={uBlockFull}>
            <div className="b-imagetile">
                <div className="imagetile__container">
                    <a href="https://ravendesignsystem.github.io/rds/dev/blocks/main/imagetile/" className="imagetile__item">
                        <img src={mainData.image.src} alt={mainData.image.alt} />
                        <div className="imagetile__content">
                            <h3>{mainData.header}</h3>
                            <p>{mainData.paragraph}</p>
                        </div>
                    </a>
                </div>
                <div className="imagetile__container">
                    {subData.map((subItem, index) => 
                        <a key={index} href="https://ravendesignsystem.github.io/rds/dev/blocks/main/imagetile/" className="imagetile__item">
                            <img src={subItem.image.src} alt={subItem.image.alt} />
                            <div className="imagetile__content">
                                <h3>{subItem.header}</h3>
                                <p>{subItem.paragraph}</p>
                            </div>
                        </a>
                    )}
                </div>

            </div>
        </Ublock>
    )
}
export default ImageTiles
