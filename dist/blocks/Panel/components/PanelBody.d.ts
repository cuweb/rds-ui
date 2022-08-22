import React, { FC } from 'react';
import { PanelColorsTypes } from '../Panel';
export interface PanelBodyProps {
    className?: string;
    spacing?: boolean;
    color?: PanelColorsTypes;
    children?: React.ReactNode;
}
declare const PanelBody: FC<PanelBodyProps>;
export default PanelBody;
