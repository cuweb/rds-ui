import React from 'react';
export interface OverlayProps {
    type?: 'search' | 'menu' | 'login' | string;
    className?: string | undefined;
    children: React.ReactNode;
    isHidden?: boolean;
    trasparentBackground?: boolean;
    overlayNav?: boolean;
}
declare const Overlay: React.FC<OverlayProps>;
export default Overlay;
