import React from 'react';
export interface ToastProps {
    position?: 'default' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    alertType?: 'info' | 'error' | 'success' | 'warning';
    title: string;
    content?: string;
    autoCloseTimeInterval?: number;
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
declare const Toast: React.FC<ToastProps>;
export default Toast;
