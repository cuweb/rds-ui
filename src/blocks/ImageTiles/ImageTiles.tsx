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
                        <img src="image.jpg" alt="" />
                        <div className="imagetile__content">
                            <h3>Small Title Area</h3>
                            <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                </div>

                <div className="imagetile__container">
                    <a href="https://ravendesignsystem.github.io/rds/dev/blocks/main/imagetile/" className="imagetile__item">
                        <img src="image.jpg" alt="" />
                        <div className="imagetile__content">
                            <h3>Small Title Area</h3>
                            <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>

                    <a href="https://ravendesignsystem.github.io/rds/dev/blocks/main/imagetile/" className="imagetile__item">
                        <img src="image.jpg" alt="" />
                        <div className="imagetile__content">
                            <h3>Small Title Area</h3>
                            <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>

                    <a href="https://ravendesignsystem.github.io/rds/dev/blocks/main/imagetile/" className="imagetile__item">
                        <img src="image.jpg" alt="" />
                        <div className="imagetile__content">
                            <h3>Small Title Area</h3>
                            <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>

                    <a href="https://ravendesignsystem.github.io/rds/dev/blocks/main/imagetile/" className="imagetile__item">
                        <img src="image.jpg" alt="" />
                        <div className="imagetile__content">
                            <h3>Small Title Area</h3>
                            <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                </div>

            </div>
        </Ublock>
    )
}
export default ImageTiles
