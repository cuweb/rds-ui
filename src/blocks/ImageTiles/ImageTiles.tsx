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
        <Ublock full={}>
                        <div class="b-imagetile">

        <div class="imagetile__container">
            <a class="imagetile__item">
                <img src="image.jpg" alt="">
                <div class="imagetile__content">
                    <h3>Small Title Area</h3>
                    <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>
        </div>

        <div class="imagetile__container">
            <a class="imagetile__item">
                <img src="image.jpg" alt="">
                <div class="imagetile__content">
                    <h3>Small Title Area</h3>
                    <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>

            <a class="imagetile__item">
                <img src="image.jpg" alt="">
                <div class="imagetile__content">
                    <h3>Small Title Area</h3>
                    <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>

            <a class="imagetile__item">
                <img src="image.jpg" alt="">
                <div class="imagetile__content">
                    <h3>Small Title Area</h3>
                    <p>This is the excerpt area. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>

            <a class="imagetile__item">
                <img src="image.jpg" alt="">
                <div class="imagetile__content">
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
