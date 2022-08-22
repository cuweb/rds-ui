import React from 'react';
export interface AlertHeaderProps {
    title: string;
    description?: string | undefined;
    handleClose: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    isHidden?: boolean;
}
declare const AlertHeader: React.FC<AlertHeaderProps>;
export default AlertHeader;
