import { FC, ReactNode } from 'react';
import { ImageType } from 'types/Image';
export interface DetailsAsideProps {
    className?: string;
    image?: ImageType;
    caption?: ReactNode;
}
declare const DetailsAside: FC<DetailsAsideProps>;
export default DetailsAside;
