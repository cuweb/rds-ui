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
        prefetch,
        locale,
        target,
        children,
        onClick,
        onMouseEnter,
    }: LinkProps,
    ref
) {
    const nodeProps = {
        ref,
        href,
        as,
        className,
        replace,
        soft,
        scroll,
        shallow,
        prefetch,
        locale,
        target,
        onClick,
        onMouseEnter,
    }

    return wrapper
        ? React.createElement(
              wrapper,
              {
                  ref,
                  href,
                  as,
                  replace,
                  soft,
                  scroll,
                  shallow,
                  target,
                  prefetch,
                  locale,
              },
              React.createElement(
                  component,
                  {
                      href,
                      className,
                      onClick,
                      onMouseEnter,
                  },
                  children
              )
          )
        : React.createElement(component, nodeProps, children)
})

export default Link
