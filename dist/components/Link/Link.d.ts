/// <reference types="node" />
import React from 'react';
import { UrlObject } from 'url';
declare type Url = string | UrlObject;
export interface LinkProps {
    href: Url;
    as?: Url;
    wrapper?: any;
    component?: string;
    className?: string;
    replace?: boolean;
    soft?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    target?: string;
    children: any;
    onMouseEnter?: (e: any) => void;
    onClick?: (e: any) => void;
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<unknown>>;
export default Link;
