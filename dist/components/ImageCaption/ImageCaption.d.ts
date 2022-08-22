import React from 'react';
export interface ImageCaptionProps {
    id?: string;
    caption: string;
    image: ImageProps;
}
export interface ImageProps {
    src: string;
    alt: string;
}
declare const ImageCaption: React.FC<ImageCaptionProps>;
export default ImageCaption;
