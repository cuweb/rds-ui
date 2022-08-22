import { FC, ReactNode } from 'react';
export interface DetailsMetaProps {
    details: DetailsItemProps[];
    wrapLink?: any;
}
export declare type DetailsItemProps = {
    title: string;
    description: ReactNode;
    link?: string;
};
declare const DetailsMeta: FC<DetailsMetaProps>;
export default DetailsMeta;
