import React from 'react';
export interface AlertProps {
    type?: 'info' | 'error' | 'success' | 'warning';
    title: string;
    content?: string;
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
