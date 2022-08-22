import React, { FC } from 'react';
interface LayoutProps {
    type?: 'am' | 'ma' | 'ama' | undefined;
    children?: React.ReactNode;
}
declare const Layout: FC<LayoutProps>;
export default Layout;
