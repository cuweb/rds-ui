import React, { FC } from 'react'

interface LayoutProps {
    type?: 'am' | 'ma' | 'ama' | undefined
    children?: React.ReactNode
}

const Layout: FC<LayoutProps> = (props): JSX.Element => {
    const { children, type } = props
    const styles = type ? `l-multicol l-multicol--${type}` : ''

    if (!type) return <main>{children}</main>

    return (
        <main>
            <div className={styles}>{children}</div>
        </main>
    )
}
export default Layout
