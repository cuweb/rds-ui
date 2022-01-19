import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface ImageTilesProps {
    data: ImageTilesMainProps
}

export interface ImageTilesMainProps {
    image: HTMLImageElement
    title: string
    description: string
    href: string
    tilesData: TilesProps[]
}

export interface TilesProps {
    image: HTMLImageElement
    title: string
    description: string
    href: string
}

const ImageTiles: React.FC<ImageTilesProps> = ({
    data
}): JSX.Element => {

    return (
        <Ublock full>
            <div className="b-imagetile">
                <div className="imagetile__container">
                    <a href={data.href} className="imagetile__item">
                        <img src={data.image.src} alt={data.image.alt} />
                        <div className="imagetile__content">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    </a>
                </div>
                <div className="imagetile__container">
                    {data.tilesData.map((tile, index) => 
                        <a key={index} href={tile.href} className="imagetile__item">
                            <img src={tile.image.src} alt={tile.image.alt} />
                            <div className="imagetile__content">
                                <h3>{tile.title}</h3>
                                <p>{tile.description}</p>
                            </div>
                        </a>
                    )}
                </div>

            </div>
        </Ublock>
    )
}
export default ImageTiles
