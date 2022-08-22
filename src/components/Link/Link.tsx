import React, { forwardRef } from 'react'
import { UrlObject } from 'url'

type Url = string | UrlObject

export interface LinkProps {
    href: Url
    as?: Url
    wrapper?: any
    component?: string
    className?: string
    replace?: boolean
    soft?: boolean
    scroll?: boolean
    shallow?: boolean
    passHref?: boolean
    prefetch?: boolean
    locale?: string | false
    target?: string
    children: any
    onMouseEnter?: (e: any) => void
    onClick?: (e: any) => void
}

const Link = forwardRef(function Link(
    {
        href,
        as,
        wrapper,
        component = 'a',
        className,
        replace,
        soft,
        scroll,
        shallow,
        passHref = false,
        prefetch,
        locale,
        target,
        children,
        onClick,
        onMouseEnter,
    }: LinkProps,
    ref
) {
    return React.createElement(
        wrapper || component,
        {
            ref,
            href,
            as,
            className,
            replace,
            soft,
            scroll,
            shallow,
            passHref,
            prefetch,
            locale,
            target,
            onClick,
            onMouseEnter,
        },
        <span>{children}</span>
    )
})

export default Link
