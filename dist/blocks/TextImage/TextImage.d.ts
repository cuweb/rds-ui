import React from 'react';
export interface TextImageProps {
    direction?: string;
    title?: string;
    image: HTMLImageElement;
    content: string;
    subcontent: string;
    color?: 'grey' | 'white' | 'black';
    heading?: string;
    subheading?: string;
    centered?: boolean;
}
declare const TextImage: React.FC<TextImageProps>;
export default TextImage;
