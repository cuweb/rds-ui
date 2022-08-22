import React, { FC } from 'react';
import { PanelColorsTypes } from '../Panel';
export interface PanelFooterProps {
    className?: string;
    spacing?: boolean;
    color?: PanelColorsTypes;
    children?: React.ReactNode;
}
declare const PanelFooter: FC<PanelFooterProps>;
export default PanelFooter;
