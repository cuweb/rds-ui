import React from 'react';
export interface ImageTilesProps {
    data: ImageTilesDataProps[];
    wrapLink?: any;
}
export interface ImageTilesDataProps {
    image: {
        src: string;
        alt: string;
    };
    title: string;
    description?: string;
    href: string;
}
declare const ImageTiles: React.FC<ImageTilesProps>;
export default ImageTiles;
