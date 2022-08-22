import React from 'react';
import { UblockProps } from '../Ublock/Ublock';
export interface AlertAsideProps {
    type?: 'info' | 'error' | 'success' | 'warning';
    title: string;
    content?: string;
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    block?: UblockProps;
}
declare const AlertAside: React.FC<AlertAsideProps>;
export default AlertAside;
