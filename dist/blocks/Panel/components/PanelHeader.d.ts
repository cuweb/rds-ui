import React, { FC } from 'react';
import { PanelColorsTypes } from '../Panel';
export interface PanelHeaderProps {
    className?: string;
    icon?: string;
    color?: PanelColorsTypes;
    children?: React.ReactNode;
}
declare const PanelHeader: FC<PanelHeaderProps>;
export default PanelHeader;
